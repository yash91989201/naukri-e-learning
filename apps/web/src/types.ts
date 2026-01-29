export interface Course {
	id: string;
	title: string;
	provider: string;
	providerLogo?: string;
	rating: number;
	students: string;
	level: "Beginner" | "Intermediate" | "Advanced";
	type: "Professional Certificate" | "Specialization" | "Course";
	image: string;
	category: string;
}

export interface Testimonial {
	id: string;
	name: string;
	role: string;
	content: string;
	image?: string;
}

export interface Category {
	id: string;
	name: string;
	icon: string;
}
