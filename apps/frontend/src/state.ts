import { jwtDecode } from 'jwt-decode'
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

type UserInfo = {
  id: string
  email: string
  role: 'admin' | 'moderator'
  token: string
  validUntil: number
}

export type TokenPayload = {
  sub: string
  exp: number
  email: string
  role: 'admin' | 'moderator'
}

export type AuthStateLoggedOut = {
  loggedIn: false
}

export type AuthStateLoggedIn = {
  loggedIn: true
  user: UserInfo
}

export type AuthState = AuthStateLoggedIn | AuthStateLoggedOut

export type AuthActions = {
  logIn: (token: string) => void
  logOut: () => void
  tokenExpired: () => boolean
}

export const useAuthState = create<AuthState & AuthActions>()(
  devtools(
    persist(
      (set, get) => ({
        loggedIn: false,
        logIn: (token: string) => {
          const payload = jwtDecode<TokenPayload>(token)

          if (payload === null) {
            return
          }

          const validUntil: number = payload.exp

          set(() => ({
            loggedIn: true,
            user: {
              id: payload.sub,
              email: payload.email,
              role: payload.role,
              token,
              validUntil,
            },
          }))
        },
        logOut: () => set(() => ({ loggedIn: false, user: undefined })),
        tokenExpired: () =>
          get().loggedIn && (get() as AuthStateLoggedIn).user.validUntil <= Math.floor(Date.now() / 1000),
      }),
      { name: 'moderation-auth' },
    ),
  ),
)
