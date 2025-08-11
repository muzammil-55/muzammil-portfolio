import React from 'react'
import { Code, Brain, Database, Wrench, User, Briefcase } from 'lucide-react';

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-extrabold text-center mb-12 text-blue-600">
                    <Briefcase size={36} className="inline-block mr-4 text-blue-500" />
                    Experience
                </h2>
                <div className="max-w-5xl mx-auto space-y-8">
                    <div className="p-6 bg-white rounded-xl shadow-md border-l-4 border-blue-500">
                        <p className="font-bold text-xl mb-1">Web Development Internship, Oasis Infobyte</p>
                        <p className="text-sm text-gray-500">1 Month, Nov 2023 to Dec 2023</p>
                        <ul className="list-disc list-inside mt-4 text-base space-y-1 text-gray-700">
                            <li>Designed and developed functional and interacting web applications (calculator and to-do list) with HTML, CSS, and JavaScript, focusing on UI/UX design and front-end development.</li>
                        </ul>
                    </div>
                    <div className="p-6 bg-white rounded-xl shadow-md border-l-4 border-blue-500">
                        <p className="font-bold text-xl mb-1">Data Science Internship, Oasis Infobyte</p>
                        <p className="text-sm text-gray-500">1 Month, Jan 2024 to Feb 2024</p>
                        <ul className="list-disc list-inside mt-4 text-base space-y-1 text-gray-700">
                            <li>Applied machine learning (k-Nearest Neighbors) and statistical analysis techniques to real-world datasets during a data science internship. Projects included iris flower classification and unemployment analysis, involving time series analysis and data visualization using Python libraries.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Experience
