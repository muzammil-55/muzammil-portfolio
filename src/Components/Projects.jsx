import React, { useState, useRef } from 'react';
import { Folder, ChevronDown, ChevronUp } from 'lucide-react';

const Projects = () => {
  const projects = [
     {
      title: "Personal-Portfolio",
      date: "August 2025",
      tech: "React, Tailwind",
      desc: "'A dynamic, single-page application that serves as my personal portfolio. Built with React and styled with Tailwind CSS, this project showcases my skills in front-end development, responsive design, and component-based architecture. It effectively highlights my projects, skills, and professional experience in a clean and accessible format.",
      githubUrl: "https://github.com/muzammil-55/muzammil-portfolio",
      liveUrl: ""
    },
    {
      title: "Predictive Analysis on Fraud Detection",
      date: "October 2023",
      tech: "Python (Pandas, NumPy), Random Forest Classifier, Machine Learning",
      desc: "Built a predictive model for fraud detection using historical transaction data, emphasizing data preprocessing, feature engineering, and optimization, integrated in real-time to minimize false positives, evaluated through key metrics.",
      githubUrl: "https://github.com/muzammil-55/Predictive-Analysis-on-Fraud-Detection",
      liveUrl: ""
    },
    {
      title: "AI Strategies for Identifying & Combating Fake News",
      date: "June 2024",
      tech: "Python, Flask, HTML, CSS, TF-IDF, Passive-Aggressive Classifier",
      desc: "Created a fake news detection system using ML & NLP with Passive-Aggressive classifier and TF-IDF vectorization, handled data collection, preprocessing, feature extraction, model training, and evaluation.",
      githubUrl: "https://github.com/muzammil-55/AI-Strategies-for-Identifying-and-Combating-Fake-News",
      liveUrl: ""
    },
    {
      title: "QR Generator",
      date: "February 2023",
      tech: "HTML, CSS, JavaScript, QR API",
      desc: "Built a dynamic web app for customizable QR code generation with a user-friendly interface, integrated QR API for URLs, contact details, etc.",
      githubUrl: "https://github.com/muzammil-55/QR-Generator",
      liveUrl: ""
    },
    {
      title: "Amazon Clone",
      date: "July 2025",
      tech: "HTML, CSS",
      desc: "A pixel-perfect clone of the Amazon homepage, demonstrating advanced layout techniques with HTML and CSS. The project focuses on replicating the complex multi-column structure, navigation bar, and responsive design of a major e-commerce site to showcase front-end development skills.",
      githubUrl: "https://github.com/muzammil-55/AmazonClone",
      liveUrl: ""
    },
     {
      title: "Instagram Login Page Clone",
      date: "July 2025",
      tech: "HTML, CSS",
      desc: "A meticulous recreation of the Instagram login page, focusing on precise styling and layout. This project demonstrates skills in building clean, centered forms, implementing custom buttons and inputs, and creating a responsive design that adapts flawlessly to different screen sizes.'",
      githubUrl: "https://github.com/muzammil-55/Instagram-login-clone",
      liveUrl: ""
    },
    {
      title: "Tic-Tac-Toe",
      date: "August 2025",
      tech: "HTML, CSS, JS",
      desc: "An engaging and fully functional Tic-Tac-Toe game. The project demonstrates a clear understanding of game state management, conditional logic to check for a winner, and dynamic rendering of the game board. It features a responsive design for a smooth experience on all devices.",
      githubUrl: "https://github.com/muzammil-55/TicTacToe",
      liveUrl: ""
    },
      {
      title: "Stone, Paper, Scissors",
      date: "August 2025",
      tech: "HTML, CSS, JS",
      desc: "A classic rock-paper-scissors game implemented to showcase fundamental JavaScript logic and DOM manipulation. The application allows a user to play against a computer opponent, tracks the score, and provides real-time updates on who won each round.",
      githubUrl: "https://github.com/muzammil-55/StonePaperScissors",
      liveUrl: ""
    },
    {
      title: "Netflix Clone",
      date: "July 2025",
      tech: "HTML, CSS",
      desc: "A front-end clone of the Netflix landing page, built to showcase expertise in creating a visually appealing and modern user interface. This project highlights proficiency in CSS Flexbox, custom fonts, and styling for a responsive, cinematic layout.",
      githubUrl: "https://github.com/muzammil-55/Netflix-Clone",
      liveUrl: ""
    },
   
    {
      title: "Receipt Generator",
      date: "August 2025",
      tech: "HTML, CSS, JS",
      desc: "Built a business receipt generator, where item name, quantity, price, date are printed on the receipt seamlessly.",
      githubUrl: "https://github.com/muzammil-55/RECEIPT-GENERATOR",
      liveUrl: ""
    },
    {
      title: "Business Name Generator",
      date: "July 2025",
      tech: "HTML, CSS, JS",
      desc: "Built a business name generator, where unique names for small scale businesses are generated.",
      githubUrl: "https://github.com/muzammil-55/BusinessNameGenerator",
      liveUrl: ""
    },
    
    {
    title: 'BMI Calculator',
    date: 'May 2025', 
    tech: "HTML, CSS, JavaScript",
    
    desc: 'A simple and interactive BMI calculator that allows users to input their height and weight to quickly calculate their Body Mass Index. The application provides instant feedback and classifies the result into categories like underweight, normal, overweight, etc.',
   githubUrl: "https://github.com/muzammil-55/bmi-calculator-python",
      liveUrl: ""
   
    },


  
    {
      title: "To-Do List App",
      date: "August 2025",
      tech: "React, Tailwind CSS",
      desc: "A modern and responsive to-do list application built with React and styled with Tailwind CSS. It allows users to add, delete, and mark tasks as complete. The use of state management in React ensures the UI is always in sync with the data, providing a seamless user experience.",
      githubUrl: "https://github.com/muzammil-55/itask-react-tailwind",
      liveUrl: ""
    },
    {
      title: "Faulty Calculator",
      date: "July 2025",
      tech: "HTML, CSS, JS",
      desc: "A unique web-based calculator with a fun twist: it intentionally produces incorrect results based on a set of predetermined rules. This project was built to test and showcase debugging skills and a creative approach to problem-solving within a user interface.",
      githubUrl: "https://github.com/muzammil-55/FaultyCalculator",
      liveUrl: ""
    },
    
   



  ];

  const [showAll, setShowAll] = useState(false);
  const projectsRef = useRef(null);

  const initialProjectsToShow = 6;
  const projectsToDisplay = showAll ? projects : projects.slice(0, initialProjectsToShow);

  const handleToggleProjects = () => {
    
    if (showAll && projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    setShowAll(!showAll);
  };
  
  return (
    <section ref={projectsRef} id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        {/* Title for the projects section */}
        <h2 className="text-4xl font-extrabold text-blue-600 mb-12 animate-fade-in-down">
          <Folder size={36} className="inline-block mr-4 text-blue-500" />
          Projects
        </h2>
        
        {/* Grid layout for project cards with responsiveness */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 ease-in-out">
          {projectsToDisplay.map((project, index) => (
            <div 
              key={index} 
              className="p-6 bg-white rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 text-left border border-gray-200"
            >
              <h3 className="font-bold text-xl text-blue-600 mb-2">{project.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{project.date}</p>
              <p className="text-sm font-bold text-gray-700 mt-4">Technologies:</p>
              <p className="text-gray-600 text-sm">{project.tech}</p>
              <p className="text-sm font-bold text-gray-700 mt-4">Description:</p>
              <p className="text-gray-600 text-sm">{project.desc}</p>
              {/* Buttons for GitHub and Live Demo links */}
              <div className="flex justify-start space-x-4 mt-6">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 text-sm font-semibold text-white bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition-colors duration-300"
                >
                  GitHub
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* See More/See Less button */}
        {projects.length > initialProjectsToShow && (
          <div className="mt-12">
            <button
              onClick={handleToggleProjects}
              className="px-6 py-3 text-lg font-bold text-blue-600 rounded-full shadow-lg
                         bg-white border-2 border-blue-600 hover:bg-blue-50 transition-all duration-300
                         flex items-center justify-center space-x-2 mx-auto focus:outline-none"
            >
              <span>{showAll ? "See Less" : "See More"}</span>
              {/* Animated icon based on state */}
              <div className={`transform transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}>
                {showAll ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
