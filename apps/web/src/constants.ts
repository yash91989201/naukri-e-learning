import type { Category, Course, Testimonial } from "./types";

export const categories: Category[] = [
	{ id: "it", name: "IT & Software", icon: "code" },
	{ id: "ai", name: "Artificial Intelligence", icon: "cpu" },
	{ id: "mgmt", name: "Management", icon: "briefcase" },
	{ id: "eng", name: "Engineering", icon: "settings" },
	{ id: "const", name: "Construction", icon: "hammer" },
	{ id: "qs", name: "Quality & Safety", icon: "shield-check" },
	{ id: "hr", name: "HR & Compliance", icon: "users" },
	{ id: "fin", name: "Finance", icon: "dollar-sign" },
	{ id: "design", name: "Design & Marketing", icon: "palette" },
];

export const partnerships = [
	{
		id: "naukri",
		name: "Naukri.com",
		subtitle: "India's Leading Career Platform",
		content:
			"Through our partnership with Naukri.com, we provide job seekers and premium subscribers with access to exclusive certification programs, carefully curated to improve employability and enhance career readiness. This collaboration supports thousands of active learners with targeted training in Project Management, Agile, Cybersecurity, Cloud Computing, and more—ensuring they stay relevant in a fast-changing job landscape.",
	},
	{
		id: "indeed",
		name: "Indeed.com",
		subtitle: "Global Job & Hiring Marketplace",
		content:
			"Our association with Indeed.com allows us to offer tailored certification and upskilling opportunities to professionals actively seeking growth or career transitions. We work closely with Indeed's team to design value-driven learning bundles that align with top job trends and help learners strengthen their profiles with globally recognized credentials, improving hiring potential and career progression.",
	},
	{
		id: "tka",
		name: "The Knowledge Academy",
		subtitle: "Global Training & Certification Leader",
		content:
			"In collaboration with The Knowledge Academy, we co-create and deliver high-quality, globally compliant courseware for various professional domains including Project Management, IT, and Agile practices. This partnership allows us to combine our instructional expertise with their international reach, enabling broader access to PMI-certified training, cloud technology programs, and cyber-risk certifications for learners across continents.",
	},
	{
		id: "tata",
		name: "Tata Group",
		subtitle: "Empowering Internal Capabilities Across Sectors",
		content:
			"Working with multiple companies under the Tata Group umbrella, we provide customized internal training and employee development programs that address project management maturity, agile transformation, and digital readiness. Our PMI-certified programs are designed to align with Tata's operational excellence initiatives, ensuring that their employees are equipped to manage complex projects, lead agile teams, and drive innovation across departments.",
	},
	{
		id: "infosys",
		name: "Infosys",
		subtitle: "Strengthening Tech Delivery Through Certification",
		content:
			"Our training partnership with Infosys focuses on building strong project management capabilities and agile readiness among their delivery teams. We provide structured training tracks for fresh graduates, lateral hires, and project managers, enabling them to earn certifications like PMP, PMI-ACP, and AWS Certified Solutions Architect. The goal is to strengthen Infosys's delivery excellence and ensure their teams remain competitive and globally aligned.",
	},
];

