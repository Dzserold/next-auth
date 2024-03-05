import { User } from "@prisma/client";

// In here we override the nextauth Session so it will return
// the User schema we declared in the prisma file
declare module "next-auth" {
  interface Session {
    user: User;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user: User;
  }
}
