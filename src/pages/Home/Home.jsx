import Heading from "../../layouts/Heading";
import { Card } from "../../Components/UI/all";
import Footer from "../../layouts/Footer/Footer";
import {
  Feauters,
  Landing,
  LastPart,
  TopCategories,
  TopGames,
  Trending,
} from "./homeComponents";
import Container from "../../Components/Container";
export default function Home() {
  return (
    <div>
      <Heading>
        <Container className="h-full mt-20 pb-20">
          <Landing />
        </Container>
      </Heading>
      <Container className=" -mt-20  ">
        <Feauters />
      </Container>
      <div className="mt-20">
        <Container>
          <Trending />
        </Container>
      </div>
      <Card className="md:rounded-4xl ">
        <Container>
          <TopGames />
        </Container>
      </Card>
      <div className="mt-20">
        <Container>
          <TopCategories />
        </Container>
      </div>
      <div className="mt-20">
        <Container>
          <LastPart />
        </Container>
      </div>

      <Footer />
    </div>
  );
}
