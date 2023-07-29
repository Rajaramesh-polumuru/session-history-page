import React, { FC } from "react";
import BarGraph from "../BarGraph";

interface ActivityGraphProps {
  data: any;
}

const ActivityGraph: FC<ActivityGraphProps> = () => {
  return (
    <div className="p-4 bg-cardBackground rounded-xl">
      <div className="text-2xl">Session Activity</div>
      <BarGraph />
    </div>
  );
};

export default ActivityGraph;
