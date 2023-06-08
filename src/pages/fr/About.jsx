import React from "react";

import CommonSection from "../../components/UI/CommonSection";
import Helmet from "../../components/Helmet/Helmet";
import AboutSection from "../../components/UI/fr/AboutSection";
import { Container, Row, Col } from "reactstrap";

import driveImg from "../../assets/all-images/drive.jpg";
import "../../styles/about.css";

const AboutFr = () => {
  return (
    <Helmet title="About">
      <CommonSection title="À propos de nous" />
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={driveImg} alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                Découvrez la fiabilité et l'expertise locale avec Good City Cars
                </h2>

                <p className="section__description">
                En tant qu'entreprise de location de voitures basée localement à Marrakech, nous avons une connaissance approfondie de la région et des besoins uniques de nos clients. Nous sommes fiers de mettre en valeur le riche patrimoine culturel et la beauté naturelle de Marrakech, en vous fournissant des recommandations et des conseils d'initiés pour profiter au maximum de votre voyage. Que vous cherchiez des trésors cachés dans la ville ou que vous planifiez un excitant road trip pour explorer les paysages environnants, notre équipe est là pour vous aider à créer des souvenirs inoubliables.                </p>
                <p className="section__description">
                Choisissez Good City Cars pour une expérience de location de voiture fiable, axée sur le client et authentique à Marrakech. Nous sommes passionnés par votre satisfaction et nous nous efforçons de dépasser vos attentes. Laissez-nous être votre compagnon de confiance lors de votre prochaine aventure, car nous nous engageons à rendre votre expérience de location de voiture avec nous vraiment exceptionnelle.                </p>
                <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i class="ri-phone-line"></i>
                  </span>

                  <div>
                    <h6 className="section__subtitle">Besoin d'aide?</h6>
                    <h4>(+212)6 11 57 57 38</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <a href="https://api.whatsapp.com/send?phone=212611575738&text=Bonjour," className="float" target="_blank" rel="noreferrer">
        <i className="fa fa-whatsapp my-float"></i>
      </a>
    </Helmet>
  );
};

export default AboutFr;
