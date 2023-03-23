import * as prismicH from "@prismicio/helpers";
import { SliceZone } from "@prismicio/react";
import { createClient, linkResolver } from "../../prismicio";
import { components } from "@/slices/index";

const Project = ({ page, navigation, settings }) => {
  return <SliceZone slices={page.data.slices} components={components} />;
};

export default Project;

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });
  const page = await client.getByUID("projects", params.uid);
  return {
    props: {
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
