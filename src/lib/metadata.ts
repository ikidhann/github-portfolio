import { Metadata } from "next";

// TODO: Update metadata

export function constructMetadata({
  title = "ikidhan's Portfolio",
  description = "Mobile Developer with expertise in Native (Android) and cross-platform (Flutter) development.",
  image = "/thumbnail.png",
  icons = "/ikidhan-logo.png",
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [image],
    },
    icons,
  };
}
