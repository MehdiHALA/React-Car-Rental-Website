import React from "react";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const quickLinks = [
  {
    path: "/about",
    display: "À propos",
  },

  {
    path: "#",
    display: "Privacy Policy",
  },

  {
    path: "/cars",
    display: "Nos Voitures",
  },
  {
    path: "/contact",
    display: "Contactez nous",
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo">
              <h1>
                <Link to="/home" className=" d-flex align-items-center gap-2">
                  <i class="ri-car-line"></i>
                  <span>
                    Good City <br /> Cars
                  </span>
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
            Contactez Good City Cars dès aujourd'hui pour une location de voiture fiable et de qualité à Marrakech. Nous nous engageons à offrir un service client exceptionnel, des prix compétitifs et une réservation en ligne pratique. Découvrez la liberté d'explorer Marrakech avec nos services de location de voitures de confiance. Votre satisfaction est notre priorité. </p>          </Col>
          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Liens rapides</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={window.location.pathname.split("/").find(e=> (e==="en" || e==="fr")) + item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Fouad HALA</h5>
              <p className="office__info">Marrakech</p>
              <p className="office__info">Téléphone: (+212)6 11 57 57 38</p>

              <p className="office__info">Email: fouadhala@goodcitycars.com</p>

              <p className="office__info">Disponible 24/7 par message</p>
            </div>
          </Col>

          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i class="ri-copyright-line"></i>Copyright {year}
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
