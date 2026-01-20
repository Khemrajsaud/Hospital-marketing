import SectionHeader from "@/src/components/shared/SectionHeader";
import React from "react";
import NewsCard from "./NewsCard";
import Image1 from "../../../../../public/news1.png";
import Image2 from "../../../../../public/news2.png";
import Image3 from "../../../../../public/news3.png";

const newsArticles = [
  {
    id: 1,
    category: "News",
    title: "Appreciation",
    description: "Participants received appreciation certificates, and the hospital family thanked all blood donors.",
    image: Image1,
    link: "#",
    daysAgo: "2 days ago",
  },
  {
    id: 2,
    category: "News",
    title: "Nurses Outside",
    description: "Blood Nurses outside Hospital the first group of Nepali nurses had start working for the NHS in the autumn.",
    image: Image2,
    link: "#",
    daysAgo: "2 days ago",
  },
  {
    id: 3,
    category: "News",
    title: "Blood Donors",
    description: "Blood donors received appreciation certificates and heartfelt thanks from the hospital.",
    image: Image3,
    link: "#",
    daysAgo: "2 days ago",
  },
  {
    id: 4,
    category: "News",
    title: "Blood Donors",
    description: "Blood donors received appreciation certificates and heartfelt thanks from the hospital.",
    image: Image1,
    link: "#",
    daysAgo: "2 days ago",
  },
];

const NewsSection: React.FC = () => {
  return (
    <div className="bg-white py-16 md:py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-8xl mx-auto">
        <SectionHeader
          subtitle="News & Notice"
          title="Views Our"
          highlightedTitle="Articles & Videos"
          subtitleColor="text-[#0B4F6C]"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsArticles.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsSection;