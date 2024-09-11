import { z } from "zod";

export const videoSchema = z.object({
  title: z.string().trim().min(1, "Title is required"),
  description: z.string().trim().min(1, "Description is required"),
  duration: z.string().trim().min(1, "Duration is required"),
  sortValue: z
    .number({
      required_error: "Sort is required",
      invalid_type_error: "Sort must be a number",
    })
    .min(0, "Sort must be a positive number"),
  isPublic: z.boolean().optional().default(false),
  videoUrl: z
    .any()
    .refine((files) => files?.length > 0 && files[0] instanceof File, {
      message: "Video is required",
    })
    .refine(
      (files) => {
        if (files?.length > 0) {
          const file = files[0];
          return file.type.startsWith("video/");
        }
        return true;
      },
      {
        message: "File must be a video",
      }
    ),
});
