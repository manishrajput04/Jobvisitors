import React, { useRef, forwardRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Interview = forwardRef((props, ref) => {
  const sliderRef = useRef();
  const navigate = useNavigate();

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -260, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 260, behavior: "smooth" });
  };

  const courses = [
    {
      id: 1,
      duration: "6 weeks",
      title: "Technical Coding Questions",
      rating: 4.1,
      learners: "1500+",
      img: "/assets/codinglogo.jpg",
    },
    {
      id: 2,
      duration: "8 weeks",
      title: "Technical Interview Questions",
      rating: 4.1,
      learners: "1100+",
      img: "/assets/technicallogo.jpeg",
    },
    {
      id: 3,
      duration: "6 weeks",
      title: "HR interview Questions",
      rating: 4.5,
      learners: "1000+",
      img: "/assets/HRlogo.png",
    },
    {
      id: 4,
      duration: "5 weeks",
      title: "Behavioral Interview Questions",
      rating: 4.6,
      learners: "1200+",
      img: "/assets/behavioralquestions.webp",
    },
  ];

  return (
    <div ref={ref} className="bg-blue-50 flex flex-col items-center p-6 overflow-hidden">
      <h1 className="text-2xl font-bold mb-2 text-center">Popular Interview Questions</h1>
      <p className="text-gray-600 mb-8 text-center">Fastest way to prepare for your interview</p>

      <div className="relative w-full max-w-6xl">
        <div
          ref={sliderRef}
          className="flex overflow-x-auto no-scrollbar space-x-8 px-2"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {courses.map((course) => (
            <div
              key={course.id}
              className="flex-none w-64 bg-white p-5 rounded-2xl shadow-md hover:shadow-lg transition-all scroll-snap-align-start"
            >
              <img src={course.img} alt={course.title} className="h-20 mb-4 mx-auto" />
              <p className="text-gray-500 text-sm">{course.duration}</p>
              <h2 className="font-semibold text-md text-center mb-2">{course.title}</h2>
              <div className="flex items-center justify-center text-yellow-500 mb-2">
                <span>⭐ {course.rating}</span>
              </div>
              <p className="text-gray-600 text-center mb-4">{course.learners} learners</p>
              <button
                className="text-blue-600 font-medium hover:underline block mx-auto"
                onClick={() => {
                  switch (course.id) {
                    case 1:
                      navigate("/interviews/technical-coding");
                      break;
                    case 2:
                      navigate("/interviews/technical");
                      break;
                    case 3:
                      navigate("/interviews/hr");
                      break;
                    case 4:
                      navigate("/interviews/behavioral");
                      break;
                    default:
                      break;
                  }
                }}
              >
                Know more →
              </button>
            </div>
          ))}
        </div>

        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
          onClick={scrollLeft}
        >
          ⬅️
        </button>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
          onClick={scrollRight}
        >
          ➡️
        </button>
      </div>
    </div>
  );
});

export default Interview;
