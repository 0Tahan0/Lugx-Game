export default function HeadingTitle(props) {
  return (
    <p className="text-5xl uppercase text-white font-bold tracking-wide">
      {props.children}
    </p>
  );
}
