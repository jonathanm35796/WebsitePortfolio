'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Career: React.FC = () => {
  const experiences = [
    {
      title: "Small Business",
      description: "Running a successful business focused on software development and technical solutions.",
      period: "Present"
    },
    {
      title: "Software Engineering Experience",
      description: "Expertise in full-stack development, cloud technologies, and modern frameworks.",
      period: "5+ years"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Career & Experience
          </h2>
          <p className="text-xl text-gray-600">
            A track record of delivering exceptional software solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition duration-300"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                {exp.title}
              </h3>
              <p className="text-gray-600 mb-4">{exp.description}</p>
              <p className="text-blue-600 font-semibold">{exp.period}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Career;