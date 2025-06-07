import { HydrateClient } from "~/trpc/server";
import { auth } from "~/server/auth";
import { getMyImages } from "~/server/queries";
import { SignIn } from "~/app/layout";
import Image from "next/image";

export const dynamic = "force-dynamic";
export default async function Home() {
  const session = await auth();

  const images = session?.user.id
    ? await getMyImages(session?.user.id)
    : [];

  return (
    <HydrateClient>
      <main className="">
        <div className="flex flex-wrap justify-center gap-4 m-4">
          {session ? images.map((image) => (
            <div key={image.id} className="w-48 m-4 flex flex-col">
              {/*<img src={image.url} alt={image.name} />*/}
              <Image src={image.url} alt={image.name} width={192} height={192}
              />
              <div>{image.name}</div>
            </div>
          ))
          : <SignIn text={"Please sign in"} />
          }
        </div>
      </main>
    </HydrateClient>
  );
}
