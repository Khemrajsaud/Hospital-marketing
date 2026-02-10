'use client'

import React from "react";
import { motion } from "framer-motion";
import NewsCard from "./NewsCard";

type Article = {
  id: number;
  category: string;
  title: string;
  description: string;
  image: string;
  link: string;
  daysAgo: string;
};

type Props = {
  articles: Article[];
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      duration: 0.8,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function AnimatedNewsCards({ articles }: Props) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={containerVariants}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
    >
      {articles.map((article) => (
        <motion.div key={article.id} variants={cardVariants}>
          <NewsCard article={article} />
        </motion.div>
      ))}
    </motion.div>
  );
}