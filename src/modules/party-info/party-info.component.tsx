import Image from "next/image";
import { PARTY_INFO } from "./party-info.const";

export const PartyInfo: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 sm:text-[18px] text-[16px] font-light mt-3">
      <div className="flex flex-row items-center gap-4  ">
        <Image
          src="/icons/icon-dizzy.png"
          alt="icon-dizzy"
          width={50}
          height={0}
          className="hover:rotate-6"
        />
        <span>{PARTY_INFO.date}</span>
      </div>
      <div className="relative flex flex-row items-center gap-4 w-fit">
        <Image
          src="/img/sticks.svg"
          alt="sticks"
          width={80}
          height={0}
          className="absolute right-[-10%] top-[-45%] hover:right-[-13%] hover:top-[-50%] transition-all ease-in-out duration-200"
        />

        <Image
          src="/icons/icon-letter.png"
          alt="icon-letter"
          width={50}
          height={0}
          className="hover:rotate-6"
        />

        <span className="">
          {"обери подарунок для мене "}
          <a className="text-[#FB3EDE]" href={PARTY_INFO.wishlistLink}>
            тут
          </a>
          {"))))"}
        </span>
      </div>
      <div className="flex flex-row items-center gap-4">
        <Image
          src="/icons/icon-home.png"
          alt="icon-home"
          width={50}
          height={0}
          className="hover:-rotate-6"
        />
        <a className="underline" href={PARTY_INFO.locationGMapLink}>
          {PARTY_INFO.location}
        </a>
      </div>
    </div>
  );
};
