import React from 'react';

const cases = [
	{
		title: 'FoodExpress – Full‑Stack Delivery App',
		goal: 'Let users browse menus, add to cart, and place orders with data saved on the server.',
		solution:
			'Built a React frontend with an Express REST API and MongoDB. Implemented cart, checkout, and order flow with a responsive UI.',
		result: 'Smooth ordering experience that works well on mobile and desktop.',
		stack: ['React', 'Express', 'MongoDB', 'Tailwind'],
		demo: 'https://foodexpress-neon.vercel.app/',
		code: 'https://github.com/sodiqbhoy1/foodexpress'
	},
	{
		title: 'Fitzone Fitness App',
		goal: 'Help users access workout data and simple recommendations in one place.',
		solution:
			'Used Next.js and external fitness APIs to fetch real‑time workout info with a clean UI and fast pages.',
		result: 'Reliable API integration and quick access to workout content.',
		stack: ['Next.js', 'Tailwind', 'API'],
		demo: 'https://fitzone-seven.vercel.app/',
		code: 'https://github.com/sodiqbhoy1/fitzone'
	},
	{
		title: 'News Portal',
		goal: 'Provide a simple, up‑to‑date news feed users can browse by category.',
		solution:
			'React app that consumes a third‑party news API with efficient list rendering and accessible components.',
		result: 'Fast, real‑time news browsing that works well on mobile.',
		stack: ['React', 'Tailwind', 'API'],
		demo: 'https://news-portal-coral.vercel.app/',
		code: 'https://github.com/sodiqbhoy1/NewsPortal'
	},
	{
		title: 'SQI Landing Clone',
		goal: 'Recreate SQI’s landing page to practice responsive design and clean HTML/CSS structure.',
		solution:
			'Built with semantic HTML, organized CSS, and small JavaScript for interactions. Focused on pixel‑perfect layout.',
		result: 'Responsive, fast page that closely matches the original design.',
		stack: ['HTML', 'CSS', 'JavaScript'],
		demo: 'https://sodiqbhoy1.github.io/SQI/',
		code: 'https://github.com/sodiqbhoy1/SQI'
	}
];

const CaseStudies = () => {
	return (
		<section id="case-studies" className="py-16 border-t">
			<div className="max-w-6xl mx-auto px-4">
				<header className="mb-8">
					<h2 className="text-2xl font-semibold">Case Studies</h2>
					<p className="text-sm text-gray-600 mt-2">
						Short write‑ups for selected projects based on what I built and why.
					</p>
				</header>

				<div className="grid gap-6 sm:grid-cols-2">
					{cases.map((c) => (
						<article key={c.title} className="border rounded-lg bg-white p-4">
							<h3 className="text-lg font-medium">{c.title}</h3>

							<div className="mt-3 space-y-2 text-sm text-gray-700">
								<p>
									<span className="font-semibold">Goal:</span> {c.goal}
								</p>
								<p>
									<span className="font-semibold">Solution:</span> {c.solution}
								</p>
								<p>
									<span className="font-semibold">Result:</span> {c.result}
								</p>
							</div>

							{c.stack?.length > 0 && (
								<ul className="flex flex-wrap gap-2 mt-3">
									{c.stack.map((tech) => (
										<li
											key={tech}
											className="text-xs px-2 py-1 rounded border bg-gray-50"
										>
											{tech}
										</li>
									))}
								</ul>
							)}

							<div className="flex gap-3 mt-4">
								{c.demo ? (
									<a
										href={c.demo}
										target="_blank"
										rel="noopener noreferrer"
										className="px-3 py-2 text-sm rounded bg-[hsl(var(--accent))] text-white hover:opacity-90"
									>
										Demo
									</a>
								) : (
									<button
										type="button"
										disabled
										className="px-3 py-2 text-sm rounded bg-gray-200 text-gray-500"
									>
										Demo
									</button>
								)}

								{c.code ? (
									<a
										href={c.code}
										target="_blank"
										rel="noopener noreferrer"
										className="px-3 py-2 text-sm rounded border hover:bg-gray-50"
									>
										GitHub
									</a>
								) : (
									<button
										type="button"
										disabled
										className="px-3 py-2 text-sm rounded border text-gray-500"
									>
										GitHub
									</button>
								)}
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
};

export default CaseStudies;
