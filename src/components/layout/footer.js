import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <>
      <footer className="relative w-full p-10 mt-24 text-white bg-swa-3">
        <div className="container flex flex-col mx-auto lg:justify-between lg:flex-row md:space-x-8">
          <div className="text-center lg:text-left">
            <h4 className="mb-4 ">Singapore Women's Association</h4>
            <p className="text-sm text-white">
              409 Serangoon Central #01-303 Singapore 550409
            </p>
            <p className="text-sm text-white">+65 6286 8702</p>
            <div className="flex justify-center my-5 mb-10 space-x-5 lg:justify-start lg:mb-0">
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
                <li className="cursor-pointer">
                  <Link to="/">MSPI Application</Link>
                </li>
                <li className="cursor-pointer">
                  <Link to="/participate/volunteer">Volunteer</Link>
                </li>
                <li className="cursor-pointer">
                  <Link to="/participate/sponsor">Sponsorship</Link>
                </li>
                <li className="cursor-pointer">
                  <Link to="/forms/contactform">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
