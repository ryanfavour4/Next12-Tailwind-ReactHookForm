import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
console.log(NextAuth);
console.log(GithubProvider);

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: String(process.env.GITHUB_ID),
      clientSecret: String(process.env.GITHUB_SECRET),
    }),
  ],
});
