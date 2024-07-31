
export default function Container(props) {
  return (
    <div className={`${props.className} container mx-auto md:px-10`}>
      {props.children}
    </div>
  );
}
