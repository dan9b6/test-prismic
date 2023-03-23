import React from "react";
import RichText from "@/components/RichText";
import { PrismicNextImage } from "@prismicio/next";

/**
 * @typedef {import("@prismicio/client").Content.GridSliceSlice} GridSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<GridSliceSlice>} GridSliceProps
 * @param { GridSliceProps }
 */
const GridSlice = ({ slice }) => (
  <section className="section">
    <div className="container">
      {slice.primary.title ? (
        <RichText field={slice.primary.title} />
      ) : (
        <h2>Template slice, update me!</h2>
      )}
      {slice.primary.description ? (
        <RichText field={slice.primary.description} />
      ) : (
        <p>start by editing this slice from inside Slice Machine!</p>
      )}
      <div
        className={
          slice.primary.columns ? `grid grid--${slice.primary.columns}` : `grid`
        }
      >
        {slice?.items?.map((item, i) => (
          <div className="grid-item" key={i}>
            <PrismicNextImage field={item.image} />
            <RichText field={item.richtext} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GridSlice;
