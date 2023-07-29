import ContentContainer from "@/components/session-history/ContentContainer";
import Header from "@/components/session-history/Header";
import LeftNav from "@/components/session-history/LeftNav";
import MainContainer from "@/components/session-history/MainContainer";
import React from "react";
import backgroundImage from "@/public/assets/images/background.png";
import { QueryClient } from "@tanstack/react-query";
import useSessionHistory from "@/hooks/session-history/useSessionHistory";
import Image from "next/image";
import nodeOverviewIcon from "@/public/assets/left-nav-icons/node-overview.svg";
import dvpnEarningsIcon from "@/public/assets/left-nav-icons/dvpn-earnings.svg";
import sessionHistoryIcon from "@/public/assets/left-nav-icons/session-history.svg";
import subscriptionHistoryIcon from "@/public/assets/left-nav-icons/subscription-history.svg";
import bandwidthUsageIcon from "@/public/assets/left-nav-icons/bandwidth-usage.svg";
import editNodeConfigurationIcon from "@/public/assets/left-nav-icons/edit-node-configuration.svg";

const SessionHistory = () => {
  // For now, we'll just hardcode the userId
  const userId = 1;
  const queryClient = new QueryClient();
  const { data, isLoading, error } = useSessionHistory(userId);

  const NavItemsList = [
    {
      name: "Node Overview",
      icon: nodeOverviewIcon,
      key: "node-overview",
    },
    {
      name: "DVPN Earnings",
      icon: dvpnEarningsIcon,
      key: "dvpn-earnings",
    },
    {
      name: "Session History",
      icon: sessionHistoryIcon,
      key: "session-history",
    },
    {
      name: "Subscription History",
      icon: subscriptionHistoryIcon,
      key: "subscription-history",
    },
    {
      name: "Bandwidth Usage",
      icon: bandwidthUsageIcon,
      key: "bandwidth-usage",
    },
    {
      name: "Edit Node Configuration",
      icon: editNodeConfigurationIcon,
      key: "edit-node-configuration",
    },
  ];
  //should be fetched from the api
  const sessionData = [
    {
      title: "IP Address",
      value: "136.251.15.107",
    },
    {
      title: "Country",
      value: "Germany",
    },
  ];

  //should be dynamic
  const activeKey = "session-history";
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
        <LeftNav
          navItems={NavItemsList}
          sessionData={sessionData}
          activeKey={activeKey}
        />
        <ContentContainer sessionHistoryResponse={data} />
      </MainContainer>
    </div>
  );
};

export default SessionHistory;
