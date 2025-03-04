"use client";

import { ChangeEvent, useCallback, useState } from "react";

import Image from "next/image";

import { IconEdit } from "@tabler/icons-react";

import Button from "@/components/Button";
import IconButton from "@/components/IconButton";
import SideDrawer from "@/components/SideDrawer";

import { createMedia } from "@/actions/createMedia";
import imageCompression, { Options } from "browser-image-compression";
import { useFormik } from "formik";

const IMAGE_COMPRESSION_OPTIONS: Options = {
  maxSizeMB: 0.2,
  maxWidthOrHeight: 1920,
  useWebWorker: true,
  fileType: "image/jpeg",
};

export default function AdminTools({ id, slug }: { id: number; slug: string }) {
  const [isVehicleMediaFormOpen, setIsVehicleMediaFormOpen] = useState(false);

  const formik = useFormik<{ files: FileList | null }>({
    initialValues: {
      files: null,
    },
    onSubmit: async (values) => {
      if (!values.files) {
        return;
      }
      try {
        /**
         * Compress + rename files
         */
        const compressedImageList: File[] = [];
        for (let i = 0; i < values.files.length; i++) {
          const file = values.files[i];
          const fileInstance = new File([file], file.name, {
            type: "image/png",
          });
          const compressionResult = await imageCompression(
            fileInstance,
            IMAGE_COMPRESSION_OPTIONS,
          );
          const compressedImage = new File(
            [compressionResult],
            `${compressionResult.name}.jpg`,
          );
          compressedImageList.push(compressedImage);
        }
        await createMedia({
          id,
          slug,
          model: "vehicle",
          fileList: compressedImageList,
        });
      } catch (error) {
        console.error(error);
      }
    },
  });

  const handleToggleVehicleMediaForm = useCallback(() => {
    document.body.classList.toggle("overflow-hidden");
    setIsVehicleMediaFormOpen((state) => !state);
  }, []);

  return (
    <>
      <IconButton
        size="sm"
        className="bg-primary text-white"
        onClick={handleToggleVehicleMediaForm}
      >
        <IconEdit size={16} />
      </IconButton>

      <SideDrawer
        isOpen={isVehicleMediaFormOpen}
        onClose={handleToggleVehicleMediaForm}
      >
        <form className="flex flex-1 flex-col" onSubmit={formik.handleSubmit}>
          <div className="flex flex-col flex-1 pb-4">
            <fieldset className="text-sm">
              <label
                className="bg-primary/80 text-white rounded-lg cursor-pointer px-2 py-1"
                htmlFor="files"
              >
                Upload multiple files
              </label>
              {!!formik.values.files && !!formik.values.files.length && (
                <p className="pt-2">
                  {formik.values.files.length} files selected
                </p>
              )}
              <input
                className="hidden"
                accept="image/*"
                id="files"
                type="file"
                multiple
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  if (!event?.currentTarget?.files) {
                    return;
                  }
                  formik.setFieldValue("files", event?.currentTarget?.files);
                }}
                // value={formik.values.files}
              />
            </fieldset>

            {!!formik.values.files &&
              (formik.values.files ?? []).length > 0 && (
                <div className="py-4 flex flex-col w-full gap-2">
                  {(Array.from(formik.values.files) ?? []).map(
                    (file, index) => {
                      return (
                        <figure className="relative h-36" key={index}>
                          <Image
                            className="object-cover"
                            fill
                            sizes="300px"
                            alt="image preview"
                            src={URL.createObjectURL(file)}
                            unoptimized
                          />
                        </figure>
                      );
                    },
                  )}
                </div>
              )}
          </div>

          <div className="inline-flex justify-between">
            <Button className="bg-red text-white" rounded>
              Cancel
            </Button>
            <Button className="bg-primary text-white" type="submit" rounded>
              Submit
            </Button>
          </div>
        </form>
      </SideDrawer>
    </>
  );
}
