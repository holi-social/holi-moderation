import React from 'react'
import { Avatar, MantineSize } from '@mantine/core'

import { OpenbookAuthUser } from '../../graphql/generated/schema.types'
import { UserDetailsFragment } from '../../graphql/generated/types'
import { getInitials, okunaAdminUrl } from '../../utils'

type UserAvatarProps = {
  user: UserDetailsFragment | OpenbookAuthUser
  size?: MantineSize | string | number
}

export const UserAvatar: React.FC<UserAvatarProps> = ({ user, size = 'md' }) => {
  const initials = getInitials(`${user.profile?.name ?? ''} ${user.profile?.lastName ?? ''}`)

  const adminUrl = okunaAdminUrl(`openbook_auth/user/${user.id}`)

  return user.profile?.avatar ? (
    <Avatar src={user.profile.avatar} size={size} component="a" href={adminUrl} target="_blank" />
  ) : (
    <Avatar size={size} component="a" href={adminUrl} target="_blank">
      {initials}
    </Avatar>
  )
}
