var i=Object.defineProperty;var c=(a,e,t)=>e in a?i(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var l=(a,e,t)=>c(a,typeof e!="symbol"?e+"":e,t);import{g as s,G as m}from"./gql-B2A7gsmw.js";const o=new m("https://eu-west-2.cdn.hygraph.com/content/cm7lst6j601e106ux6nfp97jn/master"),g=s`
{
  
  newLifeGalleryPages {
    image {
      url
    }
  }
}

`;function h(){return o.request(g)}class u{constructor(){l(this,"parentContainer",document.querySelector(".gallery-items-main"));this.initFetch()}initFetch(){h().then(e=>{let t=e.newLifeGalleryPages;console.log("GALLERY-DATA",t),t[0].image.forEach(r=>{let n=this.galleryItemTemplate(r.url);this.parentContainer.insertAdjacentHTML("afterbegin",n)})})}galleryItemTemplate(e){return`
    <li>
            <div class="gallery-picture-item">
              <img src="${e}" />
            </div>
            </li>
        
        `}}new u;
