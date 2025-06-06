import { HydrateClient } from "~/trpc/server";
import { db } from "~/server/db";
import { auth } from "~/server/auth";
import { getMyImages } from "~/server/queries";
import { SignIn } from "~/app/layout";

export const dynamic = "force-dynamic";
export default async function Home() {
  const session = await auth();

  const images = session?.user.id
    ? await getMyImages(session?.user.id)
    : [];

  return (
    <HydrateClient>
      <main className="">
        <div className="flex flex-wrap gap-4 m-4">
          {session ? images.map((image) => (
            <div key={image.id} className="w-48 m-4 flex flex-col">
              <img src={image.url} alt={image.name} />
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
