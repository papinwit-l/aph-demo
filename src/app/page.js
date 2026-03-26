import BannerSection from "@/components/home/BannerSection";
import ContactSection from "@/components/home/ContactSection";
import HousePlanSectionDark from "@/components/home/HousePlanSectionDark";
import MapSection from "@/components/home/MapSection";
import NearbyFacilities from "@/components/home/NearbyFacilities";
import ProjectOverview from "@/components/home/OverviewSection";
import React from "react";

function HomePage() {
  return (
    <>
      <main>
        <BannerSection />
        <ProjectOverview />
        <MapSection />
        <NearbyFacilities />
        {/* <HousePlanSection /> */}
        <HousePlanSectionDark />
        <ContactSection />
      </main>
    </>
  );
}

export default HomePage;
