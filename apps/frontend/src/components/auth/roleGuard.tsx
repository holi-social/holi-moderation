import React, { PropsWithChildren } from "react";

import { UserRole } from "../../graphql/generated/schema.types";
import { useAuthState } from "../../state";

type RoleGuardProps = PropsWithChildren<{
  allowedRoles: UserRole[];
}>;

export const RoleGuard: React.FC<RoleGuardProps> = ({
  allowedRoles,
  children,
}) => {
  const currentRole = useAuthState(
    (state) => state.loggedIn && state.user.role,
  );

  const normalizedAllowedRoles = allowedRoles.map((role) => role.toLowerCase());

  if (!currentRole || !normalizedAllowedRoles.includes(currentRole)) {
    return <></>;
  }

  return <>{children}</>;
};
