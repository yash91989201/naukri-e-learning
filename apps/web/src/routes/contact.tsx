import { convexQuery, useConvexMutation } from "@convex-dev/react-query";
import { api } from "@naukri-e-learning/backend/convex/_generated/api";
import type { Id } from "@naukri-e-learning/backend/convex/_generated/dataModel";
import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { Search, X } from "lucide-react";
import { useState } from "react";
import { z } from "zod";

export const Route = createFileRoute("/contact")({
	component: RouteComponent,
});

const contactFormSchema = z.object({
	name: z.string().min(2, "Name must be at least 2 characters"),
	email: z.string().email("Please enter a valid email address"),
	phone: z
		.string()
		.min(1, "Phone number is required")
		.regex(
			/^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/,
			"Please enter a valid phone number"
		),
	message: z.string().optional(),
	certificateIds: z.array(z.custom<Id<"certificates">>()),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

function RouteComponent() {
	const { data: certificates } = useSuspenseQuery(
		convexQuery(api.certificates.list)
	);

	const [searchQuery, setSearchQuery] = useState("");
	const [formData, setFormData] = useState<ContactFormData>({
		name: "",
		email: "",
		phone: "",
		message: "",
		certificateIds: [],
	});
	const [errors, setErrors] = useState<
		Partial<Record<keyof ContactFormData, string>>
	>({});
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const submitMutation = useConvexMutation(api.contactResponses.submit);

	const filteredCertificates = certificates.filter((cert) => {
		const query = searchQuery.toLowerCase();
		return (
			cert.name.toLowerCase().includes(query) ||
			cert.description.toLowerCase().includes(query)
		);
	});

	const toggleCertificate = (certId: Id<"certificates">) => {
		setFormData((prev) => ({
			...prev,
			certificateIds: prev.certificateIds.includes(certId)
				? prev.certificateIds.filter((id) => id !== certId)
				: [...prev.certificateIds, certId],
		}));
	};

	const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const input = e.target.value;
		const onlyPhoneCharacters = input.replace(/[^0-9+\-\s().]/g, "");
		setFormData({ ...formData, phone: onlyPhoneCharacters });
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setErrors({});
		setIsSubmitting(true);

		try {
			const validated = contactFormSchema.parse(formData);
			await submitMutation(validated);
			setIsSubmitted(true);
		} catch (error) {
			if (error instanceof z.ZodError) {
				const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
				for (const issue of error.issues) {
					const path = issue.path[0] as keyof ContactFormData;
					if (path) {
						fieldErrors[path] = issue.message;
					}
				}
				setErrors(fieldErrors);
			}
		} finally {
			setIsSubmitting(false);
		}
	};

	if (isSubmitted) {
		return (
			<div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
				<div className="w-full max-w-lg rounded-3xl border-brand-600 border-t-8 bg-white p-10 text-center shadow-2xl">
					<div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
						<svg
							aria-hidden="true"
							className="h-10 w-10 text-green-600"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								d="M5 13l4 4L19 7"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
							/>
						</svg>
					</div>
					<h2 className="mb-4 font-bold text-3xl text-gray-900">
						Application Sent!
					</h2>
					<p className="mb-8 text-gray-600">
						Thank you for your interest. Our team will contact you shortly.
					</p>
					<button
						className="rounded-xl bg-brand-600 px-8 py-3 font-bold text-white transition-colors hover:bg-brand-700"
						onClick={() => {
							window.location.href = "/";
						}}
						type="button"
					>
						Return Home
					</button>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-gray-50 py-16 pt-32">
			<div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
				<div className="mb-12 text-center">
					<h1 className="font-extrabold text-4xl text-gray-900 tracking-tight md:text-5xl">
						Professional Enrollment
					</h1>
					<p className="mt-4 text-gray-600 text-xl">
						Apply for world-class certifications recognized globally.
					</p>
				</div>

				<div className="overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-2xl">
					<div className="grid grid-cols-1 lg:grid-cols-5">
						<div className="relative flex flex-col justify-between overflow-hidden bg-brand-900 p-10 text-white lg:col-span-2">
							<div className="relative z-10">
								<h3 className="mb-8 font-bold text-2xl">Ready to Level Up?</h3>
								<p className="mb-10 text-brand-200 text-sm leading-relaxed">
									Complete the application below. One of our career advisors
									will review your profile and reach out to discuss your
									roadmap.
								</p>
								<div className="space-y-6">
									<div className="flex items-center gap-4">
										<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
											<svg
												aria-hidden="true"
												className="h-5 w-5 text-brand-300"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													d="M5 13l4 4L19 7"
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
												/>
											</svg>
										</div>
										<span className="font-medium text-sm">
											Industry Standard Curriculum
										</span>
									</div>
									<div className="flex items-center gap-4">
										<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
											<svg
												aria-hidden="true"
												className="h-5 w-5 text-brand-300"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													d="M5 13l4 4L19 7"
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
												/>
											</svg>
										</div>
										<span className="font-medium text-sm">
											Expert Instructor Support
										</span>
									</div>
								</div>
							</div>
							<div className="relative z-10 mt-20 border-white/10 border-t pt-10">
								<p className="mb-2 font-bold text-brand-400 text-xs uppercase tracking-widest">
									Sales Office
								</p>
								<p className="mb-3 text-brand-100 text-sm">
									sales@naukrielearning.com
								</p>
								<p className="text-brand-200 text-xs leading-relaxed">
									203, 2ND FLOOR, NORTH BLOCK,
									<br />
									MANIPAL CENTER, FRONT WING,
									<br />
									Dickenson Rd, Bengaluru,
									<br />
									Karnataka 560042
								</p>
							</div>
						</div>

						<div className="p-8 lg:col-span-3">
							<form className="space-y-6" onSubmit={handleSubmit}>
								<div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
									<div className="space-y-2">
										<label
											className="block font-bold text-gray-700 text-sm"
											htmlFor="name"
										>
											Full Name
										</label>
										<input
											className={`w-full rounded-xl border ${errors.name ? "border-red-500" : "border-gray-200"} bg-gray-50 px-4 py-3 outline-none transition-all focus:border-transparent focus:bg-white focus:ring-2 ${errors.name ? "focus:ring-red-500" : "focus:ring-brand-500"}`}
											id="name"
											onChange={(e) =>
												setFormData({ ...formData, name: e.target.value })
											}
											placeholder="e.g. John Doe"
											required
											type="text"
											value={formData.name}
										/>
										{errors.name && (
											<p className="text-red-500 text-sm">{errors.name}</p>
										)}
									</div>
									<div className="space-y-2">
										<label
											className="block font-bold text-gray-700 text-sm"
											htmlFor="email"
										>
											Email Address
										</label>
										<input
											className={`w-full rounded-xl border ${errors.email ? "border-red-500" : "border-gray-200"} bg-gray-50 px-4 py-3 outline-none transition-all focus:border-transparent focus:bg-white focus:ring-2 ${errors.email ? "focus:ring-red-500" : "focus:ring-brand-500"}`}
											id="email"
											onChange={(e) =>
												setFormData({ ...formData, email: e.target.value })
											}
											placeholder="john@example.com"
											required
											type="email"
											value={formData.email}
										/>
										{errors.email && (
											<p className="text-red-500 text-sm">{errors.email}</p>
										)}
									</div>
								</div>

								<div className="space-y-2">
									<label
										className="block font-bold text-gray-700 text-sm"
										htmlFor="phone"
									>
										Phone Number
									</label>
									<input
										className={`w-full rounded-xl border ${errors.phone ? "border-red-500" : "border-gray-200"} bg-gray-50 px-4 py-3 outline-none transition-all focus:border-transparent focus:bg-white focus:ring-2 ${errors.phone ? "focus:ring-red-500" : "focus:ring-brand-500"}`}
										id="phone"
										inputMode="tel"
										maxLength={20}
										onChange={handlePhoneChange}
										placeholder="+1 234 567 8900"
										required
										type="tel"
										value={formData.phone}
									/>
									{errors.phone && (
										<p className="text-red-500 text-sm">{errors.phone}</p>
									)}
								</div>

								<div>
									<div className="mb-3 flex items-center justify-between">
										<div className="block font-bold text-gray-700 text-sm">
											Certificates of Interest
										</div>
										{certificates.length > 0 && (
											<span className="text-gray-500 text-xs">
												{filteredCertificates.length} of {certificates.length}{" "}
												shown
											</span>
										)}
									</div>

									{certificates.length === 0 ? (
										<p className="text-gray-500 text-sm">
											No certificates available at the moment.
										</p>
									) : (
										<>
											<div className="relative mb-3">
												<Search
													className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400"
													size={18}
												/>
												<input
													className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2 pr-10 pl-10 text-sm outline-none transition-all focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-500/20"
													onChange={(e) => setSearchQuery(e.target.value)}
													placeholder="Search certificates..."
													type="text"
													value={searchQuery}
												/>
												{searchQuery && (
													<button
														className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400 transition-colors hover:text-gray-600"
														onClick={() => setSearchQuery("")}
														title="Clear search"
														type="button"
													>
														<X size={18} />
													</button>
												)}
											</div>

											<div className="max-h-[400px] space-y-3 overflow-y-auto rounded-xl border border-gray-200 p-3">
												{filteredCertificates.length === 0 ? (
													<div className="py-8 text-center text-gray-500 text-sm">
														No certificates match your search.
													</div>
												) : (
													filteredCertificates.map((cert) => (
														<label
															className="flex cursor-pointer items-start gap-3 rounded-xl border border-gray-200 bg-gray-50 p-4 transition-all hover:border-brand-300 hover:bg-brand-50"
															key={cert._id}
														>
															<input
																checked={formData.certificateIds.includes(
																	cert._id
																)}
																className="mt-1 h-5 w-5 rounded border-gray-300 text-brand-600 focus:ring-2 focus:ring-brand-500"
																onChange={() => toggleCertificate(cert._id)}
																type="checkbox"
															/>
															<div className="flex-1">
																<div className="font-semibold text-gray-900">
																	{cert.name}
																</div>
																<div className="mt-1 text-gray-600 text-sm">
																	{cert.description}
																</div>
																<div className="mt-2 flex gap-3 text-xs">
																	<span className="rounded-full bg-brand-100 px-2 py-1 text-brand-700">
																		{cert.level}
																	</span>
																	<span className="rounded-full bg-gray-200 px-2 py-1 text-gray-700">
																		{cert.duration}
																	</span>
																</div>
															</div>
														</label>
													))
												)}
											</div>
										</>
									)}
								</div>

								<div>
									<label
										className="mb-2 block font-bold text-gray-700 text-sm"
										htmlFor="message"
									>
										Message (Optional)
									</label>
									<textarea
										className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition-all focus:border-transparent focus:bg-white focus:ring-2 focus:ring-brand-500"
										id="message"
										onChange={(e) =>
											setFormData({ ...formData, message: e.target.value })
										}
										placeholder="Tell us what you hope to achieve..."
										rows={4}
										value={formData.message}
									/>
								</div>

								<button
									className="w-full rounded-2xl bg-brand-600 py-5 font-bold text-white shadow-xl transition-colors hover:bg-brand-700 disabled:cursor-not-allowed disabled:bg-gray-400"
									disabled={isSubmitting}
									type="submit"
								>
									{isSubmitting ? "Submitting..." : "Submit Application"}
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
