
export default function Card(props) {
  return (
    <div className={`rounded-3xl  shadow-md bg-lu-light-gray px-5 py-32 ${props.className}`}>
        {props.children}
    </div>
  )
}
