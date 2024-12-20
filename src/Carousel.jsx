import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Jorch Morik",
      rating: 5,
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa illo harum iure distinctio dicta, consequuntur dolores vitae ipsum iusto, quidem maxime ipsum iusto, quidem maxime discpline .",
      img: "/Images/client-1.jpg",
    },
    {
      id: 2,
      name: "Jane Doe",
      rating: 5,
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa illo harum iure distinctio dicta, consequuntur dolores vitae ipsum iusto, quidem maxime ipsum iusto, quidem maxime discpline .",
      img: "/Images/client-2.jpg",
    },
    {
      id: 3,
      name: "John Smith",
      rating: 4,
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa illo harum iure distinctio dicta, consequuntur dolores vitae ipsum iusto, quidem maxime ipsum iusto, quidem maxime discpline ",
      img: "/Images/client-1.jpg",
    },
    {
      id: 4,
      name: "Alice Brown",
      rating: 5,
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa illo harum iure distinctio dicta, consequuntur dolores vitae ipsum iusto, quidem maxime ipsum iusto, quidem maxime discpline ",
      img: "/Images/client-2.jpg",
    },
    {
        id: 5,
        name: "Alice Brown",
        rating: 5,
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa illo harum iure distinctio dicta, consequuntur dolores vitae ipsum iusto, quidem maxime ipsum iusto, quidem maxime discpline ",
        img: "/Images/client-1.jpg",
      },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-[1400px] mx-auto bg-gray-100 p-4 overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{
          transform: `translateX(-${(currentIndex * 100) / (window.innerWidth >= 768 ? 2 : 1)}%)`,
        }}
      >
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="w-full flex-shrink-0 p-4 sm:w-[100%] md:w-[50%]"
          >
            <div className="bg-white shadow-md p-6 text-center">
              <img
                src={testimonial.img}
                alt={testimonial.name}
                className="rounded-full mx-auto mb-4 w-16 h-16 sm:w-20 sm:h-20"
              />
              <h3 className="text-lg sm:text-md">{testimonial.name}</h3>
              <p className="text-yellow-500">
                {"★".repeat(testimonial.rating)}
                {"☆".repeat(5 - testimonial.rating)}
              </p>
              <p className="text-gray-600 mt-2 text-xs sm:text-sm md:text-base">
                {testimonial.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mt-6">
        <button
          onClick={handlePrev}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={handleNext}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          <FaArrowRight />
        </button>
      </div>

      <div className="flex justify-center gap-4 mt-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
