import { HydrateClient } from "~/trpc/server";
import {db} from "~/server/db";

export const dynamic = "force-dynamic"
export default async function Home() {
    const images = await db.image.findMany()

  return (
    <HydrateClient>
      <main className="">
          <div className="flex flex-wrap gap-4 m-4">{
              images.map((image) => (
                  <div key={image.id} className="w-48 m-4">
                      <img src={image.url} alt={"Mocked image"} />
                  </div>
              ))
          }</div>
       {/*<h1>Hello - Gallery WIP</h1>*/}

      </main>
    </HydrateClient>
  );
}
