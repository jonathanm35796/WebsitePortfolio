"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Expertise() {
  const skills = [
    {
      category: "Network Engineering & Architecture",
      technologies: ["Cisco IOS XR", "ORAN Systems", "BGP/ISIS Routing", "High-Availability Solutions"]
    },
    {
      category: "Automation & Infrastructure",
      technologies: ["Python", "Grafana", "Datadog", "Kubernetes", "VMware vSphere", "AWS", "ETL Pipelines"]
    },
    {
      category: "Network Security & Operations",
      technologies: ["DHCP Management", "Fortinet", "SolarWinds", "Zabbix", "Meraki"]
    }
  ];

  const projects = [
    {
      title: "Network Automation Framework",
      description: "Created asynchronous Python scripts to manage large-scale Cisco router fleets, minimizing manual interventions and downtime. Integrated robust error handling and secure credential management.",
      technologies: ["Python", "asyncio", "Cisco IOS", "JSON"]
    },
    {
      title: "Network Health Monitoring Dashboard",
      description: "Architected AWS-integrated health-check systems for real-time performance insights and rapid triage. Implemented ETL pipelines to consolidate metrics, enabling proactive decision-making.",
      technologies: ["AWS", "Python", "pandas", "ETL pipelines"]
    }
  ];

  return (
    <div id="expertise" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Core Expertise & Projects
          </h2>
          <p className="text-xl text-gray-600">
            Specialized in network transport, automation, and network monitoring
          </p>
        </motion.div>

        {/* Skills Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {skill.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Projects Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition duration-300"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}