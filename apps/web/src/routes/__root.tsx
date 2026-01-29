import type { ConvexQueryClient } from "@convex-dev/react-query";
import type { QueryClient } from "@tanstack/react-query";
import {
	createRootRouteWithContext,
	HeadContent,
	Outlet,
	Scripts,
} from "@tanstack/react-router";
import { useEffect } from "react";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import appCss from "../index.css?url";

export interface RouterAppContext {
	queryClient: QueryClient;
	convexQueryClient: ConvexQueryClient;
}

export const Route = createRootRouteWithContext<RouterAppContext>()({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: "Naukri E-learning - Professional Certifications",
			},
		],
		links: [
			{
				rel: "stylesheet",
				href: appCss,
			},
		],
	}),

	component: RootDocument,
});

function RootDocument() {
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						entry.target.classList.add("active");
					}
				}
			},
			{ threshold: 0.1 }
		);

		for (const el of document.querySelectorAll(
			".reveal, .reveal-left, .reveal-right, .reveal-scale"
		)) {
			observer.observe(el);
		}

		return () => observer.disconnect();
	}, []);

	return (
		<html lang="en">
			<head>
				<HeadContent />
			</head>
			<body className="bg-gray-50">
				<Navbar />
				<main className="min-h-screen">
					<Outlet />
				</main>
				<Footer />
				<Scripts />
			</body>
		</html>
	);
}
