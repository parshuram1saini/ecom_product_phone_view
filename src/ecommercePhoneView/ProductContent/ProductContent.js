import React from "react";
import minus from "../images/icon-minus.svg";
import plus from "../images/icon-plus.svg";
import "./ProductContent.css";

function ProductContent() {
  const [count, setCount] = React.useState(0);
  const handleDecrement = () => {
    console.log("decrement");
    // console.log(count, "dec");
    if (count > 0) {
      setCount((precount) => precount - 1);
    }
  };
  const handleIncrement = () => {
    console.log(count, "inc");
    setCount((prevcount) => prevcount + 1);
  };
  const AddToCart = () => {
    alert("Add cart Successfully");
  };
  return (
    <div>
      <div className="product-content">
        <h3 className="sneaker-company">sneaker company</h3>
        <div className="ui divider"></div>
        <h2> Fall Limited Edition Sneakers</h2>
        <div className="ui divider"></div>
        <p className="product-text">
          These low-price sneakers are you perfect casual wear company.
          Featuring a durable rubber outer sole, they will withstand everything
          the weather can offer. If you have a small shoe retail store, you must
          draw inspiration from great brands and then come up with your own
          footwear marketing strategies. At the same time, these 25 marketing
          ideas may help you reach your target market group and succeed as a
          small shoe retail store owner.
        </p>
        <div className="ui divider"></div>
        <h3>
          price:$15 <span className="discount"> Discount:50%</span>
        </h3>
        <div className="ui divider"></div>
        <div className="Add-icons">
          <div>
            <img
              src={minus}
              onClick={() => handleDecrement()}
              alt="icon-minus"
              className="icon-minus"
            />
          </div>
          <span className="show-field">{count}</span>
          <div>
            <img
              src={plus}
              alt="icon-plus"
              className="icon-plus"
              onClick={() => handleIncrement()}
            />
          </div>
          <div
            className="ui inverted orange button addCart"
            onClick={() => AddToCart()}
          >
            <i className="shop icon"></i> Add to Cart
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductContent;
