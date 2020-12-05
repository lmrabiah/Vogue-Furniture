import Modal from "react-modal";
import { useState } from "react";

//styles
import { CreateButtonStyled } from "../../styles";

//store
import productStore from "../../stores/productStore";

const ProductModel = ({ isOpen, closeModal, oldProduct, store }) => {
  const [product, setProduct] = useState(
    oldProduct ?? {
      name: "",
      price: 0,
      description: "",
      img: "",
      shop: "",
    }
  );

  const handleChange = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };
  const handleImg = (event) => {
    setProduct({ ...product, img: event.target.files[0] });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    closeModal();
    //if u want to acsses a funtion inside [] u have to trat it as a string
    //   productStore[oldProduct ? "updateProduct" : "creatProduct"](product);
    //   closeModal();

    if (oldProduct) productStore.updateProduct(product);
    else productStore.creatProduct(product, store);
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="product Modal"
    >
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <div className="col-6">
            <label>Name</label>
            <input
              value={product.name}
              name="name"
              onChange={handleChange}
              type="text"
              className="form-control"
            />
          </div>

          <div className="col-6">
            <label>Price</label>
            <input
              value={product.price}
              name="price"
              onChange={handleChange}
              type="number"
              min="1"
              className="form-control"
            />
          </div>
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            value={product.description}
            name="description"
            onChange={handleChange}
            type="text"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Image</label>
          <input
            name="img"
            onChange={handleImg}
            type="file"
            className="form-control"
          />
        </div>
        <div className="col-6">
          <label>shop</label>
          <input
            value={product.shop}
            name="shop"
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <CreateButtonStyled>
          {oldProduct ? "update" : "creat"}
        </CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default ProductModel;
