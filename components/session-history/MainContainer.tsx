import React, { FC } from "react";

interface MainContainerProps {
  children: React.ReactNode;
}
const MainContainer: FC<MainContainerProps> = ({ children }) => {
  return (
    <div className=" w-full h-full flex px-6 py-4 gap-5 overflow-hidden">
      {children}
    </div>
  );
};

export default MainContainer;
