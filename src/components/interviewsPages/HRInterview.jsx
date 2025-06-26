import React from "react";
import { motion } from "framer-motion";

const hrQuestionsAndAnswers = [
  { q: "Tell me about yourself.", a: "I'm a professional with a background in [your field], passionate about continuous learning and problem-solving." },
  { q: "What are your strengths?", a: "My strengths include strong communication, adaptability, and a collaborative mindset." },
  { q: "What are your weaknesses?", a: "I tend to be a perfectionist, but I’m learning to balance quality with deadlines." },
  { q: "Why do you want to work here?", a: "I admire your company’s mission and believe my values align with your team culture." },
  { q: "Why should we hire you?", a: "I bring the skills, experience, and passion to contribute meaningfully and grow with the company." },
  { q: "Where do you see yourself in 5 years?", a: "In a leadership role where I can mentor others and continue growing professionally." },
  { q: "Why did you leave your last job?", a: "I’m looking for a new challenge and more opportunities to grow." },
  { q: "Describe a challenge you faced and how you handled it.", a: "I once managed a project under tight deadlines by prioritizing tasks and keeping open communication with the team." },
  { q: "How do you handle stress?", a: "I stay organized, take breaks to reset, and focus on solutions." },
  { q: "Are you a team player?", a: "Absolutely. I believe collaboration leads to better outcomes." },
  { q: "What motivates you?", a: "Achieving goals and contributing to meaningful work motivates me daily." },
  { q: "How do you handle criticism?", a: "I welcome constructive feedback and use it to improve my performance." },
  { q: "Tell me about a time you failed.", a: "I underestimated a project timeline, but I learned to build in buffers and communicate better." },
  { q: "What is your leadership style?", a: "Supportive and communicative—empowering others while providing guidance." },
  { q: "How do you prioritize your work?", a: "I use to-do lists, assess deadlines, and regularly review priorities." },
  { q: "What do you know about our company?", a: "You’re known for innovation and a strong team culture, which I find exciting." },
  { q: "What do you like to do outside of work?", a: "I enjoy reading, traveling, and staying active with hobbies like hiking." },
  { q: "Are you willing to relocate?", a: "Yes, if it’s the right opportunity for growth and alignment." },
  { q: "What is your greatest achievement?", a: "Leading a successful project that improved efficiency by 30%." },
  { q: "Do you prefer working alone or in a team?", a: "I enjoy both—independent work for focus, and teamwork for collaboration." },
  { q: "What are your salary expectations?", a: "I’m open to a fair offer based on market standards and my experience." },
  { q: "How do you define success?", a: "Achieving goals while learning and making a positive impact." },
  { q: "What would your previous boss say about you?", a: "They’d describe me as reliable, proactive, and solution-oriented." },
  { q: "Are you overqualified for this role?", a: "I see this as the right challenge and an opportunity to add value." },
  { q: "What are your career goals?", a: "To continually grow and take on leadership roles that create impact." },
  { q: "How do you stay organized?", a: "I use digital tools and regular reviews to stay on top of tasks." },
  { q: "Describe your work ethic.", a: "I’m dedicated, punctual, and always give my best effort." },
  { q: "What do you expect from a manager?", a: "Clear communication, support, and mutual respect." },
  { q: "Describe your ideal company culture.", a: "Inclusive, innovative, and growth-oriented." },
  { q: "What do you do if you disagree with a colleague?", a: "I discuss it respectfully and try to understand their perspective." },
  { q: "How do you handle tight deadlines?", a: "I break tasks into smaller pieces, prioritize, and focus on execution." },
  { q: "What makes you unique?", a: "My combination of technical knowledge and interpersonal skills." },
  { q: "Have you ever had a conflict with a supervisor?", a: "Yes, and I resolved it by addressing concerns calmly and professionally." },
  { q: "What is your availability?", a: "I’m available to start [insert time frame], depending on notice period." },
  { q: "How do you handle multitasking?", a: "I prioritize effectively and use tools to track progress." },
  { q: "How do you keep yourself motivated?", a: "I set goals, track progress, and celebrate small wins." },
  { q: "What are your hobbies?", a: "I enjoy creative writing, fitness, and volunteering." },
  { q: "How do you prepare for a big presentation?", a: "I research, rehearse, and anticipate questions." },
  { q: "How do you deal with failure?", a: "I reflect on it, learn from it, and apply the lessons going forward." },
  { q: "Do you take initiative?", a: "Yes, I often propose solutions and volunteer for new projects." },
  { q: "What do you consider your biggest mistake?", a: "Taking on too much alone—I’ve since learned to delegate." },
  { q: "How do you balance work and life?", a: "I set boundaries and prioritize self-care along with goals." },
  { q: "What kind of work environment do you prefer?", a: "A collaborative, supportive environment with room to grow." },
  { q: "Can you work under pressure?", a: "Yes, I stay calm, focus on solutions, and meet deadlines." },
  { q: "How do you build relationships with coworkers?", a: "Through open communication, respect, and collaboration." },
  { q: "What do you want in your next job?", a: "Growth opportunities, meaningful work, and a great team culture." },
  { q: "What are you passionate about?", a: "Creating value, learning new skills, and helping others grow." },
  { q: "What will you do in your first 30 days here?", a: "Understand the team and processes, and start contributing where I can." }
];

const HRInterview = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">HR Interview Questions & Answers</h1>

      {hrQuestionsAndAnswers.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.05,
            ease: "easeOut"
          }}
          className="mb-6 p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-all duration-300"
        >
          <h2 className="text-xl font-semibold mb-3">Q{index + 1}: {item.q}</h2>
          <p className="text-gray-700">A: {item.a}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default HRInterview;
