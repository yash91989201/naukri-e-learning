import { useNavigate } from "@tanstack/react-router";
import { Star } from "lucide-react";
import type { Course } from "../types";
import ThreedTiltCard from "./threed-tilt-card";

interface CourseCardProps {
	course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
	const navigate = useNavigate();

	const handleEnroll = () => {
		navigate({ to: "/contact", search: { course: course.title } });
	};

	return (
		<ThreedTiltCard className="h-full rounded-xl" glow={true} intensity={5}>
			<button
				className="group relative flex h-full w-full cursor-pointer flex-col items-start justify-start overflow-hidden rounded-xl border border-gray-200 bg-white text-left shadow-sm transition-shadow duration-300 hover:shadow-2xl"
				onClick={handleEnroll}
				type="button"
			>
				<div className="transform-style-3d relative h-44 w-full overflow-hidden">
					<img
						alt={course.title}
						className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
						height={176}
						src={course.image}
						width={320}
					/>
					<div className="translate-z-10 absolute top-3 left-3 flex items-center gap-2 rounded-lg bg-white/95 px-3 py-1.5 font-bold text-gray-900 text-xs shadow-lg backdrop-blur-md transition-transform duration-300 group-hover:translate-y-1">
						{course.providerLogo && (
							<div className="flex h-4 w-4 items-center justify-center rounded-full bg-brand-100 text-[8px]">
								{course.providerLogo[0]}
							</div>
						)}
						<span className="uppercase tracking-wide">{course.provider}</span>
					</div>
				</div>

				<div className="relative z-10 flex flex-grow flex-col bg-white p-5">
					<div className="mb-3 flex items-center gap-2">
						<span className="rounded border border-gray-200 bg-gray-100 px-2 py-0.5 font-bold text-[10px] text-gray-600 uppercase tracking-wider">
							{course.type === "Professional Certificate"
								? "Certificate"
								: course.type}
						</span>
					</div>

					<h3 className="mb-2 font-bold text-gray-900 text-lg leading-tight transition-colors group-hover:text-brand-600">
						{course.title}
					</h3>

					<div className="mt-auto flex items-center justify-between border-gray-100 border-t pt-4">
						<div className="flex items-center gap-1.5 text-sm">
							<span className="flex items-center font-bold text-amber-500">
								{course.rating} <Star className="ml-1 fill-current" size={14} />
							</span>
							<span className="text-gray-400 text-xs">({course.students})</span>
						</div>
						<div className="rounded bg-brand-50 px-2 py-1 font-medium text-brand-600 text-xs">
							{course.level}
						</div>
					</div>
				</div>

				<div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 transform bg-brand-600 transition-transform duration-300 group-hover:scale-x-100" />
			</button>
		</ThreedTiltCard>
	);
};

export default CourseCard;
