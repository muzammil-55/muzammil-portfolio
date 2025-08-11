import React from 'react'
import { Linkedin, Github, Mail, Smartphone, MapPin, ChevronUp, User, Code, Folder, MessageSquare, Briefcase, Award } from 'lucide-react';
const educationData = [
  {
    id: 1,
    degree: 'B.E. in Computer Science & Engineering (CSE)',
    institution: 'Osmania University. (Hyderabad)',
    details: '2024',
  },
  {
    id: 2,
    degree: 'XII (TSBIE)',
    institution: 'Sri Chaitanya Junior Kalasala. (Hyderabad)',
    details: 'Maths, Physics, Chemistry.',
  },
  {
    id: 3,
    degree: 'X (ICSE)',
    institution: 'St. Georges Grammar School. (Hyderabad)',
    details: 'Science',
    year: '2022'
  },
];

// The new Education component that maps over the data.
const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold text-blue-600 mb-12">
          <Award size={36} className="inline-block mr-4 text-blue-500" />
          Education
        </h2>
        <div className='flex-col space-y-5'>
          {educationData.map((edu) => (
            <div
              key={edu.id}
              className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg border-l-4 border-blue-500 text-left"
            >
              <p className="font-bold text-xl text-gray-800 mb-2">{edu.degree}</p>
              <p className="text-lg text-gray-700">{edu.institution}</p>
              <p className="text-gray-500 mt-2">{edu.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Education
