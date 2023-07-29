import React, { FC } from "react";
import ActivityGraph from "./ActivityGraph";
import QuickCards from "./QuickCards";
import SessionHistoryTable from "./SessionHistoryTable";
import useMutateSessionHistoryData from "@/hooks/useMutateSessionHistoryData";
import { SessionHistoryResponse } from "@/pages/api/v1/types";

interface ContentContainerProps {
  sessionHistoryResponse: SessionHistoryResponse;
}
const ContentContainer: FC<ContentContainerProps> = ({
  sessionHistoryResponse,
}) => {
  const { activityGraphData, sessionHistoryTableData } =
    useMutateSessionHistoryData(sessionHistoryResponse?.sessionHistory);

  return (
    <div className="flex flex-col gap-6 w-full h-full overflow-auto">
      <div className="text-2xl ">Session History</div>
      <QuickCards data={sessionHistoryResponse?.summaryData} />
      <ActivityGraph data={activityGraphData} />
      <SessionHistoryTable data={sessionHistoryTableData}/>
    </div>
  );
};

export default ContentContainer;
