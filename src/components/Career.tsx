"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Career() {
  const experiences = [
    {
      title: "Network Automation Engineer / Network Transport Engineer",
      company: "DISH Network / EchoStar / Boost Mobile",
      location: "Denver, CO",
      period: "July 2022 – Nov. 2024",
      achievements: [
        "Began in frontline triage support for RF ORAN systems, rapidly identifying incidents and implementing fixes",
        "Accessed and configured Cisco IOS XR routers, analyzing logs for optimal network performance",
        "Maintained DHCP services and integrated IP/MAC assignments",
        "Leveraged Grafana, SolarWinds, and Datadog for proactive monitoring",
        "Reduced mean-time-to-repair by 30% through automation",
        "Developed Python-based automation scripts and ETL pipelines"
      ]
    },
    {
      title: "Network Operations Center Technician",
      company: "Comcast",
      location: "Centennial, CO",
      period: "June 2021 – July 2022",
      achievements: [
        "Conducted real-time network triage using Zabbix, Meraki, and Fortinet",
        "Managed switches, firewalls, and wireless APs",
        "Documented SOPs and coordinated with ISPs",
        "Streamlined incident response through standardized documentation"
      ]
    },
    {
      title: "Advanced Repair Agent / Consultant",
      company: "Geek Squad",
      location: "Snellville, GA",
      period: "June 2019 – May 2021",
      achievements: [
        "Executed hands-on triage for hardware/software issues",
        "Certified in Apple repairs (iPhones, iPads, MacBooks)",
        "Managed repairs through Apple GSX and NOVA",
        "Accelerated repair turnaround times and boosted customer satisfaction"
      ]
    }
  ];

  return (
    <div id="career" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600">
            A track record of excellence in network engineering and automation
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition duration-300"
            >
              <div className="mb-4">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {exp.title}
                </h3>
                <p className="text-blue-600 font-medium">
                  {exp.company} | {exp.location}
                </p>
                <p className="text-gray-600 mb-4">{exp.period}</p>
              </div>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                {exp.achievements.map((achievement, achievementIndex) => (
                  <li key={achievementIndex}>{achievement}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}