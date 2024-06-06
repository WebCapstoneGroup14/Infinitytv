import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import hero_title from "../../assets/hero_title.png";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src="/src/assets/hero.png" alt="" className="banner-img" />
        <div className="hero-caption">
          <img src={hero_title} alt="" className="caption-img" />
          <p>
            The gods of Asgard fought and won a war against an evil race known
            as the Dark Elves. The survivors were neutralized, and their
            ultimate weapon. The Aether was buried in a secret location
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
