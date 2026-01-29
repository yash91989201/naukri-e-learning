import { createFileRoute } from "@tanstack/react-router";
import { blogPosts } from "@/constants";

export const Route = createFileRoute("/blog")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="min-h-screen bg-gray-50 pt-32 pb-16">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="mb-16 text-center">
					<h1 className="mb-4 font-black text-4xl text-gray-900 md:text-5xl">
						Latest Insights
					</h1>
					<p className="text-gray-600 text-xl">
						Expert perspectives on technology, career growth, and industry
						trends.
					</p>
				</div>

				<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
					{blogPosts.map((post) => (
						<article
							className="overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-xl"
							key={post.id}
						>
							<div className="h-48 overflow-hidden bg-gray-200">
								<img
									alt={post.title}
									className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
									src={post.image}
								/>
							</div>
							<div className="p-6">
								<p className="mb-3 font-bold text-brand-600 text-xs uppercase tracking-widest">
									{post.date}
								</p>
								<h2 className="mb-3 font-bold text-gray-900 text-xl transition-colors hover:text-brand-600">
									{post.title}
								</h2>
								<p className="mb-4 text-gray-600 text-sm">{post.excerpt}</p>
								<button className="font-bold text-brand-600 text-sm hover:underline">
									Read More
								</button>
							</div>
						</article>
					))}
				</div>
			</div>
		</div>
	);
}
