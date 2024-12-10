import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Brain, Coffee } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">Get to know me better</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Code2 className="w-8 h-8" />,
              title: 'Full Stack Developer',
              description: 'Passionate about creating end-to-end solutions using modern technologies.'
            },
            {
              icon: <Brain className="w-8 h-8" />,
              title: 'Problem Solver',
              description: 'Love tackling complex problems and finding elegant solutions.'
            },
            {
              icon: <Coffee className="w-8 h-8" />,
              title: 'Continuous Learner',
              description: 'Always eager to learn new technologies and improve my skills.'
            }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-blue-100 dark:bg-blue-900 rounded-full text-blue-600 dark:text-blue-400">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 text-center">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
        >
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            I'm a passionate Full Stack Developer with a strong foundation in both frontend and backend technologies. 
            Currently pursuing my B.Tech in Information Technology, I specialize in building scalable web applications 
            using React, Node.js, and Python. I'm particularly interested in creating efficient, user-friendly solutions 
            that solve real-world problems.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;