'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { juices } from '@/data/juices';

export default function Home() {
  const popularJuices = juices.slice(0, 3);

  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-100 via-pink-50 to-orange-50 relative">
      {/* Global decorative elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Connecting lines with icons */}
        <div className="absolute inset-0">
          {/* Top section connecting lines */}
          <svg className="absolute top-[20%] left-0 w-full h-1/3 opacity-20" style={{ zIndex: 0 }}>
            <path
              d="M0,100 C100,50 200,150 300,100 C400,50 500,150 600,100"
              stroke="url(#gradient3)"
              strokeWidth="2"
              fill="none"
              className="animate-draw"
            />
            <path
              d="M0,200 C100,150 200,250 300,200 C400,150 500,250 600,200"
              stroke="url(#gradient4)"
              strokeWidth="2"
              fill="none"
              className="animate-draw animation-delay-1000"
            />
            <defs>
              <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff8c42" />
                <stop offset="100%" stopColor="#ff4d6d" />
              </linearGradient>
              <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffb74d" />
                <stop offset="100%" stopColor="#ff8a65" />
              </linearGradient>
            </defs>
          </svg>

          {/* Floating icons with connecting lines */}
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-[15%] left-[10%] w-12 h-12 bg-white/80 rounded-full flex items-center justify-center shadow-lg border border-orange-200/50"
          >
            <span className="text-2xl">🍊</span>
          </motion.div>

          <motion.div
            animate={{
              y: [0, 10, 0],
              rotate: [0, -5, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute top-[25%] right-[15%] w-12 h-12 bg-white/80 rounded-full flex items-center justify-center shadow-lg border border-orange-200/50"
          >
            <span className="text-2xl">🥭</span>
          </motion.div>

          <motion.div
            animate={{
              y: [0, -8, 0],
              rotate: [0, 3, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute bottom-[30%] left-[20%] w-12 h-12 bg-white/80 rounded-full flex items-center justify-center shadow-lg border border-orange-200/50"
          >
            <span className="text-2xl">🍍</span>
          </motion.div>

          <motion.div
            animate={{
              y: [0, 8, 0],
              rotate: [0, -3, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
            className="absolute bottom-[20%] right-[20%] w-12 h-12 bg-white/80 rounded-full flex items-center justify-center shadow-lg border border-orange-200/50"
          >
            <span className="text-2xl">🍇</span>
          </motion.div>

          {/* Connecting lines between icons */}
          <svg className="absolute inset-0 w-full h-full opacity-30" style={{ zIndex: 0 }}>
            <path
              d="M120,180 C200,120 300,240 400,180"
              stroke="url(#gradient5)"
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="4 4"
              className="animate-dash"
            />
            <path
              d="M480,180 C580,120 680,240 780,180"
              stroke="url(#gradient6)"
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="4 4"
              className="animate-dash animation-delay-1000"
            />
            <defs>
              <linearGradient id="gradient5" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff8c42" />
                <stop offset="100%" stopColor="#ff4d6d" />
              </linearGradient>
              <linearGradient id="gradient6" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffb74d" />
                <stop offset="100%" stopColor="#ff8a65" />
              </linearGradient>
            </defs>
          </svg>

          {/* Decorative dots with connecting lines */}
          <div className="absolute top-[40%] left-[30%] w-2 h-2 bg-orange-400/60 rounded-full animate-pulse"></div>
          <div className="absolute top-[50%] right-[30%] w-2 h-2 bg-amber-400/60 rounded-full animate-pulse animation-delay-500"></div>
          <div className="absolute bottom-[40%] left-[40%] w-2 h-2 bg-orange-500/60 rounded-full animate-pulse animation-delay-1000"></div>
          <div className="absolute bottom-[30%] right-[40%] w-2 h-2 bg-amber-500/60 rounded-full animate-pulse animation-delay-1500"></div>

          {/* Additional connecting lines */}
          <svg className="absolute inset-0 w-full h-full opacity-25" style={{ zIndex: 0 }}>
            <path
              d="M0,300 C100,250 200,350 300,300 C400,250 500,350 600,300"
              stroke="url(#gradient7)"
              strokeWidth="1"
              fill="none"
              strokeDasharray="3 3"
              className="animate-dash"
            />
            <path
              d="M0,400 C100,350 200,450 300,400 C400,350 500,450 600,400"
              stroke="url(#gradient8)"
              strokeWidth="1"
              fill="none"
              strokeDasharray="3 3"
              className="animate-dash animation-delay-1000"
            />
            <defs>
              <linearGradient id="gradient7" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff8c42" />
                <stop offset="100%" stopColor="#ff4d6d" />
              </linearGradient>
              <linearGradient id="gradient8" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffb74d" />
                <stop offset="100%" stopColor="#ff8a65" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Glow balls - optimized with reduced blur and simpler animations */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[10%] left-[5%] w-24 h-24 bg-orange-300/20 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-[30%] right-[10%] w-32 h-32 bg-amber-300/20 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-[20%] left-[15%] w-28 h-28 bg-orange-400/20 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
          className="absolute bottom-[10%] right-[5%] w-20 h-20 bg-amber-400/20 rounded-full blur-2xl"
        />

        {/* Connecting curve lines - optimized with reduced opacity and simpler paths */}
        <svg className="absolute inset-0 w-full h-full opacity-5" style={{ zIndex: 0 }}>
          <path
            d="M0,200 C100,150 200,250 300,200 C400,150 500,250 600,200"
            stroke="url(#gradient1)"
            strokeWidth="1.5"
            fill="none"
            className="animate-draw"
          />
          <path
            d="M0,400 C100,350 200,450 300,400 C400,350 500,450 600,400"
            stroke="url(#gradient2)"
            strokeWidth="1.5"
            fill="none"
            className="animate-draw animation-delay-1000"
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff8c42" />
              <stop offset="100%" stopColor="#ff4d6d" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffb74d" />
              <stop offset="100%" stopColor="#ff8a65" />
            </linearGradient>
          </defs>
        </svg>

        {/* Decorative dots - optimized with reduced size and simpler animations */}
        <div className="absolute top-[15%] left-[20%] w-1.5 h-1.5 bg-orange-400/40 rounded-full animate-pulse"></div>
        <div className="absolute top-[25%] right-[25%] w-1.5 h-1.5 bg-amber-400/40 rounded-full animate-pulse animation-delay-500"></div>
        <div className="absolute bottom-[30%] left-[30%] w-1.5 h-1.5 bg-orange-500/40 rounded-full animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-[20%] right-[20%] w-1.5 h-1.5 bg-amber-500/40 rounded-full animate-pulse animation-delay-1500"></div>
      </div>

      {/* Optimize initial page load animations */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black/5 to-transparent"
      />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-yellow-100 to-orange-50">
        <div className="absolute inset-0">
          {/* Radial gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-amber-300/20 to-orange-200/10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.2)_0%,transparent_50%)]" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-orange-50/90" />

          {/* Animated background shapes */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-300/30 rounded-full blur-3xl animate-blob"></div>
            <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-orange-200/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-amber-200/30 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black/5 to-transparent"
        />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="mb-4 inline-block"
          >
            <span className="group relative px-6 py-2 rounded-full bg-orange-500/90 backdrop-blur-sm text-sm font-bold text-white shadow-lg border border-orange-400/50">
              <span className="relative z-10">Premium Quality Juice Delivery ✨</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-white/20 to-orange-500/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-amber-700 to-orange-800"
          >
            Fresh & Natural Juices
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-gray-800 font-semibold"
          >
            Experience nature&apos;s best flavors delivered to your doorstep
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative inline-block mb-12"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-amber-400 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-700"></div>
            <div className="relative px-6 py-3 bg-white/90 backdrop-blur-sm rounded-lg border border-orange-200/50 shadow-xl">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="w-6 h-6"
                    >
                      <svg className="w-full h-full text-orange-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                        <circle cx="12" cy="12" r="3" fill="currentColor" />
                      </svg>
                    </motion.div>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-orange-500"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-600">
                    Express Delivery in{' '}
                    <span className="relative inline-flex items-center">
                      <span className="absolute inset-0 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full blur-sm opacity-50"></span>
                      <span className="relative px-2 py-0.5 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full text-white text-xl font-black">
                        25
                      </span>
                    </span>{' '}
                    Minutes
                  </span>
                  <svg className="w-5 h-5 text-orange-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-orange-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" />
                  </svg>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity, delay: 0.3 }}
                    className="w-1.5 h-1.5 rounded-full bg-orange-500"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
          >
            <Link
              href="/menu"
              className="group relative overflow-hidden px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-lg hover:shadow-amber-500/25 transition-all duration-200 font-semibold text-base"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Our Menu
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-white/20 to-orange-500/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
            </Link>
            <Link
              href="/blog"
              className="group relative overflow-hidden px-6 py-3 rounded-full border-2 border-orange-400/30 hover:border-orange-400/50 transition-all duration-300 backdrop-blur-sm"
            >
              <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-600 font-semibold text-base group-hover:from-orange-500 group-hover:to-amber-500">
                Learn More
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 to-amber-400/10 opacity-0 group-hover:opacity-100 transition-all duration-500" />
            </Link>
          </motion.div>

          {/* New floating elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="absolute top-1/4 right-[15%] w-16 h-16"
          >
            <div className="relative w-full h-full">
              <motion.div
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, 3, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-br from-orange-300/20 to-amber-300/20 rounded-full blur-xl"
              />
              <motion.div
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, 3, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 flex items-center justify-center text-4xl"
              >
                🍊
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="absolute bottom-1/3 left-[15%] w-16 h-16"
          >
            <div className="relative w-full h-full">
              <motion.div
                animate={{
                  y: [0, 8, 0],
                  rotate: [0, -3, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-br from-green-300/20 to-emerald-300/20 rounded-full blur-xl"
              />
              <motion.div
                animate={{
                  y: [0, 8, 0],
                  rotate: [0, -3, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 flex items-center justify-center text-3xl"
              >
                🥝
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="absolute top-[70%] right-[35%] w-14 h-14"
          >
            <div className="relative w-full h-full">
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 15, 0]
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-br from-red-300/20 to-pink-300/20 rounded-full blur-xl"
              />
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 15, 0]
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 flex items-center justify-center text-3xl"
              >
                🍓
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="absolute bottom-1/4 right-[25%] w-12 h-12"
          >
            <div className="relative w-full h-full">
              <motion.div
                animate={{
                  y: [0, 12, 0],
                  rotate: [0, -8, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-br from-purple-300/20 to-indigo-300/20 rounded-full blur-xl"
              />
              <motion.div
                animate={{
                  y: [0, 12, 0],
                  rotate: [0, -8, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 flex items-center justify-center text-2xl"
              >
                🫐
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-8 left-0 right-0 flex justify-center"
        >
          <div className="flex items-center gap-6 bg-white/80 backdrop-blur-md px-8 py-4 rounded-full border border-orange-200 shadow-lg">
            {['100% Natural', 'No Preservatives', 'Fresh Daily'].map((item, i) => (
              <div key={i} className="flex items-center">
                {i > 0 && <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mx-3"></span>}
                <span className="text-sm font-bold text-orange-800">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Popular Juices Section */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-100/80 to-orange-50/90 -z-10"></div>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-16"
          >
            <div className="flex justify-center mb-3">
              <span className="px-4 py-1 rounded-full bg-orange-100 text-orange-700 text-sm font-medium">
                Staff Picks
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600">
              Popular Juices
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our most loved fresh juices crafted with premium ingredients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularJuices.map((juice, index) => (
              <motion.div
                key={juice.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -3, transition: { duration: 0.15 } }}
                className="group cursor-pointer rounded-2xl overflow-hidden border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-200 bg-gradient-to-br from-white/80 via-white/90 to-orange-50/80 backdrop-blur-sm"
              >
                <Link href={`/blog/${juice.id}`}>
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={juice.image}
                      alt={juice.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index < 2}
                      loading={index < 2 ? "eager" : "lazy"}
                      quality={85}
                      className="object-cover transition-all duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                    {/* Decorative elements */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400/50 to-transparent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                      <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-orange-400/50 to-transparent transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-orange-400/50 to-transparent transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500" />
                      <div className="absolute right-0 top-0 h-full w-1 bg-gradient-to-t from-orange-400/50 to-transparent transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500" />
                    </div>

                    <div className="absolute top-4 right-4 bg-white/90 rounded-full px-3 py-1 text-lg shadow-lg backdrop-blur-sm border border-orange-100/50">
                      {juice.emoji}
                    </div>

                    {/* Hover overlay with content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-t from-white/95 via-white/50 to-transparent backdrop-blur-[2px]">
                      <motion.span
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="text-orange-600 font-medium"
                      >
                        Discover More
                      </motion.span>
                    </div>
                  </div>

                  <div className="p-6 relative">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-semibold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                        {juice.name}
                      </h3>
                      <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600">
                        {juice.price}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{juice.shortDescription}</p>
                    <ul className="space-y-2 mb-4">
                      {juice.benefits.slice(0, 2).map((benefit, i) => (
                        <li key={i} className="flex items-center text-gray-600 text-sm">
                          <span className="text-orange-500 mr-2 transition-transform duration-300 group-hover:rotate-45">✦</span>
                          {benefit.length > 50 ? `${benefit.substring(0, 50)}...` : benefit}
                        </li>
                      ))}
                    </ul>

                    {/* Bottom gradient line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-400/30 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center mt-16"
          >
            <Link
              href="/menu"
              className="group relative overflow-hidden px-5 py-2.5 rounded-full bg-white/50 hover:bg-white/80 backdrop-blur-sm border border-orange-200 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-600 font-medium text-sm group-hover:gap-3 transition-all duration-300">
                View All Juices
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16" className="text-orange-600">
                  <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 to-amber-400/10 opacity-0 group-hover:opacity-100 transition-all duration-500" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-50/50 to-white/80 backdrop-blur-sm -z-10"></div>
        <div className="absolute inset-0 overflow-hidden -z-20">
          <svg className="absolute right-0 top-0 h-full opacity-5" viewBox="0 0 100 100" preserveAspectRatio="none">
            <circle cx="85" cy="20" r="45" fill="url(#gradient)" />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff8c42" />
                <stop offset="100%" stopColor="#ff4d6d" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-16"
          >
            <div className="flex justify-center mb-3">
              <span className="px-4 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">
                Why Bliss Bay
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-green-500 to-green-600">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We deliver the freshest juices with uncompromising quality and service
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                title: 'Fresh Ingredients',
                description: 'We use only the freshest seasonal fruits and vegetables sourced from local farms',
                icon: '🍎',
                color: 'from-orange-400 to-amber-500',
                bgColor: 'bg-orange-50'
              },
              {
                title: 'Fast Delivery',
                description: 'Get your juices delivered within 30 minutes, cold and fresh to preserve nutrients',
                icon: '🚚',
                color: 'from-orange-500 to-amber-600',
                bgColor: 'bg-orange-50'
              },
              {
                title: 'Premium Quality',
                description: '100% natural, no artificial flavors or preservatives, just pure fruit goodness',
                icon: '✨',
                color: 'from-amber-400 to-orange-500',
                bgColor: 'bg-orange-50'
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50 bg-gradient-to-br from-white/80 via-white/90 to-orange-50/80 backdrop-blur-sm p-8"
              >
                {/* Decorative elements */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400/50 to-transparent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-orange-400/50 to-transparent transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-orange-400/50 to-transparent transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500" />
                  <div className="absolute right-0 top-0 h-full w-1 bg-gradient-to-t from-orange-400/50 to-transparent transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500" />
                </div>

                <div className={`text-5xl mb-6 w-16 h-16 rounded-xl flex items-center justify-center mx-auto ${feature.bgColor} group-hover:scale-110 transition-transform duration-500 relative`}>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-orange-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {feature.icon}
                </div>

                <h3 className={`text-2xl font-semibold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r ${feature.color} relative`}>
                  {feature.title}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-orange-400/30 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </h3>

                <p className="text-gray-600 text-center relative z-10">{feature.description}</p>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
            className="mt-20 relative overflow-hidden group rounded-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 via-amber-400/20 to-orange-400/20 opacity-0 group-hover:opacity-100 transition-all duration-300" />
            <div className="bg-white/70 backdrop-blur-sm p-8 lg:p-12 shadow-xl border border-white/50 rounded-2xl relative">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400/30 to-transparent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-orange-400/30 to-transparent transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-4 items-center relative z-10">
                <div className="lg:col-span-2">
                  <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    viewport={{ once: true }}
                    className="text-2xl lg:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-600"
                  >
                    Ready to experience nature&apos;s best flavors?
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="text-gray-600 mb-6 lg:mb-0"
                  >
                    Start your journey to better health with our premium juice selection delivered to your door.
                  </motion.p>
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex justify-center lg:justify-end"
                >
                  <Link
                    href="/menu"
                    className="group relative overflow-hidden px-6 py-2.5 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white shadow-lg hover:shadow-orange-500/25 transition-all duration-200 font-medium text-sm"
                  >
                    <span className="relative z-10 font-semibold">Order Now</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-white/20 to-orange-500/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* App Download Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-orange-50/30"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl animate-blob"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true, margin: "-50px" }}
            className="relative overflow-hidden rounded-3xl border border-orange-100/50 shadow-2xl bg-white/80 backdrop-blur-sm"
          >
            {/* Decorative curved lines */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400/30 via-amber-400/30 to-orange-400/30"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400/30 via-amber-400/30 to-orange-400/30"></div>
              <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-400/20 to-transparent"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-8 lg:p-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true, margin: "-50px" }}
                className="text-left relative z-10"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="inline-block mb-6"
                >
                  <span className="px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-medium">
                    Get Started
                  </span>
                </motion.div>

                <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-orange-400">
                  Download the app now!
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Experience seamless online ordering only on the Bliss Bay app
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="#" className="group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 to-amber-400/10 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl"></div>
                    <Image
                      src="/app-store.png"
                      alt="Download on App Store"
                      width={180}
                      height={60}
                      sizes="180px"
                      loading="lazy"
                      quality={90}
                      className="h-[60px] w-auto relative z-10 transition-transform duration-300 group-hover:scale-105"
                    />
                  </Link>
                  <Link href="#" className="group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 to-amber-400/10 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl"></div>
                    <Image
                      src="/google-play.png"
                      alt="Get it on Google Play"
                      width={180}
                      height={60}
                      sizes="180px"
                      loading="lazy"
                      quality={90}
                      className="h-[60px] w-auto relative z-10 transition-transform duration-300 group-hover:scale-105"
                    />
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative w-full max-w-[320px] mx-auto">
                  {/* Decorative elements */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-orange-400/20 to-amber-400/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -inset-2 bg-gradient-to-br from-orange-400/10 to-transparent rounded-full blur-xl"></div>

                  <Image
                    src="/phone-mockup.png"
                    alt="Bliss Bay Mobile App"
                    width={640}
                    height={1280}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                    quality={85}
                    className="w-full h-auto drop-shadow-2xl relative z-10"
                  />

                  {/* Floating elements */}
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute -top-4 -right-4 w-8 h-8 bg-orange-400/20 rounded-full blur-sm"
                  />
                  <motion.div
                    animate={{
                      y: [0, 10, 0],
                      rotate: [0, -5, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                    className="absolute -bottom-4 -left-4 w-8 h-8 bg-amber-400/20 rounded-full blur-sm"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 