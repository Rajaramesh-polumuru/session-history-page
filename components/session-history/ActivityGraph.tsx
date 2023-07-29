import React, { FC } from "react";
import BarGraph from "../BarGraph";

interface ActivityGraphProps {
  data: any;
}

const ActivityGraph: FC<ActivityGraphProps> = ({ data }) => {
  return (
    <div className="p-4 bg-cardBackground rounded-xl">
      <div className="text-2xl font-tomorrow">Session Activity</div>
      <BarGraph data={data} />
    </div>
  );
};

export default ActivityGraph;
