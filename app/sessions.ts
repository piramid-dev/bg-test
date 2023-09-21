import { createCookieSessionStorage } from '@remix-run/node'
import invariant from 'tiny-invariant'

type SessionData = {
  userId: string
  userEmail: string
  customerAccessToken: string
  accessToken: string
  prompter?: string
}

type SessionFlashData = {
  error: string
}

invariant(process.env.SESSION_SECRET, 'SESSION_SECRET must be set')

const { getSession, commitSession, destroySession } =
  createCookieSessionStorage<SessionData, SessionFlashData>({
    cookie: {
      name: '__session',
      httpOnly: true,
      maxAge: 60 * 60 * 4, // 4 hours like the token - https://docs.commercelayer.io/core/authentication
      path: '/',
      sameSite: 'lax',
      secrets: [process.env.SESSION_SECRET],
      secure: process.env.NODE_ENV === 'production',
    },
  })

export { getSession, commitSession, destroySession }
