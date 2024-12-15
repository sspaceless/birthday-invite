import { notFound } from "next/navigation";
import { Wrapper } from "~/shared/components/wrapper/wrapper.component";
import { GUESTS } from "~/shared/config/guests.const";
import guestService from "~/shared/service/guest.service";
import React from "react";
import { Header } from "~/modules/header.component";
import { Photos } from "~/modules/photos.component";
import { PartyInfo } from "~/modules/party-info/party-info.component";

type InvitePageParams = { inviteId: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<InvitePageParams>;
}) {
  const { inviteId } = await params;
  const guestData = await guestService.getData(inviteId);

  if (!guestData) {
    return;
  }

  return {
    title: `${guestData?.name}, привіт!`,
  };
}

export async function generateStaticParams() {
  return GUESTS.map((item) => ({
    inviteId: item.id,
  }));
}

export default async function InvitePage({
  params,
}: {
  params: Promise<InvitePageParams>;
}) {
  const { inviteId } = await params;
  const guestData = await guestService.getData(inviteId);

  if (!guestData) {
    notFound();
  }

  return (
    <Wrapper>
      <div className="px-[5%] py-4 flex flex-col justify-center text-[#3D3A3A] max-w-6xl mx-auto overflow-x-hidden">
        <Header guest={guestData} />
        <Photos guest={guestData} />
        <PartyInfo />
      </div>
    </Wrapper>
  );
}
