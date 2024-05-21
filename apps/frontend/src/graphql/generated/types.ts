import type * as Types from "./schema.types";

export type CommentDetailsFragment = Pick<
  Types.OpenbookPostsPostcomment,
  | "id"
  | "text"
  | "isEdited"
  | "isDeleted"
  | "created"
  | "modified"
  | "commentableId"
> & {
  commenter: Pick<Types.OpenbookAuthUser, "id" | "email" | "dateJoined"> & {
    profile?: Types.Maybe<
      Pick<
        Types.OpenbookAuthUserprofile,
        | "id"
        | "name"
        | "lastName"
        | "pronouns"
        | "avatar"
        | "cover"
        | "aboutMe"
        | "location"
        | "url"
      >
    >;
  };
  commentableType: Pick<Types.DjangoContentType, "appLabel" | "model">;
  parentComment?: Types.Maybe<
    Pick<
      Types.OpenbookPostsPostcomment,
      "id" | "text" | "isEdited" | "isDeleted" | "created" | "modified"
    > & {
      commenter: Pick<Types.OpenbookAuthUser, "id" | "email" | "dateJoined"> & {
        profile?: Types.Maybe<
          Pick<
            Types.OpenbookAuthUserprofile,
            | "id"
            | "name"
            | "lastName"
            | "pronouns"
            | "avatar"
            | "cover"
            | "aboutMe"
            | "location"
            | "url"
          >
        >;
      };
    }
  >;
};

export type PostDetailsFragment = Pick<
  Types.OpenbookPostsPost,
  "id" | "title" | "text" | "status" | "created"
> & {
  author: Pick<Types.OpenbookAuthUser, "id" | "email" | "dateJoined"> & {
    profile?: Types.Maybe<
      Pick<
        Types.OpenbookAuthUserprofile,
        | "id"
        | "name"
        | "lastName"
        | "pronouns"
        | "avatar"
        | "cover"
        | "aboutMe"
        | "location"
        | "url"
      >
    >;
  };
  space?: Types.Maybe<
    Pick<Types.OpenbookCommunitiesCommunity, "id" | "name" | "title"> & {
      creator?: Types.Maybe<
        Pick<Types.OpenbookAuthUser, "id" | "email" | "dateJoined"> & {
          profile?: Types.Maybe<
            Pick<
              Types.OpenbookAuthUserprofile,
              | "id"
              | "name"
              | "lastName"
              | "pronouns"
              | "avatar"
              | "cover"
              | "aboutMe"
              | "location"
              | "url"
            >
          >;
        }
      >;
    }
  >;
};

export type ReportDetailsFragment = Pick<
  Types.Report,
  "id" | "details" | "contentType" | "status" | "createdAt"
