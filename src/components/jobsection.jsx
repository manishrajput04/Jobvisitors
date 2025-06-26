import React, { forwardRef, useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import jobs from "./jobsData";
import { Link } from "react-router-dom";

// Utility to highlight matching text
function highlightText(text, searchText) {
  if (!searchText) return text;
  const parts = text.split(new RegExp(`(${searchText})`, "gi"));
  return parts.map((part, i) =>
    part.toLowerCase() === searchText.toLowerCase() ? (
      <mark key={i} className="bg-yellow-300 rounded px-1">{part}</mark>
    ) : (
      part
    )
  );
}

const Jobsection = forwardRef(({ searchText, searchClicked }, ref) => {
  const [filter, setFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(8);
  const categories = ["All", ...new Set(jobs.map((job) => job.category))];

  const [filteredJobs, setFilteredJobs] = useState(jobs);

  useEffect(() => {
    let tempJobs = filter === "All" ? jobs : jobs.filter((job) => job.category === filter);

    if (searchClicked && searchText.trim() !== "") {
      const lowerSearch = searchText.toLowerCase();

      tempJobs = tempJobs.filter((job) => {
        const matchTitle = job.title?.toLowerCase().includes(lowerSearch);
        const matchCompany = job.company?.toLowerCase().includes(lowerSearch);
        const matchLocation = job.location?.toLowerCase().includes(lowerSearch);
        const matchType = job.type?.toLowerCase().includes(lowerSearch);
        const matchDuration = job.duration?.toLowerCase().includes(lowerSearch);
        const matchCategory = job.category?.toLowerCase().includes(lowerSearch);
        const matchResponsibilities = job.responsibilities?.some(res =>
          res.toLowerCase().includes(lowerSearch)
        );

        return (
          matchTitle ||
          matchCompany ||
          matchLocation ||
          matchType ||
          matchDuration ||
          matchCategory ||
          matchResponsibilities
        );
      });
    }

    setFilteredJobs(tempJobs);
  }, [filter, searchText, searchClicked]);

  const displayedJobs = filteredJobs.slice(0, visibleCount);

  const handleViewMore = () => setVisibleCount(prev => prev + 8);
  const handleViewLess = () => setVisibleCount(8);

  return (
    <div ref={ref} id="jobs" className="bg-orange-200 py-10 px-4">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">Recent Jobs</h2>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setFilter(cat);
              setVisibleCount(8);
            }}
            className={`px-4 py-1 rounded-full border text-sm font-medium transition ${
              filter === cat
                ? "bg-orange-500 text-white"
                : "bg-white text-gray-800 hover:bg-orange-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Jobs Grid */}
      {displayedJobs.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          <AnimatePresence>
            {displayedJobs.map((job, index) => (
              <motion.a
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                href={job.applyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg shadow-md p-4 w-full max-w-xs transition transform hover:scale-105 cursor-pointer"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {highlightText(job.title, searchText)}
                </h3>
                <div className="flex items-center space-x-2 text-sm text-gray-700 font-medium mb-2">
                  {job.logo && (
                    <img
                      src={job.logo}
                      alt={job.company}
                      className="h-4 w-4 object-contain transition-transform duration-200 hover:scale-125"
                    />
                  )}
                  <span>{highlightText(job.company, searchText)}</span>
                </div>
                <div className="text-xs text-gray-500 mb-2 space-x-2">
                  <span>{highlightText(job.type, searchText)}</span>
                  <span>•</span>
                  <span>{highlightText(job.location, searchText)}</span>
                  {job.duration && (
                    <>
                      <span>•</span>
                      <span>{highlightText(job.duration, searchText)}</span>
                    </>
                  )}
                  {job.experience && (
                    <>
                      <span>•</span>
                      <span>{highlightText(job.experience, searchText)}</span>
                    </>
                  )}
                </div>
                <div className="mb-3">
                  <p className="text-sm font-semibold text-gray-800">Key Responsibilities:</p>
                  <ul className="list-disc list-inside text-xs text-gray-600">
                    {job.responsibilities.map((task, i) => (
                      <li key={i}>{highlightText(task, searchText)}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm border px-3 py-1 rounded-md bg-white text-gray-700">
                    More Details
                  </span>
                  <Link 
                    to={`/jobs/${job.title.replace(/\s+/g, "-").toLowerCase()}`}
                    className="text-sm bg-orange-600 text-white px-3 py-1 rounded-md"
                  >
                    Apply Now
                  </Link>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </div>
      ) : (
        <motion.div 
          className="text-center text-gray-700 font-semibold mt-10 flex flex-col items-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-5xl mb-4"
          >
            🔍
          </motion.div>
          <p className="text-2xl">No Record Found</p>
        </motion.div>
      )}

      {/* View More / Less */}
      {filteredJobs.length > 8 && (
        <div className="mt-8 text-center">
          {visibleCount < filteredJobs.length ? (
            <button onClick={handleViewMore} className="text-orange-700 font-medium hover:underline">
              View More
            </button>
          ) : (
            <button onClick={handleViewLess} className="text-orange-700 font-medium hover:underline">
              View Less
            </button>
          )}
        </div>
      )}
    </div>
  );
});

export default Jobsection;
