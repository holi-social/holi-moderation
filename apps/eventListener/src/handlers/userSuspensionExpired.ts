import { Ory } from "../ory";
import { UserSuspensionExpiredData } from "../types";

export const handleUserSuspensionExpired = async (
  event: UserSuspensionExpiredData,
) => {
  const ory = Ory.fromEnvironment();
  await ory.activateUser(event.email);
};
