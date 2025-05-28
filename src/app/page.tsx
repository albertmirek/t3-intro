import { HydrateClient } from "~/trpc/server";
import {db} from "~/server/db";

export const dynamic = "force-dynamic"

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
    const simplePosts = await db.postSimple.findMany()

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
