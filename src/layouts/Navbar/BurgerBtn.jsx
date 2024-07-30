import { useEffect, useState } from "react";

export default function BurgerBtn(props) {
  const [navBtnClasses, setNavBtnClasses] = useState({
    classes: `transition-all duration-300 bg-white  rounded-full w-full h-0.5 absolute  left-0 -translate-y-1/2 -translate-y-1/2`,
    topLine: "top-0 w-5 ",
    midLine: "top-1/2  ",
    botLine: "top-full w-5",
  });
  let open = props.open;

  useEffect(() => {
    if (open) {
      setNavBtnClasses({
        ...navBtnClasses,
        topLine: "rotate-45 top-1/2 w-full",
        midLine: "top-1/2 opacity-0",
        botLine: "-rotate-45 top-1/2 w-full",
      });
    } else {
      setNavBtnClasses({
        ...navBtnClasses,
        topLine: "top-0 w-5",
        midLine: "top-1/2 ",
        botLine: "top-full w-5",
      });
    }
  }, [open]);

  return (
    <button
      className="min-w-7 min-h-5  relative flex flex-col "
      //   onClick={() => setOpenNav((prev) => !prev)}
      onClick={props.onClick}
    >
      <div className={navBtnClasses.classes + " " + navBtnClasses.topLine}>
        {" "}
      </div>
      <div className={navBtnClasses.classes + " " + navBtnClasses.midLine}>
        {" "}
      </div>
      <div className={navBtnClasses.classes + " " + navBtnClasses.botLine}>
        {" "}
      </div>
    </button>
  );
}
