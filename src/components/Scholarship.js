'use client';

import React, { useState } from 'react';
import { FaGraduationCap, FaClock, FaSearch } from 'react-icons/fa';

const scholarshipData = [
  {
    title: "Chevening Scholarship",
    description: "The Chevening Scholarship offers fully-funded master's degree opportunities in the UK to outstanding individuals with leadership potential from around the world.",
    deadline: "7 November 2024",
    link: "#",
    country: "UK"
  },
  {
    title: "Stipendium Hungaricum",
    description: "This scholarship provides international students the opportunity to pursue full-time higher education in Hungary with financial support covering tuition fees and accommodation.",
    deadline: "15 January 2025",
    link: "#",
    country: "Hungary"
  },
  {
    title: "Australia Awards Scholarship (AAS)",
    description: "The Australia Awards Scholarship aims to provide long-term study and career opportunities for students from developing countries in the Indo-Pacific region.",
    deadline: "30 April 2025",
    link: "#",
    country: "Australia"
  },
  {
    title: "Fulbright Scholarship",
    description: "The Fulbright Program provides grants for individually designed research projects, graduate study, and teaching worldwide.",
    deadline: "12 February 2025",
    link: "#",
    country: "USA"
  },
  {
    title: "DAAD Scholarship",
    description: "The DAAD Scholarship provides opportunities for postgraduate study and research in Germany for international students.",
    deadline: "31 October 2024",
    link: "#",
    country: "Germany"
  },
  {
    title: "Eiffel Excellence Scholarship",
    description: "This scholarship offers financial support to international students for studying in French higher education institutions.",
    deadline: "7 January 2025",
    link: "#",
    country: "France"
  },
  {
    title: "Swiss Government Excellence Scholarships",
    description: "The Swiss Government offers scholarships to promote international exchange and research cooperation between Switzerland and over 180 countries.",
    deadline: "15 December 2024",
    link: "#",
    country: "Switzerland"
  },
  {
    title: "Endeavour Postgraduate Scholarship",
    description: "This scholarship supports international students to undertake postgraduate qualifications at Australian universities.",
    deadline: "20 March 2025",
    link: "#",
    country: "Australia"
  }
  // Add more scholarship objects as needed
];

function Scholarship() {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter scholarships based on the search query
  const filteredScholarships = scholarshipData.filter((scholarship) =>
    scholarship.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    scholarship.country.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Show only the first 6 items if there is no search query
  const displayedScholarships = searchQuery ? filteredScholarships : filteredScholarships.slice(0, 6);

  return (
    <section className="w-full min-h-screen h-[100vh] bg-[url('https://img.freepik.com/free-photo/stack-diplomas-antique-bookshelf-background-generated-by-ai_188544-39089.jpg')] bg-cover bg-center bg-no-repeat shadow-lg py-8 text-black">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-5xl font-bold mb-2 text-center">Scholarships</h2>
        <p className="text-xl font-bold mb-4 text-center">Explore top scholarship opportunities for study and professional growth around the world!</p>

        {/* Search Input */}
        <div className="flex items-center mb-8 max-w-md mx-auto lg:mx-0 lg:max-w-full">
          <div className="relative w-full lg:w-1/3">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by scholarship name or country..."
              className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 bg-white text-gray-800"
            />
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {displayedScholarships.map((scholarship, index) => (
            <div 
              key={index} 
              className="bg-white text-gray-800 shadow-lg p-8 rounded-lg relative overflow-hidden transition-transform transform hover:-translate-y-4 hover:shadow-2xl"
            >
              <div className="absolute top-0 left-0 h-2 w-full bg-gradient-to-r from-[#3A312A] to-[#ac8a71]"></div>
              <FaGraduationCap className="text-[#3A312A] text-4xl mb-4" />
              <h3 className="text-2xl font-bold mb-4">{scholarship.title}</h3>
              <p className="text-gray-600 mb-4">{scholarship.description}</p>
              <div className="flex items-center justify-between mt-4">
                <p className="text-gray-500 flex items-center">
                  <FaClock className="mr-2" /> {scholarship.deadline}
                </p>
                <a href={scholarship.link} className="text-blue-600 font-bold hover:underline">Learn more</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Scholarship;
