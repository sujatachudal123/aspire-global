import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className="bg-[#1f2b6c] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and About Section */}
            <div className="space-y-4">
              <img
                src="/asplogo.jpg"
                alt="Aspire Global Education"
                className="h-20"
              />
              <p className="text-sm leading-relaxed opacity-90">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco
              </p>
              <Link
                to="/about-us"
                className="inline-flex items-center space-x-2 text-white hover:text-orange-500"
              >
                <span>About us</span>
                <span>→</span>
              </Link>
            </div>

            {/* Important Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Important Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="hover:text-orange-500">Home</Link></li>
                <li><Link to="/about-us" className="hover:text-orange-500">About us</Link></li>
                <li><Link to="/services" className="hover:text-orange-500">Services</Link></li>
                <li><Link to="/contact-us" className="hover:text-orange-500">Contact Us</Link></li>
                <li><Link to="/preparation-class" className="hover:text-orange-500">Preparation Class</Link></li>
                <li><Link to="/visa-granted" className="hover:text-orange-500">Visa Granted</Link></li>
                <li><Link to="/gallery" className="hover:text-orange-500">Gallery</Link></li>
                <li><Link to="/blog" className="hover:text-orange-500">Blog</Link></li>
              </ul>
            </div>

            {/* Study Abroad */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Study Abroad</h3>
              <ul className="space-y-2">
                <li><Link to="/study-abroad" className="hover:text-orange-500">All Countries</Link></li>
                <li><Link to="/study-abroad/malta" className="hover:text-orange-500">Malta</Link></li>
                <li><Link to="/study-abroad/uae" className="hover:text-orange-500">UAE</Link></li>
                <li><Link to="/study-abroad/uk" className="hover:text-orange-500">UK</Link></li>
                <li><Link to="/study-abroad/australia" className="hover:text-orange-500">Australia</Link></li>
                <li><Link to="/study-abroad/canada" className="hover:text-orange-500">Canada</Link></li>
                <li><Link to="/study-abroad/usa" className="hover:text-orange-500">USA</Link></li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <span>📍</span>
                  <span>Maitidevi, Sotopol, Kathmandu Nepal</span>
                </li>
                <li>
                  <a href="mailto:info@gmail.com" className="hover:text-orange-500">
                    📧 info@gmail.com
                  </a>
                </li>
                <li>☎ +977-9802374773</li>
                <li>☎ +977-9802374774</li>
                <li>☎ +977-9802374775</li>
              </ul>

              {/* Social Links */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-4">Social Links</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-white hover:text-orange-500">
                    <img
                      src="https://img.icons8.com/color/48/facebook-new.png"
                      alt="Facebook"
                      className="w-8 h-8 hover:opacity-80 transition-opacity"
                    />
                  </a>
                  <a href="#" className="text-white hover:text-orange-500">
                    <img
                      src="https://img.icons8.com/?size=96&id=32323&format=png"
                      alt="Instagram"
                      className="w-8 h-8 hover:opacity-80 transition-opacity"
                    />
                  </a>
                  <a href="#" className="text-white hover:text-orange-500">
                    <img
                      src="https://img.icons8.com/?size=160&id=3veRWJpxPPDH&format=png"
                      alt="TikTok"
                      className="w-8 h-8 hover:opacity-80 transition-opacity"
                    />
                  </a>
                  <a href="#" className="text-white hover:text-orange-500">
                    <img
                      src="https://img.icons8.com/?size=160&id=A1JUR9NRH7sC&format=png"
                      alt="WhatsApp"
                      className="w-8 h-8 hover:opacity-80 transition-opacity"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-[#ff6b00] text-white py-4">
        <div className="container mx-auto px-4">
          <div className="text-center text-sm">
            © 2023, Macroshift Educational Consultancy. All Rights Reserved. Crafted by:
            <a href="#" className="ml-1 font-semibold hover:underline">BLUE FOX</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;







