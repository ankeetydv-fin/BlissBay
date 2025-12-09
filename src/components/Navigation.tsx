'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Menu', href: '/menu' },
  { name: 'Subscription', href: '/subscription' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50">
      <motion.nav 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full flex items-center justify-between p-6 glass-nav" 
        aria-label="Global"
      >
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo - Left */}
            <div className="flex items-center">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="text-2xl font-bold gradient-text">Bliss Bay</span>
              </Link>
            </div>
            
            {/* Navigation - Center */}
            <div className="hidden lg:flex lg:justify-center absolute left-1/2 transform -translate-x-1/2">
              <div className="flex space-x-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-sm font-bold px-2 py-1 text-gray-900 hover:gradient-text transition-all border-b-2 border-transparent hover:border-orange-500"
                  >
                    {item.name.toUpperCase()}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Right section (Action button) */}
            <div className="hidden lg:flex items-center">
              <Link
                href="/order"
                className="gradient-button"
              >
                Order Now
              </Link>
            </div>
            
            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full p-2 text-gray-700 bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-200"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>
      
      {/* Mobile menu */}
      <motion.div
        initial={{ opacity: 0, x: '100%' }}
        animate={{ opacity: mobileMenuOpen ? 1 : 0, x: mobileMenuOpen ? '0%' : '100%' }}
        transition={{ duration: 0.3 }}
        className={`lg:hidden fixed inset-0 z-50 ${mobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
        <div className="fixed inset-y-0 right-0 z-50 w-full max-w-sm overflow-y-auto bg-white/80 backdrop-blur-xl px-6 py-6 shadow-xl">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="text-2xl font-bold gradient-text">Bliss Bay</span>
            </Link>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full p-2 text-gray-700 bg-white/10 hover:bg-white/20 transition-all duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-base font-bold text-gray-900 hover:gradient-text transition-all"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name.toUpperCase()}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                  href="/order"
                  className="gradient-button block text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Order Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </header>
  );
} 