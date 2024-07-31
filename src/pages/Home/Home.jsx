import Heading from "../../layouts/Heading";
import Landing from "./Landing";
import Feauters from "./Feauters";
import Trending from "./Trending";
import TopGames from "./TopGames";
import { Card } from "../../Components/UI/all";
import TopCategories from "./TopCategories";
import LastPart from "./LastPart";
import Footer from "../../layouts/Footer/Footer";
// import Section from "../../Components/Cards/Section";
export default function Home() {
  return (
    <div>
      <Heading>
        <div className="container mx-auto md:px-10  h-full mt-20 pb-20">
          <Landing />
        </div>
      </Heading>
      <div className="container mx-auto md:px-10 -mt-20  ">
        <Feauters />
      </div>
      <Card className="bg-transparent shadow-none">
        <div className="container mx-auto md:px-10">
          <Trending />
        </div>
      </Card>
      <Card className="rounded-4xl ">
        <div className="container mx-auto md:px-10">
          <TopGames />
        </div>
      </Card>
      <Card className="bg-transparent shadow-none">
        <div className="container mx-auto md:px-10 ">
          <TopCategories />
        </div>
      </Card>
      {/* <Card className="bg-transparent shadow-none"> */}
      <Card className="bg-transparent shadow-none">
        <div className="container mx-auto md:px-10">
          <LastPart />
        </div>
      </Card>
      <div className="mt-20">
        <Footer />
      </div>
      {/* </Card> */}
    </div>
  );
}
