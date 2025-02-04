'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

export default function Projects() {
  useIntersectionObserver();

  const projects: Project[] = [
    {
      title: 'Network Automation Platform',
      description: 'Automated network configuration and management system built with Python and Cisco APIs.',
      image: '/window.svg',
      tags: ['Python', 'Cisco', 'REST API'],
      link: '#',
    },
    {
      title: 'Infrastructure Monitor',
      description: 'Real-time monitoring dashboard for network infrastructure and performance metrics.',
      image: '/globe.svg',
      tags: ['React', 'Node.js', 'WebSocket'],
      link: '#',
    },
    {
      title: 'Cloud Migration Tool',
      description: 'Tool for automating cloud infrastructure deployment and migration processes.',
      image: '/file.svg',
      tags: ['AWS', 'Terraform', 'Python'],
      link: '#',
    },
  ];

  return (
    <section id="projects" className="section section-alt">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center text-animate">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link 
              href={project.link}
              key={project.title}
              className={`group ${index % 2 === 0 ? 'slide-left' : 'slide-right'}`}
            >
              <div className="card p-6 h-full hover:translate-y-[-4px] transition-all duration-300">
                <div className="relative w-full h-48 mb-6 hover-scale">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain transition-transform duration-300"
                  />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-sm text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
