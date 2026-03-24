import BannerSection from "@/components/home/BannerSection";
import HousePlanSection from "@/components/home/HousePlanSection";
import MapSection from "@/components/home/MapSection";
import NearbyFacilities from "@/components/home/NearbyFacilities";
import ProjectOverview from "@/components/home/OverviewSection";
import React from "react";

function HomePage() {
  return (
    <main>
      <BannerSection />
      <ProjectOverview />
      <MapSection />
      <NearbyFacilities />
      <HousePlanSection />
    </main>
  );
}

export default HomePage;
