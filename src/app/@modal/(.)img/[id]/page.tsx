import { getImage } from "~/server/queries";
import Image from "next/image";
import { Modal } from "~/app/@modal/(.)img/[id]/modal";
import FullPageImageView from "~/components/fullPageImageView";

export default async function PhotoPage({
 params,
}: {
  params: Promise<{ id: string }>;
}) {
  const photoId = (await params).id;
  const idAsNum = Number(photoId);
  if (Number.isNaN(idAsNum)) throw new Error("Invalid photo id")

  return <Modal><FullPageImageView id={idAsNum}/></Modal>;
}
