import { useQuery, QueryFunction } from "@tanstack/react-query";
import { SessionHistoryResponse } from "@/pages/api/v1/types";
import { toast } from "react-toastify";

const fetchSessionHistory: QueryFunction<SessionHistoryResponse> = async ({
  queryKey,
}) => {
  const userId = queryKey[1];
  const response = await fetch(`/api/v1/session-history?userId=${userId}`);
  if (!response.ok) {
    toast.error("Failed to fetch session history data retrying...");
    throw new Error("Failed to fetch session history data");
  }
  toast.dismiss();
  toast.success("Successfully fetched session history data");
  return response.json();
};

const useSessionHistory = (userId: number) => {
  return useQuery(["sessionHistory", userId], fetchSessionHistory, {
    refetchOnWindowFocus: false,
    retry: 3,
    retryDelay: 1000,
  });
};

export default useSessionHistory;
