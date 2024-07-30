import FeauterCard from "../../Components/Cards/FeauterCard";
import { feauters } from "../../Data/index";

export default function Feauters() {
  return (
    
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 ">
        {feauters.map((data, ind) => (
          <FeauterCard image={data.image} title={data.title} key={ind} />
        ))}
      </div>
    
  );
}
