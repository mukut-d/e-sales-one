import { productImages } from "../../constants/productImages";
import "./Card.css";

const Card = ({ name, price, icon, onClick, id }) => {
  return (
    <div
      onClick={() => onClick(id)}
      className="flex flex-col rounded-3xl  m-6 overflow-hidden p-card"
    >
      <img src={icon} className="w-[300px] h-[280px] object-cover" />
      <div className="p-4">
        <p>{name}</p>
        <p>
          <span className="text-amber-600">$</span> {price}
        </p>
      </div>
    </div>
  );
};

export default Card;
