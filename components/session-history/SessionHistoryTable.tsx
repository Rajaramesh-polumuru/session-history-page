import React, { FC, useEffect } from "react";
import Table from "@/components/Table";
import { createColumnHelper } from "@tanstack/react-table";
import moment from "moment";

interface SessionHistory {
  startTime: string;
  date: string;
  duration: string;
  nodeUsed: string;
  dataConsumed: string;
  location: string;
  bgColor?: string;
}

interface SessionHistoryTableProps {
  data: SessionHistory[];
}

const SessionHistoryTable: FC<SessionHistoryTableProps> = ({ data }) => {
  const [defaultData, setDefaultData] = React.useState<SessionHistory[]>([]);

  const getBgColor = (nodeUsed: string): string => {
    switch (nodeUsed.toLowerCase()) {
      case "wiregaurd":
        return "bg-wiregaurd text-white";
      case "v2ray":
        return "bg-v2ray text-white";
      case "openvpn":
        return "bg-openvpn text-openvpnText";
      default:
        return "";
    }
  };

  useEffect(() => {
    const newData = data?.map((session) => ({
      ...session,
      bgColor: getBgColor(session.nodeUsed),
    }));
    setDefaultData(newData || []);
  }, [data]);

  const columnHelper = createColumnHelper<SessionHistory>();
  const columns = [
    columnHelper.accessor("startTime", {
      cell: (info) => info.getValue(),
      header: "Session start time",
    }),
    columnHelper.accessor((row) => row.date, {
      id: "date",
      header: "Date",
      cell: (info) => moment(info.getValue()).format("DD-MM-YYYY"),
    }),
    columnHelper.accessor("duration", {
      header: "Duration",
      cell: (info) => info.renderValue(),
    }),
    columnHelper.accessor("nodeUsed", {
      header: "Node Used",
      cell: (info) => (
        <div
          className={`${info.row.original.bgColor} p-2 rounded w-full flex justify-center`}
        >
          {info.renderValue()}
        </div>
      ),
    }),
    columnHelper.accessor("dataConsumed", {
      header: "Data Consumed",
      cell: (info) => info.renderValue(),
    }),
    columnHelper.accessor("location", {
      header: "Location of node",
      cell: (info) => info.renderValue(),
    }),
  ];

  return (
    <div className="bg-cardBackground rounded-xl">
      <div className="p-4 text-2xl font-tomorrow">Session History</div>
      <Table columns={columns} defaultData={defaultData} />
    </div>
  );
};

export default SessionHistoryTable;
