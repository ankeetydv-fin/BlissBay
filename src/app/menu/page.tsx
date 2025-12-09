'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { juices } from '@/data/juices';
import { useCart } from '@/context/CartContext';

export default function MenuPage() {
  const { addToCart } = useCart();

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50/50 via-white to-orange-50/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-3">
            Our Selection
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600">
            Our Fresh Juices
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our selection of handcrafted, fresh juices made from the finest ingredients.
            Each juice is carefully prepared to preserve maximum nutrients and flavor.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {juices.map((juice, index) => (
            <motion.div
              key={juice.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative bg-gradient-to-br from-white/80 via-white/90 to-orange-50/80 rounded-2xl shadow-lg hover:shadow-2xl border border-orange-100/20 overflow-hidden transition-all duration-500"
            >
              <Link href={`/menu/${juice.id}`} className="block">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={juice.image}
                    alt={juice.name}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  
                  {/* Decorative elements */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400/50 to-transparent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                    <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-orange-400/50 to-transparent transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                    <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-orange-400/50 to-transparent transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500" />
                    <div className="absolute right-0 top-0 h-full w-1 bg-gradient-to-t from-orange-400/50 to-transparent transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500" />
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[2px] flex flex-col justify-end p-4">
                    <motion.span 
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="text-orange-600 font-medium"
                    >
                      View Details
                    </motion.span>
                  </div>

                  {/* Emoji badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-lg shadow-lg border border-orange-100/50 transition-transform duration-300 group-hover:scale-110">
                    {juice.emoji}
                  </div>
                </div>

                <div className="p-6 relative">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                      {juice.name}
                    </h3>
                    <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600">
                      {juice.price}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{juice.shortDescription}</p>
                  
                  {/* Benefits list */}
                  <div className="space-y-2 mb-6">
                    {juice.benefits.slice(0, 2).map((benefit, i) => (
                      <div key={i} className="flex items-center text-sm text-gray-600">
                        <span className="text-orange-500 mr-2 transition-transform duration-300 group-hover:rotate-45">✦</span>
                        <span>{benefit.length > 50 ? `${benefit.substring(0, 50)}...` : benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom gradient line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-400/30 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>
              </Link>

              {/* Add to Cart Button */}
              <div className="px-6 pb-6">
                <button
                  onClick={() => addToCart(juice)}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 px-4 rounded-xl font-medium transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-orange-500/25"
                >
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 