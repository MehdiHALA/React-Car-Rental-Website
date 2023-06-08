import React from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../../components/Helmet/Helmet";
import CommonSection from "../../components/UI/CommonSection";
import CarItem from "../../components/UI//fr/CarItem";
import carData from "../../assets/data/fr/carData";

const CarListingFr = () => {
  return (
    <Helmet title="Cars">
      <CommonSection title="Nos Voitures" />
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className=" d-flex align-items-center gap-3 mb-5">
                <span className=" d-flex align-items-center gap-2">
                  <i class="ri-sort-asc"></i> Trier par
                </span>

                <select>
                  <option>Select</option>
                  <option value="low">Du moins cher au plus cher</option>
                  <option value="high">Du plus cher au moins cher</option>
                </select>
              </div>
            </Col>

            {carData.map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
      <a href="https://api.whatsapp.com/send?phone=212611575738&text=Bonjour," className="float" target="_blank" rel="noreferrer">
        <i className="fa fa-whatsapp my-float"></i>
      </a>
    </Helmet>
  );
};

export default CarListingFr;
