import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { observer } from "mobx-react";

//styles
import { DetailWrapper } from "../styles";
//store
import storeStore from "../stores/storeStore";
//component
import AllProduct from "./AllProducts";

const DetailStore = () => {
  const storeSlug = useParams().storeSlug;

  const store = storeStore.stores.find((_store) => _store.slug === storeSlug);

  if (!store) return <Redirect to="/stores" />;
  console.log(store);
  return (
    <DetailWrapper>
      <h1>{store.name}</h1>
      <img src={store.img} alt={store.name} />
      {/* <p>{store.description}</p> */}
      <AllProduct />
    </DetailWrapper>
  );
};

export default observer(DetailStore);
