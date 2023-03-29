import React from "react";
import RichText from "@/components/RichText";
import { PrismicNextImage } from "@prismicio/next";
import GridCards from "@/components/grid/GridCards";
import GridIcons from "@/components/grid/GridIcons";
import { useState, useEffect } from "react";
/**
 * @typedef {import("@prismicio/client").Content.GridSliceSlice} GridSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<GridSliceSlice>} GridSliceProps
 * @param { GridSliceProps }
 */
const GridSlice = ({ slice }) => {
  const type = slice.primary.type;

  function gridSwitch(type, slice) {
    switch (type) {
      case "Image Only":
        return <GridIcons slice={slice} />;
      case "Icon":
        return <GridIcons slice={slice} />;
      default:
        return <GridCards slice={slice} />;
    }
  }

  return <>{gridSwitch(type, slice)}</>;
};

export default GridSlice;
