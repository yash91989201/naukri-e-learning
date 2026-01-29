import { convexQuery } from "@convex-dev/react-query";
import { api } from "@naukri-e-learning/backend/convex/_generated/api";
import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { MessageSquare } from "lucide-react";

export const Route = createFileRoute("/dashboard/contact-response")({
	component: RouteComponent,
});

function RouteComponent() {
	const { data: responses } = useSuspenseQuery(
		convexQuery(api.contactResponses.list)
	);

	const formatDate = (timestamp: number) => {
		return new Date(timestamp).toLocaleString("en-US", {
			month: "short",
			day: "numeric",
			year: "numeric",
			hour: "2-digit",
			minute: "2-digit",
		});
	};

	return (
		<div className="min-h-screen bg-gray-50 pt-32 pb-16">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="reveal mb-12">
					<h1 className="mb-2 font-black text-4xl text-gray-900">
						Contact Responses
					</h1>
					<p className="text-gray-600">
						View all contact form submissions in real-time
					</p>
				</div>

				<div className="reveal mb-6">
					<div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
						<div className="flex items-center justify-between">
							<div>
								<p className="font-bold text-2xl text-gray-900">
									{responses.length}
								</p>
								<p className="text-gray-500 text-sm">Total Submissions</p>
							</div>
							<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100">
								<MessageSquare className="text-brand-600" size={24} />
							</div>
						</div>
					</div>
				</div>

				<div className="reveal overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
					{responses.length === 0 ? (
						<div className="p-12 text-center">
							<MessageSquare className="mx-auto mb-4 text-gray-300" size={48} />
							<h3 className="mb-2 font-bold text-gray-900 text-xl">
								No submissions yet
							</h3>
							<p className="text-gray-500">
								Contact form submissions will appear here in real-time
							</p>
						</div>
					) : (
						<div className="overflow-x-auto">
							<table className="w-full">
								<thead className="border-gray-200 border-b bg-gray-50">
									<tr>
										<th className="px-6 py-4 text-left font-semibold text-gray-900 text-sm">
											Name
										</th>
										<th className="px-6 py-4 text-left font-semibold text-gray-900 text-sm">
											Email
										</th>
										<th className="px-6 py-4 text-left font-semibold text-gray-900 text-sm">
											Phone
										</th>
										<th className="px-6 py-4 text-left font-semibold text-gray-900 text-sm">
											Message
										</th>
										<th className="px-6 py-4 text-left font-semibold text-gray-900 text-sm">
											Certificates
										</th>
										<th className="px-6 py-4 text-left font-semibold text-gray-900 text-sm">
											Submitted At
										</th>
									</tr>
								</thead>
								<tbody className="divide-y divide-gray-100">
									{responses.map((response) => (
										<tr
											className="transition-colors hover:bg-gray-50"
											key={response._id}
										>
											<td className="px-6 py-4 font-medium text-gray-900">
												{response.name}
											</td>
											<td className="px-6 py-4">
												<a
													className="text-brand-600 transition-colors hover:text-brand-700"
													href={`mailto:${response.email}`}
												>
													{response.email}
												</a>
											</td>
											<td className="px-6 py-4 text-gray-600 text-sm">
												{response.phone ? (
													<a
														className="text-brand-600 transition-colors hover:text-brand-700"
														href={`tel:${response.phone}`}
													>
														{response.phone}
													</a>
												) : (
													<span className="text-gray-400">—</span>
												)}
											</td>
											<td className="max-w-md px-6 py-4">
												{response.message ? (
													<p className="line-clamp-2 text-gray-600 text-sm">
														{response.message}
													</p>
												) : (
													<span className="text-gray-400">—</span>
												)}
											</td>
											<td className="px-6 py-4">
												{response.certificates &&
												response.certificates.length > 0 ? (
													<div className="flex flex-wrap gap-1">
														{response.certificates.map((cert) => (
															<span
																className="inline-flex rounded-full bg-brand-100 px-2 py-1 font-medium text-brand-700 text-xs"
																key={cert._id}
															>
																{cert.name}
															</span>
														))}
													</div>
												) : (
													<span className="text-gray-400">—</span>
												)}
											</td>
											<td className="whitespace-nowrap px-6 py-4 text-gray-500 text-sm">
												{formatDate(response.submittedAt)}
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
