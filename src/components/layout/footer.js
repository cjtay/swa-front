import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="flex flex-col w-full p-10 mt-24 text-white md:justify-between md:flex-row md:space-x-8 bg-swa-3">
      <div className="text-center md:text-left">
        <h4 className="mb-4 ">Singapore Women's Association</h4>
        <p className="text-sm">
          409 Serangoon Central #01-303 Singapore 550409
        </p>
        <p className="text-sm">+65 6286 8702</p>
        <div className="flex justify-center my-5 mb-10 space-x-5 md:justify-start md:mb-0">
          <div className="text-2xl">
            <a
              href="https://www.facebook.com/singaporewomenassociation"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
          </div>
          <div className="text-2xl">
            <a
              href="https://www.instagram.com/singaporewomensassociation/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-between space-x-2 md:space-x-24">
        <div>
          <h5 className="mb-4 font-bold">About SWA</h5>
          <ul className="space-y-2 text-sm font-light">
            <li>Mission</li>
            <li>Milestones</li>
            <li>Testimonials</li>
            <li>Press release</li>
          </ul>
        </div>
        <div>
          <h5 className="mb-4 font-bold">Programmes</h5>
          <ul className="space-y-2 text-sm font-light">
            <li>Elderly</li>
            <li>Community</li>
            <li>Diversity</li>
          </ul>
        </div>
        <div>
          <h5 className="mb-4 font-bold">Forms</h5>
          <ul className="space-y-2 text-sm font-light">
            <li>MSPI Application</li>
            <li>Volunteer</li>
            <li>Sponsorship</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
