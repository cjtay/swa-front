import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import PageLinks from "../../constants/links";
// import { FaAlignRight } from "react-icons/fa";
import Image from "gatsby-image";

const Navbar = ({ toggleSidebar }) => {
  const data = useStaticQuery(getNavData);

  return (
    <nav>
      <header>
        <div className="logo">
          <Image fluid={data.file.childImageSharp.fluid} alt="swa logo" />
        </div>
        <h4>Singapore Women's Association</h4>
        <nav>
          <PageLinks styleClass="nav-links"></PageLinks>
        </nav>

        <Link to="/participate/donate">
          <button>Donate</button>
        </Link>
      </header>
    </nav>
  );
};

export default Navbar;

export const getNavData = graphql`
  {
    file(
      sourceInstanceName: { eq: "assets" }
      relativePath: { eq: "logo.png" }
    ) {
      sourceInstanceName
      relativePath
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
