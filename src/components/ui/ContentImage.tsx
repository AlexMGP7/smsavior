/* eslint-disable @next/next/no-img-element */
import React from "react";

export function ContentImage({
  image,
  className,
  fallbackAlt,
}: {
  image?: { url?: string; alt?: string };
  className: string;
  fallbackAlt: string;
}) {
  if (!image?.url) return null;

  return (
    <img
      src={image.url}
      alt={image.alt || fallbackAlt}
      className={className}
      loading="lazy"
    />
  );
}
