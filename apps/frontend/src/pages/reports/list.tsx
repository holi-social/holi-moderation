import React from "react";
import { ReportsTable } from "../../components/reportsTable";
import { Stack, Title } from "@mantine/core";

export const ListReports: React.FC = () => (
  <Stack>
    <Title>All Reports</Title>
    <ReportsTable />
  </Stack>
);
