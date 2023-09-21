import { redirect } from '@remix-run/node'

import type { User } from '~/types/commerceLayerTypes'

import { getSession, commitSession, destroySession } from './sessions'
import { getAcccessTokenCL } from './utils/commerceLayer'

const USER_SESSION_KEY = 'userId'
const USER_SESSION_EMAIL = 'userEmail'
const USER_SESSION_ACCESS_TOKEN = 'customerAccessToken'
const APP_SESSION_ACCESS_TOKEN = 'accessToken'

export interface OauthResponse {
  access_token?: string
  scope?: string
  token_type?: string
  refresh_token?: string
  error?: string
  error_description?: string
}

export async function _getSession(request: Request) {
  const cookie = request.headers.get('Cookie')
  return await getSession(cookie)
}

// Get user id from session
export async function getUserId(
  request: Request,
): Promise<User['owner_id'] | undefined> {
  const session = await _getSession(request)
  return session.get(USER_SESSION_KEY)
}

// Get user id from session
export async function getUserEmail(
  request: Request,
): Promise<User['email'] | undefined> {
  const session = await _getSession(request)
  return session.get(USER_SESSION_EMAIL)
}

// Get userAccessToken from session
export async function getUserAccessToken(
  request: Request,
): Promise<User['access_token'] | undefined> {
  const session = await _getSession(request)
  return session.get(USER_SESSION_ACCESS_TOKEN)
}

// Get accessToken from session
export async function getAccessToken(
  request: Request,
): Promise<User['access_token'] | undefined> {
  const session = await _getSession(request)
  return session.get(APP_SESSION_ACCESS_TOKEN)
}

export const getSalesChannelToken = async (
  request: Request = new Request(''),
): Promise<string | undefined> => {
  let accessToken = await getAccessToken(request)

  if (!accessToken) {
    const tokenObj = await getAcccessTokenCL()
    accessToken = tokenObj.access_token
    const session = await _getSession(request)
    session.set(APP_SESSION_ACCESS_TOKEN, accessToken || '')
    await commitSession(session, {
      maxAge: 60 * 60 * 4, // 4 hours like the token - https://docs.commercelayer.io/core/authentication
    })
  }

  return accessToken
}

export async function createUserSession({
  request,
  userId,
  email,
  accessToken,
  remember,
  redirectTo,
}: {
  request: Request
  userId: string
  email: string
  accessToken: string
  remember: boolean
  redirectTo: string
}) {
  const session = await _getSession(request)
  session.set(USER_SESSION_KEY, userId)
  session.set(USER_SESSION_EMAIL, email)
  session.set(USER_SESSION_ACCESS_TOKEN, accessToken)
  return redirect(redirectTo, {
    headers: {
      'Set-Cookie': await commitSession(session, {
        maxAge: remember
          ? 60 * 60 * 4 // 4 hours like the token - https://docs.commercelayer.io/core/authentication
          : undefined,
      }),
    },
  })
}

export async function logout(request: Request) {
  const session = await _getSession(request)
  return redirect('/', {
    headers: {
      'Set-Cookie': await destroySession(session),
    },
  })
}

export async function userIsLogged(request: Request) {
  const userId = await getUserId(request)
  return userId != null
}
