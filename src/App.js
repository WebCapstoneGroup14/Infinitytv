import React from "react";
import HomePage from "./Pages/HomePage";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import NotFound from "./Pages/NotFound";
import Movie from "./Pages/Movie";
import SingleMovie from "./Pages/SingleMovie";
import WatchPage from "./Pages/WatchPage";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Profile from "./Pages/Dashboard/Profile";
import Aos from "aos";
import Password from "./Pages/Dashboard/Password";
import FavouriteMovie from "./Pages/Dashboard/FavouriteMovie";
import MoviesList from "./Pages/Dashboard/Admin/MovieList";
import Dashboard from "./Pages/Dashboard/Admin/Dashboard";
import Categories from "./Pages/Dashboard/Admin/Categories";
import Users from "./Pages/Dashboard/Admin/Users";
import AddMovie from "./Pages/Dashboard/Admin/AddMovie";
import ScrollOnTop from "./ScrollOnTop";
import DrawerContext from "./Context/DrawerContext";

const App = () => {
  Aos.init();
  return (
    <DrawerContext>
      <ScrollOnTop>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/movies" element={<Movie />} />
          <Route path="/movie/:id" element={<SingleMovie />} />
          <Route path="/watch/:id" element={<WatchPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="*" element={<NotFound />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/password" element={<Password />} />
          <Route path="/favourite" element={<FavouriteMovie />} />
          <Route path="/movieslist" element={<MoviesList />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/users" element={<Users />} />
          <Route path="/addmovie" element={<AddMovie />} />
        </Routes>
      </ScrollOnTop>
    </DrawerContext>
  );
};

export default App;
