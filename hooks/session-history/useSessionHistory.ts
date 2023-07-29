import { useQuery } from "@tanstack/react-query";

const fetchSessionHistory = async (userId: number) => {
  const response = await fetch(`/api/v1/session-history?userId=${userId}`);
  if (!response.ok) {
    throw new Error("Failed to fetch session history data");
  }
  return response.json();
};

const useSessionHistory = (userId: number) => {
  return useQuery(["sessionHistory", userId], () =>
    fetchSessionHistory(userId)
  );
};

export default useSessionHistory;
