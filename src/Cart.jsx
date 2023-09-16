import React from "react";
import Cartimage1 from "./images/buy-1.jpg";
import Cartimage2 from "./images/buy-2.jpg";
import Cartimage3 from "./images/buy-3.jpg";
const Cart = () => {
    return(
    <>
    <div className="Cart">
        <table>
            <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
            </tr>
            <tr>
                <td>
                    <div className="cart-info">
                        <img src={Cartimage1}/>
                        <div>
                            <p>Red Printed T-shirt</p>
                            <small>Price $50.00</small>
                            <br></br>
                            <a href="#">Remove</a>
                        </div>
                    </div>
                </td>
                <td><input type="number" value={1}></input></td>
                <td>$50.00</td>
            </tr>
            <tr>
                <td>
                    <div className="cart-info">
                        <img src={Cartimage2}/>
                        <div>
                            <p>Grey Sports Shoes</p>
                            <small>Price $50.00</small>
                            <br></br>
                            <a href="#">Remove</a>
                        </div>
                    </div>
                </td>
                <td><input type="number" value={1}></input></td>
                <td>$50.00</td>
            </tr>
            <tr>
                <td>
                    <div className="cart-info">
                        <img src={Cartimage3}/>
                        <div>
                            <p>Grey Running Lower</p>
                            <small>Price $50.00</small>
                            <br></br>
                            <a href="#">Remove</a>
                        </div>
                    </div>
                </td>
                <td><input type="number" value={1}></input></td>
                <td>$50.00</td>
            </tr>
        </table>
        <div className="total-price">
            <table>
            <tr>
                <td>SubTotal</td>
                <td>&150.00</td>
            </tr>
            <tr>
                <td>Tax</td>
                <td>&35.00</td>
            </tr>
            <tr>
                <td>Total</td>
                <td>&185.00</td>
            </tr>
            </table>
        </div>
    </div>
    </>
    )
}
export default Cart;