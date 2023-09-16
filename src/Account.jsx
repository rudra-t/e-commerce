import React from "react";
import image1 from "./images/image1.png";
const Account = () => {
  return (<>
    <div className="account-page">
      <div className="login-page">
          <div className="login-image">
            <img src={image1} />
          </div>
          <div className="form-page">
            <div className="form-btn">
              <span>Login</span>
              <span>Ragister</span>
            </div>
            <form className="form1">
              <input type="text" placeholder="User Name"></input>
              <input type="password" placeholder="Password"></input>
              <button type="submit" className="formbtn">Login</button>
              <a className="forgetbtn" href="#">Forget Password</a>
            </form>
            <form className="form2">
              <div className="form-side">
              <input type="text" placeholder="User Name"></input>
              <input type="email" placeholder="email"></input>
              <input type="password" placeholder="password"></input>
              <button type="submit" className="formbtn">Ragister</button>
              </div>
            </form>
          </div>
      </div>
      </div>
      </>
  );
};
export default Account;
