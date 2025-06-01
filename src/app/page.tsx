import { HydrateClient } from "~/trpc/server";
import { db } from "~/server/db";
import { auth } from "~/server/auth";

export const dynamic = "force-dynamic";
export default async function Home() {
  const session = await auth();

  const images = session?.user.id ? await db.image.findMany({
        where: {
          userId: {
            equals: session.user.id,
          },
        },
    })
    :[]

  return (
    <HydrateClient>
      <main className="">
        <div className="flex flex-wrap gap-4 m-4">
          {images.map((image) => (
            <div key={image.id} className="w-48 m-4 flex flex-col">
              <img src={image.url} alt={image.name} />
              <div>{image.name}</div>
            </div>
          ))}
        </div>
      </main>
    </HydrateClient>
  );
}
