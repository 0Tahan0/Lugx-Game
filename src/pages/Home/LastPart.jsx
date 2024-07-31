import { useState } from "react";
import { Button, Input } from "../../Components/UI/all";
import cta from "../../assets/images/cta-bg.jpg";
export default function LastPart() {
  const [focusedInput, setFocusedInput] = useState();
  return (
    <div
      className="lg:flex-row flex-col flex  lg:-space-x-20, gap-5    justify-between relative select-none"
      style={{ minHeight: "600px" }}
    >
      <div className="bg-lu-light-gray p-8 md:p-16 rounded-3xl h-fit lg:w-2/5 lg:self-center">
        <p className="text-lu-red uppercase font-bold text-sm">our shop</p>
        <p className="md:text-4xl text-lg text-lu-dark-blue mt-4 font-bold">
          Go Pre-Order Buy & Get Best{" "}
          <span className="text-lu-blue font-bold md:text-4xl text-lg">
            Prices
          </span>{" "}
          For You!
        </p>
        <p className="text-sm font-medium my-5">
          Lorem ipsum dolor consectetur adipiscing, sed do eiusmod tempor
          incididunt.
        </p>
        <Button className="uppercase ">show now</Button>
      </div>
      {/* lg:w-3/4 h-full -mt-10 */}
      <div className=" absolute top-0 left-1/2 -translate-x-1/2   rounded-3xl   overflow-hidden shadow-md -z-10 hidden lg:block ">
        <img src={cta} alt="cta" className="object-cover h-full w-full" />
      </div>
      <div className="bg-lu-light-gray p-8 md:p-16 rounded-3xl h-fit  lg:w-2/5 lg:self-end">
        <p className="text-lu-red uppercase font-bold ">NEWSLETTER</p>
        <p className="md:text-4xl text-lg text-lu-dark-blue mt-4 font-bold">
          Get Up To $100 Off Just Buy
          <span className="text-lu-blue md:text-4xl text-lg font-bold">
            {" "}
            Subscribe
          </span>{" "}
          Newsletter!
        </p>
        <div
          className={`relative mt-5 md:h-12 h-10 rounded-full  ${focusedInput}`}
        >
          <Input
            onBlur={() => {
              setFocusedInput("ring-0");
            }}
            onFocus={() => {
              setFocusedInput("ring");
            }}
            type="email"
            placeholder="Your email..."
            className="h-full w-full"
          ></Input>
          <Button className="bg-lu-red uppercase absolute right-0 top-0 h-full w-1/2 sm:w-auto  hover:bg-lu-blue">
            Subscribe now
          </Button>
        </div>
      </div>
    </div>
  );
}
