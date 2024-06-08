import { createMiddleware, shield } from "./services/protectionGuard";
import protectionGuard from "./services/protectionGuard";

export const config = {
	// matcher tells Next.js which routes to run the middleware on.
	// This runs the middleware on all routes except for static assets.
	matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};

// Pass any existing middleware with the optional existingMiddleware prop
export default createMiddleware(
	protectionGuard.withRule(
		shield({
			mode: "LIVE",
		}),
	),
);