> & {
  reporter?: Types.Maybe<
    Pick<Types.OpenbookAuthUser, "id" | "email" | "dateJoined"> & {
      profile?: Types.Maybe<
        Pick<
          Types.OpenbookAuthUserprofile,
          | "id"
          | "name"
          | "lastName"
          | "pronouns"
          | "avatar"
          | "cover"
          | "aboutMe"
          | "location"
          | "url"
        >
      >;
    }
  >;
  events: Array<
    Pick<Types.ReportEvent, "id" | "eventName" | "eventPayload" | "occurredAt">
  >;
  reportedPost?: Types.Maybe<
    Pick<
      Types.OpenbookPostsPost,
      "id" | "title" | "text" | "status" | "created"
    > & {
      author: Pick<Types.OpenbookAuthUser, "id" | "email" | "dateJoined"> & {
        profile?: Types.Maybe<
          Pick<
            Types.OpenbookAuthUserprofile,
            | "id"
            | "name"
            | "lastName"
            | "pronouns"
            | "avatar"
            | "cover"
            | "aboutMe"
            | "location"
            | "url"
          >
        >;
      };
      space?: Types.Maybe<
        Pick<Types.OpenbookCommunitiesCommunity, "id" | "name" | "title"> & {
          creator?: Types.Maybe<
            Pick<Types.OpenbookAuthUser, "id" | "email" | "dateJoined"> & {
              profile?: Types.Maybe<
                Pick<
                  Types.OpenbookAuthUserprofile,
                  | "id"
                  | "name"
                  | "lastName"
                  | "pronouns"
                  | "avatar"
                  | "cover"
                  | "aboutMe"
                  | "location"
                  | "url"
                >
              >;
            }
          >;
        }
      >;
    }
  >;
  reportedComment?: Types.Maybe<
    Pick<
      Types.OpenbookPostsPostcomment,
      | "id"
      | "text"
      | "isEdited"
      | "isDeleted"
      | "created"
      | "modified"
      | "commentableId"
    > & {
      commenter: Pick<Types.OpenbookAuthUser, "id" | "email" | "dateJoined"> & {
        profile?: Types.Maybe<
          Pick<
            Types.OpenbookAuthUserprofile,
            | "id"
            | "name"
            | "lastName"
            | "pronouns"
            | "avatar"
            | "cover"
            | "aboutMe"
            | "location"
            | "url"
          >
        >;
      };
      commentableType: Pick<Types.DjangoContentType, "appLabel" | "model">;
      parentComment?: Types.Maybe<
        Pick<
          Types.OpenbookPostsPostcomment,
          "id" | "text" | "isEdited" | "isDeleted" | "created" | "modified"
        > & {
          commenter: Pick<
            Types.OpenbookAuthUser,
            "id" | "email" | "dateJoined"
          > & {
            profile?: Types.Maybe<
              Pick<
                Types.OpenbookAuthUserprofile,
                | "id"
                | "name"
                | "lastName"
                | "pronouns"
                | "avatar"
                | "cover"
                | "aboutMe"
                | "location"
                | "url"
              >
            >;
          };
        }
      >;
    }
  >;
  reportedUser?: Types.Maybe<
    Pick<Types.OpenbookAuthUser, "id" | "email" | "dateJoined"> & {
      postsAggregate: {
        aggregate?: Types.Maybe<
          Pick<Types.OpenbookPostsPostAggregateFields, "count">
        >;
      };
      posts: Array<
        Pick<
          Types.OpenbookPostsPost,
          "id" | "title" | "text" | "status" | "created"
        > & {
          author: Pick<
            Types.OpenbookAuthUser,
            "id" | "email" | "dateJoined"
          > & {
            profile?: Types.Maybe<
              Pick<
                Types.OpenbookAuthUserprofile,
                | "id"
                | "name"
                | "lastName"
                | "pronouns"
                | "avatar"
                | "cover"
                | "aboutMe"
                | "location"
                | "url"
              >
            >;
          };
          space?: Types.Maybe<
            Pick<
              Types.OpenbookCommunitiesCommunity,
              "id" | "name" | "title"
            > & {
              creator?: Types.Maybe<
                Pick<Types.OpenbookAuthUser, "id" | "email" | "dateJoined"> & {
                  profile?: Types.Maybe<
                    Pick<
                      Types.OpenbookAuthUserprofile,
                      | "id"
                      | "name"
                      | "lastName"
                      | "pronouns"
                      | "avatar"
                      | "cover"
                      | "aboutMe"
                      | "location"
                      | "url"
                    >
                  >;
                }
              >;
            }
          >;
        }
      >;
      commentsAggregate: {
        aggregate?: Types.Maybe<
          Pick<Types.OpenbookPostsPostcommentAggregateFields, "count">
        >;
      };
      comments: Array<
        Pick<
          Types.OpenbookPostsPostcomment,
          | "id"
          | "text"
          | "isEdited"
          | "isDeleted"
          | "created"
          | "modified"
          | "commentableId"
        > & {
          commenter: Pick<
            Types.OpenbookAuthUser,
            "id" | "email" | "dateJoined"
          > & {
            profile?: Types.Maybe<
              Pick<
                Types.OpenbookAuthUserprofile,
                | "id"
                | "name"
                | "lastName"
                | "pronouns"
                | "avatar"
                | "cover"
                | "aboutMe"
                | "location"
                | "url"
              >
            >;
          };
          commentableType: Pick<Types.DjangoContentType, "appLabel" | "model">;
          parentComment?: Types.Maybe<
            Pick<
              Types.OpenbookPostsPostcomment,
              "id" | "text" | "isEdited" | "isDeleted" | "created" | "modified"
            > & {
              commenter: Pick<
                Types.OpenbookAuthUser,
                "id" | "email" | "dateJoined"
              > & {
                profile?: Types.Maybe<
                  Pick<
                    Types.OpenbookAuthUserprofile,
                    | "id"
                    | "name"
                    | "lastName"
                    | "pronouns"
                    | "avatar"
                    | "cover"
                    | "aboutMe"
                    | "location"
                    | "url"
                  >
                >;
              };
            }
          >;
        }
      >;
      createdSpacesAggregate: {
        aggregate?: Types.Maybe<
          Pick<Types.OpenbookCommunitiesCommunityAggregateFields, "count">
        >;
      };
      createdSpaces: Array<
        Pick<
          Types.OpenbookCommunitiesCommunity,
          | "id"
          | "avatar"
          | "cover"
          | "name"
          | "title"
          | "description"
          | "location"
          | "contactDescription"
          | "contactEmail"
          | "contactPhone"
          | "created"
        > & {
          onboardingSteps: Array<
            Pick<Types.OpenbookCommunitiesOnboardingstep, "stepNumber" | "text">
          >;
          creator?: Types.Maybe<
            Pick<Types.OpenbookAuthUser, "id" | "email" | "dateJoined"> & {
              profile?: Types.Maybe<
                Pick<
                  Types.OpenbookAuthUserprofile,
                  | "id"
                  | "name"
                  | "lastName"
                  | "pronouns"
                  | "avatar"
                  | "cover"
                  | "aboutMe"
                  | "location"
                  | "url"
                >
              >;
            }
          >;
          externalLinks: Array<
            Pick<
              Types.OpenbookCommunitiesExternallink,
              "id" | "name" | "type" | "url"
            >
          >;
          linkhubToolsAggregate: {
            aggregate?: Types.Maybe<
              Pick<
                Types.OpenbookCommunitiesCollaborationtoolAggregateFields,
                "count"
              >
            >;
          };
        }
      >;
      profile?: Types.Maybe<
        Pick<
          Types.OpenbookAuthUserprofile,
          | "id"
          | "name"
          | "lastName"
          | "pronouns"
          | "avatar"
          | "cover"
          | "aboutMe"
          | "location"
          | "url"
        >
      >;
    }
  >;
  reportedSpace?: Types.Maybe<
    Pick<
      Types.OpenbookCommunitiesCommunity,
      | "id"
      | "avatar"
      | "cover"
      | "name"
      | "title"
      | "description"
      | "location"
      | "contactDescription"
      | "contactEmail"
      | "contactPhone"
      | "created"
    > & {
      postsAggregate: {
        aggregate?: Types.Maybe<
          Pick<Types.OpenbookPostsPostAggregateFields, "count">
        >;
      };
      appointmentsAggregate: {
        aggregate?: Types.Maybe<
          Pick<Types.OpenbookAppointmentsAppointmentAggregateFields, "count">
        >;
      };
      tasksAggregate: {
        aggregate?: Types.Maybe<
          Pick<Types.OpenbookCommunitiesTaskAggregateFields, "count">
        >;
      };
      linkhubToolsAggregate: {
        aggregate?: Types.Maybe<
          Pick<
            Types.OpenbookCommunitiesCollaborationtoolAggregateFields,
            "count"
          >
        >;
      };
      posts: Array<
        Pick<
          Types.OpenbookPostsPost,
          "id" | "title" | "text" | "status" | "created"
        > & {
          author: Pick<
            Types.OpenbookAuthUser,
            "id" | "email" | "dateJoined"
          > & {
            profile?: Types.Maybe<
              Pick<
                Types.OpenbookAuthUserprofile,
                | "id"
                | "name"
                | "lastName"
                | "pronouns"
                | "avatar"
                | "cover"
                | "aboutMe"
                | "location"
                | "url"
              >
            >;
          };
          space?: Types.Maybe<
            Pick<
              Types.OpenbookCommunitiesCommunity,
              "id" | "name" | "title"
            > & {
              creator?: Types.Maybe<
                Pick<Types.OpenbookAuthUser, "id" | "email" | "dateJoined"> & {
                  profile?: Types.Maybe<
                    Pick<
                      Types.OpenbookAuthUserprofile,
                      | "id"
                      | "name"
                      | "lastName"
                      | "pronouns"
                      | "avatar"
                      | "cover"
                      | "aboutMe"
                      | "location"
                      | "url"
                    >
                  >;
                }
              >;
            }
          >;
        }
      >;
      appointments: Array<
        Pick<
          Types.OpenbookAppointmentsAppointment,
          | "id"
          | "title"
          | "description"
          | "thumbnail"
          | "startDateTime"
          | "endDateTime"
          | "inviteOnly"
          | "permission"
          | "created"
          | "modified"
          | "isDeleted"
          | "deletedAt"
        > & {
          creator?: Types.Maybe<
            Pick<Types.OpenbookAuthUser, "id" | "email" | "dateJoined"> & {
              profile?: Types.Maybe<
                Pick<
                  Types.OpenbookAuthUserprofile,
                  | "id"
                  | "name"
                  | "lastName"
                  | "pronouns"
                  | "avatar"
                  | "cover"
                  | "aboutMe"
                  | "location"
                  | "url"
                >
              >;
            }
          >;
          videoCallLink?: Types.Maybe<
            Pick<
              Types.OpenbookAppointmentsVideocalllink,
              "url" | "additionalInfo"
            >
          >;
          locationDetails?: Types.Maybe<
            Pick<Types.OpenbookAppointmentsLocationdetails, "completeAddress">
          >;
          participantsAggregate: {
            aggregate?: Types.Maybe<
              Pick<
                Types.OpenbookAppointmentsAppointmentParticipantsAggregateFields,
                "count"
              >
            >;
          };
        }
      >;
      tasks: Array<
        Pick<
          Types.OpenbookCommunitiesTask,
          | "id"
          | "name"
          | "description"
          | "thumbnail"
          | "locationType"
          | "location"
          | "visibility"
          | "regularity"
          | "slotsAvailable"
          | "slotsTaken"
          | "contactEmail"
          | "contactPhone"
          | "created"
        > & {
          skills: Array<{
            skill: Pick<Types.OpenbookTermsSkill, "id" | "title">;
          }>;
          creator?: Types.Maybe<
            Pick<Types.OpenbookAuthUser, "id" | "email" | "dateJoined"> & {
              profile?: Types.Maybe<
                Pick<
                  Types.OpenbookAuthUserprofile,
                  | "id"
                  | "name"
                  | "lastName"
                  | "pronouns"
                  | "avatar"
                  | "cover"
                  | "aboutMe"
                  | "location"
                  | "url"
                >
              >;
            }
          >;
        }
      >;
      linkhubTools: Array<
        Pick<
          Types.OpenbookCommunitiesCollaborationtool,
          | "id"
          | "title"
          | "description"
          | "thumbnail"
          | "collectionType"
          | "url"
          | "domain"
          | "createdAt"
        > & {
          creator?: Types.Maybe<
            Pick<Types.OpenbookAuthUser, "id" | "email" | "dateJoined"> & {
              profile?: Types.Maybe<
                Pick<
                  Types.OpenbookAuthUserprofile,
                  | "id"
                  | "name"
                  | "lastName"
                  | "pronouns"
                  | "avatar"
                  | "cover"
                  | "aboutMe"
                  | "location"
                  | "url"
                >
              >;
            }
          >;
        }
      >;
      onboardingSteps: Array<
        Pick<Types.OpenbookCommunitiesOnboardingstep, "stepNumber" | "text">
      >;
      creator?: Types.Maybe<
        Pick<Types.OpenbookAuthUser, "id" | "email" | "dateJoined"> & {
          profile?: Types.Maybe<
            Pick<
              Types.OpenbookAuthUserprofile,
              | "id"
              | "name"
              | "lastName"
              | "pronouns"
              | "avatar"
              | "cover"
              | "aboutMe"
              | "location"
              | "url"
            >
          >;
        }
      >;
      externalLinks: Array<
        Pick<
          Types.OpenbookCommunitiesExternallink,
          "id" | "name" | "type" | "url"
        >
      >;
    }
  >;
  reportedSpaceAppointment?: Types.Maybe<
    Pick<
      Types.OpenbookAppointmentsAppointment,
      | "id"
      | "title"
      | "description"
      | "thumbnail"
      | "startDateTime"
      | "endDateTime"
      | "inviteOnly"
      | "permission"
      | "created"
      | "modified"
      | "isDeleted"
      | "deletedAt"
    > & {
      space: Pick<
        Types.OpenbookCommunitiesCommunity,
        | "id"
        | "avatar"
        | "cover"
        | "name"
        | "title"
        | "description"
        | "location"
        | "contactDescription"
        | "contactEmail"
        | "contactPhone"
        | "created"
      > & {
        onboardingSteps: Array<
          Pick<Types.OpenbookCommunitiesOnboardingstep, "stepNumber" | "text">
        >;
        creator?: Types.Maybe<
          Pick<Types.OpenbookAuthUser, "id" | "email" | "dateJoined"> & {
            profile?: Types.Maybe<
              Pick<
                Types.OpenbookAuthUserprofile,
                | "id"
                | "name"
                | "lastName"
                | "pronouns"
                | "avatar"
                | "cover"
                | "aboutMe"
                | "location"
                | "url"
              >
            >;
          }
        >;
        externalLinks: Array<
          Pick<
            Types.OpenbookCommunitiesExternallink,
            "id" | "name" | "type" | "url"
          >
        >;
        linkhubToolsAggregate: {
          aggregate?: Types.Maybe<
            Pick<
              Types.OpenbookCommunitiesCollaborationtoolAggregateFields,
              "count"
            >
          >;
        };
      };
      creator?: Types.Maybe<
        Pick<Types.OpenbookAuthUser, "id" | "email" | "dateJoined"> & {
          profile?: Types.Maybe<
            Pick<
              Types.OpenbookAuthUserprofile,
              | "id"
              | "name"
              | "lastName"
              | "pronouns"
              | "avatar"
              | "cover"
              | "aboutMe"
              | "location"
              | "url"
            >
          >;
        }
      >;
      videoCallLink?: Types.Maybe<
        Pick<Types.OpenbookAppointmentsVideocalllink, "url" | "additionalInfo">
      >;
      locationDetails?: Types.Maybe<
        Pick<Types.OpenbookAppointmentsLocationdetails, "completeAddress">
      >;
      participantsAggregate: {
        aggregate?: Types.Maybe<
          Pick<
            Types.OpenbookAppointmentsAppointmentParticipantsAggregateFields,
            "count"
          >
        >;
      };
    }
  >;
  reportedSpaceTask?: Types.Maybe<
    Pick<
      Types.OpenbookCommunitiesTask,
      | "id"
      | "name"
      | "description"
      | "thumbnail"
      | "locationType"
      | "location"
      | "visibility"
      | "regularity"
      | "slotsAvailable"
      | "slotsTaken"
      | "contactEmail"
      | "contactPhone"
      | "created"
    > & {
      space: Pick<
        Types.OpenbookCommunitiesCommunity,
        | "id"
        | "avatar"
        | "cover"
        | "name"
        | "title"
        | "description"
        | "location"
        | "contactDescription"
        | "contactEmail"
        | "contactPhone"
        | "created"
      > & {
        onboardingSteps: Array<
          Pick<Types.OpenbookCommunitiesOnboardingstep, "stepNumber" | "text">
        >;
        creator?: Types.Maybe<
          Pick<Types.OpenbookAuthUser, "id" | "email" | "dateJoined"> & {
            profile?: Types.Maybe<
              Pick<
                Types.OpenbookAuthUserprofile,
                | "id"
                | "name"
                | "lastName"
                | "pronouns"
                | "avatar"
                | "cover"
                | "aboutMe"
                | "location"
                | "url"
              >
            >;
          }
        >;
        externalLinks: Array<
          Pick<
            Types.OpenbookCommunitiesExternallink,
            "id" | "name" | "type" | "url"
          >
        >;
        linkhubToolsAggregate: {
          aggregate?: Types.Maybe<
            Pick<
              Types.OpenbookCommunitiesCollaborationtoolAggregateFields,
              "count"
            >
          >;
        };
      };
      skills: Array<{ skill: Pick<Types.OpenbookTermsSkill, "id" | "title"> }>;
      creator?: Types.Maybe<
        Pick<Types.OpenbookAuthUser, "id" | "email" | "dateJoined"> & {
          profile?: Types.Maybe<
            Pick<
              Types.OpenbookAuthUserprofile,
              | "id"
              | "name"
              | "lastName"
              | "pronouns"
              | "avatar"
              | "cover"
              | "aboutMe"
              | "location"
              | "url"
            >
          >;
        }
      >;
    }
  >;
  reportedSpaceLinkhubTool?: Types.Maybe<
    Pick<
      Types.OpenbookCommunitiesCollaborationtool,
      | "id"
      | "title"
      | "description"
      | "thumbnail"
      | "collectionType"
      | "url"
      | "domain"
      | "createdAt"
    > & {
      space: Pick<
        Types.OpenbookCommunitiesCommunity,
        | "id"
        | "avatar"
        | "cover"
        | "name"
        | "title"
        | "description"
        | "location"
        | "contactDescription"
        | "contactEmail"
        | "contactPhone"
        | "created"
      > & {
        onboardingSteps: Array<
          Pick<Types.OpenbookCommunitiesOnboardingstep, "stepNumber" | "text">
        >;
        creator?: Types.Maybe<
          Pick<Types.OpenbookAuthUser, "id" | "email" | "dateJoined"> & {
            profile?: Types.Maybe<
              Pick<
                Types.OpenbookAuthUserprofile,
                | "id"
                | "name"
                | "lastName"
                | "pronouns"
                | "avatar"
                | "cover"
                | "aboutMe"
                | "location"
                | "url"
              >
            >;
          }
        >;
        externalLinks: Array<
          Pick<
            Types.OpenbookCommunitiesExternallink,
            "id" | "name" | "type" | "url"
          >
        >;
        linkhubToolsAggregate: {
          aggregate?: Types.Maybe<
            Pick<
              Types.OpenbookCommunitiesCollaborationtoolAggregateFields,
              "count"
            >
          >;
        };
      };
      creator?: Types.Maybe<
        Pick<Types.OpenbookAuthUser, "id" | "email" | "dateJoined"> & {
          profile?: Types.Maybe<
            Pick<
              Types.OpenbookAuthUserprofile,
              | "id"
              | "name"
              | "lastName"
              | "pronouns"
              | "avatar"
              | "cover"
              | "aboutMe"
              | "location"
              | "url"
            >
          >;
        }
      >;
    }
  >;
};

