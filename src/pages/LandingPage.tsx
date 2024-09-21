import React from "react";
import TopNavbar from "../components/TopNavbar";
import MainNavbar from "../components/MainNavbar";
import LandingSection from "../components/LandingSection";
import UnlockContainer from "../components/UnlockContainer";

function LandingPage() {
  return (
    <>
      <TopNavbar />
      <MainNavbar />
      <LandingSection />
      <UnlockContainer />
    </>
  );
}

export default LandingPage;
