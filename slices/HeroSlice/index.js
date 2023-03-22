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
  <section className="section">
    <div className="container">
      {/* <pre>{JSON.stringify(slice, null, 2)}</pre> */}
      <RichText field={slice.primary.title} />
      <RichText field={slice.primary.description} />
      <PrismicNextImage field={slice.primary.image} />
      {slice?.items?.map((item, i) => (
        <PrismicLink field={item.cta_link} className="btn" key={i}>
          {item.cta_text}
        </PrismicLink>
      ))}
    </div>
  </section>
);

export default HeroSlice;
