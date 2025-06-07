import Image from "next/image";
import React from "react";
import { Modal } from "~/app/@modal/(.)img/[id]/modal";
import FullPageImageView from "~/components/fullPageImageView";

export default async function PhotoModal({
 params
}: {
  params: Promise<{ id: string }>;
}) {
  const photoId = (await params).id;
  const idAsNum = Number(photoId);
  if (Number.isNaN(idAsNum)) throw new Error("Invalid photo id")

  return <FullPageImageView id={idAsNum}/>;
}
