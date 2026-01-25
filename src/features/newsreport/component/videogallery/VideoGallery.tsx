import AnimatedVideoGallery from './AnimatedVideoGallery';

const mainNews = {
  imageSrc: '/v1.png',
  alt: 'V',
};

const sideNews = [
  {
    imageSrc: '/notice2.png',
    alt: 'V',
  },
  {
    imageSrc: '/notice3.png',
    alt: 'V',
  },
  {
    imageSrc: '/notice2.png',
    alt: 'V',
  },
];

export default function VideoGallery() {
  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <AnimatedVideoGallery mainNews={mainNews} sideNews={sideNews} />
      </div>
    </div>
  );
}