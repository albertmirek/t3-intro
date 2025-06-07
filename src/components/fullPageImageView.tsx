import { getImage } from "~/server/queries";
import Image from "next/image";


export default async function FullPageImageView(props: {id: number}) {
  const image = await getImage(props.id);
  return <div><Image src={image.url} width={240} height={240} alt={image.name} /></div>;
}

