export { default } from "next-auth/middleware";

// Protect the route from unauthorized users
export const config = {
  matcher: ["/profile"],
};
