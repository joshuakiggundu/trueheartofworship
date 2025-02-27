import * as zh from "graphql-request";

export const GRAPH_CMS_CLIENT = new zh.GraphQLClient("https://eu-west-2.cdn.hygraph.com/content/cm7lst6j601e106ux6nfp97jn/master");

const blogDataQuery = zh.gql`

{
  
  newLifeBlogPages {
    postTitle
    author
    description
    postImage {
      url
    }
    
  }
}

`;

export function fetchBlogDataQuery() {
  return GRAPH_CMS_CLIENT.request(blogDataQuery);
}
