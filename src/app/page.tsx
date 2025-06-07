import { HydrateClient } from "~/trpc/server";
import { auth } from "~/server/auth";
import { getMyImages } from "~/server/queries";
import { SignIn } from "~/app/layout";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Routes } from "~/consts/routes";

export const dynamic = "force-dynamic";
export default async function Home() {
  const images = await getMyImages()

  return (
    <HydrateClient>
      <main className="">
        <div className="flex flex-wrap justify-center gap-4 m-4">
          {images.map((image) => (
            <div key={image.id} className="flex h-48 w-48 flex-col">
              <Link href={Routes.IMAGE_DETAIL(image.id)}>
                <Image
                  src={image.url}
                  style={{ objectFit: "contain" }}
                  width={192}
                  height={192}
                  alt={image.name}
                />
              </Link>
              <div>{image.name}</div>
            </div>
          ))}
        </div>
      </main>
    </HydrateClient>
  );
}
