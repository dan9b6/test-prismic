import RichText from "@/components/RichText";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicLink } from "@prismicio/react";

const GridIcons = ({ slice }) => {
  return (
    <section className="section section--icons">
      <div className="container">
        {slice.primary.title && <RichText field={slice.primary.title} />}
        {slice.primary.description && (
          <RichText field={slice.primary.description} />
        )}
        <div
          className={
            slice.primary.columns
              ? `grid grid--${slice.primary.columns}`
              : `grid`
          }
        >
          {slice?.items?.map((item, i) => (
            <div className="card-icon" key={i}>
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
        </div>
      </div>
    </section>
  );
};

export default GridIcons;
