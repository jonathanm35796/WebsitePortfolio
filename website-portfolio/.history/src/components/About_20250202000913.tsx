import Image from 'next/image';

export default function About() {
	const skills = [
		'Network Engineering',
		'Python Development',
		'Cisco Systems',
		'Cloud Technologies',
		'Infrastructure Optimization',
		'Automation',
	];

	return (
		<section id="about" className="section bg-gray-50">
			<div className="container mx-auto px-4">
				<div className="flex flex-col md:flex-row gap-12 items-center">
					<div className="flex-1">
						<div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
							<Image
								src="/profile-pic.png"
								alt="About Me"
								fill
								className="object-cover rounded-2xl shadow-lg"
							/>
						</div>
					</div>

					<div className="flex-1 space-y-6">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900">
							About Me
						</h2>
						
						<p className="text-lg text-gray-600">
							As a Network Automation Engineer, I specialize in building efficient and scalable network solutions. 
							With extensive experience in Python development and Cisco systems, I focus on creating automated 
							solutions that streamline network operations and enhance infrastructure reliability.
						</p>

						<div className="space-y-4">
							<h3 className="text-xl font-semibold text-gray-900">
								Core Skills
							</h3>
							<div className="flex flex-wrap gap-3">
								{skills.map((skill) => (
									<span
										key={skill}
										className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm"
									>
										{skill}
									</span>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}