import React from "react";
import { motion } from "framer-motion";

const behavioralQuestionsAndAnswers = [
  { q: "Tell me about a time you faced a conflict at work.", a: "I resolved a conflict with a colleague by having an open conversation to understand their perspective and we collaborated on a better solution." },
  { q: "Describe a situation where you had to meet a tight deadline.", a: "I prioritized tasks, eliminated distractions, and collaborated with teammates to deliver the project on time without compromising quality." },
  { q: "Tell me about a time you failed. What did you learn?", a: "I underestimated a project scope. I learned the importance of thorough planning and asking for help when needed." },
  { q: "Give an example of a goal you reached and how you achieved it.", a: "I increased customer satisfaction by implementing feedback loops and resolving issues faster through better tracking systems." },
  { q: "Describe a situation when you had to learn something new quickly.", a: "I learned a new tool in a week by taking online courses and applying the knowledge directly to a live project." },
  { q: "How do you handle stress?", a: "I stay calm, prioritize tasks, and use breaks to recharge, which helps me remain productive under pressure." },
  { q: "Give an example of when you took initiative.", a: "I proposed a new onboarding process that reduced training time by 20% and improved new hire experience." },
  { q: "Describe a time you made a mistake at work.", a: "I once sent an incorrect report. I immediately corrected it, apologized, and implemented checks to prevent future errors." },
  { q: "Tell me about a time you had to persuade someone.", a: "I convinced stakeholders to adopt a new strategy by presenting data-backed benefits and addressing their concerns." },
  { q: "How do you prioritize your tasks?", a: "I use task management tools, assess urgency and impact, and review my priorities daily." },
  { q: "Tell me about a time you worked on a team project.", a: "I collaborated on a marketing campaign, shared responsibilities, and communicated openly to ensure everyone was aligned." },
  { q: "Describe a time you went above and beyond at work.", a: "I volunteered to lead a client presentation on short notice, which helped win the account." },
  { q: "Tell me about a time you dealt with a difficult customer.", a: "I actively listened to their concerns, empathized, and offered a solution that turned their experience around." },
  { q: "Describe a time you disagreed with your manager.", a: "I respectfully shared my viewpoint with supporting data, and we reached a mutually agreeable solution." },
  { q: "How do you handle feedback?", a: "I view feedback as a tool for growth and always apply it to improve my performance." },
  { q: "Tell me about a time you had to multitask.", a: "I balanced multiple projects by organizing tasks, communicating priorities, and staying focused." },
  { q: "Describe a time you showed leadership.", a: "I led a cross-functional team through a successful product launch by keeping everyone aligned and motivated." },
  { q: "Tell me about a project you're proud of.", a: "I created a knowledge base that reduced support tickets by 30%, making our team more efficient." },
  { q: "Describe a time you had to adapt to change.", a: "When our company switched platforms, I quickly learned the new system and helped train others." },
  { q: "Tell me about a time you solved a difficult problem.", a: "I identified the root cause of system downtime and implemented a fix that prevented future outages." },
  { q: "Describe a time you had to make a decision without all the information.", a: "I used available data, consulted experts, and made a decision that turned out to be successful." },
  { q: "Tell me about a time you received criticism.", a: "A colleague pointed out unclear documentation, so I improved my writing and sought more feedback." },
  { q: "Give an example of a time you worked with someone with a different style.", a: "We communicated expectations early and adapted our methods to complement each other." },
  { q: "How do you deal with failure?", a: "I reflect on what went wrong, accept responsibility, and use the lessons to grow stronger." },
  { q: "Describe a time you had to make a quick decision.", a: "During an outage, I chose a rollback plan to restore service quickly while minimizing data loss." },
  { q: "Tell me about a time you managed a conflict between coworkers.", a: "I facilitated a conversation where each person could express concerns, leading to resolution." },
  { q: "Describe a time you went out of your way to help someone.", a: "I stayed late to help a colleague meet a deadline, and they returned the favor later." },
  { q: "Tell me about a time you had to deliver bad news.", a: "I approached it honestly and with empathy, offering support and next steps." },
  { q: "Describe a situation where your communication skills made a difference.", a: "My clear instructions helped prevent a critical misunderstanding during a system migration." },
  { q: "Tell me about a time you set a personal goal at work.", a: "I set a goal to improve my public speaking, joined Toastmasters, and gave 5 successful presentations." },
  { q: "How do you handle repetitive tasks?", a: "I stay focused by setting small goals, and I automate tasks when possible." },
  { q: "Describe a time you had to say no.", a: "I declined an extra project when my plate was full and recommended someone else more available." },
  { q: "Tell me about a time you managed up.", a: "I proactively updated my manager about project risks, which allowed us to adjust the plan early." },
  { q: "How do you stay motivated during routine work?", a: "I set small rewards and reminders of the task’s bigger purpose." },
  { q: "Describe a time you taught someone something new.", a: "I mentored a new team member and created a guide that helped them onboard faster." },
  { q: "Tell me about a time you improved a process.", a: "I streamlined our reporting workflow, reducing time spent by 25%." },
  { q: "Describe a situation when you had to compromise.", a: "I gave up some features to meet a launch date while maintaining core functionality." },
  { q: "Tell me about a time you failed to meet a deadline.", a: "I communicated early with stakeholders and negotiated a short extension to deliver quality work." },
  { q: "Describe a time you had to motivate someone else.", a: "I encouraged a teammate struggling with a task by breaking it down and celebrating small wins." },
  { q: "Tell me about a time you had to deliver a presentation.", a: "I presented a quarterly update to leadership, using visuals to clearly communicate progress." },
  { q: "How do you deal with ambiguity?", a: "I ask clarifying questions, define assumptions, and iterate quickly based on feedback." },
  { q: "Tell me about a time you had to delegate.", a: "I assigned tasks based on team strengths and followed up regularly to ensure success." },
  { q: "Describe a time you had to step out of your comfort zone.", a: "I volunteered to lead a cross-department initiative, which boosted my confidence and skills." },
  { q: "Tell me about a time your work was criticized unfairly.", a: "I remained professional, clarified facts, and sought constructive feedback to clear misunderstandings." },
  { q: "Give an example of a time you took responsibility for a team outcome.", a: "As team lead, I accepted accountability and focused on finding solutions rather than placing blame." },
  { q: "Tell me about a time you had to build trust with a colleague.", a: "I consistently met deadlines, communicated clearly, and followed through on promises." }
];

const BehavioralInterview = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Behavioral Interview Questions & Answers</h1>

      {behavioralQuestionsAndAnswers.map((item, index) => (
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

export default BehavioralInterview;
