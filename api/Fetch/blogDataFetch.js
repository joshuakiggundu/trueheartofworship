import { fetchBlogDataQuery } from "../Queries/blogDataQuery";

class BlogDataFetchManager {
  blogItemsParentContaienr = document.querySelector(".blog-data-formats");


  constructor() {
    this.initFetch()
  }



  initFetch() {
    fetchBlogDataQuery().then((data) => {
      let __cdata = data.newLifeBlogPages;
      console.log("BLOG-DATA",__cdata)
      __cdata.forEach((item) => {
        let derivedArticle = this.blogTemplate(
          item.postTitle,
          item.description,
          item.postImage.url,
          item.author
        );

        this.blogItemsParentContaienr.insertAdjacentHTML(
          "afterbegin",
          derivedArticle
        );
      });
    });
  }

  blogTemplate(postTitle, description, imageLink, author) {
    let template = `
        
             <article class="post_item post_item_excerpt post_format_image odd post">
                <div class="post_featured">
                    <div class="post_thumb" data-title="Image Post">
                        <a class="hover_icon hover_icon_link" href="#">
                            <img alt="Image Post" src="${imageLink}"></a>
                    </div>
                </div>
                <div class="post_content clearfix">
                    <h3 class="post_title">
                        <a href="#">${postTitle}</a>
                    </h3>
                    <div class="post_info">
                        <span class="post_info_item post_info_posted_by">Posted by ${author}</span>
                        <span class="post_info_item post_info_tags">in
                            <a class="category_link" href="">Post formats</a>
                        </span>
                        <span class="post_info_item post_info_counters">Views
                            <a class="post_counters_item post_counters_views" title="Views - 41" href="#">
                                <span class="post_counters_number">41</span>
                            </a>
                        </span>
                    </div>
                    <div class="post_descr">
                        <p>${description}</p>
                        
                    </div>
                </div>
            </article>
        
        `;

    return template;
  }
}


new BlogDataFetchManager()