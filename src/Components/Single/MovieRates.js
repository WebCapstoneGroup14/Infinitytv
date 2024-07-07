import React, { useEffect, useState } from "react";
import Titles from "../Titles";
import { BsBookmarkStarFill } from "react-icons/bs";
import { Message, Select } from "../UsedInputs";
import Rating from "../Rating";
import { Empty } from "../Notfications/Empty";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ReviewValidation } from "../Validation/Moviesvalidation";
import { InlineError } from "../Notfications/Error";
import { useDispatch, useSelector } from "react-redux";
import { reviewMovieAction } from "../../Redux/Actions/MoviesActions";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import Movie from "../Movie";
import { UsersData } from "../../Data/MovieData";

function MovieRates({ movie }) {
  const Ratings = [
    {
      title: "0 - Poor",
      value: 0,
    },
    {
      title: "1 - Fair",
      value: 1,
    },
    {
      title: "2 - Good",
      value: 2,
    },
    {
      title: "3 - Very Good",
      value: 3,
    },
    {
      title: "4 - Excellent",
      value: 4,
    },
    {
      title: "5 - Masterpiece",
      value: 5,
    },
  ];

  const [rating, setRating] = useState();
  const handleRatingChange = (e) => {
    console.log("Selected value:", e.target.value);
    setRating(e.target.value);
  };

  return (
    <div className="my-12">
      <Titles title="Reviews" Icon={BsBookmarkStarFill} />
      <div className="mt-10 xl:grid flex-colo grid-cols-5 gap-12 bg-dry xs:p-10 py-10 px-2 sm:p-20 rounded">
        {/* write review */}
        <div className="xl:col-span-2 w-full flex flex-col gap-8">
          <h3 className="text-xl text-text font-semibold">
            Review "{movie?.name}"
          </h3>
          <p className="text-sm leading-7 font-medium text-border">
            Write an honest review for this Movie.
          </p>
          <div className="text-sm w-full">
            <Select
              onChange={handleRatingChange}
              options={Ratings}
              label="Select Rating"
            />
            <div className="flex mt-4 text-lg gap-2 text-star">
              <Rating value={rating} />
            </div>
          </div>
          {/* write Message */}

          <Message
            label="Message"
            placeholder="Make it short and give your honest review...."
          />
          <button className="bg-subMain text-white py-3 w-full flex-colo rounded">
            Submit
          </button>
        </div>
        {/* Reviewers*/}
        <div className="col-span-3 flex w-full flex-col gap-6">
          <h3 className="text-xl text-text font-semibold">
            Reviews ({movie?.numberOfReviews})
          </h3>
          <div className="w-full flex flex-col bg-main gap-6 rounded-lg md:p-12 p-6 h-header overflow-y-scroll">
            {UsersData.map((user, i) => (
              <div className="md:grid flex flex-col w-full grid-cols-12 gap-6 bg-dry p-4 border border-gray-800 rounded-lg">
                <div className="col-span-2 bg-main hidden md:block">
                  <img
                    src={`/images/${user ? user.image : "user.jpg"}`}
                    alt={user.fullname}
                    className="w-full h-24 border border-border rounded-lg object-cover"
                  />
                </div>
                <div className="col-span-7 flex flex-col gap-2">
                  <h2>{user.fullName}</h2>
                  <p className="text-xs leading-6 font-medium text-text">
                    {user?.message}
                  </p>
                </div>
                {/* rates */}
                <div className="col-span-3 flex-rows border-l border-border text-xs gap-1 text-star">
                  <Rating value={user?.rate} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieRates;
