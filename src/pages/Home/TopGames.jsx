import { topGames } from "../../Data";
import TopGameCard from "../../Components/Cards/TopGameCard";
import Section from "../../Components/Cards/Section";

export default function TopGames() {
  return (
    <Section
      smallTitle="top games"
      title="most played"
      btn="view all"
      onClick={() => alert("view all 2, remove me")}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
        {topGames.map((game) => (
          <TopGameCard
            key={game.id}
            image={game.image}
            adventure={game.adventure}
            title={game.title}
          />
        ))}
      </div>
    </Section>
  );
}
