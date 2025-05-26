import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { auth } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";
import Image from "next/image";
import {db} from "~/server/db";


const mockedImageUrls = [
    "https://m9tlcpcmj6.ufs.sh/f/eq6y5b8McwQmtZj6edDolVJ0xOmQG31YLcN8djMFeyv6Skni",
    "https://m9tlcpcmj6.ufs.sh/f/eq6y5b8McwQmmUYLBiInsjDo08cYM6REOepXtyJWU5ixBTbd",
    "https://m9tlcpcmj6.ufs.sh/f/eq6y5b8McwQm0hZQO7a81gfTF3sVOjS9RJCAQ2mhUvY5zHKe",
    "https://m9tlcpcmj6.ufs.sh/f/eq6y5b8McwQmjAPt0ebdqRSDtzQlkugPFMUE21m9jXwsVoIh",
]

const mockImages = mockedImageUrls.map((url, index) => ({
    id: index + 1,
    url
}))

export default async function Home() {
  // const hello = await api.post.hello({ text: "from tRPC" });
    const simplePosts = await db.postSimple.findMany()

/*  const session = await auth();

  if (session?.user) {
    void api.post.getLatest.prefetch();
  }*/

  return (
    <HydrateClient>
      <main className="">
          <div>
              <h3>Simple posts from db listing</h3>
              {simplePosts.map((post) => (<span>{post.name}</span>))}
          </div>
          <div className="flex flex-wrap gap-4 m-4">{
              [...mockImages,...mockImages,...mockImages].map((mockImage, index) => (
                  <div key={index} className="w-48 m-4">
                      {/*<Image key={mockImage.id} alt={"Mocked image"} src={mockImage.url} width={400} height={400}/>*/}
                      <img src={mockImage.url} alt={"Mocked image"} />
                  </div>
              ))
          }</div>
       {/*<h1>Hello - Gallery WIP</h1>*/}

      </main>
    </HydrateClient>
  );
}
