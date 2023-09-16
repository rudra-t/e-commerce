import React from "react";
import gallery from "./images/gallery-1.jpg";
import gallery1 from "./images/gallery-1.jpg";
import gallery2 from "./images/gallery-2.jpg";
import gallery3 from "./images/gallery-3.jpg";
import gallery4 from "./images/gallery-4.jpg";
const About = () => {
  return (
    <>
      <div id="About">
        <div className="about-img">
          <img src={gallery} id="product-img"/>
          <div className="small-img-row">
            <div className="small-img-col">
              <img src={gallery1} id="small-img"></img>
            </div>
            <div className="small-img-col">
              <img src={gallery2} id="small-img"></img>
            </div>
            <div className="small-img-col">
              <img src={gallery3} id="small-img"></img>
            </div>
            <div className="small-img-col">
              <img src={gallery4} id="small-img"></img>
            </div>
          </div>
        </div>
        <div className="about-text">
          <p>
           Home / T-shirt
          </p>
          <h1>Red Printed Tshirt <br/>By HRX</h1>
          <h2>$50.00</h2>
          <select>
            <option>Select Size</option>
            <option>XXL</option>
            <option>XL</option>
            <option>LARGE</option>
            <option>MEDIUM</option>
            <option>SMALL</option>
          </select>
          <input type="number" value="1"></input>
          <a href="/cart" className="btn">Add To Cart</a>
          <h3>Product Details</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit veniam perspiciatis quia itaque rem ratione vel quam libero esse commodi.</p>
        </div>
      </div>
    </>
  );
};
export default About;
