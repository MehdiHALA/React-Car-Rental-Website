import React from "react";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const quickLinks = [
  {
    path: "/about",
    display: "About",
  },

  {
    path: "#",
    display: "Privacy Policy",
  },

  {
    path: "/cars",
    display: "Car Listing",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const FooterFr = () => {
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
            Contact Good City Cars today for reliable and quality car rentals in Marrakech. We are committed to exceptional customer service, competitive pricing, and convenient online booking. Experience the freedom of exploring Marrakech with our trusted car rental services. Your satisfaction is our priority.            </p>
          </Col>

          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Quick Links</h5>
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
              <h5 className="footer__link-title mb-4">Head Office</h5>
              <p className="office__info">Marrakech</p>
              <p className="office__info">Phone: (+212)6 11 57 57 38</p>

              <p className="office__info">Email: fouadhala@goodcitycars.com</p>

              <p className="office__info">Available 24/7 via message</p>
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

export default FooterFr;
