import footerBg from "../../assets/images/footer-bg.jpg"

export default function Footer(props) {
  return (
    <div
      className="rounded-t-4xl bg-cover bg-center pb-24 pt-5"
      style={{ backgroundImage: `url(${footerBg})` }}
    >
      <div className="container mx-auto lg:px-10">
        <p className="text-white text-lg text-center  ">
          Copyright © 2048 LUGX Gaming Company. All rights reserved. Design:
          TemplateMo
        </p>
      </div>
    </div>
  );
}
