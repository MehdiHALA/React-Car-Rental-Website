import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/car-item.css";

const CarItem = (props) => {
  const { imgUrl, model, carName, automatic, price } = props.item;

  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="car__item d-flex flex-column h-100">
        <div className="car__img">
          <img src={imgUrl} alt="" className="w-100 h-100" />
        </div>

        <div className="car__item-content mt-4 d-flex flex-column justify-content-between">
          <div>
            <h4 className="section__title text-center">{carName}</h4>
            <h6 className="rent__price text-center mt-">
              {price}.00 MAD <span>/ Day</span>
            </h6>

            <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
              <span className="d-flex align-items-center gap-1">
                <i className="ri-car-line"></i> {model}
              </span>
              <span className="d-flex align-items-center gap-1">
                <i className="ri-settings-2-line"></i> {automatic}
              </span>
            </div>
          </div>

          <div className="d-flex justify-content-center mt-auto">
            <button className="w-50 car__item-btn car__btn-rent">
              <Link to={`/en/cars/${carName}`}>Rent</Link>
            </button>

            <button className="w-50 car__item-btn car__btn-details">
              <Link to={`/en/cars/${carName}`}>Details</Link>
            </button>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default CarItem;
