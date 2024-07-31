export default function BurgerBtn(props) {

  
const burgerBtn = useRef()
  const handelClick = () => {
    burgerBtn.current.classList.toggle('toggleOpen')
    props.onClick();
  };
  return (
    <button
    ref={burgerBtn}
      className="burgerBtn"
      onClick={() => handelClick()}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
}
import { useRef } from "react";
import "./BurgerBtn.css";
