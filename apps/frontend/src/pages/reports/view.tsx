import React from "react";
import { Link, useParams } from "react-router-dom";
import useSWR from "swr";
import {
  Grid,
  Loader,
  Title,
  Text,
  ActionIcon,
  Avatar,
  Flex,
  Button,
  Accordion,
  Group,
} from "@mantine/core";
import {
  IconActivity,
  IconArrowLeft,
  IconExternalLink,
  IconFlag,
  IconGavel,
  IconHistory,
  IconMessage2,
  IconMessageReport,
  IconTrash,
  IconUserCancel,
} from "@tabler/icons-react";
import { okunaAdminUrl } from "../../utils";
import { ViewReportQuery as ViewReportQueryResponse } from "../../graphql/generated/types";
import { formatDistanceToNow, parseISO } from "date-fns";
import { OpenbookAuthUser } from "../../graphql/generated/schema.types";
import { Post } from "../../components/post";
import { Comment } from "../../components/comment";
import { ReportedUser } from "../../components/user/reported";
import { ReportedSpace } from "../../components/space/reported";
import { ReportedSpaceAppointment } from "../../components/spaceAppointment/reported";
import { ViewReportQuery } from "../../graphql/queries/viewReport";
import { ReportedSpaceTask } from "../../components/spaceTask/reported";
import { ReportedSpaceLinkhubTool } from "../../components/spaceLinkhubTool/reported";
import { ReportStatusDropdown } from "../../components/reportStatusDropdown";
import { ReportTimeline } from "../../components/reportTimeline";
import { ReportsTable } from "../../components/reportsTable";

const OkunaLinkButton: React.FC<{ urlPath: string }> = ({ urlPath }) => (
  <ActionIcon
    variant="default"
    component="a"
    href={okunaAdminUrl(urlPath)}
    target="_blank"
  >
    <IconExternalLink style={{ width: "75%", height: "75%" }} />
  </ActionIcon>
);

const User: React.FC<{ user: OpenbookAuthUser }> = ({ user }) => {
  return (
    <Flex align="center" gap="md">
      {user.profile?.avatar && <Avatar src={user.profile.avatar} />}
      <Text>
        {user.profile?.name} {user.profile?.lastName} ({user.email})
      </Text>
      <OkunaLinkButton urlPath={`openbook_auth/user/${user.id}`} />
    </Flex>
  );
};

