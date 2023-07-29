import React, { FC } from "react";
import Image from "next/image";
import nodeOverviewIcon from "@/public/assets/node-overview.svg";
import caretRightIcon from "@/public/assets/caret-right.svg";

interface LeftNavProps {
  sessionData: {
    title: string;
    value: string;
  }[];
  navItems: {
    name: string;
    icon: string;
    key: string;
  }[];
  activeKey: string;
}

const LeftNav: FC<LeftNavProps> = ({ navItems, sessionData, activeKey }) => {
  return (
    <div className="w-1/3 bg-customGray rounded-xl p-5 min-w-max h-full overflow-hidden flex flex-col">
      {sessionData?.map((item) => (
        <div
          className="w-full flex gap-4 border-b-2 border-borderColor p-5"
          key={item.title}
        >
          <div className="text-textGray w-max">{item.title}</div>
          <div>:</div>
          <div>{item.value}</div>
        </div>
      ))}
      <div className="w-full flex gap-4 border-b-2 border-borderColor my-5 py-4">
        <div className="grid gap-4 h-fit w-full overflow-auto ">
          {navItems?.map((item) => (
            <div
              className={`flex items-center p-4 bg-cardBackground rounded-xl justify-between gap-4 ${
                activeKey === item.key ? "border-accent" : "border-borderColor"
              } border-2 hover:border-accent cursor-pointer h-fit`}
              key={item.name}
            >
              <Image src={item.icon} alt="arrow-left" width={24} height={24} />
              <div className="w-full text-textGray text-ellipsis overflow-hidden whitespace-nowrap">
                {item.name}
              </div>
              <Image
                src={caretRightIcon}
                alt="arrow-left"
                width={10}
                height={10}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
