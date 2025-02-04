'use client';
import React from 'react';
import Image from 'next/image';

const Resume = () => {
  return (
    <section id="resume" className="section section-alt page-transition">
      <div className="container">
        <h2 className="text-center mb-12">Professional Resume</h2>
        <div className="card p-8 space-y-8">
          <div className="flex justify-center mb-8">
            <div className="relative w-32 h-32">
              <Image
                src="/profile-pic.png"
                alt="Jonathan McFarland"
                fill
                className="rounded-full animate-profile-entrance object-cover"
                sizes="(max-width: 128px) 100vw, 128px"
                priority
              />
            </div>
          </div>
          <div className="resume-content text-gray-800 text-center">
            <h3 className="text-2xl font-semibold">Jonathan McFarland</h3>
            <p>8485 Old Ski Run Cir APT 307, Littleton, CO 80125</p>
            <p>jonathan.s.mcfarland@gmail.com | 404-313-5580</p>
            <p className="flex justify-center">
              <a
                href="https://linkedin.com/in/jonathanmcfarland-15b994b8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                linkedin.com/in/jonathanmcfarland-15b994b8
              </a>
            </p>

            <h4 className="text-xl font-bold mt-8 text-center">Professional Experience</h4>

            <div className="mt-4 text-center">
              <h5 className="text-lg font-semibold text-center">
                Network Automation Engineer / Network Transport Engineer / Network Surveillance Engineer
              </h5>
              <p>
                <strong>DISH Network / EchoStar / Boost Mobile</strong> | Denver, CO | July 2022 – Nov. 2024
              </p>
              <ul className="list-none mt-2">
                <li>
                  Began in frontline triage support for RF ORAN systems, rapidly identifying incidents, isolating root causes, and
                  implementing immediate fixes.
                </li>
                <li>
                  Accessed and configured Cisco IOS XR routers, analyzing logs and validating configurations to ensure optimal
                  network performance.
                </li>
                <li>
                  Maintained DHCP services and integrated IP/MAC assignments, reducing addressing errors and improving uptime.
                </li>
                <li>
                  Leveraged advanced monitoring (Grafana, SolarWinds, Datadog) to proactively detect impairments, refine triage
                  workflows, and shorten resolution times.
                </li>
                <li>
                  Provided senior leadership with clear, timely updates and root cause analyses during outages, enabling data-driven
                  decisions.
                </li>
                <li>
                  Oversaw Samsung cell sites with Unified System Manager (USM), ensuring high-quality performance through proactive
                  health checks.
                </li>
                <li>
                  Developed Python-based automation scripts and ETL pipelines, reducing manual troubleshooting and accelerating fault
                  isolation.
                </li>
                <li>
                  Guided disaster recovery efforts and implemented rigorous change management processes, increasing network resilience
                  and minimizing downtime.
                </li>
              </ul>
              <p className="mt-2 font-semibold text-center">Key Achievements:</p>
              <ul className="list-none">
                <li>
                  Reduced mean-time-to-repair by 30% through automation, asynchronous scripting, and improved triage protocols.
                </li>
                <li>
                  Enhanced reliability by integrating automated health checks and immediate alerting dashboards.
                </li>
              </ul>
            </div>

            <div className="mt-6 text-center">
              <h5 className="text-lg font-semibold text-center">Network Operations Center Technician</h5>
              <p>
                <strong>Comcast</strong> | Centennial, CO | June 2021 – July 2022
              </p>
              <ul className="list-none mt-2">
                <li>
                  Conducted real-time network triage using Zabbix, Meraki, and Fortinet, identifying anomalies and initiating swift
                  resolutions.
                </li>
                <li>
                  Managed switches, firewalls, and wireless APs, ensuring continuous service availability and security.
                </li>
                <li>
                  Documented SOPs and coordinated with ISPs, improving the escalation process for persistent network issues.
                </li>
              </ul>
              <p className="mt-2 font-semibold text-center">Key Achievements:</p>
              <ul className="list-none">
                <li>
                  Streamlined incident response through standardized documentation and consistent adherence to triage best practices.
                </li>
                <li>
                  Strengthened overall network security posture via proactive maintenance and optimization.
                </li>
              </ul>
            </div>

            <div className="mt-6 text-center">
              <h5 className="text-lg font-semibold text-center">Advanced Repair Agent / Consultant</h5>
              <p>
                <strong>Geek Squad</strong> | Snellville, GA | June 2019 – May 2021
              </p>
              <ul className="list-none mt-2">
                <li>
                  Executed hands-on triage for hardware/software issues, including data recovery, virus removal, OS
                  reinstallations, and component replacements.
                </li>
                <li>
                  Certified in Apple repairs (iPhones, iPads, MacBooks), efficiently diagnosing and resolving complex hardware
                  faults.
                </li>
                <li>
                  Educated customers on preventive measures, increasing their confidence and reducing repeat issues.
                </li>
                <li>
                  Managed repairs through Apple GSX and NOVA, ensuring transparent device tracking and timely updates.
                </li>
              </ul>
              <p className="mt-2 font-semibold text-center">Key Achievements:</p>
              <ul className="list-none">
                <li>
                  Accelerated repair turnaround times and boosted customer satisfaction through clear communication and consistent follow-up.
                </li>
              </ul>
            </div>

            <h4 className="text-xl font-bold mt-8 text-center">Major Projects</h4>

            <div className="mt-8 text-center">
              <h5 className="text-lg font-semibold text-center">Enterprise Network Automation Framework</h5>
              <ul className="list-none mt-2">
                <li>
                  Created asynchronous Python scripts to manage large-scale Cisco router fleets, minimizing manual interventions and downtime.
                </li>
                <li>
                  Integrated robust error handling and secure credential management, bolstering operational efficiency and compliance.
                </li>
              </ul>
              <p className="mt-1">
                <strong>Technologies:</strong> Python, asyncio, Cisco IOS, JSON
              </p>
            </div>

            <div className="mt-8 text-center">
              <h5 className="text-lg font-semibold text-center">Network Health Monitoring System</h5>
              <ul className="list-none mt-2">
                <li>
                  Architected AWS-integrated health-check systems for real-time performance insights and rapid triage.
                </li>
                <li>
                  Implemented ETL pipelines to consolidate metrics, enabling proactive decision-making and better capacity planning.
                </li>
              </ul>
              <p className="mt-1">
                <strong>Technologies:</strong> AWS, Python, pandas, ETL pipelines
              </p>
            </div>

            <h4 className="text-xl font-bold mt-8 text-center">Core Competencies</h4>
            <ul className="list-none mt-4 space-y-2 max-w-3xl mx-auto">
              <li>
                Network Triage & Troubleshooting: Incident Detection, Fault Isolation, Root Cause Analysis
              </li>
              <li>
                Network Engineering & Architecture: Cisco IOS XR, ORAN Systems, BGP/ISIS Routing, High-Availability Solutions
              </li>
              <li>
                Automation & Infrastructure: Python Scripting, Grafana, Datadog, Kubernetes, VMware vSphere
              </li>
              <li>
                Security & Reliability: DHCP Management, Fortinet Integration, GNSS Systems Integration
              </li>
              <li>
                Collaboration & Leadership: Executive Reporting, Change Management, Cross-Functional Coordination, Technical Documentation
              </li>
            </ul>

            <h4 className="text-xl font-bold mt-8 text-center">Education</h4>
            <div className="mt-2 text-center">
              <p>
                <strong>Computer Programming (2 Years of Coursework Completed)</strong>
              </p>
              <ul className="list-none mt-1">
                <li>
                  Completed foundational coursework in software development, data structures, and algorithms.
                </li>
                <li>
                  Continued self-directed learning in network programming, automation, and systems optimization.
                </li>
              </ul>
            </div>

            <div className="mt-8 text-center">
              <button
                onClick={() => {
                  const printWindow = window.open('/resume.html', '_blank');
                  printWindow?.addEventListener('load', () => {
                    printWindow.print();
                  });
                }}
                className="btn btn-primary"
              >
                Download as PDF
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
