import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const AnnouncementSection = () => {
  const data = useStaticQuery(getNotice);
  return (
    <section>
      {data.strapiAnnouncesection.title !== "" && (
        <div className="w-11/12 px-5 py-4 mx-auto border md:w-9/12 xl:w-6/12 bg-white-transparent rounded-xl border-swa-1">
          <h2 className="mb-2 text-center text-purple-900">
            {data.strapiAnnouncesection.title}
          </h2>
          <p className="line-clamp-3 hover:line-clamp-none ">
            {data.strapiAnnouncesection.description}
          </p>
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
