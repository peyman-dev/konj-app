import React from "react";
import HeroImage from "@/images/hero-image.png";
import Image from "next/image";
import Container from "@/app/components/ui/container";
import CallToActionButton from "./cta";

const HeroSection = () => {
  return (
    <section
      className="md:h-[600px]! overflow-hidden"
      style={{
        backgroundImage: `url(${HeroImage.src})`,
      }}
    >
      <Container className="h-full flex flex-col justify-center gap-5 ">
        <div>1</div>
        <CallToActionButton />
      </Container>
    </section>
  );
};

export default HeroSection;
