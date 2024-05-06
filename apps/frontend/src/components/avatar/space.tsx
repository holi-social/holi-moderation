import React from "react";
import { OpenbookCommunitiesCommunity } from "../../graphql/generated/schema.types";
import { SpaceDetailsFragment } from "../../graphql/generated/types";
import { Avatar } from "@mantine/core";
import { getInitials, okunaAdminUrl } from "../../utils";

type SpaceAvatarProps = {
  space: SpaceDetailsFragment | OpenbookCommunitiesCommunity;
};

export const SpaceAvatar: React.FC<SpaceAvatarProps> = ({ space }) => {
  const initials = getInitials(space.title);

  const adminUrl = okunaAdminUrl(`openbook_communities/community/${space.id}`);

  return space.avatar ? (
    <Avatar src={space.avatar} component="a" href={adminUrl} target="_blank" />
  ) : (
    <Avatar component="a" href={adminUrl} target="_blank">
      {initials}
    </Avatar>
  );
};
