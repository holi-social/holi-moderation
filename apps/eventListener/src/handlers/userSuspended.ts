import { Ory } from "../ory";
import { UserSuspendedData } from "../types";

export const handleUserSuspended = async (event: UserSuspendedData) => {
  const ory = Ory.fromEnvironment();
  ory.deactivateUser(event.email);
};
