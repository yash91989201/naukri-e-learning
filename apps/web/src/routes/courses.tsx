import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { useState } from "react";
import CourseCard from "@/components/course-card";
import { courses } from "@/constants";

export const Route = createFileRoute("/courses")({
	component: RouteComponent,
});

function RouteComponent() {
	const [searchQuery, setSearchQuery] = useState("");
	const [selectedCategory, setSelectedCategory] = useState("All");

	const filteredCourses = courses.filter((course) => {
		const matchesSearch = course.title
			.toLowerCase()
			.includes(searchQuery.toLowerCase());
		const matchesCategory =
			selectedCategory === "All" || course.category === selectedCategory;
		return matchesSearch && matchesCategory;
	});

	const categories = [
		"All",
		"Artificial Intelligence",
		"IT & Software",
		"Management",
		"Engineering",
		"Construction",
		"Finance",
		"Quality & Safety",
		"HR & Compliance",
		"Design & Marketing",
	];

	return (
		<div className="min-h-screen bg-gray-50 pt-32 pb-16">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div className="mb-12 text-center">
					<h1 className="mb-4 font-black text-4xl text-gray-900 md:text-5xl">
						Explore Our Catalog
					</h1>
					<p className="mx-auto max-w-2xl text-gray-600 text-xl">
						Discover {courses.length}+ industry-recognized certification
						programs designed by experts.
					</p>
				</div>

				{/* Search & Filter */}
				<div className="mb-12 rounded-2xl bg-white p-6 shadow-lg">
					<div className="flex flex-col gap-4 md:flex-row">
						<div className="relative flex-grow">
							<Search
								className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400"
								size={20}
							/>
							<input
								className="w-full rounded-xl border-2 border-transparent bg-gray-100 py-3 pr-4 pl-12 outline-none transition-all focus:border-brand-500 focus:bg-white"
								onChange={(e) => setSearchQuery(e.target.value)}
								placeholder="Search courses..."
								type="text"
								value={searchQuery}
							/>
						</div>
						<select
							className="cursor-pointer rounded-xl bg-gray-100 px-6 py-3 font-bold text-gray-700 outline-none focus:ring-2 focus:ring-brand-500"
							onChange={(e) => setSelectedCategory(e.target.value)}
							value={selectedCategory}
						>
							{categories.map((cat) => (
								<option key={cat} value={cat}>
									{cat}
								</option>
							))}
						</select>
					</div>
				</div>

				{/* Course Grid */}
				<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
					{filteredCourses.map((course) => (
						<CourseCard course={course} key={course.id} />
					))}
				</div>

				{filteredCourses.length === 0 && (
					<div className="py-20 text-center">
						<p className="text-gray-500 text-lg">
							No courses found matching your criteria.
						</p>
					</div>
				)}
			</div>
		</div>
	);
}
