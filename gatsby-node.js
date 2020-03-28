// const path = require("path")

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   const result = await graphql(`
//     query {
//       starter: allMarkdownRemark(
//         filter: { fileAbsolutePath: { regex: "//starter/" } }
//       ) {
//         edges {
//           node {
//             frontmatter {
//               slug
//             }
//           }
//         }
//       }
//     }
//   `)

//   const { starter } = result.data

//   starter.edges.forEach(({ node }) => {
//     createPage({
//       path: `/starter${node.frontmatter.slug}`,
//       component: path.resolve("./src/templates/starter.tsx"),
//       context: {
//         slug: node.frontmatter.slug,
//       },
//     })
//   })
// }