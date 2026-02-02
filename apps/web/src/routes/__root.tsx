import type { ConvexQueryClient } from "@convex-dev/react-query";
import type { QueryClient } from "@tanstack/react-query";
import {
	createRootRouteWithContext,
	HeadContent,
	Outlet,
	Scripts,
} from "@tanstack/react-router";
import { useEffect, useRef } from "react";
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
	const intersectionObserverRef = useRef<IntersectionObserver | null>(null);
	const mutationObserverRef = useRef<MutationObserver | null>(null);
	const observedElementsRef = useRef<WeakSet<Element>>(new WeakSet());

	useEffect(() => {
		// Create intersection observer to add 'active' class when elements come into view
		intersectionObserverRef.current = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						entry.target.classList.add("active");
					}
				}
			},
			{ threshold: 0.1 }
		);

		// Function to observe an element if it has a reveal class and hasn't been observed
		const observeElement = (el: Element) => {
			if (
				intersectionObserverRef.current &&
				!observedElementsRef.current.has(el) &&
				(el.classList.contains("reveal") ||
					el.classList.contains("reveal-left") ||
					el.classList.contains("reveal-right") ||
					el.classList.contains("reveal-scale"))
			) {
				intersectionObserverRef.current.observe(el);
				observedElementsRef.current.add(el);
			}
		};

		// Observe all existing elements
		for (const el of document.querySelectorAll(
			".reveal, .reveal-left, .reveal-right, .reveal-scale"
		)) {
			observeElement(el);
		}

		// Create mutation observer to watch for new elements being added
		mutationObserverRef.current = new MutationObserver((mutations) => {
			for (const mutation of mutations) {
				for (const node of mutation.addedNodes) {
					if (node.nodeType === Node.ELEMENT_NODE) {
						const element = node as Element;
						// Check the element itself
						observeElement(element);
						// Check children
						for (const child of element.querySelectorAll(
							".reveal, .reveal-left, .reveal-right, .reveal-scale"
						)) {
							observeElement(child);
						}
					}
				}
			}
		});

		// Start observing the document body for changes
		mutationObserverRef.current.observe(document.body, {
			childList: true,
			subtree: true,
		});

		return () => {
			intersectionObserverRef.current?.disconnect();
			mutationObserverRef.current?.disconnect();
		};
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
