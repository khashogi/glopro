import Link from 'next/link'
import { FiInstagram, FiFacebook, FiTwitter, FiMail, FiPhone } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="bg-neutral text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-glopro to-dark rounded-full flex items-center justify-center">
                <span className="text-white font-bold">G</span>
              </div>
              <span className="text-xl font-bold">GloPro</span>
            </div>
            <p className="text-gray-300 text-sm">
              Premium car wash service in Abu Dhabi. Make your car glow, byPros.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-300 hover:text-glopro transition-colors">
                <FiInstagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-glopro transition-colors">
                <FiFacebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-glopro transition-colors">
                <FiTwitter size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="text-gray-300 hover:text-coral transition-colors">
                  Essential Hand Wash
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-coral transition-colors">
                  Premium Detail
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-coral transition-colors">
                  Interior Sanctuary
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-coral transition-colors">
                  Desert Shield
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-coral transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-gray-300 hover:text-coral transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/subscription" className="text-gray-300 hover:text-coral transition-colors">
                  Subscription Plans
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-300 hover:text-coral transition-colors">
                  Become a Cleaner
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2 text-gray-300">
                <FiMail size={16} />
                <a href="mailto:hello@glopro.ae" className="hover:text-glopro transition-colors">
                  hello@glopro.ae
                </a>
              </li>
              <li className="flex items-center space-x-2 text-gray-300">
                <FiPhone size={16} />
                <a href="tel:+97124567890" className="hover:text-glopro transition-colors">
                  +971 2 456 7890
                </a>
              </li>
              <li className="text-gray-300 mt-4">
                <p className="font-medium mb-1">Abu Dhabi, UAE</p>
                <p className="text-xs">Serving all of Abu Dhabi</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-sm text-gray-300">
          <p>&copy; 2026 GloPro. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <Link href="/privacy" className="hover:text-glopro transition-colors">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="/terms" className="hover:text-glopro transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
