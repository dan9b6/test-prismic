import RichText from "@/components/RichText";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicLink } from "@prismicio/react";
import Grid from "./Grid";

const GridImageOnly = ({ slice }) => {
  return (
    <section className="section">
      <div className="container">
        {slice.primary.title && <RichText field={slice.primary.title} />}
        {slice.primary.description && (
          <RichText field={slice.primary.description} />
        )}
        <Grid cols={slice.primary.columns}>
          {slice?.items?.map((item, i) => (
            <PrismicNextImage
              field={item.image}
              className="grid-image"
              key={i}
            />
          ))}
        </Grid>
      </div>
    </section>
  );
};

export default GridImageOnly;
