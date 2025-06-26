import React from "react";
import { motion } from "framer-motion";

const questionsAndAnswers = [
  // Python Questions
  { q: "What is Python?", a: "Python is a high-level, interpreted programming language." },
  { q: "What are Python's key features?", a: "Python features include dynamic typing, automatic memory management, and more." },
  { q: "What are Python lists and tuples?", a: "Lists are mutable, ordered collections. Tuples are similar but immutable." },
  { q: "What is the difference between 'is' and '==' in Python?", a: "'==' checks value equality, while 'is' checks object identity." },
  { q: "What is a Python decorator?", a: "A decorator is a function that modifies the behavior of another function or class." },

  // DSA Questions
  { q: "What is a data structure?", a: "A data structure is a way of organizing and storing data." },
  { q: "What is the difference between an array and a linked list?", a: "Arrays have fixed size, whereas linked lists are dynamic." },
  { q: "What is a stack?", a: "A stack is a linear data structure that follows the LIFO principle." },
  { q: "What is a queue?", a: "A queue is a linear data structure that follows the FIFO principle." },
  { q: "What is Big O Notation?", a: "Big O notation describes the performance or complexity of an algorithm." },

  // Java Questions
  { q: "What is Java?", a: "Java is a high-level, object-oriented programming language." },
  { q: "What is the JVM?", a: "JVM (Java Virtual Machine) is responsible for running Java bytecode." },
  { q: "What is inheritance in Java?", a: "Inheritance is a mechanism where one class acquires the properties of another class." },
  { q: "What is the difference between '==' and '.equals()' in Java?", a: "'==' compares object references, while '.equals()' compares the content of objects." },

  // React Questions
  { q: "What is React?", a: "React is a JavaScript library for building user interfaces." },
  { q: "What is JSX?", a: "JSX is a syntax extension for JavaScript that looks similar to XML/HTML." },
  { q: "What is a functional component in React?", a: "A functional component is a JavaScript function that returns JSX." },

  // HTML Questions
  { q: "What is HTML?", a: "HTML (HyperText Markup Language) is the standard language for creating web pages." },
  { q: "What is the difference between <div> and <span>?", a: "<div> is a block-level element, while <span> is an inline element." },

  // CSS Questions
  { q: "What is CSS?", a: "CSS (Cascading Style Sheets) is used to style and layout web pages." },
  { q: "What is Flexbox?", a: "Flexbox is a layout model that allows items to align and distribute space within a container." },

  // JavaScript Questions
  { q: "What is JavaScript?", a: "JavaScript is a programming language used to make web pages interactive." },
  { q: "What are closures in JavaScript?", a: "A closure is a function that remembers its lexical scope even when the function is executed outside that scope." },

  // SQL Questions
  { q: "What is SQL?", a: "SQL (Structured Query Language) is used to manage data in relational databases." },
  { q: "What is a primary key in SQL?", a: "A primary key is a unique identifier for a record in a database table." },

  // C Questions
  { q: "What is the difference between C and C++?", a: "C is procedural, while C++ supports both procedural and object-oriented programming." },
  { q: "What is a pointer in C?", a: "A pointer is a variable that stores the address of another variable." },

  // C++ Questions
  { q: "What is the difference between C and C++?", a: "C is procedural, while C++ supports both procedural and object-oriented programming paradigms." },
  { q: "What are constructors in C++?", a: "A constructor is a special class function that initializes objects." }
];

const TechnicalInterview = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Technical Interview Questions & Answers</h1>

      {questionsAndAnswers.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: index * 0.1,
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

export default TechnicalInterview;
