import { categories } from "../../Data";
import TopCategorieCard from "../../Components/Cards/TopCategorieCard";
// { id: 1, image: categories_1, action: "Action" },
import Section from "../../Components/Cards/Section";

export default function TopCategories() {
  return (
    <Section smallTitle="Categories" title="Top Categories" centerTitles>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {categories.map((game) => (
          <TopCategorieCard
            key={game.id}
            image={game.image}
            action={game.action}
          />
        ))}
      </div>
    </Section>
  );
}
