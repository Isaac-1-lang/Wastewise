import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-emerald-600 text-white py-8 px-4 mt-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <h3 className="text-lg font-bold mb-2">WasteWise</h3>
          <p className="text-sm">
            Empowering communities to build a cleaner, more sustainable future.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/collection-points" className="hover:underline">Collection Points</a></li>
            <li><a href="/recycling-guide" className="hover:underline">Recycling Guide</a></li>
            <li><a href="/about" className="hover:underline">About Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <ul className="text-sm space-y-1">
            <li>Email: info@wastewise.org</li>
            <li>Phone: +123 456 7890</li>
            <li>Location: Kigali, Rwanda</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Follow Us</h4>
          <div className="flex gap-4 text-white text-xl">
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm mt-8 border-t border-green-500 pt-4">
        &copy; {new Date().getFullYear()} WasteWise. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
