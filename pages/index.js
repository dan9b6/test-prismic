import { SliceZone } from "@prismicio/react";
import { createClient } from "../prismicio";
import { components } from "../slices";
import { Navigation } from "@/components/Navigation";

const Page = ({ page, navigation, settings }) => {
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
