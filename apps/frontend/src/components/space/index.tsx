import React, { ReactNode } from 'react'
import { Card, Group, Stack, Title, Text, List } from '@mantine/core'
import {
  IconBrandDiscord,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrandWhatsapp,
  IconClockPlus,
  IconLink,
  IconMail,
  IconPhone,
  IconUser,
} from '@tabler/icons-react'

import { SpaceDetailsFragment } from '../../graphql/generated/types'
import { SpaceAvatar } from '../avatar'
import { formatUser, relativeFormatISOTimestamp } from '../../utils'
import { OpenbookCommunitiesCommunity, OpenbookCommunitiesExternallink } from '../../graphql/generated/schema.types'
import { ImageWithPreview } from '../imageWithPreview'

const externalIconMap: Record<string, typeof IconBrandInstagram> = {
  INSTAGRAM: IconBrandInstagram,
  FACEBOOK: IconBrandFacebook,
  LINKEDIN: IconBrandLinkedin,
  DISCORD: IconBrandDiscord,
  TWITTER: IconBrandTwitter,
  WHATSAPP: IconBrandWhatsapp,
  OTHER: IconLink,
}

const ExternalLinkListItem: React.FC<Pick<OpenbookCommunitiesExternallink, 'name' | 'url' | 'type'>> = ({
  name,
  url,
  type,
}) => {
  const Icon = externalIconMap[type.toUpperCase()] ?? IconLink

  return (
    <Group gap="xs">
      <Icon size={14} />
      <Text component="a" href={url} target="_blank">
        {name}
      </Text>
    </Group>
  )
}

type SpaceProps = {
  space: SpaceDetailsFragment | OpenbookCommunitiesCommunity
  additionalContent?: ReactNode
}

export const Space: React.FC<SpaceProps> = ({ space, additionalContent }) => {
  const hasContactDetails = !!space.contactDescription || !!space.contactEmail || !!space.contactPhone

  return (
    <Card shadow="xs" padding="lg" radius="md" withBorder>
      {space.cover && (
        <Card.Section>
          <ImageWithPreview src={space.cover} height={120} />
        </Card.Section>
      )}
      <Card.Section p="md" withBorder>
        <Stack>
          <Group>
            <SpaceAvatar space={space} />
            <Title order={5}>{space.title}</Title>
          </Group>

          <Stack gap={0}>
            <Title order={5}>Goal</Title>
            <Text>{space.description}</Text>
          </Stack>

          <Stack gap={0}>
            <Title order={5}>Location</Title>
            <Text>{space.location}</Text>
          </Stack>

          {hasContactDetails && (
            <Stack gap={0}>
              <Title order={5}>Contact Details</Title>
              {space.contactDescription && <Text>{space.contactDescription}</Text>}
              {space.contactEmail && (
                <Group gap="xs">
                  <IconMail size={14} />
                  <Text>{space.contactEmail}</Text>
                </Group>
              )}

              {space.contactPhone && (
                <Group gap="xs">
                  <IconPhone size={14} />
                  <Text>{space.contactPhone}</Text>
                </Group>
              )}
            </Stack>
          )}

          {space.onboardingSteps && (
            <Stack gap={0}>
              <Title order={5}>Onboarding Steps</Title>
              <List type="ordered">
                {space.onboardingSteps.map((os) => (
                  <List.Item key={os.stepNumber}>{os.text}</List.Item>
                ))}
              </List>
            </Stack>
          )}

          {space.externalLinks && (
            <Stack gap="xs">
              <Title order={5}>External Links</Title>
              <Stack gap="xs">
                {space.externalLinks.map((link) => (
                  <ExternalLinkListItem key={link.id} name={link.name} url={link.url} type={link.type} />
                ))}
              </Stack>
            </Stack>
          )}
        </Stack>
      </Card.Section>

      <Card.Section p="md" withBorder>
        <Stack gap="xs">
          <Group gap="xs">
            <IconClockPlus size={14} />
            <Text c="dimmed" size="sm">
              created {relativeFormatISOTimestamp(space.created)}
            </Text>
          </Group>
          <Group gap="xs">
            <IconUser size={14} />
            <Text c="dimmed" size="sm">
              by {formatUser(space.creator!)}
            </Text>
          </Group>
        </Stack>
      </Card.Section>

      {additionalContent && <Card.Section p="md">{additionalContent}</Card.Section>}
    </Card>
  )
}
