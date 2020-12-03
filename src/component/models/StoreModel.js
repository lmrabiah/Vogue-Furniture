import Modal from "react-modal";
import { useState } from "react";

//styles
import { CreateButtonStyled } from "../../styles";

//store
import storeStore from "../../stores/storeStore";

const ProductModel = ({ isOpen, closeModal }) => {
  const [store, setStore] = useState({
    name: "",
    img: "",
  });

  const handleChange = (event) => {
    setStore({ ...store, [event.target.name]: event.target.value });
  };
  const handleImg = (event) => {
    setStore({ ...store, img: event.target.files[0] });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // if (oldProduct)
    // productStore.updateProduct(product)
    //  else
    //   productStore.creatProduct(product);
    //if u want to acsses a funtion inside [] u have to trat it as a string
    // productStore[oldProduct ? "updateProduct" : "creatProduct"](product);
    closeModal();
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Store Modal"
    >
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <div className="col-6">
            <label>Name</label>
            <input
              value={store.name}
              name="name"
              onChange={handleChange}
              type="text"
              className="form-control"
            />
          </div>
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
        <CreateButtonStyled>{"update"}</CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default ProductModel;
