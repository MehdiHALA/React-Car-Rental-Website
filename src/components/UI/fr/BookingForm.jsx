import React from "react";
import "../../../styles/booking-form.css";
import { FormGroup } from "reactstrap";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const BookingForm = () => {
  const form = useRef();
  const currentURL = window.location.href;
  const car = currentURL.split("%20")[1]

  const submitHandler = (event) => {
    event.preventDefault();

    emailjs.sendForm('service_tn8aqqn', 'template_b7j63pd', form.current, 'hWJgwz_HFoKB_gnZD')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <form ref={form} onSubmit={submitHandler}>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text" placeholder="Prénom" name="user_fn"/>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="text" placeholder="Nom" name="user_ln"/>
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="email" placeholder="Email" name="user_email"/>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="number" placeholder="Numéro de téléphone" name="user_number"/>
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text" placeholder="Adresse de départ" name="user_start_address"/>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="text" placeholder="Addresse de retour" name="user_end_address"/>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="date" placeholder="Date de début" name="start_date"/>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block me-1 mb-4">
        <input type="date" placeholder="Date de fin" name="end_date"/>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text" placeHolder="Voiture" name="car" defaultValue={car}/>
      </FormGroup>
      <FormGroup>
        <textarea
          rows={5}
          type="textarea"
          className="textarea"
          placeholder="Write"
          name="message"
        ></textarea>
      </FormGroup>
      <button className=" booking__form" type="submit">
                Réserver maintenant
                </button>
    </form>
  );
};

export default BookingForm;
