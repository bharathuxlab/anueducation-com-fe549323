import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import gallery1 from "@/assets/gallery-1.png";
import gallery2 from "@/assets/gallery-2.png";
import gallery3 from "@/assets/gallery-3.png";
import gallery4 from "@/assets/gallery-4.png";
import gallery5 from "@/assets/gallery-5.png";

const slides = [
  { image: gallery1, title: "Welcome to Acharya Nagarjuna University", subtitle: "Accredited with NAAC A+ Grade" },
  { image: gallery2, title: "Centre of Academic Excellence", subtitle: "Established in 1976" },
  { image: gallery3, title: "World-Class Infrastructure", subtitle: "Spread across 293 acres" },
  { image: gallery4, title: "Research & Innovation", subtitle: "80+ Research Centres" },
  { image: gallery5, title: "Shaping Future Leaders", subtitle: "1,50,000+ Students" },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[350px] md:h-[520px] lg:h-[620px] overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={`ANU Campus ${i + 1}`}
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        </div>
      ))}

      {/* Text overlay */}
      <div className="absolute bottom-16 md:bottom-20 left-0 right-0 text-center z-10 px-4">
        <h2
          key={`title-${current}`}
          className="font-display text-2xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-3 drop-shadow-lg animate-fade-in-up"
        >
          {slides[current].title}
        </h2>
        <p
          key={`sub-${current}`}
          className="text-primary-foreground/90 text-base md:text-xl font-medium drop-shadow-md animate-fade-in-up"
          style={{ animationDelay: "0.15s" }}
        >
          {slides[current].subtitle}
        </p>
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2.5 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-300 rounded-full ${
              i === current
                ? "w-8 h-3 bg-secondary"
                : "w-3 h-3 bg-primary-foreground/50 hover:bg-primary-foreground/80"
            }`}
          />
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={() => setCurrent((current - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 backdrop-blur-sm hover:bg-black/50 text-primary-foreground p-3 rounded-full transition-all z-10"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={() => setCurrent((current + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 backdrop-blur-sm hover:bg-black/50 text-primary-foreground p-3 rounded-full transition-all z-10"
      >
        <ChevronRight size={24} />
      </button>
    </section>
  );
};

export default HeroCarousel;
