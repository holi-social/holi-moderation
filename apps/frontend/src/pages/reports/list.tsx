import React from "react";
import { Stack, Title } from "@mantine/core";

import { ReportsTable } from "../../components/reportsTable";

export const ListReports: React.FC = () => (
  <Stack>
    <Title>All Reports</Title>
    <ReportsTable />
  </Stack>
);
