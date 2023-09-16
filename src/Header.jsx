import React, { useState } from "react";
const Header = () => {
  return (
    <>
      <nav>
        <div className="nav-brand">Rudra</div>
        <div className="nav-link">
          <ul>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/products">Products</a>
            </li>
            <li>
              <a href="/contact">Conatct</a>
            </li>
            <li>
              <a href="/account">Account</a>
            </li>
          </ul>
        </div>
        <i className="fa-solid fa-bars"></i>
      </nav>
      <div className="drop-down">
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/products">Products</a>
          </li>
          <li>
            <a href="/contact">Conatct</a>
          </li>
          <li>
            <a href="/account">Account</a>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Header;
