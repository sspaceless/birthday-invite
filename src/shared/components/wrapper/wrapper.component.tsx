"use client";

import { LottieRef } from "lottie-react";
import dynamic from "next/dynamic";
import React from "react";
import CakeAnimationData from "~/assets/lottie/bd.json";
import Confetti from "react-confetti";
import { useWindowSize } from "usehooks-ts";

const DynamicLottie = dynamic(() => import("lottie-react"), { ssr: false });

export const Wrapper: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const lottieRef: LottieRef = React.useRef(null);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (lottieRef.current) {
        setIsLoading(false);
        lottieRef.current.destroy();
      }
    }, 3500);

    return () => clearTimeout(timer);
  }, []);
  const { width, height } = useWindowSize();

  return (
    <>
      {isLoading ? (
        <div className={`flex justify-center items-center w-screen h-screen`}>
          <DynamicLottie
            animationData={CakeAnimationData}
            id="bg-cake"
            lottieRef={lottieRef}
          />
        </div>
      ) : (
        <>
          <Confetti
            width={width}
            height={height}
            numberOfPieces={1500}
            tweenDuration={50000}
            recycle={false}
          />
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              zIndex: -1,
              width: "100%",
              height: "100vh",
              background:
                "radial-gradient(ellipse at top right, #C1FF72, transparent)",
              animation: "gradientSpread 1s ease-out forwards",
            }}
          />
          {children}
        </>
      )}
    </>
  );
};
