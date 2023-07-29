import { SessionData } from "@/pages/api/v1/types";
import { useEffect, useState } from "react";

export default function useMutateSessionHistoryData(
  sessionHistory: SessionData[]
) {
  const [activityGraphData, setActivityGraphData] = useState<any>([]);
  const [sessionHistoryTableData, setSessionHistoryTableData] = useState<any>(
    []
  );
  useEffect(() => {
    const newActivityGraphData = sessionHistory?.map((session) => {
      return {
        date: session.date,
        duration: session.duration,
      };
    });
    setActivityGraphData(newActivityGraphData);

    const newSessionHistoryTableData = sessionHistory?.map((session) => {
      return {
        startTime: session.startTime,
        date: session.date,
        duration: session.duration,
        nodeUsed: session.nodeUsed,
        dataConsumed: session.dataConsumed,
        location: session.location,
      };
    });
    setSessionHistoryTableData(newSessionHistoryTableData);
  }, [sessionHistory]);

  return { activityGraphData, sessionHistoryTableData };
}
