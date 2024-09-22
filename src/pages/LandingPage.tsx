import React from "react";
import TopNavbar from "../components/TopNavbar";
import MainNavbar from "../components/MainNavbar";
import LandingSection from "../components/LandingSection";
import UnlockContainer from "../components/UnlockContainer";
import FooterComponent from "../components/FooterComponent";

function LandingPage() {
  return (
    <React.Fragment>
      <TopNavbar />
       <MainNavbar />
      <LandingSection />
      <UnlockContainer />
      <FooterComponent />
    </React.Fragment>
  );
}

export default LandingPage;
