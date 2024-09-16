import React, { useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './ClientSection.css';

const ClientSection = () => {
  useEffect(() => {
    // OwlCarousel autoplay management using IntersectionObserver
    const handleSliderAutoplay = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          document.querySelector('.owl-carousel').classList.add('autoplay');
        } else {
          document.querySelector('.owl-carousel').classList.remove('autoplay');
        }
      });
    };

    const observer = new IntersectionObserver(handleSliderAutoplay, {
      root: null,
      threshold: 0.1,
    });

    const target = document.querySelector('#client_slider');
    if (target) {
      observer.observe(target);
    }
  }, []);

  const options = {
    loop: true,
    margin: 15,
    items: 3,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 2000,
    nav: false,
    dots: false,
    rtl: true,
    responsive: {
      0: { items: 2 },
      576: { items: 2 },
      768: { items: 3 },
      992: { items: 3 },
    },
  };

  return (
    <section className="client">
      <div className="container-fluid">
        <div className="title">
          <span>The opinions of our customers</span>
          <h1>What do our customers say?</h1>
          <hr />
        </div>
        <p>To be added soon
        </p>
        <OwlCarousel id="client_slider" className="client_slider owl-theme" {...options}>
          {[...Array(10)].map((_, index) => (
            <div className="item" key={index}>
              <div className="client_block">
                <div className="text">
                  <span>،،</span>
                  <h1>Start your search now on the site <i>Sefhat teachers</i></h1>
                  <p>Start your search now on the site</p>
                </div>
                <div className="client_info">
                  <img src="./images/person.png" alt="Client" />
                  <div>
                    <h3>محمد ابراهيم</h3>
                    <h4>Student</h4>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </OwlCarousel>
      </div>
    </section>
  );
};

export default ClientSection;
