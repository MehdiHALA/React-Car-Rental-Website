import React from "react";
import Slider from "react-slick";

import "../../styles/testimonial.css";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p className="section__description">
        J'ai loué une voiture chez cette agence et j'ai été très satisfait de leur service. Fouad Le gérant étaient très aimables et arrangeant, joignable, réactif, et la voiture était en excellent état. Je recommande vivement cette agence de location sur Marrakech à tous ceux qui cherchent à louer une voiture de manière fiable et abordable.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          

          <div>
            <h6 className="mb-0 mt-3">Momo Tamasirt</h6>
            <p className="section__description">Google Maps Review</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        Très bon service de mise à disposition du véhicule, personnel efficace, souriant ayant toujours une solution.
Je recommande fortement cette société de location de véhicules.
Henri
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">

          <div>
            <h6 className="mb-0 mt-3">HND DN</h6>
            <p className="section__description">Google Maps Review</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        Un service au top!! Fouad à livré la voiture à mon domicile en avance. Il a été tres arrangeant sur l'horaire de remise de la voiture au retour. La voiture était parfaite et correspondait bien à mes attentes. Rien à signaler mise à part qu'elle n'a quasiment pas consommé. Un premier essai 100 % concluant. J'ai trouvé mon loueur de voiture sur Marrakech et j'en suis ravis. Merci
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">

          <div>
            <h6 className="mb-0 mt-3">Fabrice Monleau</h6>
            <p className="section__description">Google Maps Review</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        Super agence de location,  voiture Impeccable,  disponible et faisant le maximum pour nous satisfaire.
Le gérant est super sympa et professionnel.
Tarifs très abordable. Vraiment le top! Foncez si vous avez besoin d'un véhicule vous ne serez pas déçu.
Je reprendrais exclusivement cette agence.
Merci Goodyear city cars!!!
Homar
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">

          <div>
            <h6 className="mb-0 mt-3">Ramoh Banesis</h6>
            <p className="section__description">Google Maps Review</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        Bonjour à tous,
Une personne très professionnelle !! Joignable à n’importe quel moment, à l’écoute et serviable.
Je conseille fortement !! Personnellement depuis 2018 je passe que par ce loueur.
Merci encore        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          

          <div>
            <h6 className="mb-0 mt-3">Djamel Bouzefrane</h6>
            <p className="section__description">Google Maps Review</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        Très belle expérience de location.
La voiture était  prête à notre arrivée à l'aéroport.
Voiture fiable.
La personne est très sympa ce qui est un gros plus.</p>

        <div className="mt-3 d-flex align-items-center gap-4">
          

          <div>
            <h6 className="mb-0 mt-3">frederic clauzier</h6>
            <p className="section__description">Google Maps Review</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;
