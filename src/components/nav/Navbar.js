import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleNavToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdownMepServices = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="2xl:bg-blue-50 xl:bg-red-600 lg:bg-green-600 md:bg-gray-600 sm:bg-pink-400 bg-orange-400 p-4 fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center md:mr-36">
        <Link
          href="#"
          className="flex items-center ml-4 sm:ml-0 md:ml-0 lg:ml-0 xl:ml-8"
        >
          <img
            src="./assets/icea-logo.png"
            alt="logo"
            className="h-12 sm:h-16 md:h-20 lg:h-14 xl:h-20"
          />
        </Link>

        {/* Menu icon */}
        <button
          className="lg:hidden md:absolute md:left-[92%] focus:outline-none"
          id="nav-toggle"
          onClick={handleNavToggle}
          aria-label="Toggle mobile menu"
        >
          <i
            className={`fa-solid  transition-transform duration-300 ease-in-out text-3xl ${
              isMobileMenuOpen ? "fa-xmark" : "fa-bars"
            } text-gray-800`}
          ></i>
        </button>

        {/* Nav links large size start */}
        <div className="hidden lg:flex " id="nav-menu">
          <ul className="flex space-x-14">
            <li>
              <span className="hidden lg:inline-block">
                <a
                  href="tel:8887761691"
                  className="font-bold text-lg text-custom-purple"
                >
                  <i className="fa-solid fa-phone"></i> 888-776-1691
                </a>
              </span>
            </li>

            <li>
              <Link
                className="nav-link text-xl flex flex-col items-center font-sans hover:text-custom-purple"
                to="/project-management-services"
              >
                Project Management
                <label className="text-xs mt-1 hover:text-custom-purple">
                  Services
                </label>
              </Link>
            </li>
            <li>
              <Link
                className="nav-link text-xl flex flex-col items-center font-sans hover:text-custom-purple"
                to="/mep-consultancy-services"
              >
                Mep Consultancy 
                <label className="text-xs mt-1 hover:text-custom-purple">
                Services
                </label>
              </Link>
            </li>
            <li>
              <Link
                className="nav-link text-xl flex flex-col items-center font-sans hover:text-custom-purple"
                to="/design-services"
              >
                Design
                <label className="text-xs mt-1 hover:text-custom-purple">
                  Services
                </label>
              </Link>
            </li>

            {/* Menu Component */}
            <li className="bg-custom-purple flex items-center justify-center w-12 h-12 rounded-full relative">
              <button
                className="flex items-center justify-center w-full h-full"
                onClick={toggleDropdown}
              >
                <i
                  className={`fa-solid ${
                    dropdownOpen ? "fa-xmark" : "fa-bars"
                  } text-white text-xl`}
                ></i>
              </button>

              {/* Dropdown Menu for large screens */}
              <ul
                className={`absolute top-20 right-0 mt-2 uppercase font-bold w-96 mr-24 bg-white shadow-sm z-10 ${
                  dropdownOpen ? "block" : "hidden"
                }`}
              >
                <li className="border-b border-gray-200">
                  <Link
                    className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-100 text-left"
                    to="/"
                    onClick={toggleDropdown}
                  >
                    Home
                  </Link>
                </li>
                <li className="border-b border-gray-200">
                  <Link
                    className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-100 text-left"
                    to="/about-us"
                    onClick={toggleDropdown}
                  >
                    About Us
                  </Link>
                </li>

                <li className="border-b border-gray-200 relative">
                  <button
                    onClick={toggleDropdownMepServices}
                    className="flex items-center justify-between text-sm w-full uppercase px-4 py-2 text-gray-800 focus:outline-none"
                  >
                     services
                    <svg
                      className={`w-4 h-4 ml-2 transition-transform transform ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </button>
                  {/* Dropdown Items */}
                  <ul
                    className={`w-full bg-white border border-gray-200 rounded-md shadow-lg transition-all duration-200 ease-in-out ${
                      isOpen ? "block" : "hidden"
                    }`}
                  >
                    <li className="border-b border-gray-200">
                      <Link
                        className="block text-xs px-4 py-2 text-gray-800 hover:bg-blue-100"
                        to="/project-management-services"
                        onClick={handleNavToggle}
                      >
                        Project Management Services
                      </Link>
                    </li>
                    <li className="border-b border-gray-200">
                      <Link
                        className="block text-xs px-4 py-2 text-gray-800 hover:bg-blue-100"
                        to="/mep-consultancy-services"
                        onClick={handleNavToggle}
                      >
                        Mep Consultancy Services
                      </Link>
                    </li>
                    <li className="border-b border-gray-200">
                      <Link
                        className="block text-xs px-4 py-2 text-gray-800 hover:bg-blue-100"
                        to="/design-services"
                        onClick={handleNavToggle}
                      >
                        Design Service
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="border-b border-gray-200">
                  <Link
                    className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-100 text-left"
                    to="/vishualization"
                    onClick={toggleDropdown}
                  >
                    Vishualization
                  </Link>
                </li>
                <li className="border-b border-gray-200">
                  <Link
                    className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-100 text-left"
                    to="/technical-training"
                    onClick={toggleDropdown}
                  >
                    Technical Traning
                  </Link>
                </li>
              
                <li className="border-b border-gray-200">
                  <Link
                    className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-100 text-left"
                    to="/contact-us"
                    onClick={toggleDropdown}
                  >
                    Contact us
                  </Link>
                </li>
                <li className="border-b border-gray-200">
                  <Link
                    className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-100 text-left"
                    to="/drone-survey"
                    onClick={toggleDropdown}
                  >
                    Drone Survey
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        {/* Nav links large size end */}
      </div>

      {/* ---------------------------------------------------------------- */}

      {/* Mobile nav start */}
      <div
        className={`lg:hidden ${
          isMobileMenuOpen ? "block" : "hidden"
        } bg-white border-t border-gray-200 p-4 mt-2 shadow-md rounded-lg`}
        id="mobile-menu"
      >
        <ul className="space-y-2 uppercase font-bold text-sm text-center">
          <li className="border-b border-gray-200">
            <Link
              className="block px-4 py-2 text-gray-800 hover:bg-blue-100"
              to="/"
              onClick={handleNavToggle}
            >
              Home
            </Link>
          </li>
          <li className="border-b border-gray-200">
            <Link
              className="block px-4 py-2 text-gray-800 hover:bg-blue-100"
              to="/about-us"
              onClick={handleNavToggle}
            >
              About Us
            </Link>
          </li>
          <li className="border-b border-gray-200 relative">
            <button
              onClick={toggleDropdownMepServices}
              className="w-full text-gray-800 uppercase text-sm font-bold px-4 py-2 focus:outline-none"
            >
               services
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`relative left-10 transition-transform transform ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {/* Dropdown Items */}
            <ul
              className={`${
                isOpen ? "block" : "hidden"
              } bg-white border border-gray-200 rounded-md shadow-lg mt-2`}
            >
              <li className="border-b border-gray-200">
                <Link
                  className="block text-xs px-4 py-2 text-gray-800 hover:bg-blue-100"
                  to="/project-management-services"
                  onClick={handleNavToggle}
                >
                   Project Management Services
                </Link>
              </li>
              <li className="border-b border-gray-200">
                <Link
                  className="block text-xs px-4 py-2 text-gray-800 hover:bg-blue-100"
                  to="/mep-consultancy-services"
                  onClick={handleNavToggle}
                >
                  Mep Consultancy Services
                </Link>
              </li>
              <li>
                <Link
                  className="block text-xs px-4 py-2 text-gray-800 hover:bg-blue-100"
                  to="/design-services"
                  onClick={handleNavToggle}
                >
                  Design Services
                </Link>
              </li>
            </ul>
          </li>
          <li className="border-b border-gray-200">
            <Link
              className="block px-4 py-2 text-gray-800 hover:bg-blue-100"
              to="/vishualization"
              onClick={handleNavToggle}
            >
              Vishualization
            </Link>
          </li>
          <li className="border-b border-gray-200">
            <Link
              className="block px-4 py-2 text-gray-800 hover:bg-blue-100"
              to="/technical-training"
              onClick={handleNavToggle}
            >
              Technical Traning
            </Link>
          </li>
          <li className="border-b border-gray-200">
            <Link
              className="block px-4 py-2 text-gray-800 hover:bg-blue-100"
              to="/contact-us"
              onClick={handleNavToggle}
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              className="block px-4 py-0 text-gray-800 hover:bg-blue-100"
              to="/drone-survey"
              onClick={toggleDropdown}
            >
              Drone Survey
            </Link>
          </li>
        </ul>
      </div>
      {/* Mobile nav end */}
    </nav>
  );
};

export default Navbar;
