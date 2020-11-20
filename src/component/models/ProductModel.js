import Modal from "react-modal";
import { useState } from "react";

//styles
import { CreateButtonStyled } from "../../styles";

//store
import productStore from "../../stores/productStore";

const ProductModel = ({ isOpen, closeModal }) => {
  const [product, setProduct] = useState({
    name: "",
    price: 0,
    description: "",
    image: "",
  });

  const handleChange = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    productStore.creatProduct(product);
    closeModal();
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
    >
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <div className="col-6">
            <label>Name</label>
            <input
              name="name"
              onChange={handleChange}
              type="text"
              className="form-control"
            />
          </div>
          <div className="col-6">
            <label>Price</label>
            <input
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
            onChange={handleChange}
            type="text"
            className="form-control"
          />
        </div>
        <div className="col-6">
          <label>shop</label>
          <input name="shop" onChange={handleChange} className="form-control" />
        </div>
        <CreateButtonStyled>creat</CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default ProductModel;
