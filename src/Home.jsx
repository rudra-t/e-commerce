import React from "react";
import image1 from "./images/image1.png";
const Home = () => {
  return (
    <>
      <div id="Home">
        <div className="home-row">
        <div className="home-text">
          <h1>
            A New Style <br />
            For Your Workout
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            corporis in placeat ab blanditiis temporibus aspernatur, omnis nihil
          </p>
          <a href="/products" className="btn">
            Explore Now
          </a>
        </div>
        <div className="home-img">
          <img src={image1} />
        </div>
      </div>
      </div>
    </>
  );
};
export default Home;