const rawCourseNames = [
	"Generative AI Masterclass",
	"Prompt Engineering for Professionals",
	"LLM Operations (LLMOps) Certification",
	"AI Ethics & Governance",
	"Machine Learning with Python Expert",
	"Natural Language Processing Specialist",
	"Computer Vision Professional",
	"AI for Business Leaders",
	"Data Science & AI Strategy",
	"Administrative Manager",
	"Certified Administrative Professional",
	"Certified Cost Engineer",
	"Certified Cost Estimator / Analyst",
	"Certified Construction Industry Financial Professional",
	"Certified Construction Manager",
	"Certified Construction Professional",
	"Certified Management Accountant",
	"Certified Manager Certification",
	"Certified Mechanical Engineer",
	"Certified Piping Engineer",
	"Certified Professional in Supply Management",
	"Certified Purchasing Professional",
	"Certified Purchasing Manager",
	"Certified in Production and Inventory Management",
	"Certified in Financial Management",
	"Certified Quality Auditor",
	"Certified Quality Engineer",
	"Certified Site Supervisor",
	"Certified Sales Executive",
	"Certified Safety Professional",
	"Certified Sales Professional",
	"Certified Supply Chain Professional",
	"Certified Survey Technician",
	"Certified Land Surveyor",
	"Certified Estimating Professional",
	"Certified Electrical Engineer",
	"Construction Health and Safety Technician",
	"Certified Information Systems Auditor",
	"Certified Information Security Manager",
	"Facility Management Professional",
	"ITIL Foundation Certification",
	"Lean Six Sigma Green Belt",
	"LEED AP Building Design and Construction",
	"Master Project Manager",
	"Master Quality Manager",
	"Maintenance Management Professional",
	"Microsoft Modern Desktop Administrator",
	"Professional Certified Marketer",
	"Professional Engineer – Electrical",
	"Professional Engineer – Mechanical",
	"Program Management Professional",
	"Project Management Professional",
	"Quality Control Inspector Certification",
	"Scrum Master Certification",
	"Senior Professional in Human Resources",
	"Six Sigma Certification",
	"Welding Inspector Certification",
	"CompTIA A+",
	"Cisco Certified Network Associate",
	"Engineer in Training Certification",
	"OSHA Safety Certificate",
	"Certified Inventory Control Supervisor",
	"Certified Store Manager",
	"Certified Professional Supervisor",
	"Microsoft Project Professional Certification",
	"Oracle Primavera",
];

const getCategoryFromName = (name: string): string => {
	if (
		name.match(
			/AI|Machine Learning|Natural Language|Computer Vision|LLM|Prompt/i
		)
	)
		return "Artificial Intelligence";
	if (
		name.match(
			/ITIL|CompTIA|Cisco|AWS|Google|Microsoft|Oracle|SAP|Java|Cloud|Cyber|Security|Network|Developer|Software|Programmer|DevOps|Docker|iOS|Swift|UX|BIM|Digital|IT/i
		)
	)
		return "IT & Software";
	if (
		name.match(
			/Construction|Site|Survey|Land|Bridge|Civil|Revit|Building|LEED|Project Management|Foreman|Contractor|Interior/i
		)
	)
		return "Construction";
	if (
		name.match(
			/Engineer|Mechanical|Electrical|Piping|Survey|Technician|Maintenance|SP3D|DCS|Drafter|AutoCAD|Calibration|Manufacturing/i
		)
	)
		return "Engineering";
	if (
		name.match(
			/Accounting|Financial|Finance|Cost|Budget|Credit|Revenue|Pricing|Accountant/i
		)
	)
		return "Finance";
	if (
		name.match(
			/Quality|Safety|OSHA|HSE|Technologist|Inspector|Auditor|ISO|Compliance|Six Sigma|Lean|Welding|Risk/i
		)
	)
		return "Quality & Safety";
	if (
		name.match(
			/Human Resources|SHRM|Sourcing|Compliance|Ethics|Governance|Privacy|Intellectual Property|Laws|Resume/i
		)
	)
		return "HR & Compliance";
	if (
		name.match(
			/Marketing|Sales|Customer Success|Visual Merchandising|Marketer/i
		)
	)
		return "Design & Marketing";
	return "Management";
};

