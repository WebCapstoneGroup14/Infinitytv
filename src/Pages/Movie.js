import React, { useState } from "react";
import Layout from "../Layout/Layout";
import Filters from "../Components/Filters";
import Movie from "../Components/Movie";
import { Movies as allMovies } from "./../Data/MovieData";

function MoviePage() {
  const [filteredMovies, setFilteredMovies] = useState(allMovies);

  return (
    <Layout>
      <div className="min-height-screen container mx-auto px-2 my-6">
        <Filters allMovies={allMovies} setFilteredMovies={setFilteredMovies} />
        <p className="text-lg font-medium my-6">
          Total{" "}
          <span className="font-bold text-subMain">
            {filteredMovies.length}
          </span>{" "}
          items Found
        </p>
        <div className="grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6">
          {filteredMovies.map((movie, index) => (
            <Movie key={index} movie={movie} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default MoviePage;
