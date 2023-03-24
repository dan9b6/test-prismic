import React from "react";
import { PrismicRichText, PrismicLink } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import RichText from "@/components/RichText";

/**
 * @typedef {import("@prismicio/client").Content.HeroSliceSlice} HeroSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSliceSlice>} HeroSliceProps
 * @param { HeroSliceProps }
 */
const HeroSlice = ({ slice }) => (
  <section className="hero">
    {slice.primary.background_image && (
      <PrismicNextImage
        field={slice.primary.background_image}
        className="hero-bg"
      />
    )}
    <div className="container">
      <div className="grid grid--2">
        <div className="grid-item">
          <RichText field={slice.primary.text} />
        </div>
        <div className="grid-item">
          <PrismicNextImage field={slice.primary.image} />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSlice;
