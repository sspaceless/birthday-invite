"use client";
import Image from "next/image";
import React from "react";
import { useWindowSize } from "usehooks-ts";
import { PropsWithGuest } from "~/shared/types/guest.type";

export const Photos: React.FC<PropsWithGuest> = ({ guest }) => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const { width } = useWindowSize();

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  const kateImage = (
    <Image
      key={crypto.randomUUID()}
      src="/img/kate.png"
      alt="Kate's photo"
      width={188}
      height={188}
      className="sm:w-[188px] w-[94px] animate-rotate transition-all duration-200 ease-in-out place-self-center"
    />
  );

  const twoImage = (
    <Image
      key={crypto.randomUUID()}
      src="/img/2.png"
      alt="Number 2"
      width={150}
      height={150}
      className={`${
        isLoaded ? "sm:w-[150px] w-[75px]" : "w-0"
      } animate-float transition-all duration-1000 ease-in-out place-self-end`}
    />
  );

  const zeroImage = (
    <Image
      key={crypto.randomUUID()}
      src="/img/0.png"
      alt="Number 0"
      width={150}
      height={150}
      className={`${
        isLoaded ? "sm:w-[150px] w-[75px]" : "w-0"
      } animate-float transition-all duration-1000 ease-in-out`}
      style={{ animationDelay: "1.5s" }}
    />
  );

  const guestImage = (
    <Image
      key={crypto.randomUUID()}
      src={`/img/${guest.id}.png`}
      alt={`${guest.id}'s photo`}
      width={200}
      height={200}
      className="sm:w-[200px] w-[100px] animate-rotate transition-all duration-200 ease-in-out place-self-center"
      style={{ animationDelay: "500ms" }}
    />
  );

  const photos =
    width < 1024
      ? [kateImage, guestImage, twoImage, zeroImage]
      : [kateImage, twoImage, zeroImage, guestImage];

  return (
    <div className="relative grid grid-cols-2 lg:flex lg:flex-wrap gap-4 lg:gap-10 mt-12 lg:justify-center lg:items-center transition-all duration-200 ease">
      <Image
        src="/img/star.svg"
        alt="Star decoration"
        width={60}
        height={60}
        className="absolute left-[-5%] top-[-5%] animate-float"
      />

      <Image
        src="/img/sparkles.svg"
        alt="Sparkles decoration"
        width={86}
        height={86}
        className="absolute right-[-5%] bottom-[-5%] animate-float"
        style={{ animationDelay: "300ms" }}
      />

      {photos}
    </div>
  );
};
