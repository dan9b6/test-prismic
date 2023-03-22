import React from "react";
import { PrismicRichText } from "@prismicio/react";
import RichText from "@/components/RichText";
import { PrismicNextImage } from "@prismicio/next";

/**
 * @typedef {import("@prismicio/client").Content.ImageGridSlice} ImageGridSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ImageGridSlice>} ImageGridProps
 * @param { ImageGridProps }
 */
const ImageGrid = ({ slice }) => (
  <section>
    <div className="container">
      <pre>{JSON.stringify(slice, null, 2)}</pre>
      <RichText field={slice.primary.title} />
      <RichText field={slice.primary.description} />
      {slice?.items?.map((item, i) => (
        <PrismicNextImage field={item.image} key={i} />
      ))}
    </div>
  </section>
);

export default ImageGrid;
