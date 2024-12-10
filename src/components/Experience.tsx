import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Briefcase, GraduationCap } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Frontend Developer Intern',
      company: 'Daten & Wissen',
      period: 'August 2024 - Feb 2025',
      icon: <Briefcase className="w-6 h-6" />,
      description: 'Working on frontend development using modern web technologies.'
    },
    {
      title: 'B.Tech in Information Technology',
      company: 'University',
      period: '2021-2025',
      icon: <GraduationCap className="w-6 h-6" />,
      description: 'Studying Information Technology with focus on software development.'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
          <p className="text-lg text-gray-600">My academic and professional journey</p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
          
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`relative mb-8 ${
                index % 2 === 0 ? 'md:mr-auto md:ml-0' : 'md:ml-auto md:mr-0'
              } md:w-1/2 p-6`}
            >
              <div className="bg-white rounded-lg shadow-lg p-6 relative">
                <div className="absolute top-6 -left-3 md:-left-4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">
                  {exp.icon}
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                  <p className="text-blue-600 font-medium">{exp.company}</p>
                  <div className="flex items-center text-gray-600 mt-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{exp.period}</span>
                  </div>
                  <p className="mt-4 text-gray-600">{exp.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;