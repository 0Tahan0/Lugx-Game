/* eslint-disable react/prop-types */
const FeautersCard = (props) => {
  return (
    <>
      <a
        href="#"
        style={{boxShadow:'0 0 10px 1px #0002'}}
        className="rounded-3xl  bg-white grid place-items-center  px-4 py-5 gap-3 group transition-all "
      >
        <div className="rounded-full bg-lu-blue h-24 w-24 grid place-items-center transition-all duration-300 group-hover:bg-lu-red">
          <img src={props.image} alt="image" className="" />
        </div>
        <p className="text-lg font-bold uppercase">{props.title}</p>
      </a>
    </>
  );
};

export default FeautersCard;
