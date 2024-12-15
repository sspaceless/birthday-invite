"use client";
import Image from "next/image";
import React from "react";
import { PropsWithGuest } from "~/shared/types/guest.type";

export const Photos: React.FC<PropsWithGuest> = ({ guest }) => {
  const [isLoaded, setIsLoaded] = React.useState<boolean>(false);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
  }, []);

  return (
    <div className="relative flex flex-wrap gap-10 mt-12 justify-center items-center transition-all duration-200 ease">
      <Image
        src="/img/star.svg"
        alt="start"
        width={60}
        height={60}
        className="absolute left-[-5%] top-[-10%] animate-float"
      />

      <Image
        src="/img/sparkles.svg"
        alt="start"
        width={86}
        height={0}
        className="absolute right-[-10%] bottom-[-10%] animate-float"
        style={{ animationDelay: "300ms" }}
      />

      <Image
        src="/img/kate.png"
        alt="kate-photo"
        width={188}
        height={0}
        className="sm:w-[188px] w-[94px] animate-rotate transition-all duration-200 ease-in-out"
      />

      <Image
        src="/img/2.png"
        alt="2"
        width={150}
        height={0}
        className={`${
          isLoaded ? "sm:w-[150px] w-[75px]" : "w-0"
        } animate-float transition-all duration-1000 ease-in-out`}
      />

      <Image
        src="/img/0.png"
        alt="0"
        width={150}
        height={0}
        className={`${
          isLoaded ? "sm:w-[150px] w-[75px]" : "w-0"
        } animate-float  transition-all duration-1000 ease-in-out`}
        style={{ animationDelay: "1.5s" }}
      />

      <Image
        src={`/img/${guest.id}.png`}
        alt={`${guest.id}-photo`}
        width={200}
        height={0}
        className="sm:w-[200px] w-[100px] animate-rotate transition-all duration-200 ease-in-out"
        style={{ animationDelay: "500ms" }}
      />
    </div>
  );
};
