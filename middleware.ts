import { authMiddleware } from "@clerk/nextjs";

// Exporting the result of calling the authMiddleware function with an options object
export default authMiddleware({
    publicRoutes: ['/'], // Specifies the public routes that do not require authentication
})

// Exporting a configuration object
export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
    // The matcher property specifies the routes that should be matched by the middleware
    // In this case, it uses a regular expression to match all routes except for static files and the "/_next" route
    // It also matches routes starting with "/api" or "/trpc"
};
