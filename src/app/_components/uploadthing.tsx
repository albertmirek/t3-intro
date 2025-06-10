"use client";

import {
  generateUploadButton,
  generateUploadDropzone,
} from "@uploadthing/react";
import { useRouter } from "next/navigation";
import type { OurFileRouter } from "~/app/api/uploadthing/core";
import { toast } from "sonner";

const UploadButton = generateUploadButton<OurFileRouter>();
const UploadDropzone = generateUploadDropzone<OurFileRouter>();

export const ImageUploadButton = () => {
  const router = useRouter();

  return (
    <UploadButton
      endpoint="imageUploader"
      onClientUploadComplete={(res) => {
        toast("Image uploaded successfully.", {
          description: "Sunday, December 03, 2023 at 9:00 AM",
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        });
        router.refresh();
      }}
      onUploadError={(error: Error) => {
        // Do something with the error.
        alert(`ERROR! ${error.message}`);
      }}
    />
  );
};
