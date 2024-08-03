import Section from "../../Components/Section";
import Card from "../../Components/UI/Card";

export default function ContactInfo() {
  const info = [
    {
      title: "address",
      text: "Sunny Isles Beach, FL 33160, United States",
    },
    {
      title: "Phone",
      text: "+123 456 7890",
    },
    {
      title: "Email",
      text: "lugx@contact.com",
    },
  ];
  return (
    <Card>
      <Section smallTitle="contact us" title="say hello!">
        <p className="text-sm md:text-base text-lu-gray mt-5">
          LUGX Gaming Template is based on the latest Bootstrap 5 CSS framework.
          This template is provided by TemplateMo and it is suitable for your
          gaming shop ecommerce websites. Feel free to use this for any purpose.
          Thank you.
        </p>
        <div className="grid gap-5 mt-5">
          {info.map((i, ind) => (
            <div key={ind} >
              <p className="capitalize text-base md:text-lg">{i.title}</p>{" "}
              <p className="text-gray-400 mt-2 text-base md:text-lg">
                {i.text}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </Card>
  );
}
