import "server-only"
import { auth } from "~/server/auth";
import { db } from "~/server/db";

export async function getMyImages(userId: string) {
  /*const session = await auth()
  if (!session?.user.id) return []*/

  const images = await db.image.findMany({
    where: {
      userId: {
        equals: userId,
      },
    },
    orderBy: [
      {
        id: "desc"
      }
    ]
  })

  return images
}
