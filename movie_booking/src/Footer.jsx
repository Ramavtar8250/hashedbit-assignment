import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="mb-6">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-2 space-x-6 flex">
              <li>
                <a href="/" className="text-gray-400 hover:text-green-500">Home</a>
              </li>
              <li>
                <a href="/movies" className="text-gray-400 hover:text-green-500">Movies</a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-green-500">About Us</a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-green-500">Contact</a>
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4 mt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500">
                <FaFacebookF size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500">
                <FaTwitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500">
                <FaInstagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-700 pt-5 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Movie Booking. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
