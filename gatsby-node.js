/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allStrapiEvent {
        nodes {
          slug
        }
      }
    }
  `);

  //   console.log("####################");
  //   console.log("from gatbsy node js - events: ", JSON.stringify(result));
  //   console.log("####################");

  result.data.allStrapiEvent.nodes.forEach(event => {
    createPage({
      path: `/events/${event.slug}`,
      component: path.resolve(`src/templates/eventPageTemplate.js`),
      context: { slug: event.slug },
    });
  });
};
