import { PrismicNextImage } from "@prismicio/next";
import { PrismicLink, PrismicText } from "@prismicio/react";
import Link from "next/link";
import { useState, useEffect } from "react";

export function Navigation({ navigation }) {
  const [navToggle, setNavToggle] = useState(false);
  const [scrollNavToggle, setScrollNavToggle] = useState(false);

  function toggleNav() {
    setNavToggle(!navToggle);
  }

  useEffect(() => {
    if (window.pageYOffset > 100) setScrollNavToggle(true);

    window.addEventListener("scroll", function () {
      window.pageYOffset > 100
        ? setScrollNavToggle(true)
        : setScrollNavToggle(false);
    });
  }, []);

  return (
    <header
      className={navToggle || scrollNavToggle ? "header active" : "header"}
    >
      <div className="container">
        <div className="header-grid">
          <div className="header-grid-item">
            <Link href="/">
              <PrismicNextImage
                field={navigation.data.logo}
                className="header-logo"
              />
            </Link>
          </div>
          <nav
            className={
              navToggle
                ? "header-grid-item header-nav active"
                : "header-grid-item header-nav"
            }
          >
            <div className="container">
              <ul>
                {navigation.data.slices.map((slice) => {
                  return (
                    <li key={slice.id}>
                      <PrismicLink field={slice.primary.link}>
                        {slice.primary.name}
                      </PrismicLink>

                      {/* Renders child links, if present. */}
                      {slice.items.length > 0 && (
                        <ul>
                          {slice.items.map((item) => {
                            return (
                              <li key={JSON.stringify(item)}>
                                <PrismicLink field={item.child_link}>
                                  {item.child_name}
                                </PrismicLink>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </nav>
          <div className="header-grid-item header-cta">
            <PrismicLink
              field={navigation.data.cta_link}
              className="btn header-btn"
            >
              <span>{navigation.data.cta_text}</span>
            </PrismicLink>
            <button
              className={navToggle ? `header-toggle active` : "header-toggle"}
              onClick={toggleNav}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
