
export default function Button(props) {
  return (
    <button
    style={props.style}
      onClick={props.onClick}
      className={` bg-lu-red hover:bg-lu-blue   md:text-sm outline-none tracking-wind text-xs    rounded-full   lg:px-3 py-2.5 px-3 l:px-4 w-fit  lg:min-w-20  transition-all duration-300 text-white ${props.className}`}
    >
      {props.children}
    </button>
  );
}
