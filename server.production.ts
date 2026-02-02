import { join } from "node:path";

const PORT = Number(process.env.PORT) || 3001;
const HOST = process.env.HOST || "0.0.0.0";
const CLIENT_DIR = "./apps/web/dist/client";
const SERVER_ENTRY = "./apps/web/dist/server/server.js";

const { default: ssrHandler } = await import(SERVER_ENTRY);

async function serveStaticFile(url: string) {
	const pathname = new URL(url).pathname;
	const filePath = join(CLIENT_DIR, pathname);

	try {
		const file = Bun.file(filePath);
		if (await file.exists()) {
			return new Response(file, {
				headers: {
					"Cache-Control": pathname.startsWith("/assets/")
						? "public, max-age=31536000, immutable"
						: "public, max-age=3600",
				},
			});
		}
	} catch {
		return null;
	}

	return null;
}

console.log(`Starting server on http://${HOST}:${PORT}`);

Bun.serve({
	port: PORT,
	hostname: HOST,
	async fetch(request: Request) {
		const url = new URL(request.url);

		if (
			url.pathname.startsWith("/assets/") ||
			url.pathname === "/" ||
			url.pathname.endsWith(".html") ||
			url.pathname.endsWith(".json") ||
			url.pathname.endsWith(".txt") ||
			url.pathname.endsWith(".ico") ||
			url.pathname.endsWith(".png") ||
			url.pathname.endsWith(".jpg") ||
			url.pathname.endsWith(".jpeg") ||
			url.pathname.endsWith(".svg") ||
			url.pathname.endsWith(".webp") ||
			url.pathname.endsWith(".gif")
		) {
			const staticResponse = await serveStaticFile(request.url);
			if (staticResponse) {
				return staticResponse;
			}
		}

		try {
			return await ssrHandler.fetch(request);
		} catch (error) {
			console.error("SSR Error:", error);
			return new Response("Internal Server Error", { status: 500 });
		}
	},
	error(error: Error) {
		console.error("Server Error:", error);
		return new Response("Internal Server Error", { status: 500 });
	},
});

console.log(`Server running at http://${HOST}:${PORT}`);
