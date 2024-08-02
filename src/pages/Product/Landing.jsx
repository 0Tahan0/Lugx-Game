import { Link } from "react-router-dom";
import HeadingTitle from "../../layouts/HeadingTitle";


export default function Landing() {
  return (
    <div className="text-center">
      <HeadingTitle>Modern Warfare® II</HeadingTitle>
      <div className="text-white space-x-2 flex items-center justify-center mt-7">
        <Link to="/" className="md:text-lg">
          Home &gt;
        </Link>
        <Link to="/shop" className="md:text-lg">
          Shop &gt;
        </Link>
        <span className="md:text-xl">Assasin Creed</span>
      </div>
    </div>
  );
}
