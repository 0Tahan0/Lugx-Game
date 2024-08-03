import Button from "../../Components/UI/Button";
import ContactInput from "./ContactInput";

export default function ContactForm() {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12469.776493332698!2d-80.14036379941481!3d25.907788681148624!2m3!1f357.26927939317244!2f20.870722720054623!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x88d9add4b4ac788f%3A0xe77469d09480fcdb!2sSunny%20Isles%20Beach!5e1!3m2!1sen!2sth!4v1642869952544!5m2!1sen!2sth"
        width="100%"
        height="325px"
        frameBorder="0"
        style={{ border: "0", borderRadius: "23px" }}
        allowFullScreen=""
      ></iframe>
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-10">
          <ContactInput type="text" placeholder="your name..." />
          <ContactInput type="text" placeholder="your surname..." />
          <ContactInput type="email" placeholder="your e-mail..." />
          <ContactInput type="text" placeholder="subject..." />
        </div>
        <textarea
          name=""
          id=""
          className=" font-extralight tracking-wider   placeholder:text-sm placeholder:capitalize rounded-3xl bg-lu-light-gray border focus:ring-2 ring-black w-full   outline-none p-3  h-40  mt-4"
          placeholder="your message"
        ></textarea>
        <Button className="px-3 py-3 mt-4">Send Message Now</Button>
      </form>
    </div>
  );
}
