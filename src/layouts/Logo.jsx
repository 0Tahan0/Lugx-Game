import logo from "../assets/images/logo.png";

export default function Logo() {
  return (
    <div className="h-full transition-all duration-300">
      <img src={logo} alt="logo" className="w-full h-full object-cover"/>
    </div>
  );
}