const getProviderFromName = (name: string): string => {
	if (name.includes("AWS")) return "Amazon Web Services";
	if (name.includes("Google")) return "Google";
	if (name.includes("Microsoft")) return "Microsoft";
	if (name.includes("Oracle")) return "Oracle";
	if (name.includes("Cisco")) return "Cisco Systems";
	if (
		name.includes("AutoCAD") ||
		name.includes("Autodesk") ||
		name.includes("Revit")
	)
		return "Autodesk";
	if (name.includes("ISO")) return "ISO Certification";
	if (name.includes("SAP")) return "SAP SE";
	if (name.includes("SHRM")) return "SHRM";
	if (name.includes("Six Sigma")) return "ASQ";
	if (
		name.includes("PMI") ||
		name.includes("Project Management") ||
		name.includes("PMP")
	)
		return "PMI";
	return "Industry Association";
};

export const courses: Course[] = rawCourseNames.map((name, index) => ({
	id: `course-${index + 1}`,
	title: name,
	provider: getProviderFromName(name),
	rating: Number((4.5 + Math.random() * 0.4).toFixed(1)),
	students: `${10 + Math.floor(Math.random() * 150)}k students`,
	level:
		index % 3 === 0
			? "Beginner"
			: index % 3 === 1
				? "Intermediate"
				: "Advanced",
	type: name.includes("Certificate")
		? "Professional Certificate"
		: "Specialization",
	image: `https://picsum.photos/400/300?random=${index + 100}`,
	category: getCategoryFromName(name),
}));

export const testimonials: Testimonial[] = [
	{
		id: "1",
		name: "Rajesh Kumar",
		role: "Cloud Architect at Amazon (AWS)",
		content:
			"NaukriElearning's AWS Professional track helped me transition from a local sys-admin to a Cloud Architect at Amazon. The 3D labs are unmatched.",
	},
	{
		id: "2",
		name: "Ananya Sharma",
		role: "AI Engineer at Google",
		content:
			"The Generative AI Masterclass was the turning point. I learned how to deploy LLMs in production, which was exactly what Google was looking for.",
	},
	{
		id: "3",
		name: "Vikram Singh",
		role: "Senior Project Manager at Microsoft",
		content:
			"PMP certification through Naukri gave me the global credibility I needed. Within 3 months of finishing, I was placed at Microsoft's Hyderabad campus.",
	},
	{
		id: "4",
		name: "Sneha Gupta",
		role: "Quality Assurance Lead at TCS",
		content:
			"The Lean Six Sigma Green Belt program is highly practical. I am now leading the quality initiative for one of our biggest UK clients.",
	},
	{
		id: "5",
		name: "Amit Patel",
		role: "Data Scientist at Infosys",
		content:
			"Coming from a non-tech background, the Data Science and AI Strategy path was structured perfectly. Infosys hired me during the career fair.",
	},
	{
		id: "6",
		name: "Priya Das",
		role: "Frontend Developer at Adobe",
		content:
			"The React & Frontend engineering courses are incredibly deep. I cracked my Adobe interview thanks to the project-based learning approach.",
	},
	{
		id: "7",
		name: "Sanjay Mehta",
		role: "DevOps Engineer at Oracle",
		content:
			"The Kubernetes and Docker certifications were life-changing. I now manage large-scale cloud infrastructure at Oracle's Bangalore office.",
	},
	{
		id: "8",
		name: "Neha Kapoor",
		role: "UX Designer at Salesforce",
		content:
			"Visualizing user journeys in 3D through Naukri's design modules gave me a fresh perspective that wowed the Salesforce hiring team.",
	},
	{
		id: "9",
		name: "Arjun Reddy",
		role: "Java Developer at Wipro",
		content:
			"The Java Professional track is very well structured. It helped me clear my internal assessment and get promoted before being placed at Wipro.",
	},
	{
		id: "10",
		name: "Kavita Reddy",
		role: "HR Specialist at HCL",
		content:
			"Professional HR certification gave me the compliance knowledge I was lacking. It's the reason I'm now a Lead HR Specialist at HCL.",
	},
	{
		id: "11",
		name: "Rahul Verma",
		role: "Cyber Security Analyst at Accenture",
		content:
			"The security certifications are intense and rewarding. Accenture valued the hands-on lab experience I gained here.",
	},
	{
		id: "12",
		name: "Megha Iyer",
		role: "Cloud Engineer at Deloitte",
		content:
			"Azure Developer Associate course was exactly what Deloitte's cloud practice required. I am now a permanent part of their digital transformation team.",
	},
	{
		id: "13",
		name: "Deepak Chawla",
		role: "Full Stack Developer at Capgemini",
		content:
			"The MERN stack specialization helped me build a portfolio that spoke for itself. Capgemini offered me a role within 2 weeks of finishing.",
	},
	{
		id: "14",
		name: "Shweta Singh",
		role: "Project Lead at Cognizant",
		content:
			"Agile and Scrum Master certifications allowed me to step into leadership roles at Cognizant. The support from mentors was exceptional.",
	},
	{
		id: "15",
		name: "Manish Gupta",
		role: "Business Analyst at Tech Mahindra",
		content:
			"The Business Analytics track is data-driven and practical. I use the techniques I learned here every day at Tech Mahindra.",
	},
	{
		id: "16",
		name: "Pooja Bhatia",
		role: "Data Engineer at IBM",
		content:
			"Mastering Big Data through Naukri's platform was the best decision. I am now working on enterprise-scale data lakes at IBM.",
	},
	{
		id: "17",
		name: "Rohan Malhotra",
		role: "System Architect at Intel",
		content:
			"The hardware and system design courses are top-notch. Intel's technical round felt familiar because I had already covered the concepts here.",
	},
	{
		id: "18",
		name: "Divya Nair",
		role: "ML Researcher at Samsung",
		content:
			"Naukri's AI Ethics and Governance course gave me a unique edge in ML research. Samsung appreciated my holistic view of the technology.",
	},
	{
		id: "19",
		name: "Sunil Joshi",
		role: "Network Engineer at Cisco",
		content:
			"CCNA and CCNP certifications are hard, but Naukri's 3D network simulators made the learning process intuitive and effective.",
	},
	{
		id: "20",
		name: "Anita Desai",
		role: "Software Engineer at Uber",
		content:
			"The competitive programming and system design tracks prepared me perfectly for Uber's rigorous coding interviews.",
	},
];

