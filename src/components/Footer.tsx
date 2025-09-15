import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import variaceLogoSrc from '@/assets/variace-logo.png';

const Footer = () => {
  return (
    <footer className="bg-solar-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src={variaceLogoSrc} 
                alt="Variace Solar Logo" 
                className="h-10 w-10"
              />
              <div>
                <h3 className="text-xl font-bold text-solar-yellow">Variace Solar</h3>
                <p className="text-sm text-solar-blue-light">Powering Life, Shaping Tomorrow</p>
              </div>
            </div>
            <p className="text-sm text-solar-blue-light">
              Leading the revolution in clean energy solutions with innovative solar technology 
              that powers homes and businesses while protecting our planet.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-solar-yellow">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'Shop', path: '/shop' },
                { name: 'Learn', path: '/learn' },
                { name: 'Blog', path: '/blog' },
                { name: 'About', path: '/about' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-sm text-solar-blue-light hover:text-solar-yellow transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-solar-yellow">Services</h4>
            <ul className="space-y-2">
              {[
                'Residential Solar',
                'Commercial Solar',
                'Solar Panels',
                'Energy Storage',
                'Installation',
                'Maintenance',
              ].map((service) => (
                <li key={service}>
                  <span className="text-sm text-solar-blue-light">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-solar-yellow">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-solar-green" />
                <span className="text-sm text-solar-blue-light">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-solar-green" />
                <span className="text-sm text-solar-blue-light">info@variace-solar.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-solar-green" />
                <span className="text-sm text-solar-blue-light">123 Green Energy Ave, Solar City, SC 12345</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {[
                { Icon: Facebook, href: '#' },
                { Icon: Twitter, href: '#' },
                { Icon: Instagram, href: '#' },
                { Icon: Linkedin, href: '#' },
              ].map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="p-2 bg-solar-green rounded-full hover:bg-solar-yellow hover:text-solar-blue transition-all duration-300"
                  aria-label="Social media link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-solar-blue-light mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-solar-blue-light">
            © 2024 Variace Solar. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-sm text-solar-blue-light hover:text-solar-yellow transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-solar-blue-light hover:text-solar-yellow transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;