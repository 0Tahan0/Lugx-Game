import { NavLink } from "react-router-dom";

export default function Tap(props) {
  const mainClass = `px-3 py-2.5 text-sm font-extralight lg:text-base text-gray-200 capitalize rounded-full hover:bg-white/10 transition-all duration-300`;
  const activateTap = (isActive) => {
    return `${mainClass} ${isActive ? "bg-white/10" : ""}`;
  };
  return (
    <NavLink to={props.to} className={({ isActive }) => activateTap(isActive)}>
      
      {props.children}
    </NavLink>
  );
}