export const faqs = [
	{
		question: "Are these certifications recognized by global employers?",
		answer:
			"Yes, 100%. We partner with world-leading organizations like Google, AWS, and PMI. Our certificates are verifiable and highly regarded in technical and management recruitment processes globally.",
	},
	{
		question: "How long does a typical certification take?",
		answer:
			"Duration varies by level. Beginner certificates typically take 1-3 months of part-time study, while Advanced specializations like the 'Professional Engineer' tracks may take 6 months or more.",
	},
	{
		question: "Do you offer job placement assistance?",
		answer:
			"Absolutely. Our 'Career Launchpad' service connects graduates with our network of 150+ hiring partners and provides resume-building workshops led by HR experts.",
	},
	{
		question: "Can I learn at my own pace?",
		answer:
			"Yes. All our content is available on-demand. Once enrolled, you have lifetime access to the materials and can complete them according to your schedule.",
	},
];

export const blogPosts = [
	{
		id: 1,
		title: "The Rise of AI in Project Management",
		excerpt:
			"How automated tools are reshaping the way PMP professionals manage global teams.",
		date: "March 20, 2024",
		image: "https://picsum.photos/600/400?random=blog1",
	},
	{
		id: 2,
		title: "10 Skills Every Construction Manager Needs",
		excerpt:
			"From budget forecasting to safety compliance, master the essentials for 2024.",
		date: "March 15, 2024",
		image: "https://picsum.photos/600/400?random=blog2",
	},
	{
		id: 3,
		title: "Navigating the New AWS Architect Exam",
		excerpt:
			"Expert tips and study strategies to ace the latest AWS Solutions Architect certification.",
		date: "March 10, 2024",
		image: "https://picsum.photos/600/400?random=blog3",
	},
];
