import React from "react";
import PropTypes from "prop-types";
import { FaLinkedin, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = ({ footerContainerClassName }) => {
  return (
    <footer className={`bg-black text-white ${footerContainerClassName}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 sm:text-base md:text-lg">
              QUICK LINKS
            </h4>
            <ul className="space-y-2 text-sm sm:text-base text-gray-400">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Technology */}
          <div>
            <h4 className="text-lg font-semibold mb-4 sm:text-base md:text-lg">
              TECHNOLOGY
            </h4>
            <ul className="space-y-2 text-sm sm:text-base text-gray-400">
              <li>
                <Link href="#" className="hover:underline">
                  Project Management Services
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Technical Training
                </Link>
              </li>
              <li>
                <Link href="" className="hover:underline">
                  MEP Consultancy Services
                </Link>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Design Services
                </a>
              </li>
            </ul>
          </div>

          {/* Find Us */}
          <div>
            <h4 className="text-lg font-semibold mb-4 sm:text-base md:text-lg">
              FIND US
            </h4>
            <ul className="space-y-2 text-sm sm:text-base">
              <li className="hover:underline text-gray-400">
                info@icecgulf.com
              </li>
            </ul>
          </div>

          {/* Stay Connected */}
          <div>
            <h4 className="text-lg font-semibold mb-4 sm:text-base md:text-lg">
              STAY CONNECTED
            </h4>
            <div className="flex space-x-4">
              {/* LinkedIn */}
              <a
                href="https://ae.linkedin.com/company/icec-international"
                className="hover:text-gray-400"
              >
                <FaLinkedin className="w-6 h-6 sm:w-8 sm:h-8" />
              </a>
              {/* YouTube */}
              <a
                href="https://www.youtube.com/@icecgulf5820"
                className="hover:text-gray-400"
              >
                <FaYoutube className="w-6 h-6 sm:w-8 sm:h-8" />
              </a>
            </div>
            {/* Logo */}
            <div className="mt-4">
              <img
                src="assets/icea-logo.png"
                alt="ICEC Logo"
                className="w-16 sm:w-20  filter grayscale"
              />
            </div>
          </div>
        </div>
        <div className=" relative top-6 text-gray-400 border-t border-gray-400 pt-12 xl:pt-8 2xl:pt-8 lg:pt-8 md:pt-8 sm:pt-8 text-start text-sm">
          All rights reserved © ICECGULF
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  footerContainerClassName: PropTypes.string,
};

export default Footer;
