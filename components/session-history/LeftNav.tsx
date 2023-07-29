import React from "react";
import Image from "next/image";
import nodeOverviewIcon from "@/public/assets/node-overview.svg";
import caretRightIcon from "@/public/assets/caret-right.svg";

const LeftNav = () => {
  return (
    <div className="w-1/3 bg-customGray rounded-xl p-5">
      <div className="w-full flex gap-4 border-b-2 border-borderColor p-5 ">
        <div className=" text-textGray w-max">IP Address </div>
        <div>: </div>
        <div>136.251.15.107</div>
      </div>
      <div className="my-4 grid gap-4 h-full overflow-auto w-full ">
        <div className="flex items-center h-fit p-4 bg-cardBackground rounded-xl justify-between gap-4 border-borderColor border-2 active:border-accent hover:border-accent cursor-pointer">
          <Image
            src={nodeOverviewIcon}
            alt="arrow-left"
            width={24}
            height={24}
          />
          <div className="w-full text-textGray">Node Overview</div>
          <Image src={caretRightIcon} alt="arrow-left" width={10} height={10} />
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
