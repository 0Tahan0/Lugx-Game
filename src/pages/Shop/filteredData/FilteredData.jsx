import GameCard from "../../../Components/Cards/GameCard";

import { games } from "../../../Data";
import ContoleButtons from "./ContoleButtons";
import FiltersButtons from "./FiltersButtons";
import { useState } from "react";
export default function FilteredData() {
  const filters = [
    { text: "Show All", value: "all" },
    { text: "Adventure ", value: "adventure" },
    { text: "Strategy ", value: "strategy" },
    { text: "Racing", value: "racing" },
  ];
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [sectionNumber, setSectionNumber] = useState(3);
  return (
    <div className="grid gap-20">
      <FiltersButtons
        filters={filters}
        filtering={(value) => setSelectedFilter(value)}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {games
          .filter((f) => {
            if (selectedFilter == "all") return f;
            else if (f.type.find((type) => type == selectedFilter)) return f;
          })
          .map((game) => (
            <GameCard
              key={game.id}
              image={game.image}
              action={game.action}
              title={game.title}
              price={game.price}
              discount={game.discount}
            />
          ))}
      </div>
      <ContoleButtons
        count="10"
        show="3"
        currentNumber={sectionNumber}
        onClick={(value) => setSectionNumber(value)}
      />
    </div>
  );
}
