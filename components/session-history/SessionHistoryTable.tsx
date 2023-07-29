import React, { FC, useEffect } from "react";
import Table from "@/components/Table";
import { createColumnHelper } from "@tanstack/react-table";
import moment from "moment";

interface SessionHistoryTableProps {
  data: any;
}
const SessionHistoryTable: FC<SessionHistoryTableProps> = ({ data }) => {
  const [defaultData, setDefaultData] = React.useState<any>([]);
  type Session = {
    startTime: string;
    date: string;
    duration: string;
    nodeUsed: string;
    dataConsumed: string;
    location: string;
  };
  const getBgColor = (nodeUsed: string) => {
    switch (nodeUsed) {
      case "Wiregaurd":
        return "bg-wiregaurd";
      case "V2Ray":
        return "bg-v2ray";
      case "OpenVPN":
        return "text-openvpnText bg-openvpn";
      default:
        return "";
    }
  };

  useEffect(() => {
    let newData = data?.map((session: Session) => {
      return {
        startTime: session.startTime,
        date: session.date,
        duration: session.duration,
        nodeUsed: session.nodeUsed,
        dataConsumed: session.dataConsumed,
        location: session.location,
        bgColor: getBgColor(session.nodeUsed),
      };
    });
    setDefaultData(newData);
  }, [data]);

  const columnHelper = createColumnHelper<Session>();
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
          className={`${getBgColor(
            info.getValue()
          )} p-2 rounded w-full flex justify-center`}
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
    <div className=" bg-cardBackground rounded-xl h-fit">
      <div className="p-4 text-2xl ">Session History</div>
      <Table columns={columns} defaultData={defaultData} />
    </div>
  );
};

export default SessionHistoryTable;
