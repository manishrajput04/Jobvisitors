import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

export default function PayoneerJobDescription() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative max-w-3xl mx-auto p-6 space-y-6 text-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-green-100 text-green-800 w-max px-3 py-1 rounded text-sm font-medium"
      >
        Full Time
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold"
      >
        Exciting Payoneer 2025 Hiring: Software Engineer Intern Opportunity
      </motion.h1>

      <p className="text-sm text-gray-500">by visitor • April 3, 2025 • 0 comments</p>

      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        src="/src/assets/payoneer-logo.png"
        alt="Payoneer Logo"
        className="w-32 mx-auto"
      />

      <div className="space-y-2 text-base">
        <p><strong>Role:</strong> Software Engineer Intern</p>
        <p><strong>Batch Eligible:</strong> 2025 & 2026 graduates</p>
        <p><strong>Salary:</strong> 50k or more</p>
        <p><strong>Location:</strong> Gurugram</p>
        <p><strong>Duration:</strong> 3-6 months</p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold mt-6">Job Description</h2>

        <h3 className="text-xl font-medium">Who are we?</h3>
        <p>
          Payoneer's mission is to enable businesses of all sizes from anywhere in the world to access the rising, global economy by enabling them to transact globally as easily as they do locally.
        </p>
        <p>
          Life at Payoneer is a global community, where you'll work with colleagues all over the world, serving small- and medium-sized business customers and partners in over 190 markets.
        </p>

        <h3 className="text-xl font-medium">Responsibilities:</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Work closely with our development team to maintain and enhance web-based applications.</li>
          <li>Assist in the development of new features and improvements.</li>
          <li>Collaborate with designers and other stakeholders.</li>
          <li>Write clean, efficient, and well-documented code.</li>
          <li>Participate in code reviews and follow coding standards.</li>
          <li>Work on both front-end and back-end tasks.</li>
          <li>Test and debug code to ensure error-free applications.</li>
          <li>Stay up-to-date with latest trends and tech in web development.</li>
        </ul>

        <h3 className="text-xl font-medium">Requirements:</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Currently pursuing a degree in Computer Science or related field.</li>
          <li>Familiarity with HTML, CSS, JavaScript, Python/Java/PHP.</li>
          <li>Understanding of MySQL, PostgreSQL, or MongoDB.</li>
          <li>Experience with Git and version control systems.</li>
          <li>Strong problem-solving and teamwork skills.</li>
          <li>Ability to work independently on multiple tasks.</li>
        </ul>

        <h3 className="text-xl font-medium">Skills required:</h3>
        <p>
          HTML, CSS, JavaScript, Python/Java/PHP, OOPS, React, Angular, Vue, MySQL, PostgreSQL, MongoDB
        </p>

        <p>
          If you're self-motivated and passionate about technology, this is a great opportunity to work with a talented team and make a meaningful impact.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="space-y-4 text-center"
      >
        <button className="bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700 transition-transform duration-300 transform hover:scale-105">
          Apply
        </button>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2">
          <a
            href="#"
            className="bg-orange-100 text-orange-800 font-medium px-5 py-2 rounded hover:bg-orange-200 transition-all duration-300"
          >
            Join our Telegram Channel
          </a>
          <a
            href="#"
            className="bg-orange-100 text-orange-800 font-medium px-5 py-2 rounded hover:bg-orange-200 transition-all duration-300"
          >
            Join our Whatsapp Group
          </a>
        </div>
      </motion.div>

      <AnimatePresence>
        {showTopBtn && (
          <motion.button
            key="topBtn"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 z-50 bg-orange-600 hover:bg-orange-700 text-white p-3 rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
          >
            <ChevronUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
