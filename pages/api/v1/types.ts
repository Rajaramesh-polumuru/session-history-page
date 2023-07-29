export interface SessionData {
  userId?: string | string[];
  startTime: string;
  date: string;
  duration: string;
  nodeUsed: string;
  dataConsumed: string;
  location: string;
  isActive?: boolean;
}
export interface Summary {
  percentageChange: number;
  value: string | number;
  title: string;
}

export interface SessionHistoryResponse {
  sessionHistory: SessionData[];
  summaryData: Summary[];
}
