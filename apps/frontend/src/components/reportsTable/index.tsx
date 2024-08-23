import React, { useState, useMemo } from 'react'
import { Loader } from '@mantine/core'
import { parseISO, formatDistanceToNow } from 'date-fns'
import {
  MRT_PaginationState,
  MRT_ColumnDef,
  useMantineReactTable,
  MantineReactTable,
  MRT_TableState,
  MRT_RowData,
} from 'mantine-react-table'
import { Link } from 'react-router-dom'
import useSWR from 'swr'

import type { OpenbookAuthUser, ReportStatus, ReportsFilter } from '../../graphql/generated/schema.types'
import type {
  ListReportsQueryVariables,
  ListReportsQuery as ListReportsQueryResponse,
} from '../../graphql/generated/types'
import ListReportsQuery from '../../graphql/queries/listReports'
import { formatUser, titleCase } from '../../utils'
import { ReportStatusDropdown } from '../reportStatusDropdown'

type ReportsTableProps<TRow extends MRT_RowData = ListReportsQueryResponse['reports'][0]> = {
  filters?: ReportsFilter
  initialTableState?: Partial<MRT_TableState<TRow>>
}

export const ReportsTable: React.FC<ReportsTableProps> = ({ filters, initialTableState = {} }) => {
  const [pagination, setPagination] = useState<MRT_PaginationState>(
    initialTableState?.pagination ?? {
      pageIndex: 0,
      pageSize: 10,
    },
  )

  const [searchTerm, setSearchTerm] = useState(undefined)

  const { data, isLoading } = useSWR<
    ListReportsQueryResponse,
    unknown,
    [typeof ListReportsQuery, ListReportsQueryVariables]
  >([
    ListReportsQuery,
    {
      pagination: {
        offset: pagination.pageIndex * pagination.pageSize,
        limit: pagination.pageSize,
      },
      filter: {
        search: searchTerm,
        ...filters,
      },
    },
  ])

  const reports = data?.reports ?? []
  const columns = useMemo<MRT_ColumnDef<ListReportsQueryResponse['reports'][0]>[]>(
    () => [
      {
        accessorKey: 'id',
        header: 'ID',
        Cell: ({ cell }) => {
          const id = cell.getValue<string>()
          const shortId = id.substring(0, 6).toUpperCase()

          return <Link to={`/reports/${id}`}>#{shortId}</Link>
        },
      },
      {
        accessorKey: 'status',
        header: 'Status',
        Cell: ({ cell, row }) => (
          <ReportStatusDropdown reportId={row.getValue<string>('id')} status={cell.getValue<ReportStatus>()} />
        ),
        filterVariant: 'select',
      },
      {
        // accessorFn: (report) => formatUser(report.reporter!),
        accessorKey: 'reporter',
        header: 'Reporter',
        Cell: ({ cell }) => {
          const reporter = cell.getValue<OpenbookAuthUser>()
          return <Link to={`/reports/user/${reporter.id}`}>{formatUser(reporter)}</Link>
        },
      },
      {
        accessorKey: 'contentType',
        header: 'Content Type',
        Cell: ({ cell }) => titleCase(cell.getValue<string>()),
      },
      {
        accessorKey: 'details',
        header: 'Details/Comment',
      },
      {
        id: 'createdAt',
        accessorFn: (report) => {
          if (!report.createdAt) {
            return null
          }
          return parseISO(report.createdAt)
        },
        header: 'Created',
        Cell: ({ cell }) => {
          const date = cell.getValue<Date>()
          if (!date) return null
          return formatDistanceToNow(date, { addSuffix: true })
        },
        filterVariant: 'date-range',
        sortingFn: 'datetime',
        enableColumnFilterModes: false,
      },
    ],
    [],
  )

  const table = useMantineReactTable({
    columns,
    data: reports,
    state: {
      pagination,
      globalFilter: searchTerm,
    },
    manualPagination: true,
    onPaginationChange: setPagination,
    onGlobalFilterChange: setSearchTerm,
    initialState: initialTableState,
  })

  if (isLoading) {
    return <Loader />
  }

  return <MantineReactTable table={table} />
}