export type ReportEventDetailsFragment = Pick<
  Types.ReportEvent,
  "id" | "eventName" | "eventPayload" | "occurredAt"
>;

export type ReportedSpaceDetailsFragment = Pick<
  Types.OpenbookCommunitiesCommunity,
  | "id"
  | "avatar"
  | "cover"
  | "name"
  | "title"
  | "description"
  | "location"
  | "contactDescription"
  | "contactEmail"
  | "contactPhone"
  | "created"
> & {
  postsAggregate: {
    aggregate?: Types.Maybe<
      Pick<Types.OpenbookPostsPostAggregateFields, "count">
    >;
  };
  appointmentsAggregate: {
    aggregate?: Types.Maybe<
      Pick<Types.OpenbookAppointmentsAppointmentAggregateFields, "count">
    >;
  };
  tasksAggregate: {
    aggregate?: Types.Maybe<
      Pick<Types.OpenbookCommunitiesTaskAggregateFields, "count">
    >;
  };
  linkhubToolsAggregate: {
    aggregate?: Types.Maybe<
      Pick<Types.OpenbookCommunitiesCollaborationtoolAggregateFields, "count">
    >;
  };
  posts: Array<
    Pick<
      Types.OpenbookPostsPost,
      "id" | "title" | "text" | "status" | "created"
    > & {
      author: Pick<Types.OpenbookAuthUser, "id" | "email" | "dateJoined"> & {
        profile?: Types.Maybe<
          Pick<
            Types.OpenbookAuthUserprofile,
            | "id"
            | "name"
            | "lastName"
            | "pronouns"
            | "avatar"
            | "cover"
            | "aboutMe"
            | "location"
            | "url"
          >
        >;
      };
      space?: Types.Maybe<
        Pick<Types.OpenbookCommunitiesCommunity, "id" | "name" | "title"> & {
          creator?: Types.Maybe<
            Pick<Types.OpenbookAuthUser, "id" | "email" | "dateJoined"> & {
              profile?: Types.Maybe<
                Pick<
                  Types.OpenbookAuthUserprofile,
                  | "id"
                  | "name"
                  | "lastName"
                  | "pronouns"
                  | "avatar"
                  | "cover"
                  | "aboutMe"
                  | "location"
                  | "url"
                >
              >;
            }
          >;
        }
      >;
    }
  >;
  appointments: Array<
    Pick<
      Types.OpenbookAppointmentsAppointment,
      | "id"
      | "title"
      | "description"
      | "thumbnail"
      | "startDateTime"
      | "endDateTime"
      | "inviteOnly"
      | "permission"
      | "created"
      | "modified"
      | "isDeleted"
      | "deletedAt"
    > & {
      creator?: Types.Maybe<
        Pick<Types.OpenbookAuthUser, "id" | "email" | "dateJoined"> & {
          profile?: Types.Maybe<
            Pick<
              Types.OpenbookAuthUserprofile,
              | "id"
              | "name"
              | "lastName"
              | "pronouns"
              | "avatar"
              | "cover"
              | "aboutMe"
              | "location"
              | "url"
            >
          >;
        }
      >;
      videoCallLink?: Types.Maybe<
        Pick<Types.OpenbookAppointmentsVideocalllink, "url" | "additionalInfo">
      >;
      locationDetails?: Types.Maybe<
        Pick<Types.OpenbookAppointmentsLocationdetails, "completeAddress">
      >;
      participantsAggregate: {
        aggregate?: Types.Maybe<
          Pick<
            Types.OpenbookAppointmentsAppointmentParticipantsAggregateFields,
            "count"
          >
        >;
      };
    }
  >;
  tasks: Array<
    Pick<
      Types.OpenbookCommunitiesTask,
      | "id"
      | "name"
      | "description"
      | "thumbnail"
      | "locationType"
      | "location"
      | "visibility"
      | "regularity"
      | "slotsAvailable"
      | "slotsTaken"
      | "contactEmail"
      | "contactPhone"
      | "created"
    > & {
      skills: Array<{ skill: Pick<Types.OpenbookTermsSkill, "id" | "title"> }>;
      creator?: Types.Maybe<
        Pick<Types.OpenbookAuthUser, "id" | "email" | "dateJoined"> & {
          profile?: Types.Maybe<
            Pick<
              Types.OpenbookAuthUserprofile,
              | "id"
              | "name"
              | "lastName"
              | "pronouns"
              | "avatar"
              | "cover"
              | "aboutMe"
              | "location"
              | "url"
            >
          >;
        }
      >;
    }
  >;
  linkhubTools: Array<
    Pick<
      Types.OpenbookCommunitiesCollaborationtool,
      | "id"
      | "title"
      | "description"
      | "thumbnail"
      | "collectionType"
      | "url"
      | "domain"
      | "createdAt"
    > & {
      creator?: Types.Maybe<
        Pick<Types.OpenbookAuthUser, "id" | "email" | "dateJoined"> & {
          profile?: Types.Maybe<
            Pick<
              Types.OpenbookAuthUserprofile,
              | "id"
              | "name"
              | "lastName"
              | "pronouns"
              | "avatar"
              | "cover"
              | "aboutMe"
              | "location"
              | "url"
            >
          >;
        }
      >;
    }
  >;
  onboardingSteps: Array<
    Pick<Types.OpenbookCommunitiesOnboardingstep, "stepNumber" | "text">
  >;
  creator?: Types.Maybe<
    Pick<Types.OpenbookAuthUser, "id" | "email" | "dateJoined"> & {
      profile?: Types.Maybe<
        Pick<
          Types.OpenbookAuthUserprofile,
          | "id"
          | "name"
          | "lastName"
          | "pronouns"
          | "avatar"
          | "cover"
          | "aboutMe"
          | "location"
          | "url"
        >
      >;
    }
  >;
  externalLinks: Array<
    Pick<Types.OpenbookCommunitiesExternallink, "id" | "name" | "type" | "url">
  >;
};

export type ReportedUserDetailsFragment = Pick<
  Types.OpenbookAuthUser,
  "id" | "email" | "dateJoined"
> & {
  postsAggregate: {
    aggregate?: Types.Maybe<
      Pick<Types.OpenbookPostsPostAggregateFields, "count">
    >;
  };
  posts: Array<
    Pick<
      Types.OpenbookPostsPost,
      "id" | "title" | "text" | "status" | "created"
    > & {
      author: Pick<Types.OpenbookAuthUser, "id" | "email" | "dateJoined"> & {
        profile?: Types.Maybe<
          Pick<
            Types.OpenbookAuthUserprofile,
            | "id"
            | "name"
            | "lastName"
            | "pronouns"
            | "avatar"
            | "cover"
            | "aboutMe"
            | "location"
            | "url"
          >
        >;
      };
      space?: Types.Maybe<
        Pick<Types.OpenbookCommunitiesCommunity, "id" | "name" | "title"> & {
          creator?: Types.Maybe<
            Pick<Types.OpenbookAuthUser, "id" | "email" | "dateJoined"> & {
              profile?: Types.Maybe<
                Pick<
                  Types.OpenbookAuthUserprofile,
                  | "id"
                  | "name"
                  | "lastName"
                  | "pronouns"
                  | "avatar"
                  | "cover"
                  | "aboutMe"
                  | "location"
                  | "url"
                >
              >;
            }
          >;
        }
      >;
    }
  >;
  commentsAggregate: {
    aggregate?: Types.Maybe<
      Pick<Types.OpenbookPostsPostcommentAggregateFields, "count">
    >;
  };
  comments: Array<
    Pick<
      Types.OpenbookPostsPostcomment,
      | "id"
      | "text"
      | "isEdited"
      | "isDeleted"
      | "created"
      | "modified"
      | "commentableId"
    > & {
      commenter: Pick<Types.OpenbookAuthUser, "id" | "email" | "dateJoined"> & {
        profile?: Types.Maybe<
          Pick<
            Types.OpenbookAuthUserprofile,
            | "id"
            | "name"
            | "lastName"
            | "pronouns"
            | "avatar"
            | "cover"
            | "aboutMe"
            | "location"
            | "url"
          >
        >;
      };
      commentableType: Pick<Types.DjangoContentType, "appLabel" | "model">;
      parentComment?: Types.Maybe<
        Pick<
          Types.OpenbookPostsPostcomment,
          "id" | "text" | "isEdited" | "isDeleted" | "created" | "modified"
        > & {
          commenter: Pick<
            Types.OpenbookAuthUser,
            "id" | "email" | "dateJoined"
          > & {
            profile?: Types.Maybe<
              Pick<
                Types.OpenbookAuthUserprofile,
                | "id"
                | "name"
                | "lastName"
                | "pronouns"
                | "avatar"
                | "cover"
                | "aboutMe"
                | "location"
                | "url"
              >
            >;
          };
        }
      >;
    }
  >;
  createdSpacesAggregate: {
    aggregate?: Types.Maybe<
      Pick<Types.OpenbookCommunitiesCommunityAggregateFields, "count">
    >;
  };
  createdSpaces: Array<
    Pick<
      Types.OpenbookCommunitiesCommunity,
      | "id"
      | "avatar"
      | "cover"
      | "name"
      | "title"
      | "description"
      | "location"
      | "contactDescription"
      | "contactEmail"
      | "contactPhone"
      | "created"
    > & {
      onboardingSteps: Array<
        Pick<Types.OpenbookCommunitiesOnboardingstep, "stepNumber" | "text">
      >;
      creator?: Types.Maybe<
        Pick<Types.OpenbookAuthUser, "id" | "email" | "dateJoined"> & {
          profile?: Types.Maybe<
            Pick<
              Types.OpenbookAuthUserprofile,
              | "id"
              | "name"
              | "lastName"
              | "pronouns"
              | "avatar"
              | "cover"
              | "aboutMe"
              | "location"
              | "url"
            >
          >;
        }
      >;
      externalLinks: Array<
        Pick<
          Types.OpenbookCommunitiesExternallink,
          "id" | "name" | "type" | "url"
        >
      >;
      linkhubToolsAggregate: {
        aggregate?: Types.Maybe<
          Pick<
            Types.OpenbookCommunitiesCollaborationtoolAggregateFields,
            "count"
          >
        >;
      };
    }
  >;
  profile?: Types.Maybe<
    Pick<
      Types.OpenbookAuthUserprofile,
      | "id"
      | "name"
      | "lastName"
      | "pronouns"
      | "avatar"
      | "cover"
      | "aboutMe"
      | "location"
      | "url"
    >
  >;
};

