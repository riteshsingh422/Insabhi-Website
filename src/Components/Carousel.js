import React, { useEffect } from 'react';
import { Carousel as BootstrapCarousel } from 'react-bootstrap';
import './Carousel.css';

const Carousel = ({ handleShow }) => {
  // Preload images
  useEffect(() => {
    const images = [
      '/img/hero4.webp',
      '/img/hero2.jpg',
      'https://source.unsplash.com/random/1920x1080?water,blue',
      'https://source.unsplash.com/random/1920x1080?technology',
    ];
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <div className="carousel-header">
      <BootstrapCarousel
        id="carouselId"
        ride="carousel"
        interval={3000}
        pause={false}
        slide={true}
      >
        <BootstrapCarousel.Item>
          <img
            src="/img/hero4.webp"
            className="img-fluid w-100"
            alt="Pure Water"
            width="1920"
            height="1080"
            loading="lazy"
            onError={(e) => {
              e.target.src = 'https://source.unsplash.com/random/1920x1080?water,blue';
            }}
          />
          <BootstrapCarousel.Caption className="carousel-caption-custom">
            <div className="carousel-caption-content slide-from-top">
              <h4
                className="text-white text-uppercase fw-bold mb-3"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                }}
              >
                <span style={{ color: 'red', fontSize: '1.5rem', marginRight: '0.5rem' }}>•</span>
                IT SOLUTIONS
                <span style={{ color: 'red', fontSize: '1.5rem', marginLeft: '0.5rem' }}>•</span>
              </h4>
              <h1 className="display-3 text-capitalize text-white mb-4">
                We offer highly effective IT solutions for your Success
              </h1>
              <p className="mb-5 fs-5 text-white">
                <span style={{ color: 'red' }}>INSABHI</span> is an Odoo ERP Solution and Software Development company.
              </p>
            </div>
          </BootstrapCarousel.Caption>
        </BootstrapCarousel.Item>
        <BootstrapCarousel.Item>
          <img
            src="/img/hero2.jpg"
            className="img-fluid w-100"
            alt="IT Innovation"
            width="1920"
            height="1080"
            loading="lazy"
            onError={(e) => {
              e.target.src = 'https://source.unsplash.com/random/1920x1080?technology';
            }}
          />
          <BootstrapCarousel.Caption className="carousel-caption-custom">
            <div className="carousel-caption-content slide-from-bottom">
              <h4
                className="text-white text-uppercase fw-bold mb-3"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                }}
              >
                <span style={{ color: 'red', fontSize: '1.5rem', marginRight: '0.5rem' }}>•</span>
                IT INNOVATION
                <span style={{ color: 'red', fontSize: '1.5rem', marginLeft: '0.5rem' }}>•</span>
              </h4>
              <h1 className="display-3 text-capitalize text-white mb-4">
                Transform Your Business with Cutting-Edge IT
              </h1>
              <p className="mb-5 fs-5 text-white">
                <span style={{ color: 'red' }}>INSABHI</span> delivers innovative software solutions to drive your digital transformation.
              </p>
            </div>
          </BootstrapCarousel.Caption>
        </BootstrapCarousel.Item>
      </BootstrapCarousel>
    </div>
  );
};

export default Carousel;