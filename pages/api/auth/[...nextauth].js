import NextAuth from "next-auth"
import Providers from "next-auth/providers"
//import Auth0Provider from 'next-auth/providers/auth0'

//API de Rota, adicionando NextAuth 
export default NextAuth({
    providers: [
      Providers.Auth0({ 
          clientId: process.env.AUTH0_CLIENT_ID,
          clientSecret: process.env.AUTH0_CLIENT_SECRET,
          domain: process.env.AUTH0_DOMAIN,
        })
      ]
})
