import React from "react";
import Image from "next/image";
import Link from "next/link";

interface NewsCardProps {
  article: {
    id: number;
    category: string;
    title: string;
    description: string;
    image: string;
    link: string;
    daysAgo: string;
  };
}

const NewsCard: React.FC<NewsCardProps> = ({ article }) => {
  return (
    <div
      className="
    bg-white rounded-2xl overflow-hidden shadow-lg
    hover:shadow-lg transition-all duration-300 group p-6 relative
    hover:shadow-[0_10px_30px_-8px_#01BAEF]
    hover:shadow-[#01BAEF]/40
  "
    >
      <div className="flex items-start justify-between mb-4">
        <div className="relative w-16 h-16 rounded-full overflow-hidden border-4 border-[#01BAEF] shadow-lg flex-shrink-0">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
          />
        </div>
        <span className="text-gray-100 text-6xl font-bold leading-none">
          0{article.id}
        </span>
      </div>

      <div>
        <p className="text-[#01BAEF] font-semibold text-sm mb-2">
          {article.category}
        </p>

        <h3 className="text-[#0B4F6C] font-bold text-xl mb-3 group-hover:text-[#01BAEF] transition-colors">
          {article.title}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {article.description}
        </p>

        <div className="flex items-center justify-between pt-2">
          <Link
            href={article.link}
            className="text-[#01BAEF] font-semibold text-sm hover:text-[#0B4F6C] transition-colors inline-flex items-center gap-1"
          >
            View Article →
          </Link>
          <span className="text-gray-400 text-xs">{article.daysAgo}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
