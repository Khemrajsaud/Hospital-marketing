import Image from 'next/image';
import heroBg1 from '../../../../../public/image64.png';
import heroBg2 from '../../../../../public/image65.png';
import BannerSlider from './BannerSlider';
import BannerContent from './BannerContent';

interface Slide {
  image: string;
  title: string;
  description: string;
}

export const slides: Slide[] = [
  {
    image: heroBg1.src,
    title: "Your Health is Our Priority",
    description: "Book appointments, consult doctors online, and manage your healthcare — all in one secure platform.",
  },
  {
    image: heroBg2.src,
    title: "Expertise You Can Rely On Care You Can Feel",
    description: "Guided by expertise you can rely on and care you can feel, our mission is to provide high-quality, patient-centered healthcare at an affordable cost, especially for the people and underserved communities of Nepal's far-western region.",
  },
];

const Banner = () => {
  return (
    <section className="relative w-full h-[600px] min-h-[500px] overflow-hidden" style={{ fontFamily: 'var(--font-quicksand), system-ui, sans-serif' }}>
      <BannerSlider slides={slides} />
      
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
      
      <BannerContent slides={slides} />
    </section>
  );
};

export default Banner;