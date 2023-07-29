import { useQuery, QueryFunction } from "@tanstack/react-query";
import { SessionHistoryResponse } from "@/pages/api/v1/types";

const fetchSessionHistory: QueryFunction<SessionHistoryResponse> = async () => {
  const userId = 1;
  const response = await fetch(`/api/v1/session-history?userId=${userId}`);
  if (!response.ok) {
    throw new Error("Failed to fetch session history data");
  }
  return response.json();
};

const useSessionHistory = (userId: number) => {
  return useQuery(["sessionHistory", userId], fetchSessionHistory);
};

export default useSessionHistory;
