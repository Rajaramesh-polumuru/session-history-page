import Image from "next/image";
import React from "react";
import arrowLeftIcon from "@/public/assets/arrow-left.svg";

const Header = () => {
  return (
    <div className="flex align-middle justify-between w-full  px-6 py-4">
      <div className="flex align-middle justify-between w-full  p-5 border-b-2 border-borderColor ">
        <div className="flex gap-3 items-center">
          <button className="border-none">
            <Image
              src={arrowLeftIcon}
              alt="arrow-left"
              width={32}
              height={32}
            />
          </button>
          <div className="text-2xl font-bold ">Instance Name</div>
        </div>
        <div className="grid grid-cols-2 gap-4 items-center ">
          <div className="grid gap-4 border-r-2 border-slate-500 pr-5">
            <div className="text-2xl font-bold w-max">Node Moniker</div>
            <div className="">sent1jqd5s...axu6c</div>
          </div>
          <button className="bg-customGreen hover:bg-customGreen text-white font-bold py-2 px-4 rounded h-fit w-full">
            Start
          </button>
        </div>
        <Image
          src="/assets/logo.svg"
          alt="arrow-left"
          width={225}
          height={68}
        />
      </div>
    </div>
  );
};

export default Header;
