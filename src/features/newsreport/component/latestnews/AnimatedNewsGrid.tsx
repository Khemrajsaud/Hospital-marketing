'use client';

import Image from 'next/image';
import { Clock } from 'lucide-react';
import { motion } from 'framer-motion';

type NewsItem = {
  imageSrc: string;
  alt: string;
  title: string;
  description: string;
  timeAgo: string;
};

interface Props {
  newsItems: NewsItem[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.94 },
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
    y: -8,
    scale: 1.04,
    boxShadow: '0 20px 35px -10px rgba(0, 0, 0, 0.12)',
    transition: { duration: 0.35, ease: 'easeOut' },
  },
};

export default function AnimatedNewsGrid({ newsItems }: Props) {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
    >
      {newsItems.map((item, index) => (
        <motion.div
          key={index}
          variants={cardVariants}
          whileHover="hover"
          className="overflow-hidden rounded-2xl bg-white border border-gray-200"
        >
          <div className="relative h-56">
            <Image
              src={item.imageSrc}
              alt={item.alt}
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-5">
            <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
              {item.description}
            </p>
            <div className="flex items-center gap-2 text-gray-400 text-xs">
              <Clock className="w-3.5 h-3.5" />
              <span>{item.timeAgo}</span>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}