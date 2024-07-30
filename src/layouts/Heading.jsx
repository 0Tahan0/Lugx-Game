import headingBg from "../assets/images/banner-bg.jpg";
import Navbar from "./Navbar/Navbar";
export default function Heading(props) {
  return (
    <div
      className="bg-cover  bg-center rounded-b-4xl grid "
      style={{
        backgroundImage: `url(${headingBg})`,

        minHeight: "70vh",
      }}
    >
      <Navbar />

      <div className="bg1-purple-500 h-full">{props.children}</div>
    </div>
  );
}
