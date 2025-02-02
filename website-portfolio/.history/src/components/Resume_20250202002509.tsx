import Link from 'next/link';

export default function Resume() {
	const downloadResume = () => {
		const resumeContent = `Jonathan McFarland
8485 Old Ski Run Cir APT 307, Littleton, CO 80125
jonathan.s.mcfarland@gmail.com | 404-313-5580
linkedin.com/in/jonathanmcfarland-15b994b8

Professional Experience

Network Automation Engineer / Network Transport Engineer / Network Surveillance Engineer
DISH Network / EchoStar / Boost Mobile | Denver, CO | July 2022 – Nov. 2024
• Began in frontline triage support for RF ORAN systems, rapidly identifying incidents, isolating root causes, and implementing immediate fixes.
• Accessed and configured Cisco IOS XR routers, analyzing logs and validating configurations to ensure optimal network performance.
• Maintained DHCP services and integrated IP/MAC assignments, reducing addressing errors and improving uptime.
• Leveraged advanced monitoring (Grafana, SolarWinds, Datadog) to proactively detect impairments, refine triage workflows, and shorten resolution times.
• Provided senior leadership with clear, timely updates and root cause analyses during outages, enabling data-driven decisions.
• Oversaw Samsung cell sites with Unified System Manager (USM), ensuring high-quality performance through proactive health checks.
• Developed Python-based automation scripts and ETL pipelines, reducing manual troubleshooting and accelerating fault isolation.
• Guided disaster recovery efforts and implemented rigorous change management processes, increasing network resilience and minimizing downtime.

Key Achievements:
• Reduced mean-time-to-repair by 30% through automation, asynchronous scripting, and improved triage protocols.
• Enhanced reliability by integrating automated health checks and immediate alerting dashboards.

Network Operations Center Technician
Comcast | Centennial, CO | June 2021 – July 2022
• Conducted real-time network triage using Zabbix, Meraki, and Fortinet, identifying anomalies and initiating swift resolutions.
• Managed switches, firewalls, and wireless APs, ensuring continuous service availability and security.
• Documented SOPs and coordinated with ISPs, improving the escalation process for persistent network issues.

Key Achievements:
• Streamlined incident response through standardized documentation and consistent adherence to triage best practices.
• Strengthened overall network security posture via proactive maintenance and optimization.

Advanced Repair Agent / Consultant
Geek Squad | Snellville, GA | June 2019 – May 2021
• Executed hands-on triage for hardware/software issues, including data recovery, virus removal, OS reinstallations, and component replacements.
• Certified in Apple repairs (iPhones, iPads, MacBooks), efficiently diagnosing and resolving complex hardware faults.
• Educated customers on preventive measures, increasing their confidence and reducing repeat issues.
• Managed repairs through Apple GSX and NOVA, ensuring transparent device tracking and timely updates.

Major Projects

Enterprise Network Automation Framework
• Created asynchronous Python scripts to manage large-scale Cisco router fleets, minimizing manual interventions and downtime.
• Integrated robust error handling and secure credential management, bolstering operational efficiency and compliance.
Technologies: Python, asyncio, Cisco IOS, JSON

Network Health Monitoring System
• Architected AWS-integrated health-check systems for real-time performance insights and rapid triage.
• Implemented ETL pipelines to consolidate metrics, enabling proactive decision-making and better capacity planning.
Technologies: AWS, Python, pandas, ETL pipelines

Core Competencies
• Network Triage & Troubleshooting: Incident Detection, Fault Isolation, Root Cause Analysis
• Network Engineering & Architecture: Cisco IOS XR, ORAN Systems, BGP/ISIS Routing, High-Availability Solutions
• Automation & Infrastructure: Python Scripting, Grafana, Datadog, Kubernetes, VMware vSphere
• Security & Reliability: DHCP Management, Fortinet Integration, GNSS Systems Integration
• Collaboration & Leadership: Executive Reporting, Change Management, Cross-Functional Coordination, Technical Documentation

Education
Computer Programming (2 Years of Coursework Completed)
• Completed foundational coursework in software development, data structures, and algorithms.
• Continued self-directed learning in network programming, automation, and systems optimization.`;

		const blob = new Blob([resumeContent], { type: 'text/plain' });
		const url = window.URL.createObjectURL(blob);
		const link = document.createElement('a');
		link.href = url;
		link.download = 'Jonathan_McFarland_Resume.txt';
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
		window.URL.revokeObjectURL(url);
	};

	return (
		<section id="resume" className="section section-alt">
			<div className="container mx-auto px-4">
				<div className="max-w-4xl mx-auto">
					<div className="flex justify-between items-center mb-8">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900">Resume</h2>
						<button
							onClick={downloadResume}
							className="btn btn-primary flex items-center gap-2"
						>
							<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
							</svg>
							Download Resume
						</button>
					</div>

					<div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-sm p-8">
						<div className="space-y-6">
							<div>
								<h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Experience</h3>
								<div className="space-y-6">
									<div>
										<h4 className="text-xl font-semibold text-gray-900">Network Automation Engineer / Network Transport Engineer</h4>
										<p className="text-gray-600">DISH Network / EchoStar / Boost Mobile | Denver, CO | July 2022 – Nov. 2024</p>
										<ul className="list-disc list-inside mt-2 space-y-2 text-gray-700">
											<li>Developed Python-based automation scripts and ETL pipelines, reducing manual troubleshooting and accelerating fault isolation.</li>
											<li>Leveraged advanced monitoring (Grafana, SolarWinds, Datadog) to proactively detect impairments.</li>
											<li>Reduced mean-time-to-repair by 30% through automation and improved triage protocols.</li>
										</ul>
									</div>
								</div>
							</div>

							<div>
								<h3 className="text-2xl font-bold text-gray-900 mb-4">Core Competencies</h3>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<div>
										<h4 className="font-semibold text-gray-900 mb-2">Network Engineering</h4>
										<ul className="list-disc list-inside space-y-1 text-gray-700">
											<li>Cisco IOS XR</li>
											<li>ORAN Systems</li>
											<li>BGP/ISIS Routing</li>
										</ul>
									</div>
									<div>
										<h4 className="font-semibold text-gray-900 mb-2">Automation</h4>
										<ul className="list-disc list-inside space-y-1 text-gray-700">
											<li>Python Scripting</li>
											<li>Grafana, Datadog</li>
											<li>Kubernetes</li>
										</ul>
									</div>
								</div>
							</div>

							<div className="flex justify-center space-x-6">
								<Link 
									href="https://github.com/jonathanm35796"
									target="_blank"
									className="flex items-center gap-2 text-gray-700 hover:text-blue-600"
								>
									<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
										<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
									</svg>
									GitHub Profile
								</Link>
								<Link 
									href="https://www.linkedin.com/in/jonathan-m-15b994b8/"
									target="_blank"
									className="flex items-center gap-2 text-gray-700 hover:text-blue-600"
								>
									<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
										<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
									</svg>
									LinkedIn Profile
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}