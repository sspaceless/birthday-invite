"use client";

import dynamic from "next/dynamic";
import React from "react";
import CakeAnimationData from "~/assets/lottie/bd.json";

const DynamicLottie = dynamic(() => import("lottie-react"), { ssr: false });

export const Loading: React.FC = () => {
  return (
    <div className={"z-50 w-screen h-screen flex justify-center items-center"}>
      <DynamicLottie animationData={CakeAnimationData} id="bg-cake" />
    </div>
  );
};
