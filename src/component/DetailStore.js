import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { observer } from "mobx-react";

//styles
import { DetailWrapper } from "../styles";
//store
import storeStore from "../stores/storeStore";
//component
import AllProducts from "./AllProducts";
import PlusProductBtn from "./buttons/PlusProductBtn";
import productStore from "../stores/productStore";
import authStore from "../stores/authStore";

const DetailStore = () => {
  const storeSlug = useParams().storeSlug;

  const store = storeStore.stores.find((_store) => _store.slug === storeSlug);

  if (!store) return <Redirect to="/stores" />;
  //it we have just a product Id i want to trans to all product

  const productFromProductStore = store.products.map((product) =>
    productStore.getProductId(product.id)
  );
  console.log(store);
  return (
    <>
      <DetailWrapper>
        <p></p>
        <h1>{store.name}</h1>
        <img src={store.img} alt={store.name} />
      </DetailWrapper>

      <p></p>

      {authStore.user && <PlusProductBtn store={store} />}
      <AllProducts products={productFromProductStore} store={store} />
    </>
  );
};

export default observer(DetailStore);
