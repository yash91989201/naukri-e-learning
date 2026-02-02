import { createFileRoute } from "@tanstack/react-router";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { faqs } from "@/constants";

export const Route = createFileRoute("/help")({
	component: RouteComponent,
});

function RouteComponent() {
	const [openFaq, setOpenFaq] = useState<number | null>(0);

	return (
		<div className="min-h-screen bg-white pt-32 pb-16">
			<div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
				<div className="mb-16 text-center">
					<h1 className="mb-4 font-black text-4xl text-gray-900 md:text-5xl">
						Help Center
					</h1>
					<p className="text-gray-600 text-xl">
						Find answers to common questions about our courses and platform.
					</p>
				</div>

				<div className="space-y-4">
					{faqs.map((faq, i) => (
						<div
							className="overflow-hidden rounded-2xl border border-gray-200"
							key={i}
						>
							<button
								className="flex w-full items-center justify-between bg-gray-50 p-6 text-left transition-colors hover:bg-gray-100"
								onClick={() => setOpenFaq(openFaq === i ? null : i)}
							>
								<span className="font-bold text-gray-900">{faq.question}</span>
								{openFaq === i ? (
									<ChevronUp className="text-brand-600" />
								) : (
									<ChevronDown className="text-gray-400" />
								)}
							</button>
							{openFaq === i && (
								<div className="border-gray-100 border-t bg-white p-6">
									<p className="text-gray-600 leading-relaxed">{faq.answer}</p>
								</div>
							)}
						</div>
					))}
				</div>

				<div className="mt-16 rounded-3xl bg-brand-50 p-8 text-center">
					<h2 className="mb-4 font-bold text-2xl text-gray-900">
						Still have questions?
					</h2>
					<p className="mb-6 text-gray-600">
						Our support team is here to help you 24/7.
					</p>
					<a
						className="inline-flex rounded-xl bg-brand-600 px-8 py-3 font-bold text-white transition-colors hover:bg-brand-700"
						href="mailto:sales@naukrielearning.com"
					>
						Contact Support
					</a>
				</div>
			</div>
		</div>
	);
}
