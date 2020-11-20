import { makeObservable, observable, action } from "mobx";
import slugify from "react-slugify";

//component
import products from "../products";

class ProductStore {
  products = products;

  constructor() {
    makeObservable(this, {
      products: observable,
      creatProduct: action,
      deleteProduct: action,
    });
  }

  creatProduct = (newProduct) => {
    newProduct.slug = slugify(newProduct.name);
    newProduct.id = this.products[this.products.length - 1].id + 1;
    this.products.push(newProduct);
  };

  deleteProduct = (productId) => {
    this.products = this.products.filter((product) => product.id !== productId);
  };
}
const productStore = new ProductStore();
export default productStore;