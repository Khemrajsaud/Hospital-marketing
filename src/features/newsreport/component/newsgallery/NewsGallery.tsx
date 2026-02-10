import AnimatedNewsCards from './AnimatedNewsCards';

const mainNews = {
  imageSrc: '/notice1.png',
  alt: 'Nepali nurses outside Maya Metro Hospital',
  text: 'Nurses outside Maya Metro Hospital — the first group of Nepali nurses will start working for the NHS in the autumn.',
};

const sideNews = [
  {
    imageSrc: '/notice2.png',
    alt: 'Blood donation program',
    title: '32 People Donated Blood',
    date: 'February 14, 2024',
    text: "Dhanagadhi. A total of 32 people donated blood in the blood donation program organized by Maya Metro Hospital Dhanagadhi. The blood donation program was held on the occasion of Buddha's Sārāswatī Puja and Valentine's Day.",
  },
  {
    imageSrc: '/notice3.png',
    alt: 'Blood donors appreciation',
    text: 'Blood donors received appreciation certificates and heartfelt thanks from the hospital.',
  },
  {
    imageSrc: '/notice2.png',
    alt: 'Participants appreciation',
    text: 'Participants received appreciation certificates, and the hospital sincerely thanked all blood donors.',
  },
];

export default function NewsGallery() {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <AnimatedNewsCards mainNews={mainNews} sideNews={sideNews} />
      </div>
    </div>
  );
}