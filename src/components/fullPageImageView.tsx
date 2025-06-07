import { getImage } from "~/server/queries";
import Image from "next/image";


export default async function FullPageImageView(props: {id: number}) {
  const image = await getImage(props.id);
  return (
    <div className={"flex h-full w-full"}>
      <div className={"flex-shrink flex justify-center items-center"}>
        <img src={image.url} alt={image.name} className={"object-contain"} />
      </div>

      <div className={"w-48 flex flex-col flex-shrink-0 border-l"}>
        <div className={"text-xl font-bold"}>{image.name}</div>
      </div>
    </div>
  );
}

