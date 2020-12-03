import { makeObservable, observable, action } from "mobx";
import slugify from "react-slugify";
import axios from "axios";

class StoreStore {
  stores = [];
  loading = true;

  constructor() {
    makeObservable(this, {
      stores: observable,
      loading: observable,
      creatStore: action,
      fetchStores: action,
    });
  }

  fetchStores = async () => {
    try {
      const response = await axios.get("http://localhost:8000/stores");
      this.stores = response.data;
      this.loading = false;
    } catch (error) {
      console.error("StoreStore -> fetchStores -> error", error);
    }
  };

  creatStore = async (newStore) => {
    try {
      const formData = new FormData();

      for (const key in newStore) formData.append(key, newStore[key]);
      const response = await axios.post(
        "http://localhost:8000/stores",
        formData
      );
      this.stores.push(response.data);
    } catch (error) {
      console.error(console.error);
    }
  };
}
const storeStore = new StoreStore();
storeStore.fetchStores();
export default storeStore;
