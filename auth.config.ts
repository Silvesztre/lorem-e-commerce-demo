import type { NextAuthConfig } from 'next-auth';
 
export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      console.log("ROUTE: ", nextUrl.pathname)
      // console.log("IS LOGGEDIN: ", isLoggedIn)

      const isOnLorem = nextUrl.pathname.startsWith('/lorem');
      if (isOnLorem) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated user to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/lorem', nextUrl))
      }
      return true;
    },

    // Session
    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub
      }
      // console.log(session)
      return session
    },

    // JWT
    async jwt( { token }) { 
      return token
    }
  },

  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig
