import React from "react";
import { DetailWrapper } from "../styles";
import { Redirect, useParams } from "react-router-dom";
import AllProducts from "./AllProducts";

import DeleteButton from "./buttons/DeleteButton";

const DetailProduct = (props) => {
  const productSlug = useParams().productSlug;

  const product = props.products.find(
    (_product) => _product.slug === productSlug
  );

  if (!product) return <Redirect to="/products" />;

  return (
    <DetailWrapper>
      <h1>{product.name}</h1>
      <img src={product.img} alt={product.name} />
      <p>{product.description}</p>
      <p>{product.price} </p>
      <DeleteButton
        productId={product.id}
        deleteProduct={props.deleteProduct}
      ></DeleteButton>
    </DetailWrapper>
  );
};

export default DetailProduct;
