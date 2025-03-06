var s=Object.defineProperty;var n=(r,t,e)=>t in r?s(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var o=(r,t,e)=>n(r,typeof t!="symbol"?t+"":t,e);import{g as i,G as p}from"./gql-B2A7gsmw.js";const l=new p("https://eu-west-2.cdn.hygraph.com/content/cm7lst6j601e106ux6nfp97jn/master"),u=i`
  {
    newLifeShopPages {
      productImage {
        url
      }
      productName
      productPrice
    }
  }
`;function d(){return l.request(u)}class m{constructor(){o(this,"parentContainer",document.querySelector(".products"));this.intiFetch()}intiFetch(){d().then(t=>{let e=t.newLifeShopPages;console.log("SHOP-DATA",e),e.forEach(a=>{let c=this.productTemplate(a.productName,a.productPrice,a.productImage.url);this.parentContainer.insertAdjacentHTML("afterbegin",c)})})}productTemplate(t,e,a){return`
        
        <li class="product column-1_3 first">
            <div class="post_item_wrap">
                <div class="post_featured">
                     <div class="post_thumb hover_icon">
                        <img src="${a}" alt="" title="god-is-love-tshirt" />
                        <a href="#" class="button add_to_cart_button">Add to cart</a>
                    </div>
                </div>
                <h3>
                    <a href="product-single.html">${t}</a>
                </h3>
                <span class="price">
                    <span class="woocommerce-Price-amount amount">
                        <span class="woocommerce-Price-currencySymbol"></span>${e}
                    </span>
                </span>
            </div>
        </li>
        `}}new m;
