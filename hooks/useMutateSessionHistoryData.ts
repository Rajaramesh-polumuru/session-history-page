import { SessionData } from "@/pages/api/v1/types";
import { useEffect, useState } from "react";

interface ActivityGraphData {
  date: string;
  duration: number;
  startTime: string;
}

interface SessionHistoryTableData {
  startTime: string;
  date: string;
  duration: string;
  nodeUsed: string;
  dataConsumed: string;
  location: string;
}

export default function useMutateSessionHistoryData(
  sessionHistory: SessionData[] | undefined
) {
  const [activityGraphData, setActivityGraphData] = useState<
    ActivityGraphData[]
  >([]);
  const [sessionHistoryTableData, setSessionHistoryTableData] = useState<
    SessionHistoryTableData[]
  >([]);

  useEffect(() => {
    const newActivityGraphData = sessionHistory?.map(
      ({ date, duration, startTime }) => {
        return {
          date,
          duration: Number(duration.split(" ")[0]) || 0,
          startTime,
        };
      }
    );
    setActivityGraphData(newActivityGraphData || []);

    const newSessionHistoryTableData = sessionHistory?.map(
      ({ date, duration, startTime, nodeUsed, dataConsumed, location }) => {
        return {
          date,
          duration,
          startTime,
          nodeUsed,
          dataConsumed: dataConsumed,
          location,
        };
      }
    );
    setSessionHistoryTableData(newSessionHistoryTableData || []);
  }, [sessionHistory]);

  return { activityGraphData, sessionHistoryTableData };
}
