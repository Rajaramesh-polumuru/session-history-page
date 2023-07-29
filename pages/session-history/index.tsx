import ContentContainer from "@/components/session-history/ContentContainer";
import Header from "@/components/session-history/Header";
import LeftNav from "@/components/session-history/LeftNav";
import MainContainer from "@/components/session-history/MainContainer";
import React from "react";
import backgroundImage from "@/public/assets/images/background.png";
import {
  QueryClient,
} from "@tanstack/react-query";
import useSessionHistory from "@/hooks/session-history/useSessionHistory";
import Image from "next/image";

const SessionHistory = () => {
  // For now, we'll just hardcode the userId
  const userId = 1;
  const queryClient = new QueryClient();
  const { data, isLoading, error } = useSessionHistory(userId);

  return (
    <div className="h-screen flex w-screen  items-center flex-col">
      <Image
        layout="fill"
        src={backgroundImage}
        alt="bg-image"
        className=" -z-10 opacity-50"
      />
      <Header />
      <MainContainer>
        <LeftNav />
        <ContentContainer sessionHistoryResponse={data} />
      </MainContainer>
    </div>
  );
};

export default SessionHistory;