export const ViewReport: React.FC = () => {
  const { reportId } = useParams();
  const { data, isLoading } = useSWR<ViewReportQueryResponse>([
    ViewReportQuery,
    { id: reportId },
  ]);

  if (isLoading || !data) {
    return <Loader />;
  }

  const report = data?.report;
  const idLastDigits = report.id.substring(0, 6).toUpperCase();

  const formatDate = (dateString: string) => {
    const date = parseISO(dateString);
    return `${formatDistanceToNow(date, { addSuffix: true })} (${date.toLocaleString()})`;
  };

  return (
    <>
      <Flex align="center" pb="xl" gap="md">
        <ActionIcon
          variant="subtle"
          color="gray"
          component={Link}
          to="/reports"
        >
          <IconArrowLeft />
        </ActionIcon>
        <Title>Report #{idLastDigits}</Title>
      </Flex>

      <Accordion
        multiple
        variant="separated"
        defaultValue={["report", "content"]}
      >
        <Accordion.Item value="report">
          <Accordion.Control icon={<IconMessageReport />}>
            <Title order={3}>Report Details</Title>
          </Accordion.Control>
          <Accordion.Panel p="md">
            <Grid>
              <Grid.Col span={2}>
                <Text fw={700}>Status:</Text>
              </Grid.Col>
              <Grid.Col span={10} display="flex">
                <ReportStatusDropdown
                  reportId={report.id}
                  status={report.status}
                />
              </Grid.Col>
              <Grid.Col span={2}>
                <Text fw={700}>Reported by:</Text>
              </Grid.Col>
              <Grid.Col span={10} display="flex">
                <User user={report.reporter as OpenbookAuthUser} />
              </Grid.Col>
              <Grid.Col span={2}>
                <Text fw={700}>Reported at:</Text>
              </Grid.Col>
              <Grid.Col span={10} display="flex">
                <Text>{formatDate(report.createdAt)}</Text>
              </Grid.Col>
              <Grid.Col span={2}>
                <Text fw={700}>Comment:</Text>
              </Grid.Col>
              <Grid.Col span={10} display="flex">
                <Text>{report.details}</Text>
              </Grid.Col>

              <Grid.Col span={12}>
                <Accordion variant="contained">
                  <Accordion.Item value="userReports">
                    <Accordion.Control icon={<IconHistory />}>
                      Recent reports by this user
                    </Accordion.Control>

                    <Accordion.Panel>
                      <ReportsTable
                        filters={{ reporter: report.reporter?.id }}
                        initialTableState={{
                          density: "xs",
                          pagination: { pageIndex: 0, pageSize: 5 },
                        }}
                      />
                    </Accordion.Panel>
                  </Accordion.Item>
                </Accordion>
              </Grid.Col>
            </Grid>
          </Accordion.Panel>
        </Accordion.Item>

        {report.contentType === "POST" && report.reportedPost && (
          <Accordion.Item value="content">
            <Accordion.Control icon={<IconFlag />}>
              <Title order={3}>Reported Post</Title>
            </Accordion.Control>
            <Accordion.Panel>
              <Post post={report.reportedPost} />
            </Accordion.Panel>
          </Accordion.Item>
        )}

        {report.contentType === "COMMENT" && report.reportedComment && (
          <Accordion.Item value="content">
            <Accordion.Control icon={<IconFlag />}>
              <Title order={3}>Reported Comment</Title>
            </Accordion.Control>
            <Accordion.Panel>
              <Comment comment={report.reportedComment} />
            </Accordion.Panel>
          </Accordion.Item>
        )}

        {report.contentType === "USER" && report.reportedUser && (
          <Accordion.Item value="content">
            <Accordion.Control icon={<IconFlag />}>
              <Title order={3}>Reported User</Title>
            </Accordion.Control>
            <Accordion.Panel>
              <ReportedUser user={report.reportedUser} />
            </Accordion.Panel>
          </Accordion.Item>
        )}

        {report.contentType === "SPACE" && report.reportedSpace && (
          <Accordion.Item value="content">
            <Accordion.Control icon={<IconFlag />}>
              <Title order={3}>Reported Space</Title>
            </Accordion.Control>
            <Accordion.Panel>
              <ReportedSpace space={report.reportedSpace} />
            </Accordion.Panel>
          </Accordion.Item>
        )}

        {report.contentType === "SPACE_APPOINTMENT" &&
          report.reportedSpaceAppointment && (
            <Accordion.Item value="content">
              <Accordion.Control icon={<IconFlag />}>
                <Title order={3}>Reported Appointment</Title>
              </Accordion.Control>
              <Accordion.Panel>
                <ReportedSpaceAppointment
                  appointment={report.reportedSpaceAppointment}
                />
              </Accordion.Panel>
            </Accordion.Item>
          )}

        {report.contentType === "SPACE_TASK" && report.reportedSpaceTask && (
          <Accordion.Item value="content">
            <Accordion.Control icon={<IconFlag />}>
              <Title order={3}>Reported Task</Title>
            </Accordion.Control>
            <Accordion.Panel>
              <ReportedSpaceTask task={report.reportedSpaceTask} />
            </Accordion.Panel>
          </Accordion.Item>
        )}

        {report.contentType === "SPACE_LINKHUB_TOOL" &&
          report.reportedSpaceLinkhubTool && (
            <Accordion.Item value="content">
              <Accordion.Control icon={<IconFlag />}>
                <Title order={3}>Reported Linkhub Tool</Title>
              </Accordion.Control>
              <Accordion.Panel>
                <ReportedSpaceLinkhubTool
                  tool={report.reportedSpaceLinkhubTool}
                />
              </Accordion.Panel>
            </Accordion.Item>
          )}

        <Accordion.Item value="actions">
          <Accordion.Control icon={<IconGavel />}>
            <Title order={3}>Actions</Title>
          </Accordion.Control>
          <Accordion.Panel>
            <Group>
              <Button variant="light" leftSection={<IconMessage2 size={14} />}>
                Message User
              </Button>
              <Button leftSection={<IconTrash size={14} />}>Delete Post</Button>
              <Button leftSection={<IconUserCancel size={14} />} color="red">
                Ban User
              </Button>
            </Group>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="Activity">
          <Accordion.Control icon={<IconActivity />}>
            <Title order={3}>Activity</Title>
          </Accordion.Control>
          <Accordion.Panel>
            <ReportTimeline events={report.events} />
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </>
  );
};
