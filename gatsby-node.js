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

// exports.onCreateNode = async ({
//   node,
//   actions,
//   store,
//   cache,
//   createNodeId,
// }) => {
//   const { createNode } = actions;

//   let photo_gallery = node.images;

//   if (node.internal.type === "StrapiEvent") {
//     if (photo_gallery.length > 0) {
//       photo_gallery.forEach(el => console.log(el));
//       const images = await Promise.all(
//         photo_gallery.map(el =>
//           createRemoteFileNode({
//             url: `http://localhost:1337/${el.url}`,
//             parentNodeId: node.id,
//             store,
//             cache,
//             createNode,
//             createNodeId,
//           })
//         )
//       );

//       photo_gallery.forEach((image, i) => {
//         image.localFile___NODE = images[i].id;
//       });
//     }
//   }
// };
