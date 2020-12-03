import { observer } from "mobx-react";
import { useState } from "react";

//style
import { TotalPicStyle } from "../styles";
// store
import storeStore from "../stores/storeStore";

//component
import OneItemStore from "./OneItemStore";
import SearchBar from "./SearchBar";
import PlusProductBtn from "./buttons/PlusProductBtn";

const AllStores = (props) => {
  const [query, setQuery] = useState("");

  const filtterStores = storeStore.stores.filter((store) =>
    store.name.toLowerCase().includes(query.toLowerCase())
  );

  const storeList = filtterStores.map((store) => (
    <OneItemStore store={store} key={store.id} />
  ));
  return (
    <>
      <SearchBar setQuery={setQuery} />
      <PlusProductBtn />
      <TotalPicStyle>{storeList}</TotalPicStyle>
    </>
  );
};

export default observer(AllStores);
