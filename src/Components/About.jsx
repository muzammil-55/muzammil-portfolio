import React from 'react'

import { Linkedin, Github, Mail, Smartphone, MapPin, ChevronUp, User, Code, Folder, MessageSquare, Briefcase, Award } from 'lucide-react';
const About = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-extrabold text-center mb-12 text-blue-600">
                    <User size={36} className="inline-block mr-4 text-blue-500" />
                    About Me
                </h2>
                <div className="flex flex-col md:flex-row gap-12 max-w-5xl mx-auto items-center">
                    <div className="text-lg text-gray-700 space-y-6 leading-relaxed flex-1">
                        <p>
                            I am a passionate Full Stack MERN Developer with a strong background in building robust and scalable web applications. As a B.E. (CSE) graduate of Osmania University, I developed a keen interest in problem-solving and the ever-evolving world of technology.
                        </p>
                        <p>
                            Beyond web development, I am a dedicated Machine Learning Enthusiast. My work involves creating predictive models and analyzing data to solve complex problems, always striving for clean code and a seamless user experience.
                        </p>
                    </div>
                    <div className="space-y-4 text-gray-700 flex-1 flex flex-col justify-center items-center">
                        <a
                            href="public/assets/MuzammilKhanResume.pdf"
                            download="MuzammilKhanResume.pdf"
                            className="inline-block px-8 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
                        >
                            Download Resume
                        </a>
                        <div className="flex items-center space-x-2 text-lg text-gray-700 mt-2">
                           <MapPin size={24} className="text-blue-600" />
                           <p>Hyderabad, India</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default About