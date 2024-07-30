import { Link } from "react-router-dom";

export default function TopCategorieCard(props) {
  return (
    <Link to="/product details" className="rounded-3xl bg-lu-blue select-none shadow-md">
        <p className="capitalize text-white text-center my-3">{props.action}</p>
        <img src={props.image} alt={props.action} className="w-full rounded-3xl " />
    </Link>
  )
}
