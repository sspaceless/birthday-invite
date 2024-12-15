import React from "react";
import { PropsWithGuest } from "~/shared/types/guest.type";

export const Header: React.FC<PropsWithGuest> = ({ guest }) => {
  return (
    <>
      <span className="sm:text-[80px] text-[40px] text-[#FB3EDE] font-semibold text-center transition-all duration-200 ease-in-out">
        BIRTHDAY PARTY
      </span>
      <span className="sm:text-[26px] text-[18px] text-center font-light mt-2 transition-all duration-200 ease-in-out">
        {`${guest?.name}, запрошую тебе на свій день народження!!!`}
      </span>
    </>
  );
};
