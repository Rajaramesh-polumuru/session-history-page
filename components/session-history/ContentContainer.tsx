import { FC } from "react";
import SessionActivityGraph from "./SessionActivityGraph";
import SessionHistoryTable from "./SessionHistoryTable";
import useMutateSessionHistoryData from "@/hooks/useMutateSessionHistoryData";
import { SessionHistoryResponse } from "@/pages/api/v1/types";
import SummaryCards from "./SummaryCards";

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
      <div className="text-2xl font-tomorrow">Session History</div>
      {sessionHistoryResponse?.summaryData && (
        <SummaryCards data={sessionHistoryResponse.summaryData} />
      )}
      {activityGraphData.length > 0 && (
        <SessionActivityGraph data={activityGraphData} />
      )}
      {sessionHistoryTableData.length > 0 && (
        <SessionHistoryTable data={sessionHistoryTableData} />
      )}
    </div>
  );
};

export default ContentContainer;
