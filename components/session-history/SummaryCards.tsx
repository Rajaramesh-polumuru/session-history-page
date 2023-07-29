import { Summary } from "@/pages/api/v1/types";
import { FC } from "react";

export interface QuickCardProps {
  data: Summary[];
}

const SummaryCards: FC<QuickCardProps> = ({ data = [] }) => {
  return (
    <div className="w-full h-fit">
      <div className="w-full h-fit overflow-auto flex gap-4 py-4">
        {data.map((item) => (
          <div
            className="border-2 border-borderColor rounded-xl bg-cardBackground p-4 grid justify-between w-max h-32"
            key={item.title}
          >
            <div className="w-fit h-fit flex gap-6 justify-between items-center text-sm">
              <div className="text-textGray w-max">{item.title}</div>
              <div
                className={`${
                  item.percentageChange < 0
                    ? "text-customRed"
                    : "text-customGreen"
                } w-max`}
              >{`${item.percentageChange}%`}</div>
            </div>
            <div className="w-full text-xl font-tomorrow">{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SummaryCards;
