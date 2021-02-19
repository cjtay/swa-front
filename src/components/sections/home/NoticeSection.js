import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const AnnouncementSection = () => {
  const data = useStaticQuery(getNotice);
  return (
    <section>
      {data.strapiAnnouncesection.title !== "" && (
        <div className="bg-white-transparent px-5 py-4 max-w-lg mx-auto rounded-xl">
          <h2 className="text-purple-900 mb-2 text-center">
            {data.strapiAnnouncesection.title}
          </h2>
          <p>{data.strapiAnnouncesection.description}</p>
        </div>
      )}
    </section>
  );
};

export default AnnouncementSection;

// ----------- graphql -------------------

export const getNotice = graphql`
  {
    strapiAnnouncesection {
      title
      description
    }
  }
`;
