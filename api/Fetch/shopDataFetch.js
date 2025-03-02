import { fetchShopPageData } from "../Queries/shopDataQuery";
import { dom, dom2 } from "./common";

class ShopDataFetchManager {
  parentContainer = document.querySelector(".products");


  constructor(){
    this.intiFetch()
  }

  intiFetch() {
    
    fetchShopPageData().then((data) => {
      //products
      let __cdata = data.newLifeShopPages;


      console.log("SHOP-DATA",__cdata)
      __cdata.forEach((product) => {
        let currentDerivedProduct = this.productTemplate(
          product.productName,
          product.productPrice,
          product.productImage.url
        );

        this.parentContainer.insertAdjacentHTML(
          "afterbegin",
          currentDerivedProduct
        );
      });
    });
  }

  productTemplate(productName, price, productImage) {
    let productTemplate = `
        
        <li class="product column-1_3 first">
            <div class="post_item_wrap">
                <div class="post_featured">
                     <div class="post_thumb hover_icon">
                        <img src="${productImage}" alt="" title="god-is-love-tshirt" />
                        <a href="#" class="button add_to_cart_button">Add to cart</a>
                    </div>
                </div>
                <h3>
                    <a href="product-single.html">${productName}</a>
                </h3>
                <span class="price">
                    <span class="woocommerce-Price-amount amount">
                        <span class="woocommerce-Price-currencySymbol"></span>${price}
                    </span>
                </span>
            </div>
        </li>
        `;

    return productTemplate
  }
}

new ShopDataFetchManager()