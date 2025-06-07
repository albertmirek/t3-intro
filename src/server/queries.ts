import "server-only"
import { db } from "~/server/db";
import { auth } from "~/server/auth";

export async function getMyImages() {

  const userId = (await auth())?.user.id;
  if (!userId) {
    throw new Error("Unauthorized");
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
  const userId = (await auth())?.user.id;
  if (!userId) {
    throw new Error("Unauthorized");
  }

  const image = await db.image.findFirst({where: {id: {equals: id}}})

  if (!image) {
    throw new Error("Image not found");
  }

  if (image.userId !== userId) {
    throw new Error("Unauthorized");
  }

  return image;
}
