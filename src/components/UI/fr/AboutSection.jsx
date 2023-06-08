import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../../styles/about-section.css";
import aboutImg from "../../../assets/all-images/cars-img/208.png";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">À propos de nous</h4>
              <h2 className="section__title">Bienvenue à Good City Cars</h2>
              <p className="section__description">
              Chez Good City Cars, nous nous engageons à vous offrir une expérience de location de voiture exceptionnelle à Marrakech. Notre dévouement envers la qualité, le service client, les prix compétitifs et la commodité nous distingue :</p>
              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Véhicules de qualité.
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Service client exceptionnel.
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Tarification compétitive.
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Réservation en ligne pratique.
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
