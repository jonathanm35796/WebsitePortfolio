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
						<div className="space-y-8">
							{/* Professional Experience */}
							<div>
								<h3 className="text-2xl font-bold text-gray-900 mb-6">Professional Experience</h3>
								<div className="space-y-8">
									{/* DISH Network */}
									<div>
										<h4 className="text-xl font-semibold text-gray-900">Network Automation Engineer / Network Transport Engineer</h4>
										<p className="text-gray-600 mb-3">DISH Network / EchoStar / Boost Mobile | Denver, CO | July 2022 – Nov. 2024</p>
										<ul className="list-disc list-inside space-y-2 text-gray-700">
											<li>Developed Python-based automation scripts and ETL pipelines, reducing manual troubleshooting and accelerating fault isolation.</li>
											<li>Leveraged advanced monitoring (Grafana, SolarWinds, Datadog) to proactively detect impairments.</li>
											<li>Maintained DHCP services and integrated IP/MAC assignments, reducing addressing errors and improving uptime.</li>
											<li>Reduced mean-time-to-repair by 30% through automation and improved triage protocols.</li>
										</ul>
									</div>

									{/* Comcast */}
									<div>
										<h4 className="text-xl font-semibold text-gray-900">Network Operations Center Technician</h4>
										<p className="text-gray-600 mb-3">Comcast | Centennial, CO | June 2021 – July 2022</p>
										<ul className="list-disc list-inside space-y-2 text-gray-700">
											<li>Conducted real-time network triage using Zabbix, Meraki, and Fortinet.</li>
											<li>Managed switches, firewalls, and wireless APs, ensuring continuous service availability.</li>
										</ul>
									</div>
								</div>
							</div>

							{/* Major Projects */}
							<div>
								<h3 className="text-2xl font-bold text-gray-900 mb-6">Major Projects</h3>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									<div className="bg-white/50 p-6 rounded-lg">
										<h4 className="text-lg font-semibold text-gray-900 mb-3">Enterprise Network Automation Framework</h4>
										<p className="text-gray-700 mb-3">Created asynchronous Python scripts to manage large-scale Cisco router fleets.</p>
										<div className="flex flex-wrap gap-2">
											<span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Python</span>
											<span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Cisco IOS</span>
											<span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">asyncio</span>
										</div>
									</div>
									<div className="bg-white/50 p-6 rounded-lg">
										<h4 className="text-lg font-semibold text-gray-900 mb-3">Network Health Monitoring System</h4>
										<p className="text-gray-700 mb-3">AWS-integrated health-check systems for real-time performance insights.</p>
										<div className="flex flex-wrap gap-2">
											<span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">AWS</span>
											<span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Python</span>
											<span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">ETL</span>
										</div>
									</div>
								</div>
							</div>

							{/* Core Competencies */}
							<div>
								<h3 className="text-2xl font-bold text-gray-900 mb-6">Core Competencies</h3>
								<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
									<div>
										<h4 className="font-semibold text-gray-900 mb-3">Network Engineering</h4>
										<ul className="space-y-2 text-gray-700">
											<li>• Cisco IOS XR</li>
											<li>• ORAN Systems</li>
											<li>• BGP/ISIS Routing</li>
										</ul>
									</div>
									<div>
										<h4 className="font-semibold text-gray-900 mb-3">Automation</h4>
										<ul className="space-y-2 text-gray-700">
											<li>• Python Scripting</li>
											<li>• Grafana, Datadog</li>
											<li>• Kubernetes</li>
										</ul>
									</div>
									<div>
										<h4 className="font-semibold text-gray-900 mb-3">Security</h4>
										<ul className="space-y-2 text-gray-700">
											<li>• DHCP Management</li>
											<li>• Fortinet Integration</li>
											<li>• Network Security</li>
										</ul>
									</div>
								</div>
							</div>

							{/* Social Links */}
							<div className="flex justify-center space-x-6 pt-6 border-t border-gray-200">
								<Link 
									href="https://github.com/jonathanm35796"
									target="_blank"
									className="flex items-center gap-2 text-gray-700 hover:text-blue-600"
								>
}