import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { observer } from "mobx-react";

//styles
import { DetailWrapper } from "../styles";
//store
import productStore from "../stores/productStore";
//component
import DeleteButton from "./buttons/DeleteButton";

const DetailProduct = () => {
  const productSlug = useParams().productSlug;

  const product = productStore.products.find(
    (_product) => _product.slug === productSlug
  );

  if (!product) return <Redirect to="/products" />;

  return (
    <DetailWrapper>
      <h1>{product.name}</h1>
      <img src={product.img} alt={product.name} />
      <p>shop: {product.shop}</p>
      <p>description: {product.description}</p>
      <p>{product.price} KD </p>

      <DeleteButton productId={product.id}></DeleteButton>
    </DetailWrapper>
  );
};

export default observer(DetailProduct);
