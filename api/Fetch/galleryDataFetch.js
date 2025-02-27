import { fetchGalleryPageData } from "../Queries/galleryDataQuery";

class GalleryDataFetchManager {
  parentContainer = document.querySelector(".gallery-items-main");

  constructor() {
    this.initFetch();
  }

  initFetch() {
    fetchGalleryPageData().then((data) => {
      let __cdata = data.newLifeGalleryPages;
      console.log("GALLERY-DATA",__cdata)
      __cdata[0].image.forEach((item) => {
        let derivedItem = this.galleryItemTemplate(item.url);
        this.parentContainer.insertAdjacentHTML("afterbegin", derivedItem);
      });
    });
  }

  galleryItemTemplate(imageURL) {
    let template = `

            <li class="filterall filter-gallery filter-events filter-worship eg-gallery-wrapper">
                <!-- THE CONTAINER FOR THE MEDIA AND THE COVER EFFECTS -->
                <div class="esg-media-cover-wrapper">
                    <!-- THE MEDIA OF THE ENTRY -->
                    <div class="esg-entry-media">
                        <img src="${imageURL}" alt="">
                    </div>
                    <!-- THE CONTENT OF THE ENTRY -->
                    <div class="esg-entry-cover esg-fade" data-delay="0">
                        <!-- THE COLORED OVERLAY -->
                        <div class="esg-overlay esg-fade eg-gallery-container" data-delay="0"></div>
                        <div class="esg-center eg-gallery-element-0-a esg-falldown" data-delay="0.1">
                            <a class="eg-gallery-element-0 esgbox" href="#">
                                                                    
                                <i class="eg-icon-plus"></i>
                            </a>
                        </div>
                        <div class="esg-center eg-gallery-element-8 esg-none esg-clear"></div>
                    </div>
                    <!-- END OF THE CONTENT IN THE ENTRY -->
                </div>
                <!-- END OF THE CONTAINER FOR THE MEDIA AND COVER/HOVER EFFECTS -->
            </li>
        
        `;

    return template;
  }
}

new GalleryDataFetchManager();
