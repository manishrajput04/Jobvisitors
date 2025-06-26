import { useEffect, useRef } from "react";
import "./brand.css";

const brands = [
  {
    name: "Flipkart",
    img: "/assets/flipkart.svg",
  },
  {
    name: "Infosys",
    img: "/assets/Infosys.svg",
  },
  {
    name: "Walmart",
    img: "/assets/walmart.svg",
  },
  {
    name: "Asian Paints",
    img: "/assets/asian-paints.png",
  },
  {
    name: "Phone pe",
    img: "/assets/PhonePe.svg",
  },
  {
    name: "Accenture",
    img: "/assets/accenture.svg",
  },
  {
    name: "Wipro",
    img: "/assets/wipro.svg",
  },
  {
    name: "Amazon",
    img: "/assets/amazon.svg",
  },
];

export default function Brand() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let animationFrameId;

    const animate = () => {
      slider.scrollLeft += 1;
      if (slider.scrollLeft >= slider.scrollWidth / 2) {
        slider.scrollLeft = 0;
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="w-full py-7 bg-white text-center">
      <h1 className="text-2xl font-bold mb-3 text-orange-500 bg-orange-100 inline-block px-3 py-2 rounded-md">
        Our Brand Partners
      </h1>
      <div className="overflow-hidden w-full">
        <div
          ref={sliderRef}
          className="flex w-max gap-6 animate-slide whitespace-nowrap px-4"
        >
          {brands.concat(brands).map((brand, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-24 h-16 md:w-28 md:h-20 lg:w-32 lg:h-20 flex items-center justify-center"
            >
              <img
                src={brand.img}
                alt={brand.name}
                className="object-contain h-full max-w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
