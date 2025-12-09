'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { getJuiceById, JuiceProduct } from '@/data/juices';
import { useCart } from '@/context/CartContext';

// Fade in animation variants
const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4 }
};

export default function ClientMenuPage({ id }: { id: string }) {
    const [juice, setJuice] = useState<JuiceProduct | null>(null);
    const [loading, setLoading] = useState(true);
    const { addToCart } = useCart();
    const [isAdding, setIsAdding] = useState(false);

    useEffect(() => {
        if (typeof id === 'string') {
            const juiceData = getJuiceById(id);
            setJuice(juiceData || null);
        }
        setLoading(false);
    }, [id]);

    const handleAddToCart = () => {
        if (juice) {
            setIsAdding(true);
            addToCart(juice);
            setTimeout(() => setIsAdding(false), 1000);
        }
    };

    if (loading) {
        return (
            <div className="pt-28 pb-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="w-full h-96 bg-gray-200 animate-pulse rounded-xl"></div>
                </div>
            </div>
        );
    }

    if (!juice) {
        return (
            <div className="pt-28 pb-16 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-3xl font-bold mb-4">Juice Not Found</h1>
                    <p className="mb-8">The juice you&apos;re looking for doesn&apos;t exist or has been removed.</p>
                    <Link href="/menu" className="gradient-button">
                        Back to Menu
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-24 pb-16 px-4 bg-gradient-to-br from-orange-50/50 via-white to-orange-50/50">
            <div className="max-w-6xl mx-auto">
                {/* Back button */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <Link
                        href="/menu"
                        className="group inline-flex items-center text-gray-600 hover:text-orange-500 mb-8 transition-colors"
                    >
                        <ArrowLeftIcon className="h-5 w-5 mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
                        Back to Menu
                    </Link>
                </motion.div>

                {/* Product Details Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                    {/* Product Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="relative h-96 rounded-2xl overflow-hidden shadow-xl group"
                    >
                        <Image
                            src={juice.image}
                            alt={juice.name}
                            fill
                            className="object-cover transition-all duration-700 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-2xl shadow-lg border border-orange-100/50">
                            {juice.emoji}
                        </div>
                    </motion.div>

                    {/* Product Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="space-y-6"
                    >
                        <div>
                            <h1 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-600">
                                {juice.name}
                            </h1>
                            <p className="text-2xl font-bold text-orange-500">{juice.price}</p>
                        </div>

                        <p className="text-gray-700 text-lg leading-relaxed">{juice.fullDescription}</p>

                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.4 }}
                            onClick={handleAddToCart}
                            disabled={isAdding}
                            className="group relative overflow-hidden w-full md:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-lg hover:shadow-orange-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
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
                                        Add to Cart
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
                    </motion.div>
                </div>

                {/* Benefits and Ingredients Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {/* Benefits Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-orange-100 shadow-lg space-y-4"
                    >
                        <h2 className="text-xl font-bold text-gray-900">Benefits</h2>
                        <ul className="space-y-3">
                            {juice.benefits.map((benefit, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                    className="flex items-start"
                                >
                                    <span className="text-orange-500 mr-2 text-lg">•</span>
                                    <span className="text-gray-700">{benefit}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Ingredients Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                        className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-orange-100 shadow-lg space-y-4"
                    >
                        <h2 className="text-xl font-bold text-gray-900">Ingredients</h2>
                        <ul className="space-y-3">
                            {juice.ingredients.map((ingredient, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                    className="flex items-start"
                                >
                                    <span className="text-orange-500 mr-2 text-lg">•</span>
                                    <span className="text-gray-700">{ingredient}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Nutritional Information */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-600">
                        Nutritional Information
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
                                className="group bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-orange-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                            >
                                <h3 className="font-bold mb-2 text-gray-600 group-hover:text-orange-500 transition-colors duration-300">
                                    {item.label}
                                </h3>
                                <p className="text-2xl font-bold text-gray-900">{item.value}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="mt-8 bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-orange-100 shadow-lg"
                    >
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
                    </motion.div>
                </motion.div>

                {/* Blog Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-600">
                        {juice.blogContent.title}
                    </h2>
                    <div className="prose prose-lg max-w-none">
                        {juice.blogContent.content.map((paragraph, index) => (
                            <motion.p
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="mb-6 text-gray-700 leading-relaxed"
                            >
                                {paragraph}
                            </motion.p>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
