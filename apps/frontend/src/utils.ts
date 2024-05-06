import { formatDistanceToNow, parseISO } from "date-fns";
import { OpenbookAuthUser } from "./graphql/generated/schema.types";
import { UserDetailsFragment } from "./graphql/generated/types";

export const okunaAdminUrl = (path: string) =>
  `${import.meta.env.VITE_OKUNA_ADMIN_BASE_URL}/${path}`;

export const relativeFormatISOTimestamp = (timestamp: string) =>
  formatDistanceToNow(parseISO(timestamp), { addSuffix: true });

export const localFormatISOTimestamp = (timestamp: string) =>
  parseISO(timestamp).toLocaleString();

export const getInitials = (str: string, maxLength = 3) =>
  str
    .split(" ")
    .map((name) => name[0] || "")
    .join("")
    .substring(0, maxLength); // maxLength is the max number of characters in the initials string

export const titleCase = (str: string) =>
  str
    .split(/[_\s]/)
    .map(
      (word) => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase(),
    )
    .join(" ");

export const formatUser = (user: OpenbookAuthUser | UserDetailsFragment) =>
  `${user.profile?.name ?? ""} ${user.profile?.lastName ?? ""} (${(user.profile?.pronouns && user.profile.pronouns + ", ") ?? ""}${user.email})`;
