import Image from "next/image";
import React from "react";
import arrowLeftIcon from "@/public/assets/arrow-left.svg";

const Header = () => {
  return (
    <div className="flex align-middle justify-between w-full p-5">
      <div className="flex gap-3 items-center">
        <button className="border-none">
          <Image src={arrowLeftIcon} alt="arrow-left" width={32} height={32} />
        </button>
        <div className="text-2xl font-bold ">Instance Name</div>
      </div>
      <div className="grid gap-3">
        <div className="text-2xl font-bold">Node Moniker</div>
        <div className="">sent1jqd5s...axu6c</div>
      </div>

      <Image src="/assets/logo.svg" alt="arrow-left" width={225} height={68} />
    </div>
  );
};

export default Header;
