import React from 'react';
import { motion } from 'framer-motion';
import { Database, Server, Globe, Code, Box, Cpu } from 'lucide-react';

const TechStack = () => {
  const technologies = [
    {
      category: 'Frontend',
      icon: <Globe className="w-8 h-8" />,
      skills: ['React', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Tailwind CSS']
    },
    {
      category: 'Backend',
      icon: <Server className="w-8 h-8" />,
      skills: ['Node.js', 'Express', 'Python', 'Django']
    },
    {
      category: 'Database',
      icon: <Database className="w-8 h-8" />,
      skills: ['MongoDB', 'PostgreSQL', 'Redis']
    },
    {
      category: 'DevOps',
      icon: <Box className="w-8 h-8" />,
      skills: ['Docker', 'Git', 'CI/CD']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Tech Stack</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">Technologies I work with</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.category}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-blue-100 dark:bg-blue-900 rounded-full text-blue-600 dark:text-blue-400">
                {tech.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 text-center">
                {tech.category}
              </h3>
              <ul className="space-y-2">
                {tech.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center justify-center text-gray-600 dark:text-gray-400"
                  >
                    <Code className="w-4 h-4 mr-2 text-blue-500 dark:text-blue-400" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;