'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FiMenu, FiX, FiUser, FiLogIn } from 'react-icons/fi'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false) // Replace with actual auth state

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-glopro to-dark rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">G</span>
            </div>
            <span className="text-2xl font-bold text-dark">
              Glo<span className="text-glopro">Pro</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/services" className="nav-link">
              Services
            </Link>
            <Link href="/subscription" className="nav-link">
              Subscription Plans
            </Link>
            <Link href="/how-it-works" className="nav-link">
              How It Works
            </Link>
            
            {isLoggedIn ? (
              <>
                <Link href="/dashboard" className="nav-link">
                  Dashboard
                </Link>
                <Link href="/dashboard" className="btn-primary inline-flex items-center space-x-2">
                  <FiUser />
                  <span>My Account</span>
                </Link>
              </>
            ) : (
              <>
                <Link href="/login" className="nav-link">
                  Log In
                </Link>
                <Link href="/signup" className="btn-primary inline-flex items-center space-x-2">
                  <FiLogIn />
                  <span>Sign Up</span>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-button text-neutral hover:bg-gray-100"
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-4 space-y-3">
            <Link
              href="/services"
              className="block py-2 nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/subscription"
              className="block py-2 nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Subscription Plans
            </Link>
            <Link
              href="/how-it-works"
              className="block py-2 nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            
            {isLoggedIn ? (
              <Link
                href="/dashboard"
                className="block py-2 nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Dashboard
              </Link>
            ) : (
              <>
                <Link
                  href="/login"
                  className="block py-2 nav-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Log In
                </Link>
                <Link
                  href="/signup"
                  className="btn-primary w-full text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}
