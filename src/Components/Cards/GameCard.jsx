import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function GameCard(props) {
  const price = {
    discount:
      parseInt(props.price) -
      Math.floor((parseInt(props.price) * parseInt(props.discount)) / 100),
    oldPrice: parseInt(props.price),

    currency: props.price.match(/[^0-9]/gi).join(""),
  };
  const hasDiscount = () => {
    return price.discount != price.oldPrice;
  };

  return (
    <Link
      to="/product details"
      className="rounded-3xl bg-gray-200 relative shadow-md group select-none h-fit "
    >
      <div className="lg:max-h-56 overflow-hidden grid place-items-center rounded-3xl">
        <img
          src={props.image}
          alt={props.title}
          className="w-full object-cover  h-full "
        />
      </div>
      <div className="absolute top-0 right-0  bg-lu-blue font-medium text-white rounded-md p-1 w-16 text-center -translate-x-1/3 translate-y-1/3">
        <p className={`${hasDiscount() ? "line-through text-sm" : ""}`}>
          {price.currency + price.oldPrice}
        </p>
        {hasDiscount() ? <p>{price.currency + price.discount}</p> : ""}
      </div>
      <div className="flex items-center justify-between md:p-5 p-4  ">
        <div>
          <p className="text-sm text-lu-gray">{props.action}</p>
          <p className="font-bold tracking-wide mt-1 group-hover:text-lu-blue transition-all duration-300">
            {props.title}
          </p>
        </div>
        <span className="transition-all duration-300  text-white rounded-full grid place-items-center bg-lu-red w-12  h-12 group-hover:bg-lu-blue">
          <FontAwesomeIcon icon="fa-solid fa-shopping-bag " size="lg" />
        </span>
      </div>
    </Link>
  );
}
