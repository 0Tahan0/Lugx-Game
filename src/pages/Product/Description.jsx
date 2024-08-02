import { useState } from "react";
import Card from "../../Components/UI/Card";

export default function Description(props) {
  const [currentCompo, setCompo] = useState("desc");
  const descCompo = props.descriptions.map((desc, ind) => (
    <p
      className="mt-10 text-lu-gray font-extralight text-sm md:text-base md:leading-9 leading-9 "
      key={ind}
    >
      {desc}
    </p>
  ));
  const revCompo = props.reviews.map((desc, ind) => (
    <p
      className="mt-10 text-lu-gray font-extralight text-sm md:text-base md:leading-9 leading-9 "
      key={ind}
    >
      {desc}
    </p>
  ));

  return (
    <Card className="p-5">
      <div className="flex space-x-5 font-bold tracking-wide md:text-xl ">
        <button
          onClick={() => setCompo("desc")}
          className={currentCompo == "desc" ? "text-lu-blue" : ""}
        >
          Description
        </button>
        <span className="border-l border-gray-400 select-none"></span>
        <button
          onClick={() => setCompo("rev")}
          className={currentCompo == "rev" ? "text-lu-blue" : ""}
        >
          Reviews (3)
        </button>
      </div>
      <div>{currentCompo == "desc" ? descCompo : revCompo}</div>
    </Card>
  );
}
