'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

type NewsItem = {
  imageSrc: string;
  alt: string;
  title?: string;
  date?: string;
  text: string;
};

interface Props {
  mainNews: NewsItem;
  sideNews: NewsItem[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.14, delayChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
  hover: {
    y: -10,
    scale: 1.035,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

export default function AnimatedNewsCards({ mainNews, sideNews }: Props) {
  return (
    <motion.div
      className="grid grid-cols-1 lg:grid-cols-2 gap-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-5%' }}
    >
      <motion.div
        variants={cardVariants}
        whileHover="hover"
        className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
      >
        <div className="relative h-full">
          <Image
            src={mainNews.imageSrc}
            alt={mainNews.alt}
            width={800}
            height={600}
            className="w-full h-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <span className="bg-[#B01030] text-white text-sm font-medium px-4 py-1.5 rounded-md shadow-sm inline-block mb-4">
              News
            </span>
            <p className="text-white text-2xl font-semibold leading-relaxed">
              {mainNews.text}
            </p>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 gap-6">
        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
        >
          <div className="relative">
            <Image
              src={sideNews[0].imageSrc}
              alt={sideNews[0].alt}
              width={800}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <span className="bg-[#B01030] text-white text-xs font-medium px-3 py-1 rounded-md shadow-sm inline-block mb-2">
                News
              </span>
              {sideNews[0].title && (
                <h3 className="text-white text-lg font-bold mb-1">{sideNews[0].title}</h3>
              )}
              {sideNews[0].date && (
                <p className="text-white text-sm mb-2">{sideNews[0].date}</p>
              )}
              <p className="text-white text-sm leading-relaxed mb-3">{sideNews[0].text}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {sideNews.slice(1).map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
            >
              <div className="relative">
                <Image
                  src={item.imageSrc}
                  alt={item.alt}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <span className="bg-[#B01030] text-white text-xs font-medium px-2 py-1 rounded-md shadow-sm inline-block mb-2">
                    News
                  </span>
                  <p className="text-white text-sm leading-snug">{item.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}