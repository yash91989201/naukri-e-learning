import { Link, useLocation } from "@tanstack/react-router";
import { Menu, Search, X } from "lucide-react";
import { useEffect, useState } from "react";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const location = useLocation();

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const isActive = (path: string) => location.pathname === path;

	const navLinks = [
		{ name: "Home", path: "/" },
		{ name: "Catalog", path: "/courses" },
		{ name: "Process", path: "/process" },
		{ name: "Enterprise", path: "/enterprise" },
		{ name: "About", path: "/about" },
		{ name: "Contact", path: "/contact" },
	];

	return (
		<nav
			className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${scrolled ? "pt-2" : "pt-4 md:pt-6"} pointer-events-none px-4 sm:px-6 lg:px-8`}
		>
			<div className="pointer-events-auto relative mx-auto max-w-7xl">
				<div
					className={`relative flex h-16 items-center justify-between rounded-2xl border border-white/40 bg-white/80 px-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-xl transition-all duration-500 ease-out md:h-20 md:px-6 ${scrolled ? "bg-white/95 shadow-xl" : "hover:bg-white/90"}
        `}
				>
					<div className="flex items-center gap-4 lg:gap-8">
						<Link
							className="group flex flex-shrink-0 items-center gap-3"
							to="/"
						>
							<div className="preserve-3d relative h-8 w-8 transition-transform duration-300 group-hover:rotate-12 lg:h-10 lg:w-10">
								<div className="translate-z-10 absolute inset-0 flex transform items-center justify-center rounded-lg bg-brand-600 shadow-lg">
									<span className="font-black text-lg text-white lg:text-xl">
										N
									</span>
								</div>
								<div className="absolute inset-0 -z-10 translate-x-1 translate-y-1 transform rounded-lg bg-brand-800" />
							</div>
							<div className="flex flex-col">
								<span className="font-extrabold text-brand-900 text-lg leading-none tracking-tight lg:text-xl">
									Naukri
								</span>
								<span className="font-semibold text-[10px] text-brand-500 leading-none tracking-widest lg:text-xs">
									ELEARNING
								</span>
							</div>
						</Link>

						<div className="hidden items-center space-x-1 lg:flex">
							{navLinks.map((item) => (
								<Link
									className={`rounded-xl px-3 py-2 font-bold text-sm transition-all duration-200 ${
										isActive(item.path)
											? "bg-brand-50 text-brand-600 shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)]"
											: "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
									}
                      `}
									key={item.name}
									to={item.path}
								>
									{item.name}
								</Link>
							))}
						</div>
					</div>

					<div className="hidden items-center space-x-2 md:flex">
						<div className="group relative mr-2 hidden w-40 xl:flex">
							<input
								className="w-full rounded-xl border-2 border-transparent bg-gray-100/50 py-2 pr-4 pl-9 font-medium text-sm outline-none transition-all focus:border-brand-200 focus:bg-white"
								placeholder="Search..."
								type="text"
							/>
							<Search
								className="absolute top-2.5 left-3 text-gray-400 transition-colors group-hover:text-brand-500"
								size={16}
							/>
						</div>

						<button
							className="px-4 py-2 font-bold text-gray-600 text-sm transition-colors hover:text-brand-600"
							type="button"
						>
							Log In
						</button>
					</div>

					<div className="flex items-center lg:hidden">
						<button
							className={`rounded-xl p-2 text-gray-600 transition-all hover:bg-gray-100 active:scale-90 ${isOpen ? "bg-gray-100 text-brand-600" : ""}`}
							onClick={() => setIsOpen(!isOpen)}
							type="button"
						>
							{isOpen ? <X size={24} /> : <Menu size={24} />}
						</button>
					</div>
				</div>

				<div
					className={`absolute top-full right-0 left-0 z-40 origin-top px-2 pt-4 transition-all duration-300 ease-in-out ${isOpen ? "translate-y-0 scale-100 opacity-100" : "pointer-events-none -translate-y-4 scale-95 opacity-0"}
        `}
				>
					<div className="overflow-hidden rounded-2xl border border-white/50 bg-white/95 p-4 shadow-[0_20px_40px_rgba(0,0,0,0.2)] backdrop-blur-xl">
						<div className="mb-6 grid grid-cols-2 gap-3">
							{navLinks.map((item) => (
								<Link
									className={`flex flex-col items-center justify-center rounded-xl border-2 p-4 ${isActive(item.path) ? "border-brand-200 bg-brand-50 text-brand-700" : "border-gray-100 bg-white text-gray-600"}`}
									key={item.name}
									onClick={() => setIsOpen(false)}
									to={item.path}
								>
									<span className="font-bold">{item.name}</span>
								</Link>
							))}
						</div>

						<div className="space-y-3">
							<button
								className="block w-full rounded-xl border border-gray-200 bg-gray-50 py-3 text-center font-bold text-gray-600 transition-transform active:scale-95"
								onClick={() => setIsOpen(false)}
								type="button"
							>
								Log In
							</button>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
