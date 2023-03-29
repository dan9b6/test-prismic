import RichText from "@/components/RichText";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicLink } from "@prismicio/react";
import Grid from "./Grid";

const GridCards = ({ slice }) => {
  return (
    <section className="section">
      <div className="container">
        {slice.primary.title && <RichText field={slice.primary.title} />}
        {slice.primary.description && (
          <RichText field={slice.primary.description} />
        )}
        <Grid cols={slice.primary.columns}>
          {slice?.items?.map((item, i) => (
            <div className="card" key={i}>
              <PrismicNextImage field={item.image} className="card-img-top" />
              <div className="card-content">
                <div className="card-body">
                  <RichText field={item.richtext} />
                </div>
                <div className="card-footer">
                  <PrismicLink field={item.cta_link} className="btn">
                    {item.cta_text}
                  </PrismicLink>
                </div>
              </div>
            </div>
          ))}
        </Grid>
      </div>
    </section>
  );
};

export default GridCards;
