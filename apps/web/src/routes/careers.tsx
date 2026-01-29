import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/careers")({
	component: RouteComponent,
});

function RouteComponent() {
	const jobs = [
		{
			title: "Senior React Developer",
			location: "Remote",
			type: "Engineering",
		},
		{ title: "Technical Content Writer", location: "Remote", type: "Content" },
		{
			title: "Business Development Manager",
			location: "Bangalore, India",
			type: "Sales",
		},
		{ title: "DevOps Engineer", location: "Remote", type: "Engineering" },
	];

	return (
		<div className="min-h-screen bg-white pt-32 pb-16">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="mb-16 text-center">
					<h1 className="mb-4 font-black text-4xl text-gray-900 md:text-5xl">
						Join Our Team
					</h1>
					<p className="mx-auto max-w-3xl text-gray-600 text-xl">
						Help us transform professional education for millions of learners
						worldwide.
					</p>
				</div>

				<div className="mx-auto max-w-4xl space-y-4">
					{jobs.map((job, i) => (
						<div
							className="flex flex-col justify-between rounded-xl border border-gray-100 bg-gray-50 p-6 transition-colors hover:border-brand-200 hover:bg-brand-50 md:flex-row md:items-center"
							key={i}
						>
							<div>
								<h3 className="mb-1 font-bold text-gray-900 text-xl">
									{job.title}
								</h3>
								<div className="flex gap-4 text-gray-500 text-sm">
									<span>{job.location}</span>
									<span>•</span>
									<span className="font-medium text-brand-600">{job.type}</span>
								</div>
							</div>
							<button className="mt-4 rounded-xl border-2 border-gray-200 bg-white px-6 py-2 font-bold text-gray-700 transition-colors hover:border-brand-600 hover:text-brand-600 md:mt-0">
								Apply Now
							</button>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