export type SpaceDetailsFragment = Pick<
  Types.OpenbookCommunitiesCommunity,
  | "id"
  | "avatar"
  | "cover"
  | "name"
  | "title"
  | "description"
  | "location"
  | "contactDescription"
  | "contactEmail"
  | "contactPhone"
  | "created"
> & {
  onboardingSteps: Array<
    Pick<Types.OpenbookCommunitiesOnboardingstep, "stepNumber" | "text">
  >;
  creator?: Types.Maybe<
    Pick<Types.OpenbookAuthUser, "id" | "email" | "dateJoined"> & {
      profile?: Types.Maybe<
        Pick<
          Types.OpenbookAuthUserprofile,
          | "id"
          | "name"
          | "lastName"
          | "pronouns"
          | "avatar"
          | "cover"
          | "aboutMe"
          | "location"
          | "url"
        >
      >;
    }
  >;
  externalLinks: Array<
    Pick<Types.OpenbookCommunitiesExternallink, "id" | "name" | "type" | "url">
  >;
  linkhubToolsAggregate: {
    aggregate?: Types.Maybe<
      Pick<Types.OpenbookCommunitiesCollaborationtoolAggregateFields, "count">
    >;
  };
};

export type SpaceAppointmentDetailsFragment = Pick<
  Types.OpenbookAppointmentsAppointment,
  | "id"
  | "title"
  | "description"
  | "thumbnail"
  | "startDateTime"
  | "endDateTime"
  | "inviteOnly"
  | "permission"
  | "created"
  | "modified"
  | "isDeleted"
  | "deletedAt"
> & {
  creator?: Types.Maybe<
    Pick<Types.OpenbookAuthUser, "id" | "email" | "dateJoined"> & {
      profile?: Types.Maybe<
        Pick<
          Types.OpenbookAuthUserprofile,
          | "id"
          | "name"
          | "lastName"
          | "pronouns"
          | "avatar"
          | "cover"
          | "aboutMe"
          | "location"
          | "url"
        >
      >;
    }
  >;
  videoCallLink?: Types.Maybe<
    Pick<Types.OpenbookAppointmentsVideocalllink, "url" | "additionalInfo">
  >;
  locationDetails?: Types.Maybe<
    Pick<Types.OpenbookAppointmentsLocationdetails, "completeAddress">
  >;
  participantsAggregate: {
    aggregate?: Types.Maybe<
      Pick<
        Types.OpenbookAppointmentsAppointmentParticipantsAggregateFields,
        "count"
      >
    >;
  };
};

export type ReportedSpaceAppointmentDetailsFragment = Pick<
  Types.OpenbookAppointmentsAppointment,
  | "id"
  | "title"
  | "description"
  | "thumbnail"
  | "startDateTime"
  | "endDateTime"
  | "inviteOnly"
  | "permission"
  | "created"
  | "modified"
  | "isDeleted"
  | "deletedAt"
> & {
  space: Pick<
    Types.OpenbookCommunitiesCommunity,
    | "id"
    | "avatar"
    | "cover"
    | "name"
    | "title"
    | "description"
    | "location"
    | "contactDescription"
    | "contactEmail"
    | "contactPhone"
    | "created"
  > & {
    onboardingSteps: Array<
      Pick<Types.OpenbookCommunitiesOnboardingstep, "stepNumber" | "text">
    >;
    creator?: Types.Maybe<
      Pick<Types.OpenbookAuthUser, "id" | "email" | "dateJoined"> & {
        profile?: Types.Maybe<
          Pick<
            Types.OpenbookAuthUserprofile,
            | "id"
            | "name"
            | "lastName"
            | "pronouns"
            | "avatar"
            | "cover"
            | "aboutMe"
            | "location"
            | "url"
          >
        >;
      }
    >;
    externalLinks: Array<
      Pick<
        Types.OpenbookCommunitiesExternallink,
        "id" | "name" | "type" | "url"
      >
    >;
    linkhubToolsAggregate: {
      aggregate?: Types.Maybe<
        Pick<Types.OpenbookCommunitiesCollaborationtoolAggregateFields, "count">
      >;
    };
  };
  creator?: Types.Maybe<
    Pick<Types.OpenbookAuthUser, "id" | "email" | "dateJoined"> & {
      profile?: Types.Maybe<
        Pick<
          Types.OpenbookAuthUserprofile,
          | "id"
          | "name"
          | "lastName"
          | "pronouns"
          | "avatar"
          | "cover"
          | "aboutMe"
          | "location"
          | "url"
        >
      >;
    }
  >;
  videoCallLink?: Types.Maybe<
    Pick<Types.OpenbookAppointmentsVideocalllink, "url" | "additionalInfo">
  >;
  locationDetails?: Types.Maybe<
    Pick<Types.OpenbookAppointmentsLocationdetails, "completeAddress">
  >;
  participantsAggregate: {
    aggregate?: Types.Maybe<
      Pick<
        Types.OpenbookAppointmentsAppointmentParticipantsAggregateFields,
        "count"
      >
    >;
  };
};

export type SpaceLinkhubToolDetailsFragment = Pick<
  Types.OpenbookCommunitiesCollaborationtool,
  | "id"
  | "title"
  | "description"
  | "thumbnail"
  | "collectionType"
  | "url"
  | "domain"
  | "createdAt"
> & {
  creator?: Types.Maybe<
    Pick<Types.OpenbookAuthUser, "id" | "email" | "dateJoined"> & {
      profile?: Types.Maybe<
        Pick<
          Types.OpenbookAuthUserprofile,
          | "id"
          | "name"
          | "lastName"
          | "pronouns"
          | "avatar"
          | "cover"
          | "aboutMe"
          | "location"
          | "url"
        >
      >;
    }
  >;
};

export type ReportedSpaceLinkhubToolDetailsFragment = Pick<
  Types.OpenbookCommunitiesCollaborationtool,
  | "id"
  | "title"
  | "description"
  | "thumbnail"
  | "collectionType"
  | "url"
  | "domain"
  | "createdAt"
> & {
  space: Pick<
    Types.OpenbookCommunitiesCommunity,
    | "id"
    | "avatar"
    | "cover"
    | "name"
    | "title"
    | "description"
    | "location"
    | "contactDescription"
    | "contactEmail"
    | "contactPhone"
    | "created"
  > & {
    onboardingSteps: Array<
      Pick<Types.OpenbookCommunitiesOnboardingstep, "stepNumber" | "text">
    >;
    creator?: Types.Maybe<
      Pick<Types.OpenbookAuthUser, "id" | "email" | "dateJoined"> & {
        profile?: Types.Maybe<
          Pick<
            Types.OpenbookAuthUserprofile,
            | "id"
            | "name"
            | "lastName"
            | "pronouns"
            | "avatar"
            | "cover"
            | "aboutMe"
            | "location"
            | "url"
          >
        >;
      }
    >;
    externalLinks: Array<
      Pick<
        Types.OpenbookCommunitiesExternallink,
        "id" | "name" | "type" | "url"
      >
    >;
    linkhubToolsAggregate: {
      aggregate?: Types.Maybe<
        Pick<Types.OpenbookCommunitiesCollaborationtoolAggregateFields, "count">
      >;
    };
  };
  creator?: Types.Maybe<
    Pick<Types.OpenbookAuthUser, "id" | "email" | "dateJoined"> & {
      profile?: Types.Maybe<
        Pick<
          Types.OpenbookAuthUserprofile,
          | "id"
          | "name"
          | "lastName"
          | "pronouns"
          | "avatar"
          | "cover"
          | "aboutMe"
          | "location"
          | "url"
        >
      >;
    }
  >;
};

export type SpaceTaskDetailsFragment = Pick<
  Types.OpenbookCommunitiesTask,
  | "id"
  | "name"
  | "description"
  | "thumbnail"
  | "locationType"
  | "location"
  | "visibility"
  | "regularity"
  | "slotsAvailable"
  | "slotsTaken"
  | "contactEmail"
  | "contactPhone"
  | "created"
> & {
  skills: Array<{ skill: Pick<Types.OpenbookTermsSkill, "id" | "title"> }>;
  creator?: Types.Maybe<
    Pick<Types.OpenbookAuthUser, "id" | "email" | "dateJoined"> & {
      profile?: Types.Maybe<
        Pick<
          Types.OpenbookAuthUserprofile,
          | "id"
          | "name"
          | "lastName"
          | "pronouns"
          | "avatar"
          | "cover"
          | "aboutMe"
          | "location"
          | "url"
        >
      >;
    }
  >;
};

export type ReportedSpaceTaskDetailsFragment = Pick<
  Types.OpenbookCommunitiesTask,
  | "id"
  | "name"
  | "description"
  | "thumbnail"
  | "locationType"
  | "location"
  | "visibility"
  | "regularity"
  | "slotsAvailable"
  | "slotsTaken"
  | "contactEmail"
  | "contactPhone"
  | "created"
> & {
  space: Pick<
    Types.OpenbookCommunitiesCommunity,
    | "id"
    | "avatar"
    | "cover"
    | "name"
    | "title"
    | "description"
    | "location"
    | "contactDescription"
    | "contactEmail"
    | "contactPhone"
    | "created"
  > & {
    onboardingSteps: Array<
      Pick<Types.OpenbookCommunitiesOnboardingstep, "stepNumber" | "text">
    >;
    creator?: Types.Maybe<
      Pick<Types.OpenbookAuthUser, "id" | "email" | "dateJoined"> & {
        profile?: Types.Maybe<
          Pick<
            Types.OpenbookAuthUserprofile,
            | "id"
            | "name"
            | "lastName"
            | "pronouns"
            | "avatar"
            | "cover"
            | "aboutMe"
            | "location"
            | "url"
          >
        >;
      }
    >;
    externalLinks: Array<
      Pick<
        Types.OpenbookCommunitiesExternallink,
        "id" | "name" | "type" | "url"
      >
    >;
    linkhubToolsAggregate: {
      aggregate?: Types.Maybe<
        Pick<Types.OpenbookCommunitiesCollaborationtoolAggregateFields, "count">
      >;
    };
  };
  skills: Array<{ skill: Pick<Types.OpenbookTermsSkill, "id" | "title"> }>;
  creator?: Types.Maybe<
    Pick<Types.OpenbookAuthUser, "id" | "email" | "dateJoined"> & {
      profile?: Types.Maybe<
        Pick<
          Types.OpenbookAuthUserprofile,
          | "id"
          | "name"
          | "lastName"
          | "pronouns"
          | "avatar"
          | "cover"
          | "aboutMe"
          | "location"
          | "url"
        >
      >;
    }
  >;
};

export type UserDetailsFragment = Pick<
  Types.OpenbookAuthUser,
  "id" | "email" | "dateJoined"
> & {
  profile?: Types.Maybe<
    Pick<
      Types.OpenbookAuthUserprofile,
      | "id"
      | "name"
      | "lastName"
      | "pronouns"
      | "avatar"
      | "cover"
      | "aboutMe"
      | "location"
      | "url"
    >
  >;
};

