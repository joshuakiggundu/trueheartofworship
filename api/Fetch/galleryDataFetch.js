import { fetchGalleryPageData } from "../Queries/galleryDataQuery";

class GalleryDataFetchManager {
  parentContainer = document.querySelector(".gallery-items-main");

  constructor() {
    this.initFetch();
  }

  initFetch() {
    fetchGalleryPageData().then((data) => {
      let __cdata = data.newLifeGalleryPages;
      console.log("GALLERY-DATA", __cdata);
      __cdata[0].image.forEach((item) => {
        let derivedItem = this.galleryItemTemplate(item.url);
        this.parentContainer.insertAdjacentHTML("afterbegin", derivedItem);
      });
    });
  }

  galleryItemTemplate(imageURL) {
    let template = `
    <li>
            <div class="gallery-picture-item">
              <img src="${imageURL}" />
            </div>
            </li>
        
        `;

    return template;
  }
}

new GalleryDataFetchManager();
