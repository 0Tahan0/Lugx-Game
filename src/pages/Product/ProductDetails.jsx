import Container from "../../Components/Container";
import Footer from "../../layouts/Footer/Footer";
import Heading from "../../layouts/Heading";
import Description from "./Description";
import GameSection from "./GameSection";
import Landing from "./Landing";
import singleGame from "../../assets/images/single-game.jpg";

import Section from "../../Components/Section";
import RelatedGames from "./RelatedGames";

export default function ProductDetails() {
  const game = {
    id: " COD MMII",
    name: "Call of Duty®: Modern Warfare® II",
    image: singleGame,
    text: ` LUGX Gaming Template is based on the latest Bootstrap 5 CSS
            framework. This template is provided by TemplateMo and it is
            suitable for your gaming shop ecommerce websites. Feel free to use
            this for any purpose. Thank you.`,
    price: {
      orginal: "28$",
      discount: "22%",
    },
    genre: ["Action", "Team", "Single"],
    tags: ["War", "Battle", "Royal"],
    descriptions: [
      `You can search for more templates on Google Search using keywords such as "templatemo digital marketing", "templatemo one-page", "templatemo gallery", etc. Please tell your friends about our website. If you need a variety of HTML templates, you may visit Tooplate and Too CSS websites.`,
      `Coloring book air plant shabby chic, crucifix normcore raclette cred swag artisan activated charcoal. PBR&B fanny pack pok pok gentrify truffaut kitsch helvetica jean shorts edison bulb poutine next level humblebrag la croix adaptogen. Hashtag poke literally locavore, beard marfa kogi bruh artisan succulents seitan tonx waistcoat chambray taxidermy. Same cred meggings 3 wolf moon lomo irony cray hell of bitters asymmetrical gluten-free art party raw denim chillwave tousled try-hard succulents street art.`,
    ],
    reviews: [
      `Coloring book air plant shabby chic, crucifix normcore raclette cred swag artisan activated charcoal. PBR&B fanny pack pok pok gentrify truffaut kitsch helvetica jean shorts edison bulb poutine next level humblebrag la croix adaptogen.`,
      `Hashtag poke literally locavore, beard marfa kogi bruh artisan succulents seitan tonx waistcoat chambray taxidermy. Same cred meggings 3 wolf moon lomo irony cray hell of bitters asymmetrical gluten-free art party raw denim chillwave tousled try-hard succulents street art.`,
    ],
  };
  return (
    <div>
      <Heading>
        <Container>
          <Landing />
        </Container>
      </Heading>
      <Container className="mt-20">
        <GameSection game={game} />
      </Container>
      <Container className="mt-20">
        <Description descriptions={game.descriptions} reviews={game.reviews} />
      </Container>
      <Container className="mt-20">
        <RelatedGames />

      </Container>
      <Footer />
    </div>
  );
}
