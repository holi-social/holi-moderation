import React from "react";
import { Link, useParams } from "react-router-dom";
import useSWR from "swr";
import { VIEW_REPORT_QUERY } from "./queries";
import { fetcher } from "../../fetcher";
import {
  Grid,
  Loader,
  Paper,
  Title,
  Text,
  ActionIcon,
  GridCol,
  Avatar,
  Flex,
  Button,
} from "@mantine/core";
import {
  IconArrowLeft,
  IconExternalLink,
  IconMessage2,
  IconTrash,
  IconUserCancel,
} from "@tabler/icons-react";
import { okunaAdminUrl } from "../../utils";
import { ViewReportQuery } from "../../graphql/types";
import { formatDistanceToNow, parseISO } from "date-fns";
import { OpenbookAuthUser } from "../../graphql/schema.types";

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
  const { data, isLoading } = useSWR<ViewReportQuery>(
    [VIEW_REPORT_QUERY, { id: reportId }],
    fetcher,
  );

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

      <Paper shadow="xs" p="md" mb="md">
        <Title order={3} mb="sm">
          Report Details
        </Title>
        <Grid>
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
        </Grid>
      </Paper>

      <Paper shadow="xs" p="md" mb="md">
        <Title order={3} mb="sm">
          Reported Content
        </Title>
        <Grid>
          <Grid.Col span={2}>
            <Text fw={700}>Content Type:</Text>
          </Grid.Col>
          <Grid.Col span={10}>{report.contentType}</Grid.Col>
          {report.contentType == "POST" && (
            <>
              <GridCol span={2}>
                <Text fw={700}>Post ID:</Text>
              </GridCol>
              <GridCol span={10}>
                <Flex align="center" gap="md">
                  <Text>{report.reportedPost?.id}</Text>
                  <OkunaLinkButton
                    urlPath={`openbook_posts/post/${report.reportedPost?.id}`}
                  />
                </Flex>
              </GridCol>
              <GridCol span={2}>
                <Text fw={700}>Author:</Text>
              </GridCol>
              <GridCol span={10}>
                <User user={report.reportedPost?.author as OpenbookAuthUser} />
              </GridCol>
              <GridCol span={2}>
                <Text fw={700}>Post Title:</Text>
              </GridCol>
              <GridCol span={10}>
                <Text>{report.reportedPost?.title}</Text>
              </GridCol>
              <GridCol span={2}>
                <Text fw={700}>Post Content:</Text>
              </GridCol>
              <GridCol span={10}>
                <Text>{report.reportedPost?.text}</Text>
              </GridCol>
              <GridCol span={2}>
                <Text fw={700}>Posted at:</Text>
              </GridCol>
              <GridCol span={10}>
                <Text>
                  {report.reportedPost?.created
                    ? formatDate(report.reportedPost?.created)
                    : "n/a"}
                </Text>
              </GridCol>
            </>
          )}
        </Grid>
      </Paper>

      <Paper shadow="xs" p="md">
        <Title order={3} mb="sm">
          Actions
        </Title>

        <Flex gap="md">
          <Button variant="light" leftSection={<IconMessage2 size={14} />}>
            Message User
          </Button>
          <Button leftSection={<IconTrash size={14} />}>Delete Post</Button>
          <Button leftSection={<IconUserCancel size={14} />} color="red">
            Ban User
          </Button>
        </Flex>
      </Paper>
    </>
  );
};
