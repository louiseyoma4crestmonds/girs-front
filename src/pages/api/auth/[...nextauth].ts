import NextAuth, { NextAuthOptions } from "next-auth";
import axios from "axios";
import CredentialsProvider from "next-auth/providers/credentials";
import { appURL } from "src/services/connection";

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        const result = (await axios
          .post(`${appURL}/login`, credentials)
          .then((response) => {
            const userAccount = {
              firstName: response.data.data[0].user.first_name,
              lastName: response.data.data[0].user.last_name,
              email,
              userPasword: password,
              isFirstTime: response.data.data[0].user.is_first_time,

              userToken: response.data.data[0].token,

              userRequest: req,
              userData: response.data,
            };

            return { token: userAccount };
          })
          .catch((error) => {
            throw new Error(error.response.data.message);
          })) || { networkError: "Network Issues" };
        return { id: "result", token: result };
      },
    }),
  ],

  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.user = user;
      }
      return token;
    },
    session: async ({ session, token }) => {
      session.user = token;
      return session;
    },
  },
  pages: {
    signIn: "/sign-in",
    signOut: "/logout",
  },
};

export default NextAuth(authOptions);
