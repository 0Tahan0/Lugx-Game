import Container from "../../Components/Container";
import footerBg from "../../assets/images/footer-bg.jpg"

export default function Footer(props) {
  return (
    <div
      className="md:rounded-t-4xl rounded-t-3xl bg-cover bg-center pb-24 pt-5"
      style={{ backgroundImage: `url(${footerBg})` }}
    >
      <Container>
        <p className="text-white lg:text-lg md:text-md text-sm text-wrap text-center  ">
          Copyright © 2048 LUGX Gaming Company. All rights reserved. Design:
          TemplateMo
        </p>
      </Container>
    </div>
  );
}
