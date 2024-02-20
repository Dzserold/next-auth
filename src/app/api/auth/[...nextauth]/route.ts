import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",

      credentials: {
        username: {
          label: "User Name",
          type: "text",
          placeholder: "Your Username",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },
      async authorize(credentials) {
        const user = await prisma.user.findUnique({
          where: {
            username: credentials.username,
          },
        });
      },
    }),
  ],
};
