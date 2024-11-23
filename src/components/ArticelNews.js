"use client";

import Image from "next/image";
import React, { useState } from "react";

function Quotes() {
  const quotesData = [
    {
      author: "John Doe",
      title: "The Future of AI in Everyday Life",
      content:
        "Artificial Intelligence (AI) is revolutionizing industries across the globe. From automating tasks to making personalized recommendations, AI is becoming more embedded in our daily routines. Discover how this cutting-edge technology is shaping the future, and what it means for both businesses and consumers alike.",
      image:
        "https://images.pexels.com/photos/461077/pexels-photo-461077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      type: "ARTICLE",
      category: "Artificial Intelligence",
    },
    {
      author: "Jane Smith",
      title: "Sustainable Living: How Small Changes Make a Big Impact",
      content:
        "Climate change and environmental degradation are critical issues today. But did you know that small changes in our lifestyle can make a significant impact? This article explores simple, actionable steps you can take to live more sustainably and help the planet.",
      image:
        "https://images.pexels.com/photos/461077/pexels-photo-461077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      type: "ARTICLE",
      category: "TRENDS",
    },
    {
      author: "Bob Johnson",
      title: "The Rise of Remote Work: Opportunities and Challenges",
      content:
        "Remote work has become a permanent fixture in many industries post-pandemic. But what does the rise of this work model mean for employees and companies alike? Learn about the benefits and challenges that come with remote work, and how businesses are adapting to this trend.",
      image:
        "https://images.pexels.com/photos/461077/pexels-photo-461077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      type: "ARTICLE",
      category: "TIPS",
    },
    {
      author: "Alice Johndakfkankfnson",
      title: "Exploring the Future of Renewable Energy",
      content:
        "With the rise of climate change, renewable energy has become a critical focus for industries worldwide. Learn about the innovations in renewable energy sources and their potential to shape a sustainable future.",
      image:
        "https://images.pexels.com/photos/461077/pexels-photo-461077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      type: "ARTICLE",
      category: "ENERGY",
    },
    {
      author: "Aliceafafdfa Johnson",
      title: "Exploring the Future of Renewable Energy",
      content:
        "With the rise of climate change, renewable energy has become a critical focus for industries worldwide. Learn about the innovations in renewable energy sources and their potential to shape a sustainable future.",
      image:
        "https://images.pexels.com/photos/461077/pexels-photo-461077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      type: "ARTICLE",
      category: "ENERGY",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? quotesData.length - 3 : prevIndex - 3
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 >= quotesData.length ? 0 : prevIndex + 3
    );
  };

  // Filter quotes based on the selected category
  const filteredQuotes =
    selectedCategory === "All"
      ? quotesData
      : quotesData.filter((quote) => quote.category === selectedCategory);

  return (
    <section className="bg-white py-24 w-full overflow-x-hidden">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        {/* Heading */}
        <div className="relative w-full text-center lg:text-left lg:w-2/4 mb-12">
          <h2 className="text-5xl font-extrabold text-black leading-[3.25rem] lg:mb-6 mx-auto max-w-max lg:max-w-md lg:mx-0">
            Latest Articles & News
          </h2>
          <p className="text-lg text-gray-600 mt-4 lg:mt-0">
            Stay informed with the latest insights and updates.
          </p>
        </div>

        {/* Categories */}
        <div className="flex justify-center mb-8 space-x-4">
          {["All", "Artificial Intelligence", "TRENDS", "TIPS", "ENERGY"].map(
            (category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700"
                } transition-all duration-300`}
              >
                {category}
              </button>
            )
          )}
        </div>

        <div className="relative flex justify-center items-center mt-12">
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
          >
            Prev
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full lg:max-w-screen-lg">
            {filteredQuotes.slice(currentIndex, currentIndex + 3).map((quote, index) => (
              <div
                key={index}
                className="group relative bg-white shadow-lg rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl transform hover:scale-105"
              >
                <Image
                  src={quote.image}
                  alt="Article image"
                  width={500}
                  height={300}
                  className="w-full h-60 object-cover transition-all duration-300"
                />
                <div className="p-6">
                  <a href="#" className="block">
                    <h4 className="text-2xl font-bold text-gray-800 group-hover:text-[#41382e] transition-colors duration-300">
                      {quote.title}
                    </h4>
                  </a>
                  <p className="text-sm text-gray-600 mt-2 mb-4 line-clamp-3">
                    {quote.content}
                  </p>
                  <hr className="mb-4" />
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Image
                        src="https://tailwindcss.com/img/jonathan.jpg"
                        alt={quote.author}
                        width={48}
                        height={48}
                        className="rounded-full h-12 w-12 mr-4"
                      />
                      <a href="#" className="block">
                        <h4 className="text-lg font-medium text-gray-700 group-hover:text-[#41382e] transition-colors duration-300">
                          {quote.author}
                        </h4>
                      </a>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                        {quote.type}
                      </span>
                      <p className="text-xs text-gray-500 mt-1">
                        {quote.category}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}

export default Quotes;
