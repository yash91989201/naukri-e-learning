import { convexQuery, useConvexMutation } from "@convex-dev/react-query";
import { api } from "@naukri-e-learning/backend/convex/_generated/api";
import type { Id } from "@naukri-e-learning/backend/convex/_generated/dataModel";
import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { Award, Edit, Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import { z } from "zod";

export const Route = createFileRoute("/dashboard/certificates")({
	component: RouteComponent,
});

const certificateSchema = z.object({
	name: z.string().min(1, "Name is required"),
	description: z.string().min(1, "Description is required"),
	duration: z.string().min(1, "Duration is required"),
	level: z.string().min(1, "Level is required"),
});

type CertificateForm = z.infer<typeof certificateSchema>;

function RouteComponent() {
	const { data: certificates } = useSuspenseQuery(
		convexQuery(api.certificates.list)
	);
	const createCert = useConvexMutation(api.certificates.create);
	const updateCert = useConvexMutation(api.certificates.update);
	const removeCert = useConvexMutation(api.certificates.remove);

	const [isFormOpen, setIsFormOpen] = useState(false);
	const [editingId, setEditingId] = useState<Id<"certificates"> | null>(null);
	const [formData, setFormData] = useState<CertificateForm>({
		name: "",
		description: "",
		duration: "N/A",
		level: "Intermediate",
	});
	const [errors, setErrors] = useState<
		Partial<Record<keyof CertificateForm, string>>
	>({});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const resetForm = () => {
		setFormData({
			name: "",
			description: "",
			duration: "N/A",
			level: "Intermediate",
		});
		setErrors({});
		setEditingId(null);
		setIsFormOpen(false);
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setErrors({});
		setIsSubmitting(true);

		try {
			const validated = certificateSchema.parse(formData);

			if (editingId) {
				await updateCert({ id: editingId, ...validated });
			} else {
				await createCert(validated);
			}

			resetForm();
		} catch (error) {
			if (error instanceof z.ZodError) {
				const fieldErrors: Partial<Record<keyof CertificateForm, string>> = {};
				for (const issue of error.issues) {
					if (issue.path[0]) {
						fieldErrors[issue.path[0] as keyof CertificateForm] = issue.message;
					}
				}
				setErrors(fieldErrors);
			}
		} finally {
			setIsSubmitting(false);
		}
	};

	const handleEdit = (cert: {
		_id: Id<"certificates">;
		name: string;
		description: string;
		duration: string;
		level: string;
	}) => {
		setEditingId(cert._id);
		setFormData({
			name: cert.name,
			description: cert.description,
			duration: cert.duration,
			level: cert.level,
		});
		setIsFormOpen(true);
	};

	const handleDelete = async (id: Id<"certificates">) => {
		if (window.confirm("Are you sure you want to delete this certificate?")) {
			await removeCert({ id });
		}
	};

	const formatDate = (timestamp: number) => {
		return new Date(timestamp).toLocaleString("en-US", {
			month: "short",
			day: "numeric",
			year: "numeric",
		});
	};

	return (
		<div className="min-h-screen bg-gray-50 pt-32 pb-16">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="reveal mb-12 flex items-start justify-between">
					<div>
						<h1 className="mb-2 font-black text-4xl text-gray-900">
							Certificates
						</h1>
						<p className="text-gray-600">
							Manage all available certificates and programs
						</p>
					</div>
					<button
						className="flex items-center gap-2 rounded-xl bg-brand-600 px-6 py-3 font-semibold text-white shadow-sm transition-all hover:bg-brand-700 hover:shadow-md"
						onClick={() => setIsFormOpen(true)}
						type="button"
					>
						<Plus size={20} />
						Add Certificate
					</button>
				</div>

				<div className="reveal mb-6">
					<div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
						<div className="flex items-center justify-between">
							<div>
								<p className="font-bold text-2xl text-gray-900">
									{certificates.length}
								</p>
								<p className="text-gray-500 text-sm">Total Certificates</p>
							</div>
							<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100">
								<Award className="text-brand-600" size={24} />
							</div>
						</div>
					</div>
				</div>

				{isFormOpen && (
					<div className="mb-6 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
						<div className="border-gray-200 border-b bg-gray-50 px-6 py-4">
							<h2 className="font-bold text-gray-900 text-lg">
								{editingId ? "Edit Certificate" : "New Certificate"}
							</h2>
						</div>
						<form className="p-6" onSubmit={handleSubmit}>
							<div className="mb-4">
								<label
									className="mb-2 block font-medium text-gray-700 text-sm"
									htmlFor="name"
								>
									Certificate Name *
								</label>
								<input
									className="w-full rounded-lg border border-gray-300 px-4 py-2 transition-colors focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
									id="name"
									onChange={(e) =>
										setFormData((prev) => ({ ...prev, name: e.target.value }))
									}
									placeholder="e.g., Advanced Python Programming"
									type="text"
									value={formData.name}
								/>
								{errors.name && (
									<p className="mt-1 text-red-600 text-sm">{errors.name}</p>
								)}
							</div>

							<div className="mb-6">
								<label
									className="mb-2 block font-medium text-gray-700 text-sm"
									htmlFor="description"
								>
									Description *
								</label>
								<textarea
									className="w-full rounded-lg border border-gray-300 px-4 py-2 transition-colors focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
									id="description"
									onChange={(e) =>
										setFormData((prev) => ({
											...prev,
											description: e.target.value,
										}))
									}
									placeholder="Detailed description of the certificate program..."
									rows={4}
									value={formData.description}
								/>
								{errors.description && (
									<p className="mt-1 text-red-600 text-sm">
										{errors.description}
									</p>
								)}
							</div>

							<div className="flex justify-end gap-3">
								<button
									className="rounded-lg border border-gray-300 px-6 py-2 font-medium text-gray-700 transition-colors hover:bg-gray-50"
									onClick={resetForm}
									type="button"
								>
									Cancel
								</button>
								<button
									className="rounded-lg bg-brand-600 px-6 py-2 font-semibold text-white transition-colors hover:bg-brand-700 disabled:opacity-50"
									disabled={isSubmitting}
									type="submit"
								>
									{(() => {
										if (isSubmitting) {
											return "Saving...";
										}
										if (editingId) {
											return "Update Certificate";
										}
										return "Create Certificate";
									})()}
								</button>
							</div>
						</form>
					</div>
				)}

				<div className="reveal overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
					{certificates.length === 0 ? (
						<div className="p-12 text-center">
							<Award className="mx-auto mb-4 text-gray-300" size={48} />
							<h3 className="mb-2 font-bold text-gray-900 text-xl">
								No certificates yet
							</h3>
							<p className="text-gray-500">
								Click "Add Certificate" to create your first certificate program
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
											Description
										</th>
										<th className="px-6 py-4 text-left font-semibold text-gray-900 text-sm">
											Created
										</th>
										<th className="px-6 py-4 text-right font-semibold text-gray-900 text-sm">
											Actions
										</th>
									</tr>
								</thead>
								<tbody className="divide-y divide-gray-100">
									{certificates.map((cert) => (
										<tr
											className="transition-colors hover:bg-gray-50"
											key={cert._id}
										>
											<td className="px-6 py-4 font-medium text-gray-900">
												{cert.name}
											</td>
											<td className="max-w-md px-6 py-4">
												<p className="line-clamp-2 text-gray-600 text-sm">
													{cert.description}
												</p>
											</td>
											<td className="whitespace-nowrap px-6 py-4 text-gray-500 text-sm">
												{formatDate(cert.createdAt)}
											</td>
											<td className="whitespace-nowrap px-6 py-4 text-right">
												<div className="flex justify-end gap-2">
													<button
														className="rounded-lg p-2 text-brand-600 transition-colors hover:bg-brand-50"
														onClick={() => handleEdit(cert)}
														title="Edit certificate"
														type="button"
													>
														<Edit size={18} />
													</button>
													<button
														className="rounded-lg p-2 text-red-600 transition-colors hover:bg-red-50"
														onClick={() => handleDelete(cert._id)}
														title="Delete certificate"
														type="button"
													>
														<Trash2 size={18} />
													</button>
												</div>
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
