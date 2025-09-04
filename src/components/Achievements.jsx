import React from 'react';

const achievements = [
	{
		label: 'Client website delivered with no issues',
		detail: "Built Justice Nathan Hecht’s official website; he confirmed it looks excellent and works as expected.",
	},
	{
		label: 'Mobile ordering that just works',
		detail: 'FoodExpress: simple cart and checkout with a smooth experience on mobile devices.',
	},
	{
		label: 'Fast, reliable fitness content',
		detail: 'Fitzone: quick pages and clear workout information with dependable API data.',
	},
	{
		label: 'News that stays up to date',
		detail: 'News Portal: updates appear quickly and navigation is straightforward, even on slower networks.',
	},
	{
		label: 'Engaging one‑week training delivery',
		detail: 'TechRise (NAOS × Oyo Tech Hub): kept lessons simple for beginners; participants were very satisfied.',
	},
	{
		label: 'Clear, practical tutoring',
		detail: 'EFDI Oyo: practical projects and explanations—students gave strong feedback.',
	},
];

const Achievements = () => (
	<section
		id="highlights"
		className="py-28 border-t border-[hsl(var(--border))] bg-[hsl(var(--bg))]"
	>
		<div className="max-w-7xl mx-auto px-6">
			<h2 className="text-3xl sm:text-4xl font-semibold text-[hsl(var(--text))] tracking-tight">
				Impact Highlights
			</h2>
			<p className="mt-4 text-[hsl(var(--text-soft))] max-w-xl leading-relaxed">
				Real outcomes from client work and trainings.
			</p>
			<ul className="mt-12 grid md:grid-cols-2 gap-6">
				{achievements.map((a, i) => (
					<li
						key={a.label}
						className="group relative rounded-xl border border-[hsl(var(--border))] bg-white/70 backdrop-blur p-6 overflow-hidden animate-slide-up"
						style={{ animationDelay: `${i * 0.05}s` }}
					>
						<div
							className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
							style={{
								backgroundImage:
									'radial-gradient(circle at 70% 30%,hsla(var(--primary)/0.18) 0,transparent 60%)',
							}}
						/>
						<p className="font-medium text-[hsl(var(--text))] tracking-tight relative z-10">
							{a.label}
						</p>
						<p className="mt-2 text-sm text-[hsl(var(--text-soft))] relative z-10 leading-relaxed">
							{a.detail}
						</p>
					</li>
				))}
			</ul>
		</div>
	</section>
);

export default Achievements;
