import { PrismicRichText } from "@prismicio/react";

import React from "react";

const RichText = ({ field, className }) => {
  return (
    <div className={className}>
      <PrismicRichText field={field} />
    </div>
  );
};

export default RichText;
