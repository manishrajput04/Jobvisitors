import React from "react";
import { Search } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

const HeroSection = ({ searchText, setSearchText, onSearch }) => {
  return (
    <section className="bg-gradient-to-r from-purple-700 to-purple-700 text-orange-300 py-10 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Typing Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4">
          <Typewriter
            words={["Over 10,000+ jobs to apply"]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </h1>

        {/* Subtext */}
        <p className="text-sm sm:text-base text-gray-200 mb-10">
          Your Next Big Career Move Starts Right Here – Explore the Best Job Opportunities and <br className="hidden sm:block" />
          Take the First Step Toward Your Future!
        </p>

        {/* Search Input */}
        <div className="flex flex-col sm:flex-row items-center bg-white rounded-md p-2 max-w-xl mx-auto shadow-md">
          <div className="flex items-center w-full px-3 py-2 border border-gray-300 rounded-md">
            <Search className="text-gray-500 mr-2" size={18} />
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search for jobs"
              className="w-full outline-none text-sm text-gray-800"
            />
          </div>

          <button 
            onClick={onSearch}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 mt-3 sm:mt-0 sm:ml-2 w-full sm:w-auto"
          >
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
