import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaAngleRight, FaMapMarkerAlt, FaEnvelope, FaPhone, FaPrint } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="container-fluid footer py-2">
      <div className="container py-2">
        {/* Footer Content with Flex Layout */}
        <div className="footer-content">
          <div className="footer-item logo-section">
            <img src="/img/logo.png" alt="Logo" className="footer-logo" />
            <p className="text-white mb-3">
              Insabhi — empowering your business with cutting-edge IT solutions. We specialize in software development, cloud services, and digital transformation to drive innovation and growth.
            </p>
          </div>
          {/* Wrapper for About Us and Contact Info */}
          <div className="about-contact-wrapper">
            <div className="footer-item about-us d-flex flex-column">
              <h4 className="footer-title">About Us</h4>
              <a href="#about" className="text-light-about footer-link text-light"><FaAngleRight className="me-2" /> About Us</a>
              <a href="#service" className="text-light-about footer-link text-light"><FaAngleRight className="me-2" /> Services</a>
              <a href="#contact" className="text-light-about footer-link text-light"><FaAngleRight className="me-2" /> Contact Us</a>
              <a href="#gallery" className="text-light-about footer-link text-light"><FaAngleRight className="me-2" /> Gallery</a>
            </div>
            <div className="footer-item contact-info d-flex flex-column">
              <h4 className="footer-title">Contact Info</h4>
              <a href="#" className="text-light footer-link"><FaMapMarkerAlt className="me-2" /> Ukhra, West Bengal</a>
              <a href="mailto:info@example.com" className="text-light footer-link"><FaEnvelope className="me-2" /> info@insabhi.com</a>
              <a href="tel:+012 345 67890" className="text-light footer-link"><FaPhone className="me-2" /> +917908156500</a>
              <a href="tel:+012 345 67890" className="text-light footer-link mb-3"><FaPrint className="me-2" /> +919990133483</a>
            </div>
          </div>
          <div className="footer-item follow-us d-flex flex-column">
            <h4 className="follow-title">Follow Us</h4>
            <div className="d-flex align-items-center social-icons mt-2 mb-3">
              <div className="d-flex flex-column align-items-center">
                <a href="https://www.facebook.com/insabhi24/" target="_blank" className="social-icon">
                  <FaFacebookF style={{ color: '#1877F2' }} />
                </a>
              </div>
              <div className="d-flex flex-column align-items-center">
                <a href="https://x.com/Insabhi24" target="_blank" className="social-icon">
                  <FaTwitter style={{ color: '#1DA1F2' }} />
                </a>
              </div>
              <div className="d-flex flex-column align-items-center">
                <a href="https://www.instagram.com/insabhi24/" target="_blank" className="social-icon">
                  <FaInstagram style={{ color: '#D62976' }} />
                </a>
              </div>
              <div className="d-flex flex-column align-items-center">
                <a href="https://in.linkedin.com/company/insabhi" target="_blank" className="social-icon">
                  <FaLinkedinIn style={{ color: '#0A66C2' }} />
                </a>
              </div>
            </div>
            <p className="newsletter-text mb-3">
              Subscribe to our newsletter for latest updates.
            </p>
            <div className="subscription-box mb-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="email-input"
              />
              <button className="subscribe-button">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <p className="mb-0 text-light">Powered by SL TECH ERP SOLUTION | All Rights Reserved © {currentYear}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;