
export default function Container(props) {
  return (
    <div className={`${props.className} container mx-auto px-4 md:px-10 lg:px-16`}>
      {props.children}
    </div>
  );
}
