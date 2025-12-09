'use client';

import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/outline';

const plans = [
  {
    name: 'Daily Plan',
    price: '₹999',
    period: 'per week',
    description: 'Perfect for daily juice lovers',
    features: [
      '1 juice per day',
      'Free delivery',
      'Customizable juice selection',
      'Pause anytime',
      'Weekly menu updates'
    ],
    popular: false
  },
  {
    name: 'Weekly Plan',
    price: '₹3,499',
    period: 'per month',
    description: 'Most popular choice for regular juice drinkers',
    features: [
      '5 juices per week',
      'Free delivery',
      'Customizable juice selection',
      'Priority delivery',
      'Monthly menu updates',
      '10% discount on add-ons'
    ],
    popular: true
  },
  {
    name: 'Monthly Plan',
    price: '₹12,999',
    period: 'per month',
    description: 'Best value for committed juice enthusiasts',
    features: [
      '5 juices per week',
      'Free delivery',
      'Customizable juice selection',
      'Priority delivery',
      'Monthly menu updates',
      '15% discount on add-ons',
      'Free juice customization',
      'Exclusive seasonal juices'
    ],
    popular: false
  }
];

export default function SubscriptionPage() {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">Choose Your Subscription Plan</h1>
          <p className="text-xl text-gray-600">Select the perfect plan for your juice needs</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white rounded-xl shadow-lg overflow-hidden ${
                plan.popular ? 'ring-2 ring-orange-500' : ''
              }`}
            >
              {plan.popular && (
                <div className="bg-orange-500 text-white text-center py-2 text-sm font-semibold">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-orange-500">{plan.price}</span>
                  <span className="text-gray-600">/{plan.period}</span>
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-orange-500 mr-3" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 px-6 rounded-full font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-orange-500 text-white hover:bg-orange-600'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Need a Custom Plan?</h2>
          <p className="text-gray-600 mb-6">
            Contact us to create a personalized subscription plan that fits your needs
          </p>
          <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors">
            Contact Us
          </button>
        </motion.div>
      </div>
    </div>
  );
} 