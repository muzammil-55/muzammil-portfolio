import React from 'react'
import { Linkedin, Github, Mail, Smartphone, MapPin, ChevronUp, User, Code, Folder, MessageSquare, Briefcase, Award } from 'lucide-react';



const Home = () => {
  return (
    <section id="home" className="min-h-screen pt-24 flex items-center justify-center bg-gray-50 text-center">
      <div className="container mx-auto px-4 py-16">
        <img
          src="https://placehold.co/150x150/5a67d8/ffffff?text=M"
          alt="Muzammil's Profile Picture"
          className="rounded-full w-40 h-40 mx-auto mb-8 shadow-2xl border-4 border-white transform transition-transform duration-500 hover:scale-105"
        />
        <h1 className="font-extrabold text-4xl sm:text-6xl lg:text-7xl mb-4 text-gray-900">
          Hi, I'm Muzammil
          <img src="https://raw.githubusercontent.com/ABSphreak/ABSphreak/master/gifs/Hi.gif" width="60px" alt="Waving hand GIF" className="inline-block ml-4" />
        </h1>
        <p className="max-w-3xl mx-auto text-lg sm:text-2xl text-gray-600 leading-relaxed">
          A passionate Full Stack MERN Developer and Machine Learning Enthusiast, dedicated to building dynamic, user-centric applications.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mt-8">
          <div className="flex space-x-6">
            <a href="https://www.linkedin.com/in/muzammil55" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
              <Linkedin size={36} />
            </a>
            <a href="https://github.com/muzammil-55" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
              <Github size={36} />
            </a>
          </div>
          <a
            href="#contact"
            className="inline-block px-10 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};



export default Home