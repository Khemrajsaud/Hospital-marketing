import AnimatedNewsGrid from './AnimatedNewsGrid';
import { ArrowRight } from 'lucide-react';

const newsItems = [
  {
    imageSrc: '/latestnews1.png',
    alt: 'Blood Donation Success',
    title: 'Blood Donation Success',
    description:
      'On February 14, 2024, 32 generous donors stepped up at Maya Metro Hospital Dhanagadhi during our special blood donation camp on Saraswati Puja & Valentine\'s Day.',
    timeAgo: '24 Minutes ago',
  },
  {
    imageSrc: '/latestnews2.png',
    alt: 'United in Care, Connected by Heartbeats',
    title: 'United in Care, Connected by Heartbeats',
    description:
      'Our dedicated medical team standing strong together – one circle, one mission: healing with compassion. Proud to serve 24/7 with emergency, ICU, surgery, dialysis & more at Maya Metro Hospital.',
    timeAgo: '24 Minutes ago',
  },
  {
    imageSrc: '/latestnews3.png',
    alt: 'Heartfelt Thanks to Our Blood Donors',
    title: 'Heartfelt Thanks to Our Blood Donors!',
    description:
      'Your one act of kindness helped bridge the blood shortage gap. 32 donors joined us – each drop counts! Certificates of appreciation handed out with deep gratitude. Together, we make a difference.',
    timeAgo: '24 Minutes ago',
  },
];

export default function LatestNews() {
  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-[#0B4F6C] underline">
            Latest News
            <div className="h-1 w-20 bg-blue-600 mt-2"></div>
          </h2>
          <button className="flex items-center gap-2 text-[#0B4F6C] font-semibold hover:text-blue-700 transition-colors">
            See More
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <AnimatedNewsGrid newsItems={newsItems} />
      </div>
    </div>
  );
}