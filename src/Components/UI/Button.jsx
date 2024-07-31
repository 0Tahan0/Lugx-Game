
export default function Button(props) {
  return (
    <button
      style={props.style}
      onClick={props.onClick}
      className={` bg-lu-red hover:bg-lu-blue   md:text-sm text-xs  outline-none tracking-wind     rounded-full   lg:px-3 lg:py-2.5 py-2 px-2  w-fit  lg:min-w-20  transition-all duration-300 text-white ${props.className}`}
    >
      {props.children}
    </button>
  );
}
