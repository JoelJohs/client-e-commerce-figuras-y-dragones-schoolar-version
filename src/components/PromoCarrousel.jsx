import { useEffect, useState } from "react";
import { LeftRowIcon, RightRowIcon } from "../assets/Icons";

const promoData = [
  { id: 1, title: "Promo 1", image: "grafico1.jpg" },
  { id: 2, title: "Promo 2", image: "grafico2.jpg" },
  { id: 3, title: "Promo 3", image: "grafico3.jpg" },
];

const PromoCarrousel = () => {
  const [currentPromo, setCurrentPromo] = useState(0);

  const handlePrev = () => {
    setCurrentPromo((prev) => (prev === 0 ? promoData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentPromo((prev) => (prev === promoData.length - 1 ? 0 : prev + 1));
  };

  
  return (
    <div className="relative">
      {promoData.map((promo, index) => (
        <div
          key={promo.id}
          className={`${index === currentPromo ? "block" : "hidden"}`}
        >
          <img
            src={`/graphics/${promo.image}`}
            alt={promo.title}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 p-2 bg-black text-white"
      >
        <LeftRowIcon width={"1.5em"} height={"1.5em"} />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 p-2 bg-black text-white"
      >
        <RightRowIcon width={"1.5em"} height={"1.5em"} />
      </button>
    </div>
  );
};

export default PromoCarrousel;
