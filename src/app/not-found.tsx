import Image from "next/image";
export default function NotFound() {
  return (
    <div className="h-screen w-screen flex justify-center items-center overflow-hidden px-[5%] transition-all duration-200 ease-in-out">
      <div className="relative flex flex-wrap gap-10 justify-center items-center w-full max-w-4xl transition-all duration-200 ease-in-out">
        <Image
          src="/img/star.svg"
          alt="start"
          width={60}
          height={60}
          className="absolute left-[5%] bottom-[-40%] transition-all duration-200 ease-in-out animate-float"
          style={{ animationDelay: "100ms" }}
        />

        <Image
          src="/img/sparkles.svg"
          alt="start"
          width={86}
          height={0}
          className="absolute right-[5%] sm:top-[-40%] transition-all duration-200 ease-in-out top-[-60%] animate-float"
          style={{ animationDelay: "200ms" }}
        />

        <Image
          src="/img/2.png"
          alt="2"
          width={150}
          height={0}
          className="sm:w-[150px] w-[75px] animate-float transition-all duration-1000 ease-in-out"
        />

        <Image
          src="/img/kate.png"
          alt="kate-photo"
          width={188}
          height={0}
          className="sm:w-[188px] w-[94px] animate-rotate"
        />

        <Image
          src="/img/2.png"
          alt="2"
          width={150}
          height={0}
          className="sm:w-[150px] w-[75px] animate-float transition-all duration-1000 ease-in-out"
          style={{ animationDelay: "300ms" }}
        />
      </div>
    </div>
  );
}
