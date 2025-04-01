import { useState } from "react";
import { Link, useLocation } from "wouter";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location === path;
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mr-2">
                <i className="fas fa-brain text-white"></i>
              </div>
              <span className="text-primary font-bold text-xl">MindWell</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" 
              className={`hover:text-primary font-medium ${isActive('/') ? 'text-primary' : 'text-neutral-500'}`}>
              Home
            </Link>
            <Link href="/resources" 
              className={`hover:text-primary font-medium ${isActive('/resources') ? 'text-primary' : 'text-neutral-500'}`}>
              Resources
            </Link>
            <Link href="/assessment" 
              className={`hover:text-primary font-medium ${isActive('/assessment') ? 'text-primary' : 'text-neutral-500'}`}>
              Health Tracker
            </Link>
            <Link href="/ai-support" 
              className={`font-medium ${isActive('/ai-support') ? 'text-primary' : 'text-neutral-500'}`}>
              Mental Health Companion
            </Link>
            <Link href="/about" 
              className={`hover:text-primary font-medium ${isActive('/about') ? 'text-primary' : 'text-neutral-500'}`}>
              About Us
            </Link>
          </nav>
          
          {/* Mobile Navigation Toggle */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden rounded-md p-2 text-neutral-400 hover:bg-neutral-200 focus:outline-none"
          >
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
        
        {/* Mobile Navigation Menu */}
        <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} pb-4`}>
          <div className="flex flex-col space-y-3">
            <Link href="/" 
              onClick={closeMobileMenu}
              className={`hover:text-primary font-medium px-2 py-1 rounded hover:bg-neutral-200 ${isActive('/') ? 'text-primary' : 'text-neutral-500'}`}>
              Home
            </Link>
            <Link href="/resources" 
              onClick={closeMobileMenu}
              className={`hover:text-primary font-medium px-2 py-1 rounded hover:bg-neutral-200 ${isActive('/resources') ? 'text-primary' : 'text-neutral-500'}`}>
              Resources
            </Link>
            <Link href="/assessment" 
              onClick={closeMobileMenu}
              className={`hover:text-primary font-medium px-2 py-1 rounded hover:bg-neutral-200 ${isActive('/assessment') ? 'text-primary' : 'text-neutral-500'}`}>
              Health Tracker
            </Link>
            <Link href="/ai-support" 
              onClick={closeMobileMenu}
              className={`font-medium px-2 py-1 rounded hover:bg-neutral-200 ${isActive('/ai-support') ? 'text-primary' : 'text-neutral-500'}`}>
              Mental Health Companion
            </Link>
            <Link href="/about" 
              onClick={closeMobileMenu}
              className={`hover:text-primary font-medium px-2 py-1 rounded hover:bg-neutral-200 ${isActive('/about') ? 'text-primary' : 'text-neutral-500'}`}>
              About Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
