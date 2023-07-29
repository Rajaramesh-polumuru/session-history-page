import { NextApiRequest, NextApiResponse } from "next";
import { SessionData, SessionHistoryResponse, Summary } from "./types";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { userId } = req.query;

    const dummySessionHistory: SessionData[] = [
      {
        userId,
        startTime: "11:00:00",
        date: "2023-07-29",
        duration: "0.234 sec",
        nodeUsed: "Wiregaurd",
        dataConsumed: "0.15 MB",
        location: "New York",
      },
      {
        userId,
        startTime: "11:00:00",
        date: "2023-07-29",
        duration: "0.234 sec",
        nodeUsed: "Wiregaurd",
        dataConsumed: "0.15 MB",
        location: "New York",
      },
      {
        userId,
        startTime: "14:30:00",
        date: "2023-07-30",
        duration: "0.123 sec",
        nodeUsed: "V2Ray",
        dataConsumed: "0.08 MB",
        location: "Los Angeles",
      },
      {
        userId,
        startTime: "11:15:00",
        date: "2023-07-21",
        duration: "1.567 sec",
        nodeUsed: "OpenVPN",
        dataConsumed: "0.25 MB",
        location: "Chicago",
      },
      {
        userId,
        startTime: "15:45:00",
        date: "2023-06-01",
        duration: "0.876 sec",
        nodeUsed: "Wiregaurd",
        dataConsumed: "0.18 MB",
        location: "New York",
      },
      {
        userId,
        startTime: "10:00:00",
        date: "2023-06-02",
        duration: "2.345 sec",
        nodeUsed: "V2Ray",
        dataConsumed: "0.12 MB",
        location: "Los Angeles",
      },
      {
        userId,
        startTime: "09:30:00",
        date: "2023-04-03",
        duration: "0.456 sec",
        nodeUsed: "OpenVPN",
        dataConsumed: "0.09 MB",
        location: "Chicago",
      },
      {
        userId,
        startTime: "16:00:00",
        date: "2023-04-04",
        duration: "1.234 sec",
        nodeUsed: "Wiregaurd",
        dataConsumed: "0.22 MB",
        location: "New York",
      },
      {
        userId,
        startTime: "13:45:00",
        date: "2023-03-05",
        duration: "0.789 sec",
        nodeUsed: "V2Ray",
        dataConsumed: "0.14 MB",
        location: "Los Angeles",
      },
      {
        userId,
        startTime: "10:30:00",
        date: "2023-02-06",
        duration: "1.876 sec",
        nodeUsed: "OpenVPN",
        dataConsumed: "0.21 MB",
        location: "Chicago",
      },
      {
        userId,
        startTime: "17:15:00",
        date: "2022-07-07",
        duration: "2.345 sec",
        nodeUsed: "Wiregaurd",
        dataConsumed: "0.13 MB",
        location: "New York",
      },
      {
        userId,
        startTime: "14:00:00",
        date: "2022-08-08",
        duration: "0.987 sec",
        nodeUsed: "V2Ray",
        dataConsumed: "0.17 MB",
        location: "Los Angeles",
      },
      {
        userId,
        startTime: "11:45:00",
        date: "2022-04-09",
        duration: "1.456 sec",
        nodeUsed: "OpenVPN",
        dataConsumed: "0.28 MB",
        location: "Chicago",
      },
      {
        userId,
        startTime: "18:30:00",
        date: "2023-03-10",
        duration: "0.654 sec",
        nodeUsed: "Wiregaurd",
        dataConsumed: "0.10 MB",
        location: "New York",
      },
      {
        userId,
        startTime: "14:45:00",
        date: "2023-02-11",
        duration: "2.123 sec",
        nodeUsed: "V2Ray",
        dataConsumed: "0.19 MB",
        location: "Los Angeles",
      },
      {
        userId,
        startTime: "12:30:00",
        date: "2023-01-12",
        duration: "1.234 sec",
        nodeUsed: "OpenVPN",
        dataConsumed: "0.11 MB",
        location: "Chicago",
      },
      {
        userId,
        startTime: "19:15:00",
        date: "2023-04-13",
        duration: "0.543 sec",
        nodeUsed: "Wiregaurd",
        dataConsumed: "0.08 MB",
        location: "New York",
      },
      {
        userId,
        startTime: "15:30:00",
        date: "2023-06-14",
        duration: "2.098 sec",
        nodeUsed: "V2Ray",
        dataConsumed: "0.15 MB",
        location: "Los Angeles",
      },
    ];
    const dummySummaryData: Summary[] = [
      { title: "Active Sessions", percentageChange: +12.21, value: 2 },
      {
        title: "Total Sessions",
        percentageChange: -2.21,
        value: "10H",
      },
      {
        title: "Highest Active Sessions",
        percentageChange: +12.21,
        value: "100H",
      },
      {
        title: "Longest Session ",
        percentageChange: -2.21,
        value: "12 H : 31 M : 2 S",
      },
    ];

    // Random error to test error handling
    const randomNumber = Math.random();
    if (randomNumber < 0.2) {
      throw new Error("Error occurred while fetching Session history data.");
    }
    const sessionHistoryData: SessionHistoryResponse = {
      sessionHistory: dummySessionHistory,
      summaryData: dummySummaryData,
    };

    res.status(200).json(sessionHistoryData);
  } catch (error) {
    res.status(500).json({
      error: "Failed to retrieve session history data.",
      message: error,
    });
  }
}
