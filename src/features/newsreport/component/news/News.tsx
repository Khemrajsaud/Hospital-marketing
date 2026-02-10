import AnimatedNewsCards from './AnimatedNewsCards';
import { ArrowRight } from 'lucide-react';

interface NewsCard {
  id: number;
  image: string;
  title: string;
  description: string;
  timeAgo: string;
}

const newsCards: NewsCard[] = [
  {
    id: 1,
    image: '/latestnews1.png',
    title: 'Blood Donation Success',
    description: 'On February 14, 2024, 32 generous donors stepped up at Maya Metro Hospital Dhanagadhi during our special blood donation camp on Saraswati Puja & Valentine\'s Day.',
    timeAgo: '24 Minutes ago'
  },
  {
    id: 2,
    image: '/latestnews1.png',
    title: 'Blood Donation Success',
    description: 'On February 14, 2024, 32 generous donors stepped up at Maya Metro Hospital Dhanagadhi during our special blood donation camp on Saraswati Puja & Valentine\'s Day.',
    timeAgo: '24 Minutes ago'
  },
  {
    id: 3,
    image: '/latestnews1.png',
    title: 'Blood Donation Success',
    description: 'On February 14, 2024, 32 generous donors stepped up at Maya Metro Hospital Dhanagadhi during our special blood donation camp on Saraswati Puja & Valentine\'s Day.',
    timeAgo: '24 Minutes ago'
  },
  {
    id: 4,
    image: '/latestnews1.png',
    title: 'Blood Donation Success',
    description: 'On February 14, 2024, 32 generous donors stepped up at Maya Metro Hospital Dhanagadhi during our special blood donation camp on Saraswati Puja & Valentine\'s Day.',
    timeAgo: '24 Minutes ago'
  }
];

export default function News() {
  return (
    <div className="w-full bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900 border-b-4 border-gray-900 pb-2">
            Latest News
          </h2>
          <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors">
            See More
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <AnimatedNewsCards newsCards={newsCards} />
      </div>
    </div>
  );
}