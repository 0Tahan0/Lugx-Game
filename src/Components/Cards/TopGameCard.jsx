import { Link } from "react-router-dom";
import Button from "../UI/Button";

export default function TopGameCard(props) {
  return (
    <Link to="/product details" className="bg-white rounded-3xl select-none group">
      <img
        src={props.image}
        alt={props.name}
        className="w-full rounded-3xl object-cover"
      />
      <div className="text-center">
        <p className="text-sm text-lu-gray mt-3">{props.adventure}</p>
        <p className="my-2 text-dark font-bold group-hover:text-lu-blue duration-300 transition-all">{props.title}</p>
      </div>
      <Button className="uppercase font-bold block mx-auto  translate-y-1/2 group-hover:bg-lu-blue">explore</Button>
    </Link>
  );
}
