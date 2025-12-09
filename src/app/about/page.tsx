'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { HeartIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { Suspense } from 'react';

const values = [
  {
    icon: HeartIcon,
    title: 'Quality First',
    description: 'We use only the finest, freshest ingredients to create our premium juices.'
  },
  {
    icon: SparklesIcon,
    title: 'Innovation',
    description: 'Constantly exploring new flavors and combinations to delight our customers.'
  },
  {
    icon: SparklesIcon,
    title: 'Sustainability',
    description: 'Committed to eco-friendly practices and supporting local farmers.'
  }
];

// Optimize animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.3 }
};

const fadeInLeft = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.3 }
};

const fadeInRight = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.3 }
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          {...fadeInUp}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">Our Story</h1>
          <p className="text-xl text-gray-600">Bringing fresh, natural juices to your doorstep since 2020</p>
        </motion.div>

        {/* Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            {...fadeInLeft}
            className="relative h-[400px] rounded-xl overflow-hidden"
          >
            <Suspense fallback={<div className="w-full h-full bg-gray-200 animate-pulse" />}>
              <Image
                src="/about-image.jpg"
                alt="Bliss Bay Story"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={false}
                loading="lazy"
                className="object-cover"
                quality={85}
              />
            </Suspense>
          </motion.div>
          <motion.div
            {...fadeInRight}
          >
            <h2 className="text-3xl font-bold mb-6">Our Journey</h2>
            <p className="text-gray-600 mb-4">
              Bliss Bay was founded with a simple mission: to make fresh, natural juices accessible to everyone. 
              What started as a small juice bar in Mumbai has grown into a nationwide delivery service, 
              bringing the goodness of fresh-pressed juices to thousands of customers.
            </p>
            <p className="text-gray-600 mb-4">
              We believe in the power of natural ingredients and their ability to transform lives. 
              Our commitment to quality and freshness has made us the preferred choice for health-conscious 
              individuals and families across India.
            </p>
            <p className="text-gray-600">
              Today, we continue to innovate and expand our offerings while staying true to our core values 
              of quality, sustainability, and customer satisfaction.
            </p>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          {...fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Values</h2>
          <p className="text-xl text-gray-600">What sets us apart</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              {...fadeInUp}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-8 text-center"
            >
              <value.icon className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Team Section */}
        <motion.div
          {...fadeInUp}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
          <p className="text-xl text-gray-600 mb-8">
            We're always looking for passionate individuals to join our mission
          </p>
          <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors">
            View Open Positions
          </button>
        </motion.div>
      </div>
    </div>
  );
} 