import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


import "../styles/contact.css";

const socialLinks = [
  {
    url: "https://www.facebook.com/GoodCityCars/?locale=fr_FR",
    icon: "ri-facebook-line",
  },
  {
    url: "#",
    icon: "ri-instagram-line",
  },
];

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tn8aqqn', 'template_02qvidr', form.current, 'hWJgwz_HFoKB_gnZD')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <Helmet>
      <CommonSection title="Contact" />
      <section>
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h6 className="fw-bold mb-4">Get In Touch</h6>
              <form ref={form} onSubmit={sendEmail}>
              <FormGroup className="contact__form">
                  <Input placeholder="Your Name" type="text" name="user_name"/>
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input placeholder="Email" type="email" name="user_email"/>
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input placeholder="Phone Number" type="text" name="user_number"/>
                </FormGroup>
                <FormGroup className="contact__form">
                  <textarea
                    rows="5"
                    placeholder="Message"
                    className="textarea"
                    name="message"
                  ></textarea>
                </FormGroup>
          
                <button className=" contact__btn" type="submit">
                  Send Message
                </button>
                </form>
              </Col>

            <Col lg="5" md="5">
              <div className="contact__info">
                <h6 className="fw-bold">Contact Information</h6>
                <p className="section__description mb-0">
                  Marrakech
                </p>
                <div className=" d-flex align-items-center gap-2">
                  <h6 className="fs-6 mb-0">Phone:</h6>
                  <p className="section__description mb-0">(+212)6 11 57 57 38</p>
                </div>

                <div className=" d-flex align-items-center gap-2">
                  <h6 className="mb-0 fs-6">Email:</h6>
                  <p className="section__description mb-0">fouadhala@goodcitycars.com</p>
                </div>

                <h6 className="fw-bold mt-4">Follow Us</h6>

                <div className=" d-flex align-items-center gap-4 mt-3">
                  {socialLinks.map((item, index) => (
                    <Link
                      to={item.url}
                      key={index}
                      className="social__link-icon"
                    >
                      <i class={item.icon}></i>
                    </Link>
                  ))}
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

export default Contact;
