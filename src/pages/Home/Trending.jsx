import Section from "../../Components/Cards/Section";
import GameCard from "../../Components/Cards/GameCard";


import { trending } from "../../Data";
export default function Trending() {
  return (
   
        <Section
          smallTitle="Trending"
          title="Trending Games"
          btn="view all"
          onClick={() => alert("view more alert , remove me")}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {trending.map((game) => (
              <GameCard
                key={game.id}
                title={game.title}
                action={game.action}
                image={game.image}
                price={game.price}
                discount={game.discount}
              />
            ))}
          </div>
        </Section>

  );
}
