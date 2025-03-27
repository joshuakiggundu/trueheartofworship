import * as zh from "graphql-request";

export const GRAPH_CMS_CLIENT = new zh.GraphQLClient(
  "https://eu-west-2.cdn.hygraph.com/content/cm7lst6j601e106ux6nfp97jn/master"
);

class PostSingleDataFetch {
  blogContentPostElement = document.querySelector(".blog-content-post");

  constructor() {
    this.intialize();
  }

  getCurrentBlogIDFromLocation() {
    const params = new URLSearchParams(window.location.search);
    const _value = params.get("id");
    return _value;
  }

  generateQueryBasedOnPostTitle(postitle) {
    const query = zh.gql`
            {
            newLifeBlogPages(where: { postTitle: "${postitle}" })  {
                postTitle
                content {
                    html
                }
            }
        }
        
        `;
        return query;
  }

  attachHTMLFromHost(htmlContent) {
    console.log("blog-content",htmlContent)
    this.blogContentPostElement.insertAdjacentHTML("afterbegin",htmlContent)
  }

  fetchPostContentFromOnline() {
    const currentRequestedQuery = this.getCurrentBlogIDFromLocation()
    return GRAPH_CMS_CLIENT.request(this.generateQueryBasedOnPostTitle(currentRequestedQuery))
  }

  intialize() {
        this.fetchPostContentFromOnline().then((v)=>{

            let _cdata = v.newLifeBlogPages[0];
            let currentContent = _cdata.content.html;
            this.attachHTMLFromHost(currentContent)

        })


  }
}

new PostSingleDataFetch();
