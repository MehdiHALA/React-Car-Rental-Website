import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../../components/Helmet/Helmet";
import CommonSection from "../../components/UI/CommonSection";
import CarItem from "../../components/UI/fr/CarItem";
import carData from "../../assets/data/fr/carData";

const CarListingFr = () => {
  const [sortBy, setSortBy] = useState(""); // State for storing the sort option

  // Function to handle the sort select change
  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  // Function to perform the sorting based on price
  const sortCars = (cars) => {
    switch (sortBy) {
      case "low":
        return cars.sort((a, b) => a.price - b.price);
      case "high":
        return cars.sort((a, b) => b.price - a.price);
      default:
        return cars;
    }
  };

  // Apply sorting to carData based on the selected option
  const sortedCarData = sortCars(carData);

  return (
    <Helmet title="Cars">
      <CommonSection title="Nos Voitures" />
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="d-flex align-items-center gap-3 mb-5">
                <span className="d-flex align-items-center gap-2">
                  <i className="ri-sort-asc"></i> Trier par
                </span>

                <select value={sortBy} onChange={handleSortChange}>
                  <option value="">Select</option>
                  <option value="low">Du moins cher au plus cher</option>
                  <option value="high">Du plus cher au moins cher</option>
                </select>
              </div>
            </Col>

            {sortedCarData.map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
      <a
        href="https://api.whatsapp.com/send?phone=212611575738&text=Bonjour,"
        className="float"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa fa-whatsapp my-float"></i>
      </a>
    </Helmet>
  );
};

export default CarListingFr;
