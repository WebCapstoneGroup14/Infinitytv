import React from "react";
import { useState } from "react";
import Titles from "./../Titles";
import Rating from "./../Rating";
import {
  BsBookmarkStarFill,
  BsCaretLeftFill,
  BsCaretRightFill,
} from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { Movies } from "../../Data/MovieData";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

function TopRated() {
  const [nextEl, setNextEl] = useState(null);
  const [prevEl, setPrevEl] = useState(null);
  const classNames = "hover:bg-subMain transitions p-3 ";

  return (
    <div className="my-16 hidden sm:block transition ">
      <Titles title="Top Rated" Icon={BsBookmarkStarFill} />
      <div className="mt-10 ">
        <Swiper
          navigation={{ nextEl, prevEl }}
          autoplay={false}
          slidesPerView={4}
          spaceBetween={40}
          speed={1000}
          loop={true}
          modules={[Navigation, Autoplay]}
        >
          {Movies.map((movie, index) => (
            <SwiperSlide key={index}>
              <div className="p-4 h-rate hovered border border-border bg-dry rounded-lg overflow-hidden ">
                <img
                  src={`/images/movies/${movie.image}`}
                  alt={movie.name}
                  className="w-full h-full object-cover rounded-lg "
                />
                <div className="px-4 hoveres gap-6 text-center absolute bg-black bg-opacity-70 top-0 left-0 right-0 bottom-0">
                  <button className="w-14 h-14 flex-colo transitions hover:bg-subMain rounded-full  text-white">
                    <FaHeart />
                  </button>
                  <Link
                    className="font-semibold text-xl trancuted line-clamp-2"
                    to={`/movie/${movie?._id}`}
                  >
                    {movie?.name}
                  </Link>
                  <div className="flex gap-2 text-star">
                    <Rating value={movie?.rate} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="w-full px-1 flex-rows gap-6 pt-12">
          <button className={classNames} ref={(node) => setPrevEl(node)}>
            <BsCaretLeftFill />
          </button>
          <button className={classNames} ref={(node) => setNextEl(node)}>
            <BsCaretRightFill />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TopRated;
