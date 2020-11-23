import { makeObservable, observable, action } from "mobx";
import slugify from "react-slugify";
import axios from "axios";

class ProductStore {
  products = [];

  constructor() {
    makeObservable(this, {
      products: observable,
      creatProduct: action,
      deleteProduct: action,
      updateProduct: action,
      fetchProducts: action,
    });
  }

  fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:8000/products");
      this.products = response.data;
    } catch (error) {
      console.error("ProductStore -> fetchProducts -> error", error);
    }
  };

  updateProduct = (updatedProduct) => {
    const product = this.products.find(
      (product) => product.id === updatedProduct.id
    );
    for (const key in product) product[key] = updatedProduct[key];

    product.slug = slugify(product.name);
    //product.name = updatedProduct.name
    //product.description = updatedProduct.description
    //product.shop = updatedProduct.shop
    //product.img = updatedProduct.img
  };

  creatProduct = async (newProduct) => {
    // newProduct.slug = slugify(newProduct.name);
    // newProduct.id = this.products[this.products.length - 1].id + 1;
    // this.products.push(newProduct);

    try {
      const response = await axios.post(
        "http://localhost:8000/products",
        newProduct
      );
      this.products.push(response.data);
    } catch (error) {
      console.error(console.error);
    }
  };

  deleteProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:8000/products/${productId}`);
      this.products = this.products.filter(
        (product) => product.id !== productId
      );
    } catch (error) {
      console.error(
        "🚀 ~ file: productStore.js ~ line 53 ~ ProductStore ~ deleteProduct ~ error",
        error
      );
    }
  };
}
const productStore = new ProductStore();
productStore.fetchProducts();
export default productStore;
