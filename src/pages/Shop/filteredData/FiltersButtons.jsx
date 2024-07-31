import { useState } from "react";

export default function FiltersButtons(props) {
  const [selected, setSelected] = useState(props.filters[0].value);

  const handelClick = (value) => {
    props.filtering(value);
    setSelected(value);
  };
  return (
    <div className="flex space-x-3 justify-center">
      {props.filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => handelClick(filter.value)}
          className={`outline-none  px-3 py-2.5 rounded-full uppercase font-bold  transition-all duration-300 ${
            selected == filter.value
              ? "text-white bg-lu-red"
              : "bg-lu-light-gray hover:text-lu-red"
          }`}
        >
          {filter.text}
        </button>
      ))}
    </div>
  );
}
