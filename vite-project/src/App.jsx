import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <div className="text-xl font-bold text-indigo-600">MyApp</div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-gray-600 hover:text-indigo-600 text-sm transition-colors">Home</a>
          <a href="#" className="text-gray-600 hover:text-indigo-600 text-sm transition-colors">About</a>
          <a href="#" className="text-gray-600 hover:text-indigo-600 text-sm transition-colors">Services</a>
          <a href="#" className="text-gray-600 hover:text-indigo-600 text-sm transition-colors">Contact</a>
        </div>

        {/* Button */}
        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="text-sm text-gray-600 hover:text-indigo-600 transition-colors">Login</a>
          <a href="#" className="bg-indigo-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">Sign Up</a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-100 px-4 py-4 flex flex-col gap-4 bg-white">
          <a href="#" className="text-gray-600 hover:text-indigo-600 text-sm">Home</a>
          <a href="#" className="text-gray-600 hover:text-indigo-600 text-sm">About</a>
          <a href="#" className="text-gray-600 hover:text-indigo-600 text-sm">Services</a>
          <a href="#" className="text-gray-600 hover:text-indigo-600 text-sm">Contact</a>
          <hr className="border-gray-100" />
          <a href="#" className="text-gray-600 hover:text-indigo-600 text-sm">Login</a>
          <a href="#" className="bg-indigo-600 text-white text-sm px-4 py-2 rounded-lg text-center hover:bg-indigo-700">Sign Up</a>
        </div>
      )}
    </nav>
  );
}