import React from "react";
import user1 from "./images/user-1.png"
import user2 from "./images/user-2.png"
import user3 from "./images/user-3.png"
const Contact = () => {
  return <>
  <div className="Testimonials">
  <h1>What Our Coustmers Say</h1>
    <div className="testimonials-row">
          <div className="testimonials-1">
            <div className="text">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro placeat dolorum in vero animi eius consectetur? Praesentium, quaerat? Cumque, temporibus.</p>
              <div className="rating">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
            </div>
            <div className="image">
            <img src={user1} alt="image"/>
              <h3>Sean Parkar</h3>
              </div>
          </div>
          <div className="testimonials-1">
            <div className="text">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro placeat dolorum in vero animi eius consectetur? Praesentium, quaerat? Cumque, temporibus.</p>
              <div className="rating">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
            </div>
            <div className="image">
            <img src={user2} alt="image"/>
              <h3>Mike Smith</h3>
              </div>
          </div>
          <div className="testimonials-1">
            <div className="text">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro placeat dolorum in vero animi eius consectetur? Praesentium, quaerat? Cumque, temporibus.</p>
              <div className="rating">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
            </div>
            <div className="image">
            <img src={user3} alt="image"/>
              <h3>Mabel Joe</h3>
              </div>
          </div>
          </div>
          </div>
  <div className="Footer">
    <div className="footer-row">
      <div className="footer-col-1">
        <h1>Download Our App</h1>
        <p>Dawnload App For Ios And Android</p>
      </div>
      <div className="footer-col-2">
      <h2>Useful Links</h2>
      <ul>
        <li>Coupons</li>
        <li>Blog-Post</li>
        <li>Return Policy</li>
        <li>Join Affiliate</li>
        </ul>
      </div>
      <div className="footer-col-3">
      <h2>Useful Links</h2>
      <ul>
        <li>Facebook</li>
        <li>Instagram</li>
        <li>Linkedin</li>
        <li>Twiiter</li>
        </ul>
      </div>
    </div>
      </div></>;
};
export default Contact;
