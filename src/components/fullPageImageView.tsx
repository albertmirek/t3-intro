import { getImage } from "~/server/queries";

export default async function FullPageImageView(props: { id: number }) {
  const { image, userName } = await getImage(props.id);

  return (
    <div className={"flex h-full w-full"}>
      <div className={"flex-shrink flex justify-center items-center"}>
        <img src={image.url} alt={image.name} className={"object-contain"} />
      </div>

      <div className={"w-48 flex flex-col flex-shrink-0 border-l"}>
        <div className={"text-xl border-b text-center p-2"}>{image.name}</div>

        <div className={"flex flex-col p-2"}>
          <span>Uploaded By</span>
          <span>{userName}</span>
        </div>

        <div className={"flex flex-col p-2"}>
          <span>Created On</span>
          <span>{new Date(image.createdAt).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
}
