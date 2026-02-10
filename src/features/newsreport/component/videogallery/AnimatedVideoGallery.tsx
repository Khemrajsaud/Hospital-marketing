'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

type VideoItem = {
  imageSrc: string;
  alt: string;
};

interface Props {
  mainNews: VideoItem;
  sideNews: VideoItem[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const mainCardVariants = {
  hidden: { opacity: 0, scale: 0.92, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const sideCardVariants = {
  hidden: { opacity: 0, y: 25, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const playButtonVariants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.15,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

export default function AnimatedVideoGallery({ mainNews, sideNews }: Props) {
  return (
    <motion.div
      className="flex flex-col lg:flex-row gap-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
    >
      <motion.div
        className="lg:w-2/3"
        variants={mainCardVariants}
        whileHover="hover"
      >
        <div className="relative rounded-2xl overflow-hidden shadow-xl group">
          <Image
            src={mainNews.imageSrc}
            alt={mainNews.alt}
            width={800}
            height={600}
            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
            priority
          />

          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors"
            variants={playButtonVariants}
            initial="rest"
            whileHover="hover"
          >
            <div className="bg-red-600 rounded-full p-5 shadow-lg">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </motion.div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">
          Another Successful Liver Transplant
        </h2>
        <p className="text-gray-600 text-base leading-relaxed mb-4">
          Nepal Mediciti has successfully completed another liver transplant,
          restoring hope and offering a renewed chance at life through advanced
          surgical expertise and compassionate care.
        </p>

        <p className="text-[#0B4F6C] font-bold inline-flex items-center cursor-pointer hover:underline">
          View All →
        </p>
      </motion.div>

      <div className="lg:w-1/3">
        <div className="flex flex-col gap-4">
          {sideNews.map((item, index) => (
            <motion.div
              key={index}
              variants={sideCardVariants}
              whileHover={{ y: -6, scale: 1.04, transition: { duration: 0.3 } }}
              className="relative rounded-2xl overflow-hidden shadow-md group cursor-pointer"
            >
              <Image
                src={item.imageSrc}
                alt={item.alt}
                width={400}
                height={300}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-3 right-3 bg-white/90 rounded-full p-2.5 shadow group-hover:bg-white transition-colors">
                <svg className="w-7 h-7 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}