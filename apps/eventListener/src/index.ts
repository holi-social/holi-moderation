import * as functions from "@google-cloud/functions-framework";
import {
  EventType,
  PubsubEvent,
  UserSuspendedData,
  UserSuspensionExpiredData,
} from "./types";
import { handleUserSuspended } from "./handlers/userSuspended";
import { handleUserSuspensionExpired } from "./handlers/userSuspensionExpired";

export const handleEvent: functions.CloudEventFunction<
  PubsubEvent<EventType, object>
> = async (event) => {
  const attributes = event.data?.attributes;
  const payload = event.data?.data;

  if (!payload || !attributes) {
    console.log("Unknown event", event);
    return;
  }

  switch (attributes.eventType) {
    case "UserSuspended":
      await handleUserSuspended(payload as UserSuspendedData);
      break;

    case "UserSuspensionExpired":
      await handleUserSuspensionExpired(payload as UserSuspensionExpiredData);
      break;

    case "ContentDeleted":
      break;

    default:
      // eslint-disable-next-line no-case-declarations, @typescript-eslint/no-unused-vars
      const _exhaustivenessCheck: never = attributes.eventType;
      console.log("Unknown event", event);
  }
};

functions.cloudEvent<PubsubEvent<EventType, object>>(
  "ModerationEventListener",
  handleEvent,
);
