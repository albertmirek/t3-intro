import "server-only"
import { db } from "~/server/db";
import { auth } from "~/server/auth";

export async function getMyImages() {

  const userId = (await auth())?.user.id;
  if (!userId) {
    // throw new Error("Unauthorized");
    return []
  }

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

export async function getImage(id: number) {
  const session = (await auth());
  if (!session?.user.id) {
    throw new Error("Unauthorized");
  }

  const image = await db.image.findFirst({where: {id: {equals: id}}})

  if (!image) {
    throw new Error("Image not found");
  }

  if (image.userId !== session.user.id) {
    throw new Error("Unauthorized");
  }

  return {
    image,
    userName: session.user.name
  };
}
