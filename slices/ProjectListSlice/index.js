import { useState, useEffect } from "react";
import { PrismicRichText } from "@prismicio/react";
import { createClient } from "../../prismicio";
import { PrismicNextImage } from "@prismicio/next";

/**
 * @typedef {import("@prismicio/client").Content.ProjectListSliceSlice} ProjectListSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ProjectListSliceSlice>} ProjectListSliceProps
 * @param { ProjectListSliceProps }
 */
const ProjectListSlice = ({ slice }) => {
  const [projects, setProjects] = useState([]);
  const client = createClient();
  const documents = client.getAllByType("projects");

  useEffect(() => {
    documents.then((data) => setProjects(data));
    console.log(projects);
    console.log(projects);
  }, []);

  return (
    <section className="section">
      <div className="container">
        <span className="title">
          {slice.primary.title ? (
            <PrismicRichText field={slice.primary.title} />
          ) : (
            <h2>Template slice, update me!</h2>
          )}
        </span>
        {slice.primary.description ? (
          <PrismicRichText field={slice.primary.description} />
        ) : (
          <p>start by editing this slice from inside Slice Machine!</p>
        )}
        <div className="project-pane-grid">
          {projects.map((project, index) => (
            <div className="project-pane" key={index}>
              <PrismicNextImage field={project.data.pane_image} />
              <div className="project-pane-text">
                <h3>{project.data.title}</h3>
                <h4>Web project</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectListSlice;
