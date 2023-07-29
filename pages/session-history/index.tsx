import ContentContainer from "@/components/session-history/ContentContainer";
import Header from "@/components/session-history/Header";
import LeftNav from "@/components/session-history/LeftNav";
import MainContainer from "@/components/session-history/MainContainer";
import React from "react";

const SessionHistory = () => {
  return (
    <div className="h-screen flex w-screen  items-center flex-col">
      <Header />
      <MainContainer>
        <LeftNav />
        <ContentContainer />
      </MainContainer>
    </div>
  );
};

export default SessionHistory;
