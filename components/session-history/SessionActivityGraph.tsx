import React, { FC } from "react";
import BarGraph from "../BarGraph";

interface ActivityGraphData {
  date: string;
  duration: number;
  startTime: string;
}

interface SessionActivityGraphProps {
  data: ActivityGraphData[];
}

const SessionActivityGraph: FC<SessionActivityGraphProps> = ({ data }) => {
  const graphData = data || [];

  return (
    <div className="p-4 bg-cardBackground rounded-xl">
      <div className="text-2xl font-tomorrow">Session Activity</div>
      <BarGraph data={graphData} />
    </div>
  );
};

export default SessionActivityGraph;
