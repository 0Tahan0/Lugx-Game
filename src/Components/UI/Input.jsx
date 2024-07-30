export default function Input(props) {
  const inputClass = `rounded-full py-2 px-4  outline-none text-lu-gray placeholder:text-lu-gray text-sm`;
  return (
    <input
      id={props.id}
      value={props.value}
      className={`${inputClass} ${props.className}`}
      placeholder={props.placeholder}
      name={props.name}
      onChange={props.onChange}
      onInput={props.onInput}
      type={props.type}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
    />
  );
}
