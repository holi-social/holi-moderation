import React from "react";
import useSWR from "swr";
import { Loader } from "@mantine/core";
import {
  MRT_ColumnDef,
  MantineReactTable,
  useMantineReactTable,
} from "mantine-react-table";
import { Link } from "react-router-dom";
import { formatDistanceToNow, parseISO } from "date-fns";
import { ListReportsQuery as ListReportsQueryResponse } from "../../graphql/generated/types";
import ListReportsQuery from "../../graphql/queries/listReports";
import { formatUser, titleCase } from "../../utils";

export const ReportsList: React.FC = () => {
  const { data, isLoading } = useSWR<ListReportsQueryResponse>([
    ListReportsQuery,
  ]);

  const reports = data?.reports ?? [];
  const columns = React.useMemo<MRT_ColumnDef<(typeof reports)[0]>[]>(
    () => [
      {
        accessorKey: "id",
        header: "ID",
        Cell: ({ cell }) => {
          const id = cell.getValue<string>();
          const shortId = id.substring(0, 6).toUpperCase();

          return <Link to={`/reports/${id}`}>#{shortId}</Link>;
        },
      },
      {
        accessorFn: (report) => formatUser(report.reporter!),
        header: "Reporter",
      },
      {
        accessorKey: "contentType",
        header: "Content Type",
        Cell: ({ cell }) => titleCase(cell.getValue<string>()),
      },
      {
        accessorKey: "details",
        header: "Details/Comment",
      },
      {
        id: "createdAt",
        accessorFn: (report) => {
          if (!report.createdAt) {
            return null;
          }
          return parseISO(report.createdAt);
        },
        header: "Created",
        Cell: ({ cell }) => {
          const date = cell.getValue<Date>();
          if (!date) return null;
          return formatDistanceToNow(date, { addSuffix: true });
        },
        filterVariant: "date-range",
        sortingFn: "datetime",
        enableColumnFilterModes: false,
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
