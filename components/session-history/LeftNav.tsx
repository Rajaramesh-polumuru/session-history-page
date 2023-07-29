import  { FC } from "react";
import Image from "next/image";
import caretRightIcon from "@/public/assets/caret-right.svg";

interface SessionData {
  title: string;
  value: string;
}

interface NavItem {
  name: string;
  icon: string;
  key: string;
}

interface LeftNavProps {
  sessionData: SessionData[] | null | undefined;
  navItems: NavItem[] | null | undefined;
  activeKey: string;
}

const LeftNav: FC<LeftNavProps> = ({ navItems, sessionData, activeKey }) => {
  const renderSessionData = () => {
    if (!sessionData) return null;
    return (
      <div className="w-full">
        {sessionData.map((item) => (
          <div
            className="flex gap-4 border-b-2 border-borderColor p-5"
            key={item.title}
          >
            <div className="text-textGray w-max">{item.title}</div>
            <div>:</div>
            <div>{item.value}</div>
          </div>
        ))}
      </div>
    );
  };

  const renderNavItems = () => {
    if (!navItems) return null;
    return (
      <div className="w-full grid gap-4 border-b-2 border-borderColor my-5 py-4 overflow-auto">
        <div className="grid gap-4 h-fit w-full overflow-auto ">
          {navItems.map((item) => (
            <button
              key={item.name}
              className={`flex items-center p-4 bg-cardBackground rounded-xl justify-between gap-4 ${
                activeKey === item.key ? "border-accent" : "border-borderColor"
              } border-2 hover:border-accent cursor-pointer h-fit`}
            >
              <Image src={item.icon} alt="icon" width={24} height={24} />
              <div className="w-full text-textGray text-ellipsis overflow-hidden whitespace-nowrap">
                {item.name}
              </div>
              <Image
                src={caretRightIcon}
                alt="arrow-right"
                width={10}
                height={10}
              />
            </button>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="w-1/3 bg-customGray rounded-xl p-5 min-w-max h-full flex flex-col">
      {renderSessionData()}
      {renderNavItems()}
    </div>
  );
};

export default LeftNav;
