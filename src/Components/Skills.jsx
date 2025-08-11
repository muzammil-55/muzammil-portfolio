
import React from 'react';
import { Linkedin, Github, Mail, Smartphone, MapPin, ChevronUp, User, Code, Folder, MessageSquare, Briefcase, Award,Brain,Database,Wrench } from 'lucide-react';

const Skills = () => {
  const skillSets = [
    {
      title: "Web Development",
      icon: <Code size={36} className="text-blue-500" />,
      skills: ["HTML", "CSS", "JavaScript", "Express.js", "Tailwind CSS", "React", "Node.js", "Next.js", "MongoDB"],
    },
    {
      title: "Machine Learning",
      icon: <Brain size={36} className="text-blue-500" />,
      skills: ["Numpy", "Pandas", "TensorFlow", "Scikit-learn"],
    },
    {
      title: "Database",
      icon: <Database size={36} className="text-blue-500" />,
      skills: ["MySQL", "MongoDB"],
    },
    {
      title: "Tools",
      icon: <Wrench size={36} className="text-blue-500" />,
      skills: ["Git & GitHub", "VS Code", "IntelliJ IDEA", "Jupyter", "Collab"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold text-blue-600 mb-12">
          <Code size={36} className="inline-block mr-4 text-blue-500" />
          Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillSets.map((set, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 border border-gray-200">
              <div className="flex items-center justify-center space-x-4 mb-4">
                {set.icon}
                <h3 className="font-bold text-2xl text-blue-600">{set.title}</h3>
              </div>
              <ul className="list-none space-y-2 text-lg text-gray-700">
                {set.skills.map((skill, skillIndex) => (
                  <li key={skillIndex}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills