import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

const SectionLeft = ({ slice }) => {
  return (
    <section
      className={
        slice.primary.dark
          ? "section section--left section--dark"
          : "section section--left"
      }
    >
      {slice.primary.background_image && (
        <PrismicNextImage
          field={slice.primary.background_image}
          className="section-bg"
        />
      )}
      <div className="container">
        <div className="grid grid--2">
          <div className="grid-item">
            {slice.primary.title && (
              <PrismicRichText field={slice.primary.title} />
            )}
            {slice.primary.description && (
              <PrismicRichText field={slice.primary.description} />
            )}
            {slice.primary.content && (
              <PrismicRichText field={slice.primary.content} />
            )}
          </div>
          <div className="grid-item">
            {slice?.items?.map((item, i) => (
              <PrismicNextImage field={item.image} key={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionLeft;
