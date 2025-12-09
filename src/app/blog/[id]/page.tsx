'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { getJuiceById } from '@/data/juices';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';

export default function BlogPage() {
  const params = useParams();
  const juice = getJuiceById(params.id as string);
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    if (juice) {
      setIsAdding(true);
      addToCart(juice);
      setTimeout(() => setIsAdding(false), 1000);
    }
  };

  if (!juice) {
    return (
      <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50/50 via-white to-orange-50/50">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold text-gray-900">Juice Not Found</h1>
            <p className="text-xl text-gray-600">The juice you're looking for doesn't exist.</p>
            <Link
              href="/"
              className="inline-block px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white rounded-xl shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
            >
              Return Home
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50/50 via-white to-orange-50/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href="/"
              className="group inline-flex items-center text-gray-600 hover:text-orange-500 transition-colors duration-200"
            >
              <svg
                className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:-translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Home
            </Link>
          </motion.div>

          {/* Header */}
          <div className="text-center space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="inline-block px-4 py-1 rounded-full bg-orange-100 text-orange-700 text-sm font-medium"
            >
              Featured Article
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-600"
            >
              {juice.emoji} {juice.blogContent.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              {juice.shortDescription}
            </motion.p>
          </div>

          {/* Main Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl group"
          >
            <Image
              src={juice.image}
              alt={juice.name}
              fill
              className="object-cover transition-all duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            {juice.blogContent.content.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-gray-700 leading-relaxed mb-6"
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-orange-100 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {juice.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <span className="text-orange-500 mr-3 text-lg">✦</span>
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Nutritional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-orange-100 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Nutritional Information</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {[
                { label: 'Calories', value: juice.nutritionalInfo.calories },
                { label: 'Sugar', value: juice.nutritionalInfo.sugar },
                { label: 'Fiber', value: juice.nutritionalInfo.fiber },
                { label: 'Protein', value: juice.nutritionalInfo.protein }
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group text-center"
                >
                  <h3 className="font-bold mb-2 text-gray-600 group-hover:text-orange-500 transition-colors duration-300">
                    {item.label}
                  </h3>
                  <p className="text-2xl font-bold text-gray-900">{item.value}</p>
                </motion.div>
              ))}
            </div>
            
            <div>
              <h3 className="font-bold mb-4 text-gray-900">Vitamins & Minerals</h3>
              <div className="flex flex-wrap gap-2">
                {juice.nutritionalInfo.vitamins.map((vitamin, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium hover:bg-orange-200 transition-colors duration-300"
                  >
                    {vitamin}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 border border-orange-100 shadow-lg text-center space-y-6"
          >
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-600">
              Ready to Try {juice.name}?
            </h2>
            <p className="text-gray-700 text-lg">
              Experience the refreshing taste and health benefits today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={handleAddToCart}
                disabled={isAdding}
                className="group relative overflow-hidden px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-lg hover:shadow-orange-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="relative z-10 flex items-center justify-center gap-2 font-semibold">
                  {isAdding ? (
                    <>
                      Added to Cart
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        ✓
                      </motion.span>
                    </>
                  ) : (
                    <>
                      Add to Cart - {juice.price}
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-white/20 to-orange-500/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
              </motion.button>
              <Link
                href="/menu"
                className="group relative overflow-hidden px-8 py-4 rounded-xl border-2 border-orange-400/30 hover:border-orange-400/50 transition-all duration-300 backdrop-blur-sm"
              >
                <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-600 font-semibold group-hover:from-orange-500 group-hover:to-amber-500">
                  View All Juices
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 to-amber-400/10 opacity-0 group-hover:opacity-100 transition-all duration-500" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
} 