import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

const SectionCentre = ({ slice }) => {
  return (
    <section
      className={
        slice.primary.dark
          ? "section section--centered section--dark"
          : "section section--centered"
      }
    >
      {slice.primary.background_image && (
        <PrismicNextImage
          field={slice.primary.background_image}
          className="section-bg"
        />
      )}
      <div className="container">
        <div className="section--centered-container">
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
      </div>
    </section>
  );
};

export default SectionCentre;
