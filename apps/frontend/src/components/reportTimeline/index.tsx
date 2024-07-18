import React from 'react'
import { Timeline } from '@mantine/core'

import { ReportEventDetailsFragment } from '../../graphql/generated/types'
import { ReportEvent } from '../../graphql/generated/schema.types'

import { StatusChangedTimelineItem } from './items/statusChanged'
import { ReportCreatedTimelineItem } from './items/reportCreated'
import { UserSuspendedTimelineItem } from './items/userSuspended'

export type TimelineItemProps = {
  event: ReportEventDetailsFragment | ReportEvent
}

type ReportTimelineProps = {
  events: ReportEventDetailsFragment[] | ReportEvent[]
}

const EVENT_TIMELINE_COMPONENTS = {
  REPORT_CREATED: ReportCreatedTimelineItem,
  STATUS_CHANGED: StatusChangedTimelineItem,
  USER_SUSPENDED: UserSuspendedTimelineItem,
}

export const ReportTimeline: React.FC<ReportTimelineProps> = ({ events }) => {
  return (
    <Timeline>
      {events.map((event) => {
        const TimelineItem = EVENT_TIMELINE_COMPONENTS[event.eventName]
        return <TimelineItem event={event} key={event.id} />
      })}
    </Timeline>
  )
}
