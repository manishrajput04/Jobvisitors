import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-center mb-8 text-orange-700"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About JobVisitors
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-center text-lg md:text-xl max-w-3xl mx-auto mb-12 text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Empowering job seekers and recruiters with seamless tools, resources, and opportunities to connect, grow, and succeed.
        </motion.p>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Our Mission",
              text: "To bridge the gap between talent and opportunity by offering a platform that simplifies the job search and recruitment process.",
              icon: "💡",
            },
            {
              title: "What We Do",
              text: "We provide a user-friendly platform for job seekers and employers, including curated content, interview prep, and advanced job matching.",
              icon: "🚀",
            },
            {
              title: "Why Choose Us",
              text: "We're focused on innovation, integrity, and user success. Our platform is fast, secure, and tailored to help you find the right fit quickly.",
              icon: "🏆",
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-xl rounded-2xl p-6 text-center hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.2, duration: 0.6 }}
            >
              <div className="text-4xl mb-4">{card.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-orange-600">{card.title}</h3>
              <p className="text-gray-600">{card.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-orange-700">Join the JobVisitors Journey</h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-6">
            Whether you're launching your career or scaling your company, JobVisitors is here to support your growth every step of the way.
          </p>
          <a
            href="https://www.instagram.com/jobvisitors"
            className="inline-block bg-orange-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-orange-700 transition"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
