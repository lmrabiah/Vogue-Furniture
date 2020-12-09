import { makeObservable, observable, action } from "mobx";
import slugify from "react-slugify";
import axios from "axios";

class ProductStore {
  products = [];
  loading = true;

  constructor() {
    makeObservable(this, {
      products: observable,
      loading: observable,
      creatProduct: action,
      deleteProduct: action,
      updateProduct: action,
      fetchProducts: action,
    });
  }

  getProductId = (productId) =>
    this.products.find((product) => product.id === productId);

  fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:8000/products");
      this.products = response.data;
      this.loading = false;
    } catch (error) {
      console.error("ProductStore -> fetchProducts -> error", error);
    }
  };

  updateProduct = async (updatedProduct) => {
    try {
      const formData = new FormData();

      for (const key in updatedProduct)
        formData.append(key, updatedProduct[key]);
      console.log(updatedProduct.id);
      await axios.put(
        `http://localhost:8000/products/${updatedProduct.id}`,
        formData
      );

      const product = this.products.find(
        (product) => product.id === updatedProduct.id
      );
      for (const key in updatedProduct) product[key] = updatedProduct[key];
      product.img = URL.createObjectURL(updatedProduct.img);
    } catch (error) {
      console.error(
        "🚀 ~ file: productStore.js ~ line 35 ~ ProductStore ~ updateProduct ~ error",
        error
      );
    }
  };

  creatProduct = async (newProduct, store) => {
    // newProduct.slug = slugify(newProduct.name);
    // newProduct.id = this.products[this.products.length - 1].id + 1;
    // this.products.push(newProduct);

    try {
      const formData = new FormData();

      for (const key in newProduct) formData.append(key, newProduct[key]);
      const response = await axios.post(
        `http://localhost:8000/stores/${store.id}/products`,
        formData
      );
      this.products.push(response.data);
      store.products.push({ id: response.data.id });
    } catch (error) {
      console.error(console.error);
    }
  };

  deleteProduct = async (productId, store) => {
    try {
      await axios.delete(`http://localhost:8000/products/${productId}`);

      const newProducts = store.products.filter(
        (product) => product.id !== productId
      );
      store.products = newProducts;
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
