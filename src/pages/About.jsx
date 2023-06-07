import React from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";

import driveImg from "../assets/all-images/drive.jpg";
import "../styles/about.css";

const About = () => {
  return (
    <Helmet title="About">
      <CommonSection title="About Us" />
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
                  Experience Reliability and Local Expertise with Good City Cars
                </h2>

                <p className="section__description">
                As a locally based car rental company in Marrakech, we have a deep understanding of the area and the unique needs of our customers. We take pride in showcasing the rich cultural heritage and natural beauty of Marrakech, providing you with recommendations and insider tips to make the most of your journey. Whether you're seeking hidden gems within the city or planning an exciting road trip to explore the surrounding landscapes, our team is here to assist you in creating unforgettable memories.
                </p>

                <p className="section__description">
                Choose Good City Cars for a reliable, customer-focused, and authentic car rental experience in Marrakech. We are passionate about ensuring your satisfaction and exceeding your expectations. Let us be your trusted companion on your next adventure, as we strive to make your car rental experience with us truly exceptional.
                </p>

                <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i class="ri-phone-line"></i>
                  </span>

                  <div>
                    <h6 className="section__subtitle">Need Any Help?</h6>
                    <h4>(+212)6 11 57 57 38</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <a href="https://api.whatsapp.com/send?phone=0021211575738&text=Bonjour," className="float" target="_blank" rel="noreferrer">
        <i className="fa fa-whatsapp my-float"></i>
      </a>
    </Helmet>
  );
};

export default About;
