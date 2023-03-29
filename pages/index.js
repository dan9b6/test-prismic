import { SliceZone } from "@prismicio/react";
import { createClient } from "../prismicio";
import { components } from "../slices";
import { Navigation } from "@/components/Navigation";
import { useEffect } from "react";

const Page = ({ page, navigation, settings }) => {
  useEffect(() => {
    let sections = document.querySelectorAll(".section");

    let options = {
      rootMargin: "0px",
    };

    const intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, options);

    function initAnimation(elements) {
      elements.forEach((element) => {
        intersectionObserver.observe(element);
      });
    }

    initAnimation(sections);

    window.addEventListener("scroll", initAnimation(sections));
  }, []);

  return (
    <>
      <Navigation navigation={navigation} />
      <SliceZone slices={page.data.slices} components={components} />
    </>
  );
};

export default Page;

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });
  const [navigation, page] = await Promise.all([
    client.getByUID("navigation", "header"),
    client.getSingle("homepage"),
  ]);

  return {
    props: {
      navigation,
      page,
    },
  };
}
