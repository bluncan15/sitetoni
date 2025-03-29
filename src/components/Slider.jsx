import { useState, useEffect } from "react";
import { images } from '../assets/gallery';

export default function Slider() {
  const [index, setIndex] = useState(0);
  let touchStartX = 0;
  let touchEndX = 0;

  const nextSlide = () => setIndex((index + 1) % images.length);
  const prevSlide = () => setIndex((index - 1 + images.length) % images.length);

  const handleTouchStart = (e) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX = e.changedTouches[0].clientX;
    if (touchStartX - touchEndX > 50) nextSlide(); // Swipe left
    if (touchStartX - touchEndX < -50) prevSlide(); // Swipe right
  };

  return (
    <div className="relative max-w-256 overflow-hidden border-2 rounded-lg border-[#0ac0ac]">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {images.map((img, i) => (
          <img key={i} src={img.src} className="w-256 h-128 flex-shrink-0 rounded-lg" alt={`Slide ${i + 1}`} />
        ))}
      </div>

      <button onClick={prevSlide} className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white/50 rounded-full">⬅</button>
      <button onClick={nextSlide} className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white/50 rounded-full">➡</button>
    </div>
  );
}
