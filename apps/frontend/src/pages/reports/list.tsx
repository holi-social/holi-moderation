import React from "react";
import useSWR from "swr";
import { REPORTS_LIST_QUERY } from "./queries";
import { fetcher } from "../../fetcher";
import { Loader } from "@mantine/core";
import {
  MRT_ColumnDef,
  MantineReactTable,
  useMantineReactTable,
} from "mantine-react-table";
import { Report } from "../../graphql/schema.types";
import { Link } from "react-router-dom";

export const ReportsList: React.FC = () => {
  const { data, isLoading } = useSWR<{ reports: Report[] }>(
    [REPORTS_LIST_QUERY],
    fetcher,
  );

  const reports = data?.reports ?? [];
  const columns = React.useMemo<MRT_ColumnDef<Report>[]>(
    () => [
      {
        accessorFn: (report) => (
          <Link to={`/reports/${report.id}`}>{report.id}</Link>
        ),
        header: "ID",
      },
      {
        accessorFn: (report) =>
          `${report.reporter?.profile?.name} ${report.reporter?.profile?.lastName} (${report.reporter?.email})`,
        header: "Reporter",
      },
      {
        accessorKey: "contentType",
        header: "Content Type",
      },
      {
        accessorKey: "details",
        header: "Details/Comment",
      },
    ],
    [],
  );

  const table = useMantineReactTable({
    columns,
    data: reports,
  });

  if (isLoading) {
    return <Loader />;
  }

  return <MantineReactTable table={table} />;
};
