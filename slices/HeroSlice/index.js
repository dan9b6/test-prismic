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
  <section className="hero section">
    {slice.primary.background_image && (
      <PrismicNextImage
        field={slice.primary.background_image}
        className="hero-bg"
      />
    )}
    <div className="container">
      <div className="grid grid--2">
        <div className="grid-item">
          <RichText field={slice.primary.title} />
          <RichText field={slice.primary.description} />
          {slice?.items?.map((item, i) => (
            <PrismicLink field={item.cta_link} className="btn" key={i}>
              {item.cta_text}
            </PrismicLink>
          ))}
        </div>
        <div className="grid-item">
          <PrismicNextImage field={slice.primary.image} />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSlice;
