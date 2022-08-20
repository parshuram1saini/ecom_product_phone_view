import React from "react";
import shoes1 from "../images/shoes1.jpg";
import shoes2 from "../images/shoes2.jpg";
import shoes3 from "../images/shoes3.jpg";
import shoes4 from "../images/shoes4.jpg";
import NextIcon from "../images/icon-next.svg";
import PrevIcon from "../images/icon-prev.svg";
import "./Productimage.css";

function ProductImage() {
  const [current, setCurrent] = React.useState(0);
  const imagesmodal = [
    { id: 0, value: shoes1 },
    { id: 1, value: shoes2 },
    { id: 2, value: shoes3 },
    { id: 3, value: shoes4 },
  ];
  const length = imagesmodal.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  console.log(current);
  if (!Array.isArray(imagesmodal) && imagesmodal.length <= 0) {
    return null;
  }
  return (
    <div>
      <div className=" d-flex justify-center large-img-container p-relative">
        <img
          src={PrevIcon}
          alt="prev-icon"
          className="h-5 prev-icon p-absolute z-index_1"
          onClick={() => prevSlide()}
        />
        {imagesmodal.map((image, index) => {
          return (
            <div
              key={index}
              className={current === index ? "slide active" : "slide"}
            >
              {index === current && (
                <img
                  src={image.value}
                  key={index}
                  alt={image + index}
                  className="w-100"
                />
              )}
            </div>
          );
        })}
        <img
          src={NextIcon}
          alt="next-icon"
          className="h-5 next-icon p-absolute z-index_1"
          onClick={() => nextSlide()}
        />
      </div>
    </div>
  );
}

export default ProductImage;
