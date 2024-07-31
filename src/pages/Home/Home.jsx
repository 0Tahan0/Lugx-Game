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
      <Card className="bg-transparent shadow-none">
        <Container>
          <Trending />
        </Container>
      </Card>
      <Card className="md:rounded-4xl ">
        <Container>
          <TopGames />
        </Container>
      </Card>
      <Card className="bg-transparent shadow-none">
        <Container>
          <TopCategories />
        </Container>
      </Card>
      <div className="">
        <Container>
          <LastPart />
        </Container>
      </div>
      <Footer />
    </div>
  );
}
