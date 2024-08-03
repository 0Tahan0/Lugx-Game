import { Link } from "react-router-dom";
import Container from "../../Components/Container";
import HeadingTitle from "../../layouts/HeadingTitle";

export default function Landing() {
  return (
    <Container className="grid place-items-center">
      <HeadingTitle>Contact Us</HeadingTitle>
      <div className="text-white space-x-2 flex items-center justify-center mt-7  ">
        <Link to="/" className="md:text-lg ">
          Home &gt;
        </Link>{" "}
        <span className="capitalize md:text-lg">contact us</span>
      </div>
    </Container>
  );
}
