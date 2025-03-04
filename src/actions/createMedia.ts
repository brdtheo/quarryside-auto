"use server";

import { prisma } from "@/lib/prisma";

import { S3Client } from "@aws-sdk/client-s3";
import { Upload } from "@aws-sdk/lib-storage";
import { v4 as generateUuid } from "uuid";

const client = new S3Client({
  region: "eu-west-3",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
  },
});

type CreateMediaParams = {
  slug: string;
  fileList: File[];
  model: "vehicle" | "wheel";
  id: number;
};

export async function createMedia({
  slug,
  fileList,
  // model,
  id,
}: CreateMediaParams) {
  try {
    const S3MediaPathList: string[] = [];

    // upload to S3
    const bufferList: Buffer<ArrayBufferLike>[] = [];
    for (let i = 0; i < fileList.length; i++) {
      const file = fileList[i];
      const fileBuffer = Buffer.from(await file.arrayBuffer());
      bufferList.push(fileBuffer);
    }

    for (let i = 0; i < bufferList.length; i++) {
      const buffer = bufferList[i];
      const parallelUploads3 = new Upload({
        client,
        params: {
          Bucket: "quarryside-auto-vehicle",
          Key: `${slug}/${generateUuid()}.jpg`,
          Body: buffer,
        },
        queueSize: 4,
        partSize: 1024 * 1024 * 5,
        leavePartsOnError: false,
      });
      const S3Object = await parallelUploads3.done();
      if (!S3Object.Location) {
        return;
      }
      S3MediaPathList.push(S3Object.Location);
    }

    // create prisma Media
    await prisma.media.createMany({
      data: S3MediaPathList.map((url, index) => ({
        is_thumbnail: index === 0,
        url,
        vehicle: id,
      })),
    });
  } catch (error) {
    console.error(error);
  }
}