export type ChangeReportStatusMutationVariables = Types.Exact<{
  reportId: Types.Scalars["UUID"]["input"];
  newStatus: Types.ReportStatus;
}>;

export type ChangeReportStatusMutation = {
  changeReportStatus: Pick<
    Types.Report,
    "id" | "details" | "contentType" | "status" | "createdAt"
  > & {
    reporter?: Types.Maybe<
      Pick<Types.OpenbookAuthUser, "id" | "email" | "dateJoined"> & {
        profile?: Types.Maybe<
          Pick<
            Types.OpenbookAuthUserprofile,
            | "id"
            | "name"
            | "lastName"
            | "pronouns"
            | "avatar"
            | "cover"
            | "aboutMe"
            | "location"
            | "url"
          >
        >;
      }
    >;
    events: Array<
      Pick<
        Types.ReportEvent,
        "id" | "eventName" | "eventPayload" | "occurredAt"
      >
    >;
    reportedPost?: Types.Maybe<
      Pick<
        Types.OpenbookPostsPost,
        "id" | "title" | "text" | "status" | "created"
      > & {
        author: Pick<Types.OpenbookAuthUser, "id" | "email" | "dateJoined"> & {
          profile?: Types.Maybe<
            Pick<
              Types.OpenbookAuthUserprofile,
              | "id"
              | "name"
              | "lastName"
              | "pronouns"
              | "avatar"
              | "cover"
              | "aboutMe"
              | "location"
              | "url"
            >
          >;
        };
        space?: Types.Maybe<
          Pick<Types.OpenbookCommunitiesCommunity, "id" | "name" | "title"> & {
            creator?: Types.Maybe<
              Pick<Types.OpenbookAuthUser, "id" | "email" | "dateJoined"> & {
                profile?: Types.Maybe<
                  Pick<
                    Types.OpenbookAuthUserprofile,
                    | "id"
                    | "name"
                    | "lastName"
                    | "pronouns"
                    | "avatar"
                    | "cover"
                    | "aboutMe"
                    | "location"
                    | "url"
                  >
                >;
              }
            >;
          }
        >;
      }
    >;
    reportedComment?: Types.Maybe<
      Pick<
        Types.OpenbookPostsPostcomment,
        | "id"
        | "text"
        | "isEdited"
        | "isDeleted"
        | "created"
        | "modified"
        | "commentableId"
      > & {
        commenter: Pick<
          Types.OpenbookAuthUser,
          "id" | "email" | "dateJoined"
        > & {
          profile?: Types.Maybe<
            Pick<
              Types.OpenbookAuthUserprofile,
              | "id"
              | "name"
              | "lastName"
              | "pronouns"
              | "avatar"
              | "cover"
              | "aboutMe"
              | "location"
              | "url"
            >
          >;
        };
        commentableType: Pick<Types.DjangoContentType, "appLabel" | "model">;
        parentComment?: Types.Maybe<
          Pick<
            Types.OpenbookPostsPostcomment,
            "id" | "text" | "isEdited" | "isDeleted" | "created" | "modified"
          > & {
            commenter: Pick<
              Types.OpenbookAuthUser,
              "id" | "email" | "dateJoined"
            > & {
              profile?: Types.Maybe<
                Pick<
                  Types.OpenbookAuthUserprofile,
                  | "id"
                  | "name"
                  | "lastName"
                  | "pronouns"
                  | "avatar"
                  | "cover"
                  | "aboutMe"
                  | "location"
                  | "url"
                >
              >;
            };
          }
        >;
      }
    >;
    reportedUser?: Types.Maybe<
      Pick<Types.OpenbookAuthUser, "id" | "email" | "dateJoined"> & {
        postsAggregate: {
          aggregate?: Types.Maybe<
            Pick<Types.OpenbookPostsPostAggregateFields, "count">
          >;
        };
        posts: Array<
          Pick<
            Types.OpenbookPostsPost,
            "id" | "title" | "text" | "status" | "created"
          > & {
            author: Pick<
              Types.OpenbookAuthUser,
              "id" | "email" | "dateJoined"
            > & {
              profile?: Types.Maybe<
                Pick<
                  Types.OpenbookAuthUserprofile,
                  | "id"
                  | "name"
                  | "lastName"
                  | "pronouns"
                  | "avatar"
                  | "cover"
                  | "aboutMe"
                  | "location"
                  | "url"
                >
              >;
            };
            space?: Types.Maybe<
              Pick<
                Types.OpenbookCommunitiesCommunity,
                "id" | "name" | "title"
              > & {
                creator?: Types.Maybe<
                  Pick<
                    Types.OpenbookAuthUser,
                    "id" | "email" | "dateJoined"
                  > & {
                    profile?: Types.Maybe<
                      Pick<
                        Types.OpenbookAuthUserprofile,
                        | "id"
                        | "name"
                        | "lastName"
                        | "pronouns"
                        | "avatar"
                        | "cover"
                        | "aboutMe"
                        | "location"
                        | "url"
                      >
                    >;
                  }
                >;
              }
            >;
          }
        >;
        commentsAggregate: {
          aggregate?: Types.Maybe<
            Pick<Types.OpenbookPostsPostcommentAggregateFields, "count">
          >;
        };
        comments: Array<
          Pick<
            Types.OpenbookPostsPostcomment,
            | "id"
            | "text"
            | "isEdited"
            | "isDeleted"
            | "created"
            | "modified"
            | "commentableId"
          > & {
            commenter: Pick<
              Types.OpenbookAuthUser,
              "id" | "email" | "dateJoined"
            > & {
              profile?: Types.Maybe<
                Pick<
                  Types.OpenbookAuthUserprofile,
                  | "id"
                  | "name"
                  | "lastName"
                  | "pronouns"
                  | "avatar"
                  | "cover"
                  | "aboutMe"
                  | "location"
                  | "url"
                >
              >;
            };
            commentableType: Pick<
              Types.DjangoContentType,
              "appLabel" | "model"
            >;
            parentComment?: Types.Maybe<
              Pick<
                Types.OpenbookPostsPostcomment,
                | "id"
                | "text"
                | "isEdited"
                | "isDeleted"
                | "created"
                | "modified"
              > & {
                commenter: Pick<
                  Types.OpenbookAuthUser,
                  "id" | "email" | "dateJoined"
                > & {
                  profile?: Types.Maybe<
                    Pick<
                      Types.OpenbookAuthUserprofile,
                      | "id"
                      | "name"
                      | "lastName"
                      | "pronouns"
                      | "avatar"
                      | "cover"
                      | "aboutMe"
                      | "location"
                      | "url"
                    >
                  >;
                };
              }
            >;
          }
        >;
        createdSpacesAggregate: {
          aggregate?: Types.Maybe<
            Pick<Types.OpenbookCommunitiesCommunityAggregateFields, "count">
          >;
        };
        createdSpaces: Array<
          Pick<
            Types.OpenbookCommunitiesCommunity,
            | "id"
            | "avatar"
            | "cover"
            | "name"
            | "title"
            | "description"
            | "location"
            | "contactDescription"
            | "contactEmail"
            | "contactPhone"
            | "created"
          > & {
            onboardingSteps: Array<
              Pick<
                Types.OpenbookCommunitiesOnboardingstep,
                "stepNumber" | "text"
              >
            >;
            creator?: Types.Maybe<
              Pick<Types.OpenbookAuthUser, "id" | "email" | "dateJoined"> & {
                profile?: Types.Maybe<
                  Pick<
                    Types.OpenbookAuthUserprofile,
                    | "id"
                    | "name"
                    | "lastName"
                    | "pronouns"
                    | "avatar"
                    | "cover"
                    | "aboutMe"
                    | "location"
                    | "url"
                  >
                >;
              }
            >;
            externalLinks: Array<
              Pick<
                Types.OpenbookCommunitiesExternallink,
                "id" | "name" | "type" | "url"
              >
            >;
            linkhubToolsAggregate: {
              aggregate?: Types.Maybe<
                Pick<
                  Types.OpenbookCommunitiesCollaborationtoolAggregateFields,
                  "count"
                >
              >;
            };
          }
        >;
        profile?: Types.Maybe<
          Pick<
            Types.OpenbookAuthUserprofile,
            | "id"
            | "name"
            | "lastName"
            | "pronouns"
            | "avatar"
            | "cover"
            | "aboutMe"
            | "location"
            | "url"
          >
        >;
      }
    >;
    reportedSpace?: Types.Maybe<
      Pick<
        Types.OpenbookCommunitiesCommunity,
        | "id"
        | "avatar"
        | "cover"
        | "name"
        | "title"
        | "description"
        | "location"
        | "contactDescription"
        | "contactEmail"
        | "contactPhone"
        | "created"
      > & {
        postsAggregate: {
          aggregate?: Types.Maybe<
            Pick<Types.OpenbookPostsPostAggregateFields, "count">
          >;
        };
        appointmentsAggregate: {
          aggregate?: Types.Maybe<
            Pick<Types.OpenbookAppointmentsAppointmentAggregateFields, "count">
          >;
        };
        tasksAggregate: {
          aggregate?: Types.Maybe<
            Pick<Types.OpenbookCommunitiesTaskAggregateFields, "count">
          >;
        };
        linkhubToolsAggregate: {
          aggregate?: Types.Maybe<
            Pick<
              Types.OpenbookCommunitiesCollaborationtoolAggregateFields,
              "count"
            >
          >;
        };
        posts: Array<
          Pick<
            Types.OpenbookPostsPost,
            "id" | "title" | "text" | "status" | "created"
          > & {
            author: Pick<
              Types.OpenbookAuthUser,
              "id" | "email" | "dateJoined"
            > & {
              profile?: Types.Maybe<
                Pick<
                  Types.OpenbookAuthUserprofile,
                  | "id"
                  | "name"
                  | "lastName"
                  | "pronouns"
                  | "avatar"
                  | "cover"
                  | "aboutMe"
                  | "location"
                  | "url"
                >
              >;
            };
            space?: Types.Maybe<
              Pick<
                Types.OpenbookCommunitiesCommunity,
                "id" | "name" | "title"
              > & {
                creator?: Types.Maybe<
                  Pick<
                    Types.OpenbookAuthUser,
                    "id" | "email" | "dateJoined"
                  > & {
                    profile?: Types.Maybe<
                      Pick<
                        Types.OpenbookAuthUserprofile,
                        | "id"
                        | "name"
                        | "lastName"
                        | "pronouns"
                        | "avatar"
                        | "cover"
                        | "aboutMe"
                        | "location"
                        | "url"
                      >
                    >;
                  }
                >;
              }
            >;
          }
        >;
        appointments: Array<
          Pick<
            Types.OpenbookAppointmentsAppointment,
            | "id"
            | "title"
            | "description"
            | "thumbnail"
            | "startDateTime"
            | "endDateTime"
            | "inviteOnly"
            | "permission"
            | "created"
            | "modified"
            | "isDeleted"
            | "deletedAt"
          > & {
            creator?: Types.Maybe<
              Pick<Types.OpenbookAuthUser, "id" | "email" | "dateJoined"> & {
                profile?: Types.Maybe<
                  Pick<
                    Types.OpenbookAuthUserprofile,
                    | "id"
                    | "name"
                    | "lastName"
                    | "pronouns"
                    | "avatar"
                    | "cover"
                    | "aboutMe"
                    | "location"
                    | "url"
                  >
                >;
              }
            >;
            videoCallLink?: Types.Maybe<
              Pick<
                Types.OpenbookAppointmentsVideocalllink,
                "url" | "additionalInfo"
              >
            >;
            locationDetails?: Types.Maybe<
              Pick<Types.OpenbookAppointmentsLocationdetails, "completeAddress">
            >;
            participantsAggregate: {
              aggregate?: Types.Maybe<
                Pick<
                  Types.OpenbookAppointmentsAppointmentParticipantsAggregateFields,
                  "count"
                >
              >;
            };
          }
        >;
        tasks: Array<
          Pick<
            Types.OpenbookCommunitiesTask,
            | "id"
            | "name"
            | "description"
            | "thumbnail"
            | "locationType"
            | "location"
            | "visibility"
            | "regularity"
            | "slotsAvailable"
            | "slotsTaken"
            | "contactEmail"
            | "contactPhone"
            | "created"
          > & {
            skills: Array<{
              skill: Pick<Types.OpenbookTermsSkill, "id" | "title">;
            }>;
            creator?: Types.Maybe<
              Pick<Types.OpenbookAuthUser, "id" | "email" | "dateJoined"> & {
                profile?: Types.Maybe<
                  Pick<
                    Types.OpenbookAuthUserprofile,
                    | "id"
                    | "name"
                    | "lastName"
                    | "pronouns"
                    | "avatar"
                    | "cover"
                    | "aboutMe"
                    | "location"
                    | "url"
                  >
                >;
              }
            >;
          }
        >;
        linkhubTools: Array<
          Pick<
            Types.OpenbookCommunitiesCollaborationtool,
            | "id"
            | "title"
            | "description"
            | "thumbnail"
            | "collectionType"
            | "url"
            | "domain"
            | "createdAt"
          > & {
            creator?: Types.Maybe<
              Pick<Types.OpenbookAuthUser, "id" | "email" | "dateJoined"> & {
                profile?: Types.Maybe<
                  Pick<
                    Types.OpenbookAuthUserprofile,
                    | "id"
                    | "name"
                    | "lastName"
                    | "pronouns"
                    | "avatar"
                    | "cover"
                    | "aboutMe"
                    | "location"
                    | "url"
                  >
                >;
              }
            >;
          }
        >;
        onboardingSteps: Array<
          Pick<Types.OpenbookCommunitiesOnboardingstep, "stepNumber" | "text">
        >;
        creator?: Types.Maybe<
          Pick<Types.OpenbookAuthUser, "id" | "email" | "dateJoined"> & {
            profile?: Types.Maybe<
              Pick<
                Types.OpenbookAuthUserprofile,
                | "id"
                | "name"
                | "lastName"
                | "pronouns"
                | "avatar"
                | "cover"
                | "aboutMe"
                | "location"
                | "url"
              >
            >;
          }
        >;
        externalLinks: Array<
          Pick<
            Types.OpenbookCommunitiesExternallink,
            "id" | "name" | "type" | "url"
          >
        >;
      }
    >;
    reportedSpaceAppointment?: Types.Maybe<
      Pick<
        Types.OpenbookAppointmentsAppointment,
        | "id"
        | "title"
        | "description"
        | "thumbnail"
        | "startDateTime"
        | "endDateTime"
        | "inviteOnly"
        | "permission"
        | "created"
        | "modified"
        | "isDeleted"
        | "deletedAt"
      > & {
        space: Pick<
          Types.OpenbookCommunitiesCommunity,
          | "id"
          | "avatar"
          | "cover"
          | "name"
          | "title"
          | "description"
          | "location"
          | "contactDescription"
          | "contactEmail"
          | "contactPhone"
          | "created"
        > & {
          onboardingSteps: Array<
            Pick<Types.OpenbookCommunitiesOnboardingstep, "stepNumber" | "text">
          >;
          creator?: Types.Maybe<
            Pick<Types.OpenbookAuthUser, "id" | "email" | "dateJoined"> & {
              profile?: Types.Maybe<
                Pick<
                  Types.OpenbookAuthUserprofile,
                  | "id"
                  | "name"
                  | "lastName"
                  | "pronouns"
                  | "avatar"
                  | "cover"
                  | "aboutMe"
                  | "location"
                  | "url"
                >
              >;
            }
          >;
          externalLinks: Array<
            Pick<
              Types.OpenbookCommunitiesExternallink,
              "id" | "name" | "type" | "url"
            >
          >;
          linkhubToolsAggregate: {
            aggregate?: Types.Maybe<
              Pick<
                Types.OpenbookCommunitiesCollaborationtoolAggregateFields,
                "count"
              >
            >;
          };
        };
        creator?: Types.Maybe<
          Pick<Types.OpenbookAuthUser, "id" | "email" | "dateJoined"> & {
            profile?: Types.Maybe<
              Pick<
                Types.OpenbookAuthUserprofile,
                | "id"
                | "name"
                | "lastName"
                | "pronouns"
                | "avatar"
                | "cover"
                | "aboutMe"
                | "location"
                | "url"
              >
            >;
          }
        >;
        videoCallLink?: Types.Maybe<
          Pick<
            Types.OpenbookAppointmentsVideocalllink,
            "url" | "additionalInfo"
          >
        >;
        locationDetails?: Types.Maybe<
          Pick<Types.OpenbookAppointmentsLocationdetails, "completeAddress">
        >;
        participantsAggregate: {
          aggregate?: Types.Maybe<
            Pick<
              Types.OpenbookAppointmentsAppointmentParticipantsAggregateFields,
              "count"
            >
          >;
        };
      }
    >;
    reportedSpaceTask?: Types.Maybe<
      Pick<
        Types.OpenbookCommunitiesTask,
        | "id"
        | "name"
        | "description"
        | "thumbnail"
        | "locationType"
        | "location"
        | "visibility"
        | "regularity"
        | "slotsAvailable"
        | "slotsTaken"
        | "contactEmail"
        | "contactPhone"
        | "created"
      > & {
        space: Pick<
          Types.OpenbookCommunitiesCommunity,
          | "id"
          | "avatar"
          | "cover"
          | "name"
          | "title"
          | "description"
          | "location"
          | "contactDescription"
          | "contactEmail"
          | "contactPhone"
          | "created"
        > & {
          onboardingSteps: Array<
            Pick<Types.OpenbookCommunitiesOnboardingstep, "stepNumber" | "text">
          >;
          creator?: Types.Maybe<
            Pick<Types.OpenbookAuthUser, "id" | "email" | "dateJoined"> & {
              profile?: Types.Maybe<
                Pick<
                  Types.OpenbookAuthUserprofile,
                  | "id"
                  | "name"
                  | "lastName"
                  | "pronouns"
                  | "avatar"
                  | "cover"
                  | "aboutMe"
                  | "location"
                  | "url"
                >
              >;
            }
          >;
          externalLinks: Array<
            Pick<
              Types.OpenbookCommunitiesExternallink,
              "id" | "name" | "type" | "url"
            >
          >;
          linkhubToolsAggregate: {
            aggregate?: Types.Maybe<
              Pick<
                Types.OpenbookCommunitiesCollaborationtoolAggregateFields,
                "count"
              >
            >;
          };
        };
        skills: Array<{
          skill: Pick<Types.OpenbookTermsSkill, "id" | "title">;
        }>;
        creator?: Types.Maybe<
          Pick<Types.OpenbookAuthUser, "id" | "email" | "dateJoined"> & {
            profile?: Types.Maybe<
              Pick<
                Types.OpenbookAuthUserprofile,
                | "id"
                | "name"
                | "lastName"
                | "pronouns"
                | "avatar"
                | "cover"
                | "aboutMe"
                | "location"
                | "url"
              >
            >;
          }
        >;
      }
    >;
    reportedSpaceLinkhubTool?: Types.Maybe<
      Pick<
        Types.OpenbookCommunitiesCollaborationtool,
        | "id"
        | "title"
        | "description"
        | "thumbnail"
        | "collectionType"
        | "url"
        | "domain"
        | "createdAt"
      > & {
        space: Pick<
          Types.OpenbookCommunitiesCommunity,
          | "id"
          | "avatar"
          | "cover"
          | "name"
          | "title"
          | "description"
          | "location"
          | "contactDescription"
          | "contactEmail"
          | "contactPhone"
          | "created"
        > & {
          onboardingSteps: Array<
            Pick<Types.OpenbookCommunitiesOnboardingstep, "stepNumber" | "text">
          >;
          creator?: Types.Maybe<
            Pick<Types.OpenbookAuthUser, "id" | "email" | "dateJoined"> & {
              profile?: Types.Maybe<
                Pick<
                  Types.OpenbookAuthUserprofile,
                  | "id"
                  | "name"
                  | "lastName"
                  | "pronouns"
                  | "avatar"
                  | "cover"
                  | "aboutMe"
                  | "location"
                  | "url"
                >
              >;
            }
          >;
          externalLinks: Array<
            Pick<
              Types.OpenbookCommunitiesExternallink,
              "id" | "name" | "type" | "url"
            >
          >;
          linkhubToolsAggregate: {
            aggregate?: Types.Maybe<
              Pick<
                Types.OpenbookCommunitiesCollaborationtoolAggregateFields,
                "count"
              >
            >;
          };
        };
        creator?: Types.Maybe<
          Pick<Types.OpenbookAuthUser, "id" | "email" | "dateJoined"> & {
            profile?: Types.Maybe<
              Pick<
                Types.OpenbookAuthUserprofile,
                | "id"
                | "name"
                | "lastName"
                | "pronouns"
                | "avatar"
                | "cover"
                | "aboutMe"
                | "location"
                | "url"
              >
            >;
          }
        >;
      }
    >;
  };
};

