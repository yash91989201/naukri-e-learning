import { createFileRoute, Link } from "@tanstack/react-router";
import {
	ArrowRight,
	CheckCircle2,
	Cpu,
	Handshake,
	PlayCircle,
	Sparkles,
	Star,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import ThreedTiltCard from "@/components/threed-tilt-card";
import { courses, partnerships, testimonials } from "@/constants";

export const Route = createFileRoute("/")({
	component: RouteComponent,
});

function RouteComponent() {
	const aiCourses = courses
		.filter((c) => c.category === "Artificial Intelligence")
		.slice(0, 4);
	const [activeTestimonial, setActiveTestimonial] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
		}, 6000);
		return () => clearInterval(timer);
	}, []);

	return (
		<div className="animate-fade-in overflow-hidden">
			{/* Hero */}
			<section className="perspective-1000 relative flex min-h-[95vh] items-center overflow-hidden bg-brand-900 pt-24 text-white lg:pt-32">
				<div className="pointer-events-none absolute inset-0 overflow-hidden">
					<div className="absolute top-[10%] left-[5%] h-32 w-32 animate-float rounded-full bg-gradient-to-br from-brand-400 to-transparent opacity-20 blur-2xl" />
					<div className="absolute right-[10%] bottom-[20%] h-64 w-64 animate-float-delayed rounded-full bg-gradient-to-tr from-purple-500 to-brand-600 opacity-20 blur-3xl" />
				</div>

				<div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
					<div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
						<div className="space-y-6 lg:space-y-8">
							<div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 font-medium text-brand-100 text-sm shadow-lg backdrop-blur-md">
								<Sparkles className="text-yellow-300" size={16} />
								<span>Placement Drive: 5,000+ Students Placed in 2024</span>
							</div>
							<h1 className="font-extrabold text-5xl leading-[1.05] tracking-tight md:text-6xl lg:text-8xl">
								Level Up with <br />
								<span className="bg-gradient-to-r from-blue-300 via-white to-purple-200 bg-clip-text text-transparent drop-shadow-sm">
									Modern Skills
								</span>
							</h1>
							<p className="max-w-xl text-brand-100 text-lg leading-relaxed lg:text-xl">
								NaukriElearning is India's leading portal for professional
								growth. Get certified by top MNCs and start your dream career
								today.
							</p>
							<div className="flex flex-col gap-4 pt-4 sm:flex-row lg:gap-5">
								<Link
									className="group relative flex items-center justify-center gap-3 rounded-2xl bg-white px-8 py-4 font-black text-brand-900 text-lg shadow-2xl transition-all hover:-translate-y-1 lg:py-5"
									to="/contact"
								>
									Start Free Trial <ArrowRight size={20} />
								</Link>
								<Link
									className="flex items-center justify-center gap-3 rounded-2xl border border-white/20 bg-white/5 px-8 py-4 font-bold text-lg text-white backdrop-blur-sm transition-all hover:bg-white/10 lg:py-5"
									to="/courses"
								>
									<PlayCircle size={22} /> See All Courses
								</Link>
							</div>
						</div>
						<div className="relative hidden justify-center lg:flex">
							<ThreedTiltCard
								className="w-full max-w-md"
								glow={true}
								intensity={20}
							>
								<div className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-brand-800 shadow-2xl">
									<img
										alt="Students"
										className="h-[600px] w-full object-cover opacity-80 mix-blend-overlay"
										src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-brand-900/90 via-transparent to-transparent" />
									<div className="translate-z-20 absolute right-10 bottom-10 left-10 rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl">
										<div className="flex items-center gap-4 text-white">
											<div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500 font-bold text-2xl shadow-blue-500/30 shadow-lg">
												G
											</div>
											<div className="flex-grow">
												<h3 className="font-bold text-lg">
													Google AI Professional
												</h3>
												<div className="mb-1 flex justify-between text-xs opacity-60">
													<span>Course Progress</span>
													<span>88%</span>
												</div>
												<div className="h-2 w-full rounded-full bg-white/20">
													<div className="h-full w-[88%] rounded-full bg-blue-400" />
												</div>
											</div>
										</div>
									</div>
								</div>
							</ThreedTiltCard>
						</div>
					</div>
				</div>
			</section>

			{/* Ticker */}
			<section className="reveal overflow-hidden border-gray-100 border-b bg-white py-12">
				<div className="mx-auto mb-8 max-w-7xl px-4">
					<p className="text-center font-black text-gray-400 text-xs uppercase tracking-[0.2em]">
						Our Alumni Work At Global Giants
					</p>
				</div>
				<div className="group relative flex overflow-x-hidden">
					<div className="flex animate-marquee items-center gap-20 whitespace-nowrap opacity-40 grayscale transition-all duration-700 hover:opacity-100 hover:grayscale-0">
						{[...Array(10)].map((_, i) => (
							<React.Fragment key={i}>
								<span className="font-black text-3xl tracking-tighter">
									AMAZON
								</span>
								<span className="font-black text-3xl tracking-tighter">
									MICROSOFT
								</span>
								<span className="font-black text-3xl tracking-tighter">
									GOOGLE
								</span>
								<span className="font-black text-3xl tracking-tighter">
									TCS
								</span>
								<span className="font-black text-3xl tracking-tighter">
									INFOSYS
								</span>
								<span className="font-black text-3xl tracking-tighter">
									ACCENTURE
								</span>
								<span className="font-black text-3xl tracking-tighter">
									WIPRO
								</span>
							</React.Fragment>
						))}
					</div>
				</div>
			</section>

			{/* AI Section */}
			<section className="relative overflow-hidden bg-gray-900 py-24">
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#438ae6,transparent_70%)] opacity-10" />
				<div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
						<div className="reveal-left space-y-8">
							<div className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/20 px-4 py-2 font-bold text-brand-300 text-xs uppercase tracking-widest">
								<Cpu size={14} /> LIVE Workshop
							</div>
							<h2 className="font-black text-4xl text-white leading-tight md:text-5xl">
								The Generative AI{" "}
								<span className="text-brand-400">Revolution 2024</span>
							</h2>
							<p className="max-w-xl text-gray-400 text-lg leading-relaxed">
								Do not just use AI—build with it. Join our 3-day intensive
								workshop on LLM deployment, Prompt Engineering, and AI Strategy.
							</p>
							<ul className="space-y-4">
								{[
									"Build your own custom GPT agents",
									"Master advanced Prompt Engineering",
									"Integrate AI into business workflows",
									"Verifiable Certificate",
								].map((item, i) => (
									<li className="flex items-center gap-3 text-gray-300" key={i}>
										<CheckCircle2 className="text-brand-500" size={20} />
										<span className="font-medium">{item}</span>
									</li>
								))}
							</ul>
							<div className="pt-4">
								<button className="flex items-center gap-2 rounded-2xl bg-brand-600 px-10 py-4 font-bold text-white shadow-brand-600/20 shadow-xl transition-all hover:bg-brand-500 active:scale-95">
									Reserve My Spot
								</button>
							</div>
						</div>
						<div className="reveal-right grid grid-cols-2 gap-4">
							{aiCourses.map((course, i) => (
								<ThreedTiltCard
									className={i % 2 === 1 ? "mt-8" : ""}
									intensity={10}
									key={course.id}
								>
									<div className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-colors hover:bg-white/10">
										<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-lg">
											<Cpu size={24} />
										</div>
										<h3 className="mb-2 font-bold text-white leading-tight transition-colors group-hover:text-brand-400">
											{course.title}
										</h3>
										<p className="font-black text-gray-500 text-xs uppercase tracking-widest">
											{course.level}
										</p>
									</div>
								</ThreedTiltCard>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Testimonials */}
			<section className="reveal relative overflow-hidden bg-white py-24">
				<div className="absolute top-0 right-0 h-96 w-96 translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-50 opacity-50 blur-[120px]" />
				<div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="mb-16 text-center">
						<h2 className="mb-4 font-black text-4xl text-gray-900 tracking-tight">
							From Naukri to{" "}
							<span className="text-brand-600">Global Tech Giants</span>
						</h2>
						<p className="text-gray-600 text-lg">
							Success stories from our {testimonials.length} most recent
							graduates placed at top MNCs.
						</p>
					</div>

					<div className="relative flex min-h-[450px] items-center justify-center">
						{testimonials.map((t, i) => (
							<div
								className={`absolute inset-0 flex flex-col items-center justify-center text-center transition-all duration-700 ease-in-out ${i === activeTestimonial ? "translate-y-0 scale-100 opacity-100" : "pointer-events-none translate-y-10 scale-95 opacity-0"}`}
								key={t.id}
							>
								<div className="mb-8">
									<div className="mx-auto flex h-24 w-24 rotate-6 transform items-center justify-center rounded-3xl bg-gradient-to-br from-brand-600 to-purple-600 font-black text-4xl text-white shadow-2xl transition-transform duration-500 hover:rotate-0">
										{t.name.charAt(0)}
									</div>
								</div>
								<div className="max-w-3xl px-4">
									<div className="mb-8 flex justify-center gap-1">
										{[...Array(5)].map((_, star) => (
											<Star
												className="fill-amber-400 text-amber-400"
												key={star}
												size={24}
											/>
										))}
									</div>
									<blockquote className="mb-10 font-medium text-2xl text-gray-800 italic leading-snug tracking-tight md:text-4xl">
										"{t.content}"
									</blockquote>
									<div className="space-y-2">
										<h4 className="font-black text-2xl text-gray-900">
											{t.name}
										</h4>
										<div className="inline-block rounded-full bg-brand-50 px-4 py-1.5 font-bold text-brand-700 text-xs uppercase tracking-widest">
											{t.role}
										</div>
									</div>
								</div>
							</div>
						))}
					</div>

					<div className="mt-16 flex flex-col items-center gap-6">
						<div className="flex max-w-2xl flex-wrap justify-center gap-2">
							{testimonials.map((_, i) => (
								<button
									className={`h-2 rounded-full transition-all duration-300 ${i === activeTestimonial ? "w-8 bg-brand-600" : "w-2 bg-gray-200 hover:bg-gray-400"}`}
									key={i}
									onClick={() => setActiveTestimonial(i)}
								/>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Partnerships */}
			<section className="overflow-hidden bg-gray-50 py-24">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="reveal mb-20 text-center">
						<div className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-600/10 px-4 py-2 font-black text-brand-600 text-xs uppercase tracking-[0.2em]">
							<Handshake size={14} /> Global Alliances
						</div>
						<h2 className="font-black text-4xl text-gray-900 tracking-tight md:text-5xl">
							Strategic Partnerships
						</h2>
						<p className="mx-auto mt-4 max-w-2xl text-gray-500 text-lg">
							We collaborate with the world leading hiring platforms and
							academic institutions.
						</p>
					</div>

					<div className="space-y-12">
						{partnerships.map((partner, i) => (
							<div
								className={`group reveal flex flex-col items-center gap-12 lg:flex-row ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
								key={partner.id}
							>
								<div
									className={`text-center lg:w-1/3 lg:text-left ${i % 2 === 0 ? "reveal-left" : "reveal-right"}`}
								>
									<ThreedTiltCard
										className="inline-block w-full max-w-sm"
										intensity={10}
									>
										<div className="rounded-[2.5rem] border border-brand-600 border-gray-100 border-b-8 bg-white p-10 shadow-xl transition-all group-hover:shadow-2xl">
											<h3 className="mb-2 font-black text-4xl text-brand-600 tracking-tighter">
												{partner.name}
											</h3>
											<p className="font-bold text-gray-400 text-xs uppercase leading-relaxed tracking-widest">
												{partner.subtitle}
											</p>
										</div>
									</ThreedTiltCard>
								</div>
								<div
									className={`lg:w-2/3 ${i % 2 === 0 ? "reveal-right" : "reveal-left"}`}
								>
									<div className="relative rounded-[3rem] border border-gray-100 bg-white p-8 shadow-sm transition-colors group-hover:bg-brand-50 lg:p-12">
										<div className="absolute top-10 left-0 h-12 w-1 -translate-x-1/2 rounded-full bg-brand-600 transition-all group-hover:h-24" />
										<p className="font-medium text-gray-600 text-lg leading-relaxed md:text-xl">
											{partner.content}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="relative overflow-hidden bg-brand-900 py-24">
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#438ae6,transparent_70%)] opacity-30" />
				<div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
					<h2 className="mb-8 font-black text-4xl text-white tracking-tight md:text-6xl">
						Ready to Transform Your Career?
					</h2>
					<p className="mx-auto mb-12 max-w-2xl text-brand-100 text-xl leading-relaxed">
						Join 5,000+ students who got hired at top MNCs in 2024. Start your
						journey today with a free trial.
					</p>
					<Link
						className="inline-flex rounded-2xl bg-white px-10 py-5 font-black text-brand-900 text-xl shadow-2xl transition-colors hover:bg-gray-100"
						to="/contact"
					>
						Get Started Now
					</Link>
				</div>
			</section>
		</div>
	);
}
