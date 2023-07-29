import React, { FC } from "react";

interface MainContainerProps {
  children: React.ReactNode;
}
const MainContainer: FC<MainContainerProps> = ({ children }) => {
  return <div className=" w-full h-full flex ">{children}</div>;
};

export default MainContainer;
