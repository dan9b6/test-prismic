import * as prismicH from "@prismicio/helpers";
import { SliceZone } from "@prismicio/react";
import { createClient, linkResolver } from "../../prismicio";
import { components } from "@/slices/index";
import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";

const Project = ({ page, navigation, settings }) => {
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
      <SliceZone slices={page.data.slices} components={components} />;
    </>
  );
};

export default Project;

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });
  const [navigation, page] = await Promise.all([
    client.getByUID("navigation", "header"),
    client.getByUID("projects", params.uid),
  ]);
  return {
    props: {
      navigation,
      page,
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();
  const pages = await client.getAllByType("projects");
  return {
    paths: pages.map((page) => prismicH.asLink(page, linkResolver)),
    fallback: false,
  };
}
