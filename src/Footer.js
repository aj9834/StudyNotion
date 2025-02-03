// Footer Component (can be placed at the end of your HomePage component)
import React from "react";
const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-8 mt-8">
        <div className="w-11/12 max-w-[1160px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* About Section */}
            <div>
              <h3 className="text-xl font-semibold mb-4">About Us</h3>
              <p className="text-gray-400">
                We provide the best online courses to help you enhance your skills and
                boost your career. Learn from industry professionals in various fields.
              </p>
            </div>
  
            {/* Quick Links Section */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul>
                <li><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#testimonials" className="text-gray-400 hover:text-white">Testimonials</a></li>
                <li><a href="/about" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
  
            {/* Social Media Links Section */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="/" className="text-gray-400 hover:text-white">
                  <i className="fab fa-facebook-f"></i> Facebook
                </a>
                <a href="/" className="text-gray-400 hover:text-white">
                  <i className="fab fa-twitter"></i> Twitter
                </a>
                <a href="https://www.linkedin.com" className="text-gray-400 hover:text-white">
                  <i className="fab fa-linkedin-in"></i> LinkedIn
                </a>
                <a href="/" className="text-gray-400 hover:text-white">
                  <i className="fab fa-instagram"></i> Instagram
                </a>
              </div>
            </div>
  
            {/* Contact Information Section */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <p className="text-gray-400">Email: support@example.com</p>
              <p className="text-gray-400">Phone: +123 456 7890</p>
              <p className="text-gray-400">Address: 1234 Brahmpuri Colony,shringar, Ajmer, India</p>
            </div>
          </div>
  
          <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} CourseWebsite. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  