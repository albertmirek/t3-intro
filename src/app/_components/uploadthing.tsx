"use client";

import {
  generateUploadButton,
  generateUploadDropzone,
} from "@uploadthing/react";
import { useRouter } from "next/navigation";
import type { OurFileRouter } from "~/app/api/uploadthing/core";

const UploadButton = generateUploadButton<OurFileRouter>();
const UploadDropzone = generateUploadDropzone<OurFileRouter>();

export const ImageUploadButton = () => {
  const router = useRouter();

  return (
    <UploadButton
      endpoint="imageUploader"
      onClientUploadComplete={(res) => {
        // Do something with the response
        console.log("Files: ", res);
        alert("Upload Completed");
        router.refresh();
      }}
      onUploadError={(error: Error) => {
        // Do something with the error.
        alert(`ERROR! ${error.message}`);
      }}
    />
  );
};
