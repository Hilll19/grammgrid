'use client';

import React, { useState } from 'react';
import { FaAward } from 'react-icons/fa';

const Sertificate = () => {
  // State to toggle the details for each certification
  const [showDetails, setShowDetails] = useState({
    TOEFL: false,
    IELTS: false,
    Cambridge: false,
  });

  const toggleDetails = (certification) => {
    setShowDetails((prevState) => ({
      ...prevState,
      [certification]: !prevState[certification],
    }));
  };

  return (
    <section className="w-full h-[100vh] py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12"> English Certifications</h2>
        
        {/* Grid layout instead of horizontal scrolling */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ml-28">
          
          {/* TOEFL Certification */}
          <div className="transform transition-transform hover:scale-105">
            <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-blue-500 to-blue-300 text-white rounded-full h-[300px] w-[300px] shadow-lg hover:shadow-xl hover:cursor-pointer relative">
              <FaAward className="text-6xl mb-4" />
              <h3 className="text-2xl font-semibold mb-2 text-center">TOEFL</h3>
              <p className="text-center text-sm">Demonstrate your English proficiency for academics and careers with the TOEFL exam.</p>
              <button
                onClick={() => toggleDetails('TOEFL')}
                className="absolute bottom-4 bg-white text-blue-600 font-bold px-4 py-2 rounded-full hover:bg-gray-200 transition-all duration-300"
              >
                {showDetails.TOEFL ? 'Hide Details' : 'Show Details'}
              </button>
            </div>
            
            {/* Detail Card */}
            {showDetails.TOEFL && (
              <div className="mt-4 p-4 w-[300px] h-[300px] bg-white border rounded-lg shadow-md text-gray-800 mx-auto">
                <p>TOEFL measures your English language proficiency and is widely accepted for academic and professional applications worldwide. It tests reading, writing, listening, and speaking skills in English.</p>
              </div>
            )}
          </div>

          {/* IELTS Certification */}
          <div className="transform transition-transform hover:scale-105">
            <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-green-500 to-green-300 text-white rounded-full h-[300px] w-[300px] shadow-lg hover:shadow-xl hover:cursor-pointer relative">
              <FaAward className="text-6xl mb-4" />
              <h3 className="text-2xl font-semibold mb-2 text-center">IELTS</h3>
              <p className="text-center text-sm">Prove your English language skills for global study and work with IELTS.</p>
              <button
                onClick={() => toggleDetails('IELTS')}
                className="absolute bottom-4 bg-white text-green-600 font-bold px-4 py-2 rounded-full hover:bg-gray-200 transition-all duration-300"
              >
                {showDetails.IELTS ? 'Hide Details' : 'Show Details'}
              </button>
            </div>
            
            
            {/* Detail Card */}
            {showDetails.IELTS && (
              <div className="mt-4 p-4 w-[300px] h-[300px] bg-white border rounded-lg shadow-md text-gray-800 mx-auto">
                <p>IELTS is recognized worldwide for both academic and professional purposes, testing your English proficiency in reading, writing, listening, and speaking. It is highly valued for migration, work, and study applications.</p>
              </div>
            )}
          </div>

          {/* Cambridge Certification */}
          <div className="transform transition-transform hover:scale-105">
            <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-purple-500 to-purple-300 text-white rounded-full h-[300px] w-[300px] shadow-lg hover:shadow-xl hover:cursor-pointer relative">
              <FaAward className="text-6xl mb-4" />
              <h3 className="text-2xl font-semibold mb-2 text-center">Cambridge</h3>
              <p className="text-center text-sm">Achieve globally recognized certification for English proficiency.</p>
              <button
                onClick={() => toggleDetails('Cambridge')}
                className="absolute bottom-4 bg-white text-purple-600 font-bold px-4 py-2 rounded-full hover:bg-gray-200 transition-all duration-300"
              >
                {showDetails.Cambridge ? 'Hide Details' : 'Show Details'}
              </button>
            </div>
            
            
            {/* Detail Card */}
            {showDetails.Cambridge && (
              <div className="mt-4 p-4 w-[300px] h-[300px] bg-white border rounded-lg shadow-md text-gray-800 mx-auto">
                <p>The Cambridge English certifications are respected by universities and employers globally and come with lifetime validity. They offer a range of levels to suit different proficiencies and purposes.</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Sertificate;
