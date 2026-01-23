import React from 'react';
import Image from 'next/image';

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
    text: 'Dhanagadhi. A total of 32 people donated blood in the blood donation program organized by Maya Metro Hospital Dhanagadhi. The blood donation program was held on the occasion of Buddha\'s Sārāswatī Puja and Valentine\'s Day.',
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

const NewsGallery = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
            <div className="relative h-full">
              <Image
                src={mainNews.imageSrc}
                alt={mainNews.alt}
                width={800}
                height={600}
                className="w-full h-full object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="bg-[#B01030] text-white text-sm font-medium px-4 py-1.5 rounded-md shadow-sm inline-block mb-4">
                  News
                </span>
                <p className="text-white text-2xl font-semibold leading-relaxed">
                  {mainNews.text}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <div className="relative">
                <Image
                  src={sideNews[0].imageSrc}
                  alt={sideNews[0].alt}
                  width={800}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 px-4">
                  <span className="bg-[#B01030] text-white text-xs font-medium px-3 py-1 rounded-md shadow-sm inline-block mb-2">
                    News
                  </span>
                  <h3 className="text-white text-lg font-bold mb-1">{sideNews[0].title}</h3>
                  <p className="text-white text-sm mb-2">{sideNews[0].date}</p>
                  <p className="text-white text-sm leading-relaxed mb-3">{sideNews[0].text}</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {sideNews.slice(1).map((item, index) => (
                <div
                  key={index}
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <span className="bg-[#B01030] text-white text-xs font-medium px-2 py-1 rounded-md shadow-sm inline-block mb-2">
                        News
                      </span>
                      <p className="text-white text-sm leading-snug">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsGallery;