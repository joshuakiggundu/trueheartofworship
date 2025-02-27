import {GraphQLClient,gql,request} from "graphql-request";

export const GRAPH_CMS_CLIENT = new GraphQLClient("https://eu-west-2.cdn.hygraph.com/content/cm7lst6j601e106ux6nfp97jn/master");

const query = gql`
  {
    newLifeShopPages {
      productImage {
        url
      }
      productName
      productPrice
    }
  }
`

export function fetchShopPageData() {
  return GRAPH_CMS_CLIENT.request(query);
}
