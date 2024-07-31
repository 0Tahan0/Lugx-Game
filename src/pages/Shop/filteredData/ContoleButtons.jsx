export default function ContoleButtons(props) {
  const largeLength = () => Number(props.count) > 3;
  
  return (
    <div className="flex items-center justify-center space-x-2 mt-10 bg-red-400">
      {[...Array(Number(props.count))].map((x, c) => {
        
        <button
          className="rounded-full w-12 h-12 shadow-md grid place-items-center font-bold hover:bg-lu-blue hover:text-white transition-all duration-300"
          key={c}
          onClick
        >
          {c} 
        </button>;
      })}
    </div>
  );
}
