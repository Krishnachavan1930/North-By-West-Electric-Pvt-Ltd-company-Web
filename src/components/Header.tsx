"use client"

import { useState } from "react"
import { Menu, X, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="w-4 h-4" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="w-4 h-4" />
              <span>info@nbwelectricpvtltd.com</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>Powering the Future with Innovation</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          {/* Logo - place your logo file in the public folder */}
          <div className="h-12 flex items-center">
            <img src="/logo.ai" alt="North By West Electric Logo" className="h-12 w-auto object-contain" />
          </div>
          <p className="text-sm text-gray-600 ml-3 hidden sm:block">Electrical Engineering Excellence</p>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">
            Home
          </a>
          <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">
            Services
          </a>
          <a href="#products" className="text-gray-700 hover:text-blue-600 transition-colors">
            Products
          </a>
          <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">
            About
          </a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
            Contact
          </a>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">Get Quote</Button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden p-2 rounded-lg hover:bg-gray-100">
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <a href="#home" className="block text-gray-700 hover:text-blue-600 transition-colors">
                Home
              </a>
              <a href="#services" className="block text-gray-700 hover:text-blue-600 transition-colors">
                Services
              </a>
              <a href="#products" className="block text-gray-700 hover:text-blue-600 transition-colors">
                Products
              </a>
              <a href="#about" className="block text-gray-700 hover:text-blue-600 transition-colors">
                About
              </a>
              <a href="#contact" className="block text-gray-700 hover:text-blue-600 transition-colors">
                Contact
              </a>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Get Quote</Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
