import React, { useState, useEffect } from "react";
import Layout from "../Layout/Layout";
import { Movies } from "./../Data/MovieData";
import { useParams } from "react-router-dom";
import MovieInfo from "../Components/Single/MovieInfo";
import MovieCasts from "../Components/Single/MovieCasts";
import MovieRates from "../Components/Single/MovieRates";
import Movie from "../Components/Movie";
import { BsCollectionFill } from "react-icons/bs";
import Titles from "../Components/Titles";
import ShareMovieModal from "../Modals/ShareModal";

function SingleMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const foundMovie = Movies.find((m) => m.name === id);
    if (foundMovie) {
      setMovie(foundMovie);
    } else {
      console.log(`Movie with name '${id}' not found in Movies array.`);
    }
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>; // Handle loading state or not found state
  }

  const RelatedMovies = Movies.filter((m) => m.category === movie.category);

  return (
    <Layout>
      <ShareMovieModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        movie={movie}
      />
      <MovieInfo movie={movie} setModalOpen={setModalOpen} />
      <div className="container mx-auto min-h-screen px-2 my-6">
        <MovieCasts />
        <MovieRates movie={movie} />
        {/* Related Movies */}
        <div className="my-16">
          <Titles title="Related Movies" Icon={BsCollectionFill} />

          <div className="grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6">
            {RelatedMovies.map((relatedMovie, index) => (
              <Movie key={index} movie={relatedMovie} />
            ))}
          </div>
        </div>
      </div>
    </Layout>

    //Created by Patrick
  );
}

export default SingleMovie;
