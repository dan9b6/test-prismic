import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import SectionRight from "@/components/sections/SectionRight";
import SectionLeft from "@/components/sections/SectionLeft";
import SectionCentre from "@/components/sections/SectionCentre";

/**
 * @typedef {import("@prismicio/client").Content.SectionSliceSlice} SectionSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SectionSliceSlice>} SectionSliceProps
 * @param { SectionSliceProps }
 */
const SectionSlice = ({ slice }) => {
  const type = slice.primary.type;

  function sectionSwitch(type, slice) {
    switch (type) {
      case "Image Left":
        return <SectionLeft slice={slice} />;
      case "Centred":
        return <SectionCentre slice={slice} />;
      default:
        return <SectionRight slice={slice} />;
    }
  }

  return <>{sectionSwitch(type, slice)}</>;
};

export default SectionSlice;
