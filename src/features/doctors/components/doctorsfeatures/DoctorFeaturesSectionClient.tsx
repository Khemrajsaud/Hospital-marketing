"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type Feature = {
  id: number;
  title: string;
  buttonText: string;
  image: string;
  alt: string;
};

interface Props {
  features: Feature[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.92 },
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

export default function DoctorFeaturesSectionClient({ features }: Props) {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 gap-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {features.map((feature) => (
        <motion.div
          key={feature.id}
          variants={cardVariants}
          whileHover={{ scale: 1.04, y: -8 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
        >
          <div className="flex flex-col items-center">
            <div className="mb-6 w-full h-48 relative flex justify-center items-center">
              <Image
                src={feature.image}
                alt={feature.alt}
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 text-center mb-6 min-h-[3rem] flex items-center">
              {feature.title}
            </h3>

            <Link href="/doctorappointment" className="w-full">
              <button className="w-full px-6 py-3 bg-white text-[#0B4F6C] border-2 border-[#0B4F6C] rounded-lg font-semibold hover:bg-[#0B4F6C] hover:text-white transition-all duration-300">
                {feature.buttonText}
              </button>
            </Link>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}