export type LoginMutationVariables = Types.Exact<{
  email: Types.Scalars["String"]["input"];
  password: Types.Scalars["String"]["input"];
}>;

export type LoginMutation = {
  login: Pick<Types.AuthResult, "userId" | "email" | "token">;
};

export type ListReportsQueryVariables = Types.Exact<{ [key: string]: never }>;

export type ListReportsQuery = {
  reports: Array<
    Pick<
      Types.Report,
      "id" | "details" | "status" | "contentType" | "createdAt" | "updatedAt"
    > & {
      reporter?: Types.Maybe<
        Pick<Types.OpenbookAuthUser, "id" | "email" | "dateJoined"> & {
          profile?: Types.Maybe<
            Pick<
              Types.OpenbookAuthUserprofile,
              | "id"
              | "name"
              | "lastName"
              | "pronouns"
              | "avatar"
              | "cover"
              | "aboutMe"
              | "location"
              | "url"
            >
          >;
        }
      >;
    }
  >;
};

export type ViewPostQueryVariables = Types.Exact<{
  id: Types.Scalars["uuid"]["input"];
}>;

export type ViewPostQuery = {
  openbookPostsPostByPk?: Types.Maybe<
    Pick<
      Types.OpenbookPostsPost,
      "id" | "title" | "text" | "status" | "created"
    > & {
      author: Pick<Types.OpenbookAuthUser, "id" | "email" | "dateJoined"> & {
        profile?: Types.Maybe<
          Pick<
            Types.OpenbookAuthUserprofile,
            | "id"
            | "name"
            | "lastName"
            | "pronouns"
            | "avatar"
            | "cover"
            | "aboutMe"
            | "location"
            | "url"
          >
        >;
      };
      space?: Types.Maybe<
        Pick<Types.OpenbookCommunitiesCommunity, "id" | "name" | "title"> & {
          creator?: Types.Maybe<
            Pick<Types.OpenbookAuthUser, "id" | "email" | "dateJoined"> & {
              profile?: Types.Maybe<
                Pick<
                  Types.OpenbookAuthUserprofile,
                  | "id"
                  | "name"
                  | "lastName"
                  | "pronouns"
                  | "avatar"
                  | "cover"
                  | "aboutMe"
                  | "location"
                  | "url"
                >
              >;
            }
          >;
        }
      >;
    }
  >;
};

