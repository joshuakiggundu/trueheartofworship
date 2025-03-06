var i=Object.defineProperty;var r=(e,t,s)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var n=(e,t,s)=>r(e,typeof t!="symbol"?t+"":t,s);import{g as l,G as c}from"./gql-B2A7gsmw.js";const p=new c("https://eu-west-2.cdn.hygraph.com/content/cm7lst6j601e106ux6nfp97jn/master"),_=l`

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

`;function d(){return p.request(_)}class g{constructor(){n(this,"blogItemsParentContaienr",document.querySelector(".blog-data-formats"));this.initFetch()}initFetch(){d().then(t=>{let s=t.newLifeBlogPages;console.log("BLOG-DATA",s),s.forEach(a=>{let o=this.blogTemplate(a.postTitle,a.description,a.postImage.url,a.author);this.blogItemsParentContaienr.insertAdjacentHTML("afterbegin",o)})})}blogTemplate(t,s,a,o){return`
        
             <article class="post_item post_item_excerpt post_format_image odd post">
                <div class="post_featured">
                    <div class="post_thumb" data-title="Image Post">
                        <a class="hover_icon hover_icon_link" href="#">
                            <img alt="Image Post" src="${a}"></a>
                    </div>
                </div>
                <div class="post_content clearfix">
                    <h3 class="post_title">
                        <a href="#">${t}</a>
                    </h3>
                    <div class="post_info">
                        <span class="post_info_item post_info_posted_by">Posted by ${o}</span>
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
                        <p>${s}</p>
                        
                    </div>
                </div>
            </article>
        
        `}}new g;
