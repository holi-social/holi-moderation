import {
  Combobox,
  Group,
  InputBase,
  LoadingOverlay,
  MantineColor,
  Text,
  useCombobox,
} from "@mantine/core";
import { ReportStatus } from "../../graphql/generated/schema.types";
import React, { useState } from "react";
import { titleCase } from "../../utils";
import {
  IconBan,
  IconCheck,
  IconMailbox,
  IconProgress,
} from "@tabler/icons-react";
import { ChangeReportStatusMutation } from "../../graphql/mutations/changeReportStatus";
import { useSWRConfig } from "swr";
import { ViewReportQuery } from "../../graphql/queries/viewReport";
import { client } from "../../fetcher";
import { ChangeReportStatusMutation as ChangeReportStatusMutationResponse } from "../../graphql/generated/types";
import { notifications } from "@mantine/notifications";

interface DropdownItem {
  icon: typeof IconMailbox;
  status: ReportStatus;
  bgColor: MantineColor;
  fgColor?: MantineColor;
}

const DROPDOWN_ITEMS: DropdownItem[] = [
  { icon: IconMailbox, status: "OPEN", bgColor: "orange", fgColor: "white" },
  {
    icon: IconProgress,
    status: "IN_PROGRESS",
    bgColor: "blue",
    fgColor: "white",
  },
  { icon: IconBan, status: "REJECTED", bgColor: "red" },
  { icon: IconCheck, status: "ACTION_TAKEN", bgColor: "green" },
];

type ReportStatusDropdownProps = {
  status: ReportStatus;
  reportId: string;
};

const DropdownOption: React.FC<DropdownItem> = ({
  icon: Icon,
  status,
  bgColor,
  fgColor = "black",
}) => {
  return (
    <Group>
      <Icon />
      <Text fz="sm">{titleCase(status)}</Text>
    </Group>
  );
};

export const ReportStatusDropdown: React.FC<ReportStatusDropdownProps> = ({
  status,
  reportId,
}) => {
  const combobox = useCombobox();
  const [localStatus, setLocalStatus] = useState<ReportStatus>(status);
  const [loading, setLoading] = useState<boolean>(false);

  const { mutate } = useSWRConfig();
  const updateStatus = (newStatus: ReportStatus) => {
    mutate(
      [ViewReportQuery, { id: reportId }],
      async () => {
        setLoading(true);
        const { changeReportStatus } =
          await client.request<ChangeReportStatusMutationResponse>(
            ChangeReportStatusMutation,
            {
              reportId: reportId,
              newStatus: newStatus,
            },
          );
        setLoading(false);

        notifications.show({
          message: "Status updated!",
          color: "green",
          withBorder: true,
        });

        return {
          report: changeReportStatus,
        };
      },
      false,
    );
  };

  const options = DROPDOWN_ITEMS.map((item) => (
    <Combobox.Option value={item.status} key={item.status}>
      <DropdownOption {...item} />
    </Combobox.Option>
  ));

  const selectedOption = DROPDOWN_ITEMS.find(
    (item) => item.status === localStatus,
  );

  return (
    <Combobox
      store={combobox}
      offset={0}
      onOptionSubmit={async (newStatus) => {
        setLocalStatus(newStatus as ReportStatus);
        combobox.closeDropdown();
        updateStatus(newStatus as ReportStatus);
      }}
    >
      <Combobox.Target>
        <InputBase
          component="button"
          type="button"
          pointer
          rightSection={<Combobox.Chevron />}
          onClick={() => combobox.toggleDropdown()}
          rightSectionPointerEvents="none"
          w={200}
          multiline
        >
          <LoadingOverlay visible={loading} loaderProps={{ size: "xs" }} />
          {selectedOption && <DropdownOption {...selectedOption} />}
        </InputBase>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>{options}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
};
