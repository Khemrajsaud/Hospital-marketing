import React from "react";
import Image from "next/image";

const mainNews = {
  imageSrc: "/v1.png",
  alt: "V",
};

const sideNews = [
  {
    imageSrc: "/notice2.png",
    alt: "V",
  },
  {
    imageSrc: "/notice3.png",
    alt: "V",
  },
  {
    imageSrc: "/notice2.png",
    alt: "V",
  },
];

const VideoGallery = () => {
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
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 lg:max-w-[380px] xl:max-w-[420px]">
            {sideNews.map((item, index) => (
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
                    className="w-full h-28 object-cover" 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoGallery;