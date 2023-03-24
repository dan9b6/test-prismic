import React from "react";
import RichText from "@/components/RichText";
import { PrismicNextImage } from "@prismicio/next";
import GridCards from "@/components/grid/GridCards";
/**
 * @typedef {import("@prismicio/client").Content.GridSliceSlice} GridSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<GridSliceSlice>} GridSliceProps
 * @param { GridSliceProps }
 */
const GridSlice = ({ slice }) => <GridCards slice={slice} />;

export default GridSlice;
