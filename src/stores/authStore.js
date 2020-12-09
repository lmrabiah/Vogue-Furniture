import { makeAutoObservable } from "mobx";
import instance from "./instance";
import decode from "jwt-decode";
class AuthStore {
  constructor() {
    makeAutoObservable(this);
  }
  //if user have value mean it's liged in else he is not
  user = null;
  signup = async (userData) => {
    try {
      await instance.post("/signup", userData);
    } catch (error) {
      console.log("AuthStore -> signup -> error", error);
    }
  };

  signin = async (userData) => {
    try {
      const res = await instance.post("/signin", userData);
      this.user = decode(res.data.token);
    } catch (error) {
      this.user = decode(res.data.token);
      console.log("AuthStore -> signin -> error", error);
    }
  };
}

const authStore = new AuthStore();

export default authStore;
