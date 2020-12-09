import { Link } from "react-router-dom";
//Buttons
import DeleteButton from "./buttons/DeleteButton";
import UpdateButton from "./buttons/UpdateButton";
//styles
import { ItemImg, NameOfStore } from "../styles";

const OneItemStore = ({ store }) => {
  return (
    <div>
      <Link to={`/stores/${store.slug}`}>
        <ItemImg src={store.img} alt={store.name} />
      </Link>

      <NameOfStore>{store.name}</NameOfStore>
    </div>
  );
};

export default OneItemStore;
