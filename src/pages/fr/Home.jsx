import React from "react";

import HeroSlider from "../../components/UI/fr/HeroSlider";
import Helmet from "../../components/Helmet/Helmet";

import { Container, Row, Col } from "reactstrap";
import AboutSection from "../../components/UI/fr/AboutSection";
import ServicesList from "../../components/UI/fr/ServicesList";
import carData from "../../assets/data/fr/carData";
import CarItem from "../../components/UI/fr/CarItem";
import Testimonial from "../../components/UI/Testimonial";

const HomeFr = () => {
  return (
    <Helmet title="Home">
      {/* ============= hero section =========== */}
      <section className="p-0 hero__slider-section">
        <HeroSlider />
      </section>
      {/* =========== about section ================ */}
      <AboutSection />
      {/* ========== services section ============ */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Trouvez</h6>
              <h2 className="section__title">Nos meilleurs services</h2>
            </Col>

            <ServicesList />
          </Row>
        </Container>
      </section>
      {/* =========== car offer section ============= */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h6 className="section__subtitle">Ne ratez pas</h6>
              <h2 className="section__title">Nos offres du moment</h2>
            </Col>

            {carData.slice(0, 6).map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>

      {/* =========== testimonial section =========== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-4 text-center">
              <h6 className="section__subtitle">Nos clients ont dit</h6>
              <h2 className="section__title">Témoignages</h2>
            </Col>

            <Testimonial />
          </Row>
        </Container>
      </section>
      <a href="https://api.whatsapp.com/send?phone=212611575738&text=Bonjour," className="float" target="_blank" rel="noreferrer">
        <i className="fa fa-whatsapp my-float"></i>
      </a>
    </Helmet>
  );
};

export default HomeFr;
