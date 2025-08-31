"use client";
import Collection from "@/app/components/common/collection";
import Banner from "@/app/components/templates/home/banner";
import HeroSection from "@/app/components/templates/home/hero-section";
import UnderHero from "@/app/components/templates/home/under-hero";
import React from "react";

const page = () => {
  return (
    <main className="mb-20 relative">
      <HeroSection />
      <UnderHero />
      <section className="space-y-[55px]">
        <Collection title="جدیدترین کتاب ها" />
        <Collection title="تا 30 درصد تخفیف" />
        <Banner />
      </section>
    </main>
  );
};

export default page;
