import { useState, useEffect } from "react";
import { PrismicRichText } from "@prismicio/react";
import { createClient } from "../../prismicio";
import { PrismicNextImage } from "@prismicio/next";
import Link from "next/link";

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
  }, []);

  return (
    <section className="section">
      <div className="container">
        <span className="title">
          {slice.primary.title && (
            <PrismicRichText field={slice.primary.title} />
          )}
        </span>
        {slice.primary.description && (
          <PrismicRichText field={slice.primary.description} />
        )}
        <div className="project-pane-grid">
          {projects.map((project, index) => {
            console.log(project.slugs[0]);
            return (
              <Link
                href={`/projects/${project.slugs[0]}`}
                className="project-pane"
                key={index}
              >
                <PrismicNextImage
                  field={project.data.pane_image}
                  className="project-pane-img"
                />
                <div className="project-pane-text">
                  <h3>{project.data.name}</h3>
                  <h4>{project.data.type}</h4>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectListSlice;
