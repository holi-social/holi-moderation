import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type UserInfo = {
  id: string;
  email: string;
  token: string;
};

export type AuthStateLoggedOut = {
  loggedIn: false;
};

export type AuthStateLoggedIn = {
  loggedIn: true;
  user: UserInfo;
};

export type AuthState = AuthStateLoggedIn | AuthStateLoggedOut;

export type AuthActions = {
  logIn: (user: UserInfo) => void;
  logOut: () => void;
};

export const useAuthState = create<AuthState & AuthActions>()(
  devtools(
    persist(
      (set) => ({
        loggedIn: false,
        logIn: (user) => set(() => ({ loggedIn: true, user })),
        logOut: () => set(() => ({ loggedIn: false, user: undefined })),
      }),
      { name: "moderation-auth" },
    ),
  ),
);
