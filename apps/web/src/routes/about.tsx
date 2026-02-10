import { createFileRoute } from "@tanstack/react-router";
import {
	Award,
	BookOpen,
	Building2,
	CheckCircle2,
	Globe,
	GraduationCap,
	Heart,
	Microscope,
	Shield,
	Target,
	Zap,
} from "lucide-react";
import ThreedTiltCard from "@/components/threed-tilt-card";

export const Route = createFileRoute("/about")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="min-h-screen bg-white">
			<div className="relative overflow-hidden bg-brand-900 py-40 text-white">
				<div className="absolute inset-0 opacity-20">
					<div className="absolute top-0 right-0 h-full w-1/2 skew-x-12 transform bg-gradient-to-l from-brand-600 to-transparent" />
					<div className="absolute bottom-0 left-0 h-full w-1/3 -skew-x-12 transform bg-gradient-to-r from-purple-600/30 to-transparent" />
				</div>
				<div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
					<div className="mb-8 inline-block rounded-full border border-brand-400/30 bg-brand-400/20 px-4 py-1.5 font-bold text-brand-200 text-sm uppercase tracking-widest backdrop-blur-md">
						Our Mission
					</div>
					<h1 className="mb-8 font-extrabold text-6xl leading-tight tracking-tight md:text-7xl">
						Empowering the World <br />
						Through{" "}
						<span className="bg-gradient-to-r from-brand-400 to-blue-300 bg-clip-text text-transparent">
							Knowledge
						</span>
					</h1>
					<p className="mx-auto max-w-3xl text-brand-100 text-xl leading-relaxed md:text-2xl">
						We are NaukriElearning. We provide the bridges between human
						potential and global career success through immersive digital
						education.
					</p>
				</div>
			</div>

			<div className="relative z-20 -mt-10 bg-white py-20">
				<div className="mx-auto max-w-7xl px-4">
					<div className="grid grid-cols-2 gap-8 rounded-[3rem] border border-gray-100 bg-white p-12 text-center shadow-[0_30px_60px_rgba(0,0,0,0.1)] lg:grid-cols-4">
						<div>
							<div className="mb-2 font-black text-5xl text-brand-600">
								80M+
							</div>
							<div className="font-bold text-gray-500 text-xs uppercase tracking-widest">
								Active Learners
							</div>
						</div>
						<div className="hidden border-gray-100 border-l lg:block" />
						<div>
							<div className="mb-2 font-black text-5xl text-brand-600">
								170+
							</div>
							<div className="font-bold text-gray-500 text-xs uppercase tracking-widest">
								Certifications
							</div>
						</div>
						<div className="hidden border-gray-100 border-l lg:block" />
						<div>
							<div className="mb-2 font-black text-5xl text-brand-600">
								150+
							</div>
							<div className="font-bold text-gray-500 text-xs uppercase tracking-widest">
								Hiring Partners
							</div>
						</div>
						<div className="hidden border-gray-100 border-l lg:block" />
						<div>
							<div className="mb-2 font-black text-5xl text-brand-600">4.8</div>
							<div className="font-bold text-gray-500 text-xs uppercase tracking-widest">
								Average Rating
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="mx-auto max-w-7xl px-4 py-24">
				<div className="mb-32 grid grid-cols-1 items-center gap-20 md:grid-cols-2">
					<div>
						<h2 className="mb-8 font-bold text-4xl text-gray-900 leading-tight md:text-5xl">
							The Story Behind <br />
							the Cube
						</h2>
						<p className="mb-6 text-gray-600 text-lg leading-relaxed">
							What started as a small initiative to provide affordable
							vocational training in 2024 has grown into a global powerhouse of
							professional education. Our 'Cube' logo represents the
							multidimensional nature of skill-building: Theory, Practice, and
							Verification.
						</p>
						<p className="mb-8 text-gray-600 text-lg leading-relaxed">
							Today, we host over 170+ professional certifications ranging from
							Mechanical Engineering to advanced Cloud Computing, partnering
							with the world's most innovative companies.
						</p>
						<div className="grid grid-cols-2 gap-4">
							<div className="rounded-2xl border border-brand-100 bg-brand-50 p-6">
								<Award className="mb-3 text-brand-600" size={32} />
								<div className="font-bold text-2xl text-gray-900">
									#1 Platform
								</div>
								<div className="font-medium text-gray-500 text-sm uppercase tracking-wider">
									Skill Certification
								</div>
							</div>
							<div className="rounded-2xl border border-brand-100 bg-brand-50 p-6">
								<Globe className="mb-3 text-brand-600" size={32} />
								<div className="font-bold text-2xl text-gray-900">Global</div>
								<div className="font-medium text-gray-500 text-sm uppercase tracking-wider">
									190+ Countries
								</div>
							</div>
						</div>
					</div>
					<div>
						<ThreedTiltCard className="w-full" intensity={15}>
							<div className="rounded-3xl border border-gray-100 bg-white p-3 shadow-2xl">
								<img
									alt="Mission"
									className="h-[550px] w-full rounded-2xl object-cover"
									height={550}
									src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80"
									width={800}
								/>
							</div>
						</ThreedTiltCard>
					</div>
				</div>

				<div className="relative mb-32 overflow-hidden rounded-[4rem] bg-gray-900 p-12 text-white md:p-20">
					<div className="absolute top-0 left-0 h-full w-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
					<div className="relative z-10">
						<div className="mb-16 text-center">
							<h2 className="mb-4 font-bold text-4xl md:text-5xl">
								The Learning Methodology
							</h2>
							<p className="text-brand-300 text-lg">
								We don't just teach. We build careers using a proven 3-pillar
								system.
							</p>
						</div>
						<div className="grid grid-cols-1 gap-12 md:grid-cols-3">
							<div className="space-y-6">
								<div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-600 shadow-[0_0_30px_rgba(0,86,210,0.4)]">
									<BookOpen size={32} />
								</div>
								<h3 className="font-bold text-2xl">Immersive Content</h3>
								<p className="text-gray-400 leading-relaxed">
									Curated by industry veterans, our high-definition video
									lessons and interactive theory modules ensure you grasp
									complex concepts with 3D visualizations.
								</p>
							</div>
							<div className="space-y-6">
								<div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-600 shadow-[0_0_30px_rgba(147,51,234,0.4)]">
									<Microscope size={32} />
								</div>
								<h3 className="font-bold text-2xl">Hands-On Validation</h3>
								<p className="text-gray-400 leading-relaxed">
									Knowledge is nothing without application. Our platform
									includes virtual sandboxes and real-world project simulators
									to test your skills in real-time.
								</p>
							</div>
							<div className="space-y-6">
								<div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.4)]">
									<GraduationCap size={32} />
								</div>
								<h3 className="font-bold text-2xl">Verified Credentials</h3>
								<p className="text-gray-400 leading-relaxed">
									Every certification is backed by our blockchain-verified
									system, ensuring your achievements are instantly recognizable
									and trustable by any employer.
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="mb-32">
					<div className="mb-16 text-center">
						<h2 className="mb-4 font-bold text-4xl text-gray-900 md:text-5xl">
							Our Core Values
						</h2>
						<p className="text-gray-500 text-lg">
							The compass that guides our every decision.
						</p>
					</div>
					<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
						{[
							{
								id: "accessibility",
								icon: <Target className="text-white" />,
								title: "Accessibility",
								desc: "Learning should be available to everyone, everywhere, regardless of background.",
								color: "bg-blue-500",
							},
							{
								id: "integrity",
								icon: <Shield className="text-white" />,
								title: "Integrity",
								desc: "Our certifications represent real skills verified by rigorous standards.",
								color: "bg-green-500",
							},
							{
								id: "empathy",
								icon: <Heart className="text-white" />,
								title: "Empathy",
								desc: "We understand the career struggles of modern professionals and build tools to help.",
								color: "bg-red-500",
							},
							{
								id: "innovation",
								icon: <Zap className="text-white" />,
								title: "Innovation",
								desc: "We constantly update our curriculum to match the evolving industry demands.",
								color: "bg-purple-500",
							},
							{
								id: "diversity",
								icon: <Globe className="text-white" />,
								title: "Diversity",
								desc: "We celebrate the global variety of perspectives in our learning community.",
								color: "bg-orange-500",
							},
							{
								id: "excellence",
								icon: <Award className="text-white" />,
								title: "Excellence",
								desc: "We strive for 100% student satisfaction and career transformation.",
								color: "bg-brand-600",
							},
						].map((val) => (
							<div
								className="group rounded-3xl border border-gray-100 bg-gray-50 p-10 transition-all hover:bg-white hover:shadow-xl"
								key={val.id}
							>
								<div
									className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl shadow-lg transition-transform group-hover:rotate-6 ${val.color}`}
								>
									{val.icon}
								</div>
								<h3 className="mb-4 font-bold text-2xl text-gray-900 transition-colors group-hover:text-brand-600">
									{val.title}
								</h3>
								<p className="text-gray-600 leading-relaxed">{val.desc}</p>
							</div>
						))}
					</div>
				</div>

				<div className="mb-32 border-gray-100 border-y py-20">
					<div className="mb-16 text-center">
						<h2 className="font-bold text-3xl text-gray-900">
							Strategic Alliances
						</h2>
						<p className="mt-2 text-gray-500">
							Working with the organizations that define the global industry
							standards.
						</p>
					</div>
					<div className="grid grid-cols-2 items-center gap-12 opacity-50 grayscale transition-all duration-700 hover:grayscale-0 md:grid-cols-5">
						<div className="text-center font-black text-2xl">PMI®</div>
						<div className="text-center font-black text-2xl">AWS</div>
						<div className="text-center font-black text-2xl">ASQ</div>
						<div className="text-center font-black text-2xl">OSHA</div>
						<div className="text-center font-black text-2xl">CISCO</div>
					</div>
				</div>

				<div className="mb-32">
					<div className="grid grid-cols-1 items-center gap-12 rounded-[3rem] bg-[#F0F6FF] p-12 lg:grid-cols-2 lg:p-16">
						<div className="space-y-6">
							<div className="inline-flex items-center gap-2 rounded-full bg-[#0056D2] px-4 py-2">
								<Building2 className="text-white" size={18} />
								<span className="font-bold text-sm text-white uppercase tracking-wider">
									Finance Branch Verification
								</span>
							</div>
							<h2 className="max-w-xl font-bold text-4xl text-gray-900 leading-tight md:text-5xl">
								Corporate Financial
								<br />
								<span className="text-[#0056D2]">Trust & Transparency</span>
							</h2>
							<p className="max-w-lg text-gray-600 text-lg leading-relaxed">
								At NaukriElearning, we maintain strictly verified financial
								channels for all enterprise transactions through our official
								partner, ensuring the highest standards of accountability.
							</p>
							<div className="flex items-center gap-2 text-green-600">
								<CheckCircle2 className="text-green-600" size={20} />
								<span className="font-semibold">
									Verified Corporate Branch Profile
								</span>
							</div>
						</div>
						<div className="rounded-3xl bg-white p-8 shadow-lg">
							<div className="flex flex-col gap-6 md:flex-row md:items-center">
								<div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[#F0F6FF]">
									<Building2 className="text-[#0056D2]" size={36} />
								</div>
								<div className="space-y-4">
									<div>
										<p className="mb-1 font-bold text-gray-400 text-xs uppercase tracking-wider">
											Company Name
										</p>
										<p className="font-bold text-gray-900 text-lg">
											AVINYA INFOTECH
										</p>
									</div>
									<div>
										<p className="mb-1 font-bold text-gray-400 text-xs uppercase tracking-wider">
											Bank Name
										</p>
										<p className="font-bold text-gray-900 text-lg">
											State Bank of India (SBI)
										</p>
									</div>
									<div>
										<p className="mb-1 font-bold text-gray-400 text-xs uppercase tracking-wider">
											Branch Address
										</p>
										<p className="font-bold text-gray-700 leading-relaxed">
											452 G T Road, Chhehratta Tehsil, Amritsar District,
											<br />
											Punjab - 143105, India
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="mb-32">
					<h2 className="mb-4 font-bold text-4xl text-gray-900">
						Board of Directors
					</h2>
					<div className="mb-10 h-1.5 w-20 rounded-full bg-brand-600" />
					<p className="mb-12 max-w-3xl text-gray-600 text-lg leading-relaxed">
						Our chapter is guided by experienced professionals in finance,
						technology, and advisory roles who are committed to ensuring
						organizational excellence and advancing the project management
						profession.
					</p>
					<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
						<div className="border-brand-600 border-t-4 bg-white p-8 shadow-sm">
							<h3 className="mb-2 font-bold text-2xl text-gray-900">Rajaram</h3>
							<p className="mb-4 font-bold text-brand-600 text-xs uppercase tracking-wider">
								Account Manager
							</p>
							<p className="text-gray-600 leading-relaxed">
								Rajaram oversees the financial operations and ensures fiscal
								responsibility for the chapter&apos;s initiatives and programs.
							</p>
						</div>
						<div className="border-brand-600 border-t-4 bg-white p-8 shadow-sm">
							<h3 className="mb-2 font-bold text-2xl text-gray-900">
								Ramprasad
							</h3>
							<p className="mb-4 font-bold text-brand-600 text-xs uppercase tracking-wider">
								Chief Counselor
							</p>
							<p className="text-gray-600 leading-relaxed">
								Ramprasad provides strategic guidance and advisory support to
								ensure alignment with Naukri E-Learning standards and chapter
								objectives.
							</p>
						</div>
						<div className="border-brand-600 border-t-4 bg-white p-8 shadow-sm">
							<h3 className="mb-2 font-bold text-2xl text-gray-900">
								Prat Willson
							</h3>
							<p className="mb-4 font-bold text-brand-600 text-xs uppercase tracking-wider">
								Chief Technology Officer
							</p>
							<p className="text-gray-600 leading-relaxed">
								Prat leads the technological infrastructure and digital
								initiatives to enhance member engagement and operational
								efficiency.
							</p>
						</div>
						<div className="border-brand-600 border-t-4 bg-white p-8 shadow-sm">
							<h3 className="mb-2 font-bold text-2xl text-gray-900">
								Akhilesh
							</h3>
							<p className="mb-4 font-bold text-brand-600 text-xs uppercase tracking-wider">
								Financial Chief Officer
							</p>
							<p className="text-gray-600 leading-relaxed">
								Akhilesh manages financial accounts, budgeting, and reporting to
								maintain transparent and efficient financial operations.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="bg-brand-50 py-24">
				<div className="mx-auto max-w-4xl px-4 text-center">
					<h2 className="mb-8 font-bold text-4xl text-gray-900">
						Join the learning revolution today.
					</h2>
					<div className="flex flex-col justify-center gap-4 sm:flex-row">
						<button
							className="rounded-2xl bg-brand-600 px-8 py-4 font-bold text-white shadow-xl transition-all hover:bg-brand-700"
							type="button"
						>
							Enroll Now
						</button>
						<button
							className="rounded-2xl border border-gray-200 bg-white px-8 py-4 font-bold text-gray-700 transition-all hover:bg-gray-50"
							type="button"
						>
							Careers at Naukri
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
