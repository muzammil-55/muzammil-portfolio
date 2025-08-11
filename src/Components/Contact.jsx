import React from 'react'

import { Linkedin, Github, Mail, Smartphone, MapPin, ChevronUp, User, Code, Folder, MessageSquare, Briefcase, Award } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen py-20 flex items-center justify-center bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold text-blue-600 mb-4">
          <MessageSquare size={36} className="inline-block mr-4 text-blue-500" />
          Get In Touch!
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
          I'm open to new opportunities and projects. Let's build something great together.
        </p>

        <div className="flex justify-center max-w-2xl mx-auto">
          {/* Contact Details Section */}
          <div className="p-8 bg-white rounded-xl shadow-lg border border-gray-200 flex flex-col justify-center text-left w-full">
            <h3 className="text-2xl font-bold mb-6 text-blue-600 text-center">Contact Details</h3>
            <div className="space-y-4 text-lg text-gray-700">
              <div className="flex items-center space-x-4">
                <Mail size={24} className="text-blue-500" />
                <span>muzammil092000@gmail.com</span>
                </div>
              <div className="flex items-center space-x-4">
                <Smartphone size={24} className="text-blue-500" />
                <span>+91 79891 52744</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin size={24} className="text-blue-500" />
                <span>Hyderabad, India</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-start space-y-4 sm:space-y-0 sm:space-x-6 mt-8">
              <div className="flex space-x-6">
                <a href="https://www.linkedin.com/in/muzammil55" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                  <Linkedin size={36} />
                </a>
                <a href="https://github.com/muzammil-55" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                  <Github size={36} />
                </a>
              </div>
              <a
                href="/assets/MuzammilKhanResume.pdf"
                download="MuzammilKhanResume.pdf"
                className="inline-block px-8 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Contact;