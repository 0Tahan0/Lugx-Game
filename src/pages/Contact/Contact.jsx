import Container from "../../Components/Container";
import Footer from "../../layouts/Footer/Footer";
import Heading from "../../layouts/Heading";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import Landing from "./Landing";

export default function Contact() {
  return (
    <div>
      <Heading>
        <Landing />
      </Heading>
      <Container className="mt-10 lg:flex grid gap-14 items-center">
        <div className="lg:w-1/2">
          <ContactInfo />
        </div>
        <div className="lg:w-1/2">
          <ContactForm />
        </div>
      </Container>
      <Footer />
    </div>
  );
}
