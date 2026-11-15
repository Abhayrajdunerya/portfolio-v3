import { z } from "zod";
const optionalUrl = z
  .url()
  .refine((value) => ["http:", "https:"].includes(new URL(value).protocol));
const configured = process.env.NEXT_PUBLIC_SITE_URL;
const parsed = configured ? optionalUrl.safeParse(configured) : undefined;
if (parsed && !parsed.success)
  throw new Error("NEXT_PUBLIC_SITE_URL must be an absolute http(s) URL.");
export const siteUrl = parsed?.success
  ? parsed.data.replace(/\/$/, "")
  : undefined;
