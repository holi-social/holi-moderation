import { useParams } from "react-router-dom";
import { ReportsTable } from "../../components/reportsTable";
import { Stack, Title } from "@mantine/core";

export const ListReportsFromUser = () => {
  const { reporterId } = useParams<"reporterId">();

  return (
    <Stack>
      <Title>Reports for user</Title>
      <ReportsTable filters={{ reporter: reporterId }} />
    </Stack>
  );
};