export type ViewReportQueryVariables = Types.Exact<{
  id: Types.Scalars["UUID"]["input"];
}>;

export type ViewReportQuery = {
  report: Pick<
    Types.Report,
    "id" | "details" | "contentType" | "status" | "createdAt"
  > & {
    reporter?: Types.Maybe<
      Pick<Types.OpenbookAuthUser, "id" | "email" | "dateJoined"> & {
        profile?: Types.Maybe<
          Pick<
            Types.OpenbookAuthUserprofile,
            | "id"
            | "name"
            | "lastName"
            | "pronouns"
            | "avatar"
            | "cover"
            | "aboutMe"
            | "location"
            | "url"
          >
        >;
      }
    >;
    events: Array<
      Pick<
        Types.ReportEvent,
        "id" | "eventName" | "eventPayload" | "occurredAt"
      >
    >;
    reportedPost?: Types.Maybe<
      Pick<
        Types.OpenbookPostsPost,
        "id" | "title" | "text" | "status" | "created"
      > & {
        author: Pick<Types.OpenbookAuthUser, "id" | "email" | "dateJoined"> & {
          profile?: Types.Maybe<
            Pick<
              Types.OpenbookAuthUserprofile,
              | "id"
              | "name"
              | "lastName"
              | "pronouns"
              | "avatar"
              | "cover"
              | "aboutMe"
              | "location"
              | "url"
            >
          >;
        };
        space?: Types.Maybe<
          Pick<Types.OpenbookCommunitiesCommunity, "id" | "name" | "title"> & {
            creator?: Types.Maybe<
              Pick<Types.OpenbookAuthUser, "id" | "email" | "dateJoined"> & {
                profile?: Types.Maybe<
                  Pick<
                    Types.OpenbookAuthUserprofile,
                    | "id"
                    | "name"
                    | "lastName"
                    | "pronouns"
                    | "avatar"
                    | "cover"
                    | "aboutMe"
                    | "location"
                    | "url"
                  >
                >;
              }
            >;
          }
        >;
      }
    >;
    reportedComment?: Types.Maybe<
      Pick<
        Types.OpenbookPostsPostcomment,
        | "id"
        | "text"
        | "isEdited"
        | "isDeleted"
        | "created"
        | "modified"
        | "commentableId"
      > & {
        commenter: Pick<
          Types.OpenbookAuthUser,
          "id" | "email" | "dateJoined"
        > & {
          profile?: Types.Maybe<
            Pick<
              Types.OpenbookAuthUserprofile,
              | "id"
              | "name"
              | "lastName"
              | "pronouns"
              | "avatar"
              | "cover"
              | "aboutMe"
              | "location"
              | "url"
            >
          >;
        };
        commentableType: Pick<Types.DjangoContentType, "appLabel" | "model">;
        parentComment?: Types.Maybe<
          Pick<
            Types.OpenbookPostsPostcomment,
            "id" | "text" | "isEdited" | "isDeleted" | "created" | "modified"
          > & {
            commenter: Pick<
              Types.OpenbookAuthUser,
              "id" | "email" | "dateJoined"
            > & {
              profile?: Types.Maybe<
                Pick<
                  Types.OpenbookAuthUserprofile,
                  | "id"
                  | "name"
                  | "lastName"
                  | "pronouns"
                  | "avatar"
                  | "cover"
                  | "aboutMe"
                  | "location"
                  | "url"
                >
              >;
            };
          }
        >;
      }
    >;
    reportedUser?: Types.Maybe<
      Pick<Types.OpenbookAuthUser, "id" | "email" | "dateJoined"> & {
        postsAggregate: {
          aggregate?: Types.Maybe<
            Pick<Types.OpenbookPostsPostAggregateFields, "count">
          >;
        };
        posts: Array<
          Pick<
            Types.OpenbookPostsPost,
            "id" | "title" | "text" | "status" | "created"
          > & {
            author: Pick<
              Types.OpenbookAuthUser,
              "id" | "email" | "dateJoined"
            > & {
              profile?: Types.Maybe<
                Pick<
                  Types.OpenbookAuthUserprofile,
                  | "id"
                  | "name"
                  | "lastName"
                  | "pronouns"
                  | "avatar"
                  | "cover"
                  | "aboutMe"
                  | "location"
                  | "url"
                >
              >;
            };
            space?: Types.Maybe<
              Pick<
                Types.OpenbookCommunitiesCommunity,
                "id" | "name" | "title"
              > & {
                creator?: Types.Maybe<
                  Pick<
                    Types.OpenbookAuthUser,
                    "id" | "email" | "dateJoined"
                  > & {
                    profile?: Types.Maybe<
                      Pick<
                        Types.OpenbookAuthUserprofile,
                        | "id"
                        | "name"
                        | "lastName"
                        | "pronouns"
                        | "avatar"
                        | "cover"
                        | "aboutMe"
                        | "location"
                        | "url"
                      >
                    >;
                  }
                >;
              }
            >;
          }
        >;
        commentsAggregate: {
          aggregate?: Types.Maybe<
            Pick<Types.OpenbookPostsPostcommentAggregateFields, "count">
          >;
        };
        comments: Array<
          Pick<
            Types.OpenbookPostsPostcomment,
            | "id"
            | "text"
            | "isEdited"
            | "isDeleted"
            | "created"
            | "modified"
            | "commentableId"
          > & {
            commenter: Pick<
              Types.OpenbookAuthUser,
              "id" | "email" | "dateJoined"
            > & {
              profile?: Types.Maybe<
                Pick<
                  Types.OpenbookAuthUserprofile,
                  | "id"
                  | "name"
                  | "lastName"
                  | "pronouns"
                  | "avatar"
                  | "cover"
                  | "aboutMe"
                  | "location"
                  | "url"
                >
              >;
            };
            commentableType: Pick<
              Types.DjangoContentType,
              "appLabel" | "model"
            >;
            parentComment?: Types.Maybe<
              Pick<
                Types.OpenbookPostsPostcomment,
                | "id"
                | "text"
                | "isEdited"
                | "isDeleted"
                | "created"
                | "modified"
              > & {
                commenter: Pick<
                  Types.OpenbookAuthUser,
                  "id" | "email" | "dateJoined"
                > & {
                  profile?: Types.Maybe<
                    Pick<
                      Types.OpenbookAuthUserprofile,
                      | "id"
                      | "name"
                      | "lastName"
                      | "pronouns"
                      | "avatar"
                      | "cover"
                      | "aboutMe"
                      | "location"
                      | "url"
                    >
                  >;
                };
              }
            >;
          }
        >;
        createdSpacesAggregate: {
          aggregate?: Types.Maybe<
            Pick<Types.OpenbookCommunitiesCommunityAggregateFields, "count">
          >;
        };
        createdSpaces: Array<
          Pick<
            Types.OpenbookCommunitiesCommunity,
            | "id"
            | "avatar"
            | "cover"
            | "name"
            | "title"
            | "description"
            | "location"
            | "contactDescription"
            | "contactEmail"
            | "contactPhone"
            | "created"
          > & {
            onboardingSteps: Array<
              Pick<
                Types.OpenbookCommunitiesOnboardingstep,
                "stepNumber" | "text"
              >
            >;
            creator?: Types.Maybe<
              Pick<Types.OpenbookAuthUser, "id" | "email" | "dateJoined"> & {
                profile?: Types.Maybe<
                  Pick<
                    Types.OpenbookAuthUserprofile,
                    | "id"
                    | "name"
                    | "lastName"
                    | "pronouns"
                    | "avatar"
                    | "cover"
                    | "aboutMe"
                    | "location"
                    | "url"
                  >
                >;
              }
            >;
            externalLinks: Array<
              Pick<
                Types.OpenbookCommunitiesExternallink,
                "id" | "name" | "type" | "url"
              >
            >;
            linkhubToolsAggregate: {
              aggregate?: Types.Maybe<
                Pick<
                  Types.OpenbookCommunitiesCollaborationtoolAggregateFields,
                  "count"
                >
              >;
            };
          }
        >;
        profile?: Types.Maybe<
          Pick<
            Types.OpenbookAuthUserprofile,
            | "id"
            | "name"
            | "lastName"
            | "pronouns"
            | "avatar"
            | "cover"
            | "aboutMe"
            | "location"
            | "url"
          >
        >;
      }
    >;
    reportedSpace?: Types.Maybe<
      Pick<
        Types.OpenbookCommunitiesCommunity,
        | "id"
        | "avatar"
        | "cover"
        | "name"
        | "title"
        | "description"
        | "location"
        | "contactDescription"
        | "contactEmail"
        | "contactPhone"
        | "created"
      > & {
        postsAggregate: {
          aggregate?: Types.Maybe<
            Pick<Types.OpenbookPostsPostAggregateFields, "count">
          >;
        };
        appointmentsAggregate: {
          aggregate?: Types.Maybe<
            Pick<Types.OpenbookAppointmentsAppointmentAggregateFields, "count">
          >;
        };
        tasksAggregate: {
          aggregate?: Types.Maybe<
            Pick<Types.OpenbookCommunitiesTaskAggregateFields, "count">
          >;
        };
        linkhubToolsAggregate: {
          aggregate?: Types.Maybe<
            Pick<
              Types.OpenbookCommunitiesCollaborationtoolAggregateFields,
              "count"
            >
          >;
        };
        posts: Array<
          Pick<
            Types.OpenbookPostsPost,
            "id" | "title" | "text" | "status" | "created"
          > & {
            author: Pick<
              Types.OpenbookAuthUser,
              "id" | "email" | "dateJoined"
            > & {
              profile?: Types.Maybe<
                Pick<
                  Types.OpenbookAuthUserprofile,
                  | "id"
                  | "name"
                  | "lastName"
                  | "pronouns"
                  | "avatar"
                  | "cover"
                  | "aboutMe"
                  | "location"
                  | "url"
                >
              >;
            };
            space?: Types.Maybe<
              Pick<
                Types.OpenbookCommunitiesCommunity,
                "id" | "name" | "title"
              > & {
                creator?: Types.Maybe<
                  Pick<
                    Types.OpenbookAuthUser,
                    "id" | "email" | "dateJoined"
                  > & {
                    profile?: Types.Maybe<
                      Pick<
                        Types.OpenbookAuthUserprofile,
                        | "id"
                        | "name"
                        | "lastName"
                        | "pronouns"
                        | "avatar"
                        | "cover"
                        | "aboutMe"
                        | "location"
                        | "url"
                      >
                    >;
                  }
                >;
              }
            >;
          }
        >;
        appointments: Array<
          Pick<
            Types.OpenbookAppointmentsAppointment,
            | "id"
            | "title"
            | "description"
            | "thumbnail"
            | "startDateTime"
            | "endDateTime"
            | "inviteOnly"
            | "permission"
            | "created"
            | "modified"
            | "isDeleted"
            | "deletedAt"
          > & {
            creator?: Types.Maybe<
              Pick<Types.OpenbookAuthUser, "id" | "email" | "dateJoined"> & {
                profile?: Types.Maybe<
                  Pick<
                    Types.OpenbookAuthUserprofile,
                    | "id"
                    | "name"
                    | "lastName"
                    | "pronouns"
                    | "avatar"
                    | "cover"
                    | "aboutMe"
                    | "location"
                    | "url"
                  >
                >;
              }
            >;
            videoCallLink?: Types.Maybe<
              Pick<
                Types.OpenbookAppointmentsVideocalllink,
                "url" | "additionalInfo"
              >
            >;
            locationDetails?: Types.Maybe<
              Pick<Types.OpenbookAppointmentsLocationdetails, "completeAddress">
            >;
            participantsAggregate: {
              aggregate?: Types.Maybe<
                Pick<
                  Types.OpenbookAppointmentsAppointmentParticipantsAggregateFields,
                  "count"
                >
              >;
            };
          }
        >;
        tasks: Array<
          Pick<
            Types.OpenbookCommunitiesTask,
            | "id"
            | "name"
            | "description"
            | "thumbnail"
            | "locationType"
            | "location"
            | "visibility"
            | "regularity"
            | "slotsAvailable"
            | "slotsTaken"
            | "contactEmail"
            | "contactPhone"
            | "created"
          > & {
            skills: Array<{
              skill: Pick<Types.OpenbookTermsSkill, "id" | "title">;
            }>;
            creator?: Types.Maybe<
              Pick<Types.OpenbookAuthUser, "id" | "email" | "dateJoined"> & {
                profile?: Types.Maybe<
                  Pick<
                    Types.OpenbookAuthUserprofile,
                    | "id"
                    | "name"
                    | "lastName"
                    | "pronouns"
                    | "avatar"
                    | "cover"
                    | "aboutMe"
                    | "location"
                    | "url"
                  >
                >;
              }
            >;
          }
        >;
        linkhubTools: Array<
          Pick<
            Types.OpenbookCommunitiesCollaborationtool,
            | "id"
            | "title"
            | "description"
            | "thumbnail"
            | "collectionType"
            | "url"
            | "domain"
            | "createdAt"
          > & {
            creator?: Types.Maybe<
              Pick<Types.OpenbookAuthUser, "id" | "email" | "dateJoined"> & {
                profile?: Types.Maybe<
                  Pick<
                    Types.OpenbookAuthUserprofile,
                    | "id"
                    | "name"
                    | "lastName"
                    | "pronouns"
                    | "avatar"
                    | "cover"
                    | "aboutMe"
                    | "location"
                    | "url"
                  >
                >;
              }
            >;
          }
        >;
        onboardingSteps: Array<
          Pick<Types.OpenbookCommunitiesOnboardingstep, "stepNumber" | "text">
        >;
        creator?: Types.Maybe<
          Pick<Types.OpenbookAuthUser, "id" | "email" | "dateJoined"> & {
            profile?: Types.Maybe<
              Pick<
                Types.OpenbookAuthUserprofile,
                | "id"
                | "name"
                | "lastName"
                | "pronouns"
                | "avatar"
                | "cover"
                | "aboutMe"
                | "location"
                | "url"
              >
            >;
          }
        >;
        externalLinks: Array<
          Pick<
            Types.OpenbookCommunitiesExternallink,
            "id" | "name" | "type" | "url"
          >
        >;
      }
    >;
    reportedSpaceAppointment?: Types.Maybe<
      Pick<
        Types.OpenbookAppointmentsAppointment,
        | "id"
        | "title"
        | "description"
        | "thumbnail"
        | "startDateTime"
        | "endDateTime"
        | "inviteOnly"
        | "permission"
        | "created"
        | "modified"
        | "isDeleted"
        | "deletedAt"
      > & {
        space: Pick<
          Types.OpenbookCommunitiesCommunity,
          | "id"
          | "avatar"
          | "cover"
          | "name"
          | "title"
          | "description"
          | "location"
          | "contactDescription"
          | "contactEmail"
          | "contactPhone"
          | "created"
        > & {
          onboardingSteps: Array<
            Pick<Types.OpenbookCommunitiesOnboardingstep, "stepNumber" | "text">
          >;
          creator?: Types.Maybe<
            Pick<Types.OpenbookAuthUser, "id" | "email" | "dateJoined"> & {
              profile?: Types.Maybe<
                Pick<
                  Types.OpenbookAuthUserprofile,
                  | "id"
                  | "name"
                  | "lastName"
                  | "pronouns"
                  | "avatar"
                  | "cover"
                  | "aboutMe"
                  | "location"
                  | "url"
                >
              >;
            }
          >;
          externalLinks: Array<
            Pick<
              Types.OpenbookCommunitiesExternallink,
              "id" | "name" | "type" | "url"
            >
          >;
          linkhubToolsAggregate: {
            aggregate?: Types.Maybe<
              Pick<
                Types.OpenbookCommunitiesCollaborationtoolAggregateFields,
                "count"
              >
            >;
          };
        };
        creator?: Types.Maybe<
          Pick<Types.OpenbookAuthUser, "id" | "email" | "dateJoined"> & {
            profile?: Types.Maybe<
              Pick<
                Types.OpenbookAuthUserprofile,
                | "id"
                | "name"
                | "lastName"
                | "pronouns"
                | "avatar"
                | "cover"
                | "aboutMe"
                | "location"
                | "url"
              >
            >;
          }
        >;
        videoCallLink?: Types.Maybe<
          Pick<
            Types.OpenbookAppointmentsVideocalllink,
            "url" | "additionalInfo"
          >
        >;
        locationDetails?: Types.Maybe<
          Pick<Types.OpenbookAppointmentsLocationdetails, "completeAddress">
        >;
        participantsAggregate: {
          aggregate?: Types.Maybe<
            Pick<
              Types.OpenbookAppointmentsAppointmentParticipantsAggregateFields,
              "count"
            >
          >;
        };
      }
    >;
    reportedSpaceTask?: Types.Maybe<
      Pick<
        Types.OpenbookCommunitiesTask,
        | "id"
        | "name"
        | "description"
        | "thumbnail"
        | "locationType"
        | "location"
        | "visibility"
        | "regularity"
        | "slotsAvailable"
        | "slotsTaken"
        | "contactEmail"
        | "contactPhone"
        | "created"
      > & {
        space: Pick<
          Types.OpenbookCommunitiesCommunity,
          | "id"
          | "avatar"
          | "cover"
          | "name"
          | "title"
          | "description"
          | "location"
          | "contactDescription"
          | "contactEmail"
          | "contactPhone"
          | "created"
        > & {
          onboardingSteps: Array<
            Pick<Types.OpenbookCommunitiesOnboardingstep, "stepNumber" | "text">
          >;
          creator?: Types.Maybe<
            Pick<Types.OpenbookAuthUser, "id" | "email" | "dateJoined"> & {
              profile?: Types.Maybe<
                Pick<
                  Types.OpenbookAuthUserprofile,
                  | "id"
                  | "name"
                  | "lastName"
                  | "pronouns"
                  | "avatar"
                  | "cover"
                  | "aboutMe"
                  | "location"
                  | "url"
                >
              >;
            }
          >;
          externalLinks: Array<
            Pick<
              Types.OpenbookCommunitiesExternallink,
              "id" | "name" | "type" | "url"
            >
          >;
          linkhubToolsAggregate: {
            aggregate?: Types.Maybe<
              Pick<
                Types.OpenbookCommunitiesCollaborationtoolAggregateFields,
                "count"
              >
            >;
          };
        };
        skills: Array<{
          skill: Pick<Types.OpenbookTermsSkill, "id" | "title">;
        }>;
        creator?: Types.Maybe<
          Pick<Types.OpenbookAuthUser, "id" | "email" | "dateJoined"> & {
            profile?: Types.Maybe<
              Pick<
                Types.OpenbookAuthUserprofile,
                | "id"
                | "name"
                | "lastName"
                | "pronouns"
                | "avatar"
                | "cover"
                | "aboutMe"
                | "location"
                | "url"
              >
            >;
          }
        >;
      }
    >;
    reportedSpaceLinkhubTool?: Types.Maybe<
      Pick<
        Types.OpenbookCommunitiesCollaborationtool,
        | "id"
        | "title"
        | "description"
        | "thumbnail"
        | "collectionType"
        | "url"
        | "domain"
        | "createdAt"
      > & {
        space: Pick<
          Types.OpenbookCommunitiesCommunity,
          | "id"
          | "avatar"
          | "cover"
          | "name"
          | "title"
          | "description"
          | "location"
          | "contactDescription"
          | "contactEmail"
          | "contactPhone"
          | "created"
        > & {
          onboardingSteps: Array<
            Pick<Types.OpenbookCommunitiesOnboardingstep, "stepNumber" | "text">
          >;
          creator?: Types.Maybe<
            Pick<Types.OpenbookAuthUser, "id" | "email" | "dateJoined"> & {
              profile?: Types.Maybe<
                Pick<
                  Types.OpenbookAuthUserprofile,
                  | "id"
                  | "name"
                  | "lastName"
                  | "pronouns"
                  | "avatar"
                  | "cover"
                  | "aboutMe"
                  | "location"
                  | "url"
                >
              >;
            }
          >;
          externalLinks: Array<
            Pick<
              Types.OpenbookCommunitiesExternallink,
              "id" | "name" | "type" | "url"
            >
          >;
          linkhubToolsAggregate: {
            aggregate?: Types.Maybe<
              Pick<
                Types.OpenbookCommunitiesCollaborationtoolAggregateFields,
                "count"
              >
            >;
          };
        };
        creator?: Types.Maybe<
          Pick<Types.OpenbookAuthUser, "id" | "email" | "dateJoined"> & {
            profile?: Types.Maybe<
              Pick<
                Types.OpenbookAuthUserprofile,
                | "id"
                | "name"
                | "lastName"
                | "pronouns"
                | "avatar"
                | "cover"
                | "aboutMe"
                | "location"
                | "url"
              >
            >;
          }
        >;
      }
    >;
  };
};
