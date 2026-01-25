'use client';

import Image from 'next/image';
import { Clock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface NewsCard {
  id: number;
  image: string;
  title: string;
  description: string;
  timeAgo: string;
}

interface Props {
  newsCards: NewsCard[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 35, scale: 0.93 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  hover: {
    y: -10,
    scale: 1.04,
    boxShadow: '0 20px 40px -12px rgba(0,0,0,0.15)',
    transition: { duration: 0.35, ease: 'easeOut' },
  },
};

export default function AnimatedNewsCards({ newsCards }: Props) {
  return (
    <div className="relative">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        {newsCards.map((card) => (
          <motion.div
            key={card.id}
            variants={cardVariants}
            whileHover="hover"
            className="rounded-lg overflow-hidden bg-white border border-gray-200"
          >
            <div className="relative h-64 overflow-hidden">
              <Image
                src={card.image}
                alt={card.title}
                width={400}
                height={320}
                className="w-full h-full object-cover transition-transform duration-500"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                {card.description}
              </p>

              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <Clock className="w-4 h-4" />
                <span>{card.timeAgo}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110">
        <ArrowRight className="w-6 h-6 text-gray-700" />
      </button>
    </div>
  );
}