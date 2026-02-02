import { Link } from "@tanstack/react-router";
import { Award, ShieldCheck } from "lucide-react";

const Footer = () => {
	return (
		<footer className="border-gray-200 border-t bg-gray-50 pt-20 pb-8">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
					<div className="lg:col-span-2">
						<Link className="mb-6 flex items-center gap-3" to="/">
							<div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg bg-brand-600 shadow-lg">
								<img
									alt="Naukri E-Learning"
									className="h-full w-full object-cover"
									height={512}
									src="/naukri-e-learning.webp"
									width={512}
								/>
							</div>
							<div className="flex flex-col">
								<span className="font-extrabold text-brand-900 text-xl leading-none tracking-tight">
									Naukri
								</span>
								<span className="font-semibold text-[10px] text-brand-500 leading-none tracking-widest">
									ELEARNING
								</span>
							</div>
						</Link>
						<p className="mb-6 max-w-sm text-gray-500 text-sm leading-relaxed">
							Empowering professional growth with industry-recognized
							certifications and 3D immersive learning pathways since 2024.
						</p>
						<div className="flex items-center gap-6">
							<div className="flex items-center gap-2 font-bold text-gray-400 text-xs">
								<Award className="text-brand-600" size={16} /> ISO 9001
								CERTIFIED
							</div>
							<div className="flex items-center gap-2 font-bold text-gray-400 text-xs">
								<ShieldCheck className="text-brand-600" size={16} /> SECURE
								PLATFORM
							</div>
						</div>
					</div>

					<div>
						<h3 className="mb-6 font-bold text-gray-900 text-xs uppercase tracking-widest">
							Platform
						</h3>
						<ul className="space-y-4 font-medium text-gray-500 text-sm">
							<li>
								<Link
									className="transition-colors hover:text-brand-600"
									to="/courses"
								>
									Course Catalog
								</Link>
							</li>
							<li>
								<Link
									className="transition-colors hover:text-brand-600"
									to="/enterprise"
								>
									For Enterprise
								</Link>
							</li>
							<li>
								<Link
									className="transition-colors hover:text-brand-600"
									to="/about"
								>
									Learning Paths
								</Link>
							</li>
							<li>
								<Link
									className="transition-colors hover:text-brand-600"
									to="/contact"
								>
									Admissions
								</Link>
							</li>
							<li>
								<a
									className="transition-colors hover:text-brand-600"
									href="https://exam.naukrielearning.com"
								>
									Student Login
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="mb-6 font-bold text-gray-900 text-xs uppercase tracking-widest">
							Resources
						</h3>
						<ul className="space-y-4 font-medium text-gray-500 text-sm">
							<li>
								<Link
									className="transition-colors hover:text-brand-600"
									to="/help"
								>
									Help Center
								</Link>
							</li>
							<li>
								<Link
									className="transition-colors hover:text-brand-600"
									to="/blog"
								>
									Insights & Blog
								</Link>
							</li>
							<li>
								<Link
									className="transition-colors hover:text-brand-600"
									to="/enterprise"
								>
									Partners
								</Link>
							</li>
							<li>
								<a
									className="transition-colors hover:text-brand-600"
									href="/blog"
								>
									Press Kit
								</a>
							</li>
							<li>
								<Link
									className="transition-colors hover:text-brand-600"
									to="/careers"
								>
									Careers
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<div className="flex flex-col items-center justify-between gap-6 border-gray-200 border-t pt-8 md:flex-row">
					<div className="font-medium text-gray-400 text-sm">
						© 2024 NaukriElearning Global Inc. All rights reserved.
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
