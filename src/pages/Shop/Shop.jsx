import Footer from "../../layouts/Footer/Footer";
import Heading from "../../layouts/Heading";
import { Landing, FilteredData } from "./shopComponents";
import Container from "../../Components/Container";
export default function Shop() {
  return (
    <div>
      <Heading>
        <Container className=" text-center">
          <Landing />
        </Container>
      </Heading>
      <Container className="mt-20">
        <FilteredData />
      </Container>
      <Footer />
    </div>
  );
}
