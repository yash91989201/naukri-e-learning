import { createFileRoute } from "@tanstack/react-router";
import {
	BookOpen,
	CheckCircle2,
	Clock,
	GraduationCap,
	ShieldCheck,
} from "lucide-react";
import ThreedTiltCard from "@/components/threed-tilt-card";

export const Route = createFileRoute("/process")({
	component: RouteComponent,
});

function RouteComponent() {
	const steps = [
		{
			id: "proposal",
			title: "Proposal",
			desc: "Receive a comprehensive proposal email with all necessary enrollment information.",
		},
		{
			id: "enrollment",
			title: "Enrollment",
			desc: "Place your order and complete the secure payment process to begin your journey.",
		},
		{
			id: "onboarding",
			title: "Onboarding",
			desc: "Receive study materials and dedicated support assistance within 10 working days.",
		},
		{
			id: "pre-board",
			title: "Pre-board Scheduling",
			desc: "Book your pre-board exam at a time and date that suits your schedule.",
		},
		{
			id: "expert-connection",
			title: "Expert Connection",
			desc: "Our industry experts connect with you before your scheduled session.",
		},
		{
			id: "material-access",
			title: "Material Access",
			desc: "Gain full access to all related digital materials via your registered email.",
		},
		{
			id: "global-recognition",
			title: "Global Recognition",
			desc: "Your degree is acknowledged internationally from the day of release.",
		},
		{
			id: "training-sessions",
			title: "Training Sessions",
			desc: "Access professional video lectures between 90-120 days for final prep.",
		},
		{
			id: "expert-mentorship",
			title: "Expert Mentorship",
			desc: "Continuous communication with our experts until your final on-board exam.",
		},
		{
			id: "final-certification",
			title: "Final Certification",
			desc: "Receive your soft copy via email within 48–72 hours after completion.",
		},
	];

	return (
		<div className="min-h-screen bg-white">
			{/* Hero Section */}
			<section className="relative overflow-hidden bg-brand-900 py-40 text-white">
				<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
				<div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
					<div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-brand-500/20 px-4 py-2 font-bold text-brand-200 text-xs uppercase tracking-widest">
						<ShieldCheck size={16} /> Verified Journey
					</div>
					<h1 className="mb-8 font-black text-5xl tracking-tight md:text-7xl">
						Certification <span className="text-brand-400">Process</span>
					</h1>
					<p className="mx-auto max-w-3xl font-medium text-brand-100 text-xl leading-relaxed md:text-2xl">
						We are here to bridge the gap in your professional journey and
						assist you in achieving the career upgrade you deserve.
					</p>
				</div>
			</section>

			{/* Main Content Sections */}
			<section className="mx-auto max-w-7xl px-4 py-24">
				<div className="mb-24 grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
					<div className="space-y-12">
						<div className="animate-fade-in-up">
							<h2 className="mb-6 flex items-center gap-3 font-black text-3xl text-gray-900">
								<Clock className="text-brand-600" /> Timeline & Overview
							</h2>
							<p className="mb-6 text-gray-600 text-lg leading-relaxed">
								Thank you for showing your interest in participation. We are
								connecting with you regarding it and we are here to help you for
								the upgrade that you are looking forward in your career.
							</p>
							<div className="rounded-r-3xl border-brand-600 border-l-4 bg-brand-50 p-8">
								<h3 className="mb-4 font-bold text-brand-900 text-xl">
									Program Duration: 90 to 120 Days
								</h3>
								<p className="text-brand-800 leading-relaxed">
									After payment, learners receive the invoice, study materials,
									and video lectures within 10 working days, followed by a
									pre-board exam scheduled within 48 to 72 hours through the
									official exam portal.
								</p>
							</div>
						</div>

						<div
							className="animate-fade-in-up"
							style={{ animationDelay: "0.2s" }}
						>
							<h2 className="mb-6 flex items-center gap-3 font-black text-3xl text-gray-900">
								<GraduationCap className="text-brand-600" /> Examination Process
							</h2>
							<p className="mb-6 text-gray-600 text-lg leading-relaxed">
								Both tests are conducted using an online platform on our server.
								The test is a combination of necessary professional courses and
								includes questions from desired modules.
							</p>
							<ul className="space-y-4">
								{[
									{ id: "time-limit", text: "90-120 minute strict time limit" },
									{ id: "questions", text: "200 objective questionnaires" },
									{
										id: "study-materials",
										text: "Questions derived from provided study materials",
									},
									{
										id: "assistance",
										text: "On-call assistance available during exams",
									},
								].map((item) => (
									<li
										className="flex items-center gap-3 font-medium text-gray-700"
										key={item.id}
									>
										<CheckCircle2
											className="flex-shrink-0 text-brand-600"
											size={20}
										/>
										{item.text}
									</li>
								))}
							</ul>
						</div>
					</div>

					<div className="sticky top-32 space-y-8">
						<ThreedTiltCard className="w-full" intensity={10}>
							<div className="relative overflow-hidden rounded-[3rem] bg-gray-900 p-12 text-white shadow-3xl">
								<div className="absolute top-0 right-0 h-64 w-64 bg-brand-600/20 blur-[100px]" />
								<h3 className="mb-6 font-black text-2xl">
									Method of Obtaining Certification
								</h3>
								<p className="mb-8 text-gray-400 leading-relaxed">
									After completion of your session, we will evaluate your
									performance within 48 to 72 hours and provide your results.
								</p>
								<div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-6">
									<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600">
										<BookOpen size={24} />
									</div>
									<div>
										<h4 className="font-bold">Soft Copy Issuance</h4>
										<p className="text-gray-400 text-xs">
											Sent to registered email immediately after results.
										</p>
									</div>
								</div>
							</div>
						</ThreedTiltCard>

						<div className="rounded-[2rem] border border-gray-100 bg-gray-50 p-8">
							<h3 className="mb-4 font-black text-gray-900">Need Help?</h3>
							<p className="mb-6 text-gray-500 text-sm">
								Our career counselors are available 24/7 to guide you through
								the enrollment and certification process.
							</p>
							<button
								className="w-full rounded-xl border-2 border-brand-600 bg-white py-4 font-bold text-brand-600 transition-all hover:bg-brand-600 hover:text-white"
								type="button"
							>
								Contact Advisor
							</button>
						</div>
					</div>
				</div>

				{/* Step by Step Timeline */}
				<div className="pt-12">
					<div className="mb-16 text-center">
						<h2 className="mb-4 font-black text-4xl text-gray-900">
							Step-by-Step Roadmap
						</h2>
						<p className="text-gray-600 text-lg">
							A clear path from enrollment to international certification.
						</p>
					</div>
					<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
						{steps.map((step, i) => (
							<ThreedTiltCard className="h-full" intensity={15} key={step.id}>
								<div className="group h-full rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-xl">
									<div className="mb-4 font-black text-3xl text-brand-100 transition-colors group-hover:text-brand-500">
										{(i + 1).toString().padStart(2, "0")}
									</div>
									<h4 className="mb-2 font-bold text-gray-900 transition-colors group-hover:text-brand-600">
										{step.title}
									</h4>
									<p className="text-gray-500 text-xs leading-relaxed">
										{step.desc}
									</p>
								</div>
							</ThreedTiltCard>
						))}
					</div>
				</div>
			</section>

			{/* Footer CTA */}
			<section className="border-brand-100 border-y bg-brand-50 py-24">
				<div className="mx-auto max-w-4xl px-4 text-center">
					<h2 className="mb-6 font-black text-4xl text-gray-900">
						Begin Your Upgrade Today
					</h2>
					<p className="mb-10 text-gray-600 text-lg leading-relaxed">
						We appreciate your interest in our professional course certification
						program. Join 5,000+ graduates this year and fill the gap in your
						professional journey.
					</p>
					<div className="flex flex-col justify-center gap-4 sm:flex-row">
						<button
							className="rounded-2xl bg-brand-600 px-10 py-5 font-black text-lg text-white shadow-xl transition-all hover:bg-brand-500 active:scale-95"
							type="button"
						>
							Enroll Now
						</button>
						<button
							className="rounded-2xl border border-gray-200 bg-white px-10 py-5 font-bold text-gray-700 text-lg transition-all hover:bg-gray-50"
							type="button"
						>
							Download Brochure
						</button>
					</div>
				</div>
			</section>
		</div>
	);
}
