import Button from "./UI/Button";

export default function Section(props) {
  return (
    <div>
      <div
        className={`flex  items-end ${
          props.centerTitles ? "text-center justify-center" : "justify-between"
        }`}
      >
        <div>
          <p className="text-lu-red  uppercase font-bold text-md">
            {props.smallTitle}
          </p>
          <p className="text-black text-4xl capitalize font-bold mt-4">
            {props.title}
          </p>
        </div>
        {props.btn ? (
          <Button
            className=" uppercase font-bold tracking-widest md:text-md hidden lg:block "
            onClick={props.onClick}
          >
            {props.btn}
          </Button>
        ) : (
          ""
        )}
      </div>

      <div className="mt-16">{props.children}</div>
    </div>
  );
}
