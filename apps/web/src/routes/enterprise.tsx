import { createFileRoute } from "@tanstack/react-router";
import {
	BarChart3,
	Building2,
	CheckCircle2,
	Shield,
	Users,
	Zap,
} from "lucide-react";
import ThreedTiltCard from "@/components/threed-tilt-card";

export const Route = createFileRoute("/enterprise")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="min-h-screen bg-white pt-32">
			<section className="mx-auto max-w-7xl overflow-hidden px-4 py-20">
				<div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
					<div className="space-y-8">
						<div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 font-bold text-blue-600 text-sm">
							<Building2 size={16} /> FOR TEAMS & ORGANIZATIONS
						</div>
						<h1 className="font-black text-5xl text-gray-900 leading-tight md:text-6xl">
							Transform your <span className="text-brand-600">workforce</span>{" "}
							for the future.
						</h1>
						<p className="max-w-xl text-gray-600 text-xl leading-relaxed">
							Empower your team with world-class certifications. Integrated
							analytics, dedicated support, and scalable learning pathways.
						</p>
						<div className="flex flex-col gap-4 sm:flex-row">
							<button
								className="rounded-2xl bg-brand-600 px-8 py-4 font-bold text-white shadow-xl transition-all hover:bg-brand-700"
								type="button"
							>
								Request a Demo
							</button>
							<button
								className="rounded-2xl bg-gray-100 px-8 py-4 font-bold text-gray-700 transition-all hover:bg-gray-200"
								type="button"
							>
								View Case Studies
							</button>
						</div>
					</div>
					<div className="relative">
						<ThreedTiltCard className="w-full" intensity={10}>
							<div className="relative overflow-hidden rounded-[2.5rem] bg-gray-900 p-8 text-white shadow-3xl">
								<div className="absolute top-0 right-0 h-32 w-32 bg-blue-500/20 blur-3xl" />
								<h3 className="mb-8 font-bold text-2xl">Admin Dashboard</h3>
								<div className="space-y-6">
									<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
										<div className="mb-2 flex items-center justify-between">
											<span className="font-medium text-sm opacity-60">
												Completion Rate
											</span>
											<span className="font-bold text-green-400 text-sm">
												+12%
											</span>
										</div>
										<div className="h-2 w-full rounded-full bg-white/10">
											<div className="h-full w-[88%] rounded-full bg-blue-400" />
										</div>
									</div>
									<div className="grid grid-cols-2 gap-4">
										<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
											<div className="font-bold text-3xl">1,240</div>
											<div className="mt-1 font-bold text-xs uppercase tracking-widest opacity-50">
												Active Learners
											</div>
										</div>
										<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
											<div className="font-bold text-3xl">85</div>
											<div className="mt-1 font-bold text-xs uppercase tracking-widest opacity-50">
												Certifications
											</div>
										</div>
									</div>
								</div>
							</div>
						</ThreedTiltCard>
					</div>
				</div>
			</section>

			<section className="bg-gray-50 py-24">
				<div className="mx-auto max-w-7xl px-4">
					<div className="mb-16 text-center">
						<h2 className="font-bold text-4xl text-gray-900">
							Built for Enterprise Scale
						</h2>
					</div>
					<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
						{[
							{
								id: "sso-security",
								icon: <Shield className="text-brand-600" size={32} />,
								title: "SSO & Security",
								desc: "Seamless integration with Okta, Azure AD, and more.",
							},
							{
								id: "deep-analytics",
								icon: <BarChart3 className="text-brand-600" size={32} />,
								title: "Deep Analytics",
								desc: "Track every employee's progress with real-time dashboards.",
							},
							{
								id: "custom-pathways",
								icon: <Zap className="text-brand-600" size={32} />,
								title: "Custom Pathways",
								desc: "Build specialized certification tracks for your unique needs.",
							},
							{
								id: "dedicated-support",
								icon: <Users className="text-brand-600" size={32} />,
								title: "Dedicated Support",
								desc: "24/7 account management for enterprise partners.",
							},
							{
								id: "compliance-ready",
								icon: <CheckCircle2 className="text-brand-600" size={32} />,
								title: "Compliance Ready",
								desc: "Auto-reporting for regulatory skill compliance.",
							},
							{
								id: "white-labeling",
								icon: <Building2 className="text-brand-600" size={32} />,
								title: "White Labeling",
								desc: "Brand the learning portal with your company colors.",
							},
						].map((item) => (
							<div
								className="rounded-3xl border border-gray-100 bg-white p-10 transition-all hover:shadow-xl"
								key={item.id}
							>
								<div className="mb-6">{item.icon}</div>
								<h3 className="mb-3 font-bold text-gray-900 text-xl">
									{item.title}
								</h3>
								<p className="text-gray-500 leading-relaxed">{item.desc}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="overflow-hidden bg-white py-24">
				<div className="mx-auto max-w-7xl px-4">
					<p className="mb-12 text-center font-bold text-gray-400 text-xs uppercase tracking-widest">
						Empowering teams at
					</p>
					<div className="grid grid-cols-2 items-center gap-8 opacity-40 grayscale md:grid-cols-6">
						<div className="flex justify-center font-black text-xl italic">
							SAMSUNG
						</div>
						<div className="flex justify-center font-black text-xl italic">
							TESLA
						</div>
						<div className="flex justify-center font-black text-xl italic">
							ORACLE
						</div>
						<div className="flex justify-center font-black text-xl italic">
							NIKE
						</div>
						<div className="flex justify-center font-black text-xl italic">
							ADOBE
						</div>
						<div className="flex justify-center font-black text-xl italic">
							SPOTIFY
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
