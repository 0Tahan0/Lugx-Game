

export default function ContactInput(props) {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      onInput={props.onInput}
      className={`${props.className} font-extralight tracking-wider   placeholder:capitalize rounded-full bg-lu-light-gray border focus:ring-2 ring-black w-full   outline-none p-3    `}
      
    />
  );
}
