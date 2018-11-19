const graphql = require("gatsby/graphql");
const fetch = require('node-fetch');



exports.sourceNodes = ({ actions, createNodeId, createContentDigest }, configOptions) => {

  const { createNode } = actions
  // Gatsby adds a configOption that's not needed for this plugin, delete it
  // delete configOptions.plugins

  // plugin code goes here...
  console.log("Testing my plugin", configOptions)

  const raw_options = `{
  clubs {
    clubs {
      id
      imageUrl
    }
  }
}` ;

  const options = encodeURI(raw_options);

  console.log(options);

  const apiUrl = `https://07rqzpwj55.lp.gql.zone/graphql?query=${options}`;
  console.log(apiUrl);

  const queryOptions = {
    headers: {
        'content-type': 'application/json',
        body: JSON.stringify(options)
      },
    method: 'POST',
  }


  fetch(apiUrl, queryOptions)
    .then( response => {return response.json()})
    .then( second => {console.log(second)});

}



// exports.sourceNodes = ({ actions, createNodeId, createContentDigest }, configOptions) => {
//   const test = graphql.graphql`{
//       allSitePage {
//         edges {
//           node {
//             id
//           }
//         }
//       }
//     }` ;
// }
//
// exports.createPages = ({ graphql, actions }) => {
//   return new Promise((resolve, reject) => {
//     graphql(`
//       {
//         allMarkdownRemark {
//           edges {
//             node {
//               fields {
//                 slug
//               }
//             }
//           }
//         }
//       }
//     `).then(result => {
//       console.log(JSON.stringify(result, null, 4))
//       resolve()
//     })
//   })
// }


  // const raw_schema = `
  //   {
  //     ossnApi {
  //       users {
  //         users {
  //           id
  //           imageUrl
  //         }
  //       }
  //
  //     }
  //   }
  // `;
  //
  //
  // const schema = new graphql.GraphQLSchema(
  //
  // );



/*

var schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      hello: {
        type: GraphQLString,
        resolve() {
          return 'world';
        }
      }
    }
  })
});


*/

// }
