import React, { useState } from "react";
import slidesData from "../assets/slides.json";
import {
  AlertTriangle,
  Wrench,
  TrendingUp,
  Users,
  DollarSign,
  Target,
  Layers,
  BarChart3,
  Search,
  Briefcase,
  Sparkles,
} from "lucide-react";

const backgroundClasses: Record<string, string> = {
  orange: "bg-gradient-to-r from-orange-100 to-orange-200",
  purple: "bg-gradient-to-r from-purple-100 to-purple-200",
  green: "bg-gradient-to-r from-green-100 to-green-200",
  yellow: "bg-gradient-to-r from-yellow-100 to-yellow-200",
  blue: "bg-gradient-to-r from-blue-100 to-blue-200",
  indigo: "bg-gradient-to-r from-indigo-100 to-indigo-200",
  red: "bg-gradient-to-r from-red-100 to-red-200",
};

const iconMap: Record<string, React.ElementType> = {
  AlertTriangle,
  Wrench,
  BarChart3,
  Search,
  Users,
  TrendingUp,
  DollarSign,
  Target,
  Layers,
  Briefcase,
  Sparkles,
};

const Slides: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slidesData.length;
  const currentSlideData = slidesData[currentSlide];

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  const IconComponent = iconMap[currentSlideData.icon] || AlertTriangle;
  const bgColorKey =
    currentSlideData.backgroundColor.match(/from-(\w+)-100/)?.[1] || "blue";
  const backgroundClass = backgroundClasses[bgColorKey];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-r from-[#517e8b] to-[#c7c5b8] relative">
      <div className="absolute bottom-4 right-4">
        <img
          src="/api/placeholder/150/150"
          alt="Splaash Logo"
          className="w-20 h-20 opacity-75"
        />
      </div>

      <div
        className={`relative min-w-[70vw] min-h-[70vh] rounded-3xl shadow-2xl p-10 flex flex-col items-center ${backgroundClass}`}
      >
        <div className="mb-4">
          <IconComponent className="w-24 h-24 text-white" />
        </div>
        <h2 className="text-[30pt] font-bold text-[#333] mb-2 text-center">
          {currentSlideData.title}
        </h2>

        <hr className="w-[80%] border-t-2 border-yellow-400 mb-6" />

        <ul className="mt-6 space-y-4 text-gray-800 text-lg">
          {currentSlideData.content.map((item, index) => (
            <li key={index} className="flex items-start space-x-3">
              <span className="text-2xl text-yellow-500">✔️</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <p className="absolute bottom-4 text-center text-[10pt] font-bold text-gray-700">
          Slide {currentSlide + 1} of {totalSlides}
        </p>
      </div>

      <div className="mt-8 flex space-x-4">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className={`px-6 py-3 rounded-lg transition ${
            currentSlide === 0
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-teal-100 text-teal-700 hover:bg-teal-200"
          }`}
        >
          Previous
        </button>

        <button
          onClick={nextSlide}
          disabled={currentSlide === totalSlides - 1}
          className={`px-6 py-3 rounded-lg transition ${
            currentSlide === totalSlides - 1
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-teal-600 text-white hover:bg-teal-700"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Slides;
