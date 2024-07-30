import { Button, Input } from "../../Components/UI/all";
// import HeadingSmallTitle from "../layouts/HeadingSmallTitle";
import captionDec from "../../assets/images/caption-dec.png";
import bannerImage from "../../assets/images/banner-image.jpg";
import HeadingTitle from "../../layouts/HeadingTitle";
export default function Landing() {
  return (
    <div className="flex lg:flex-row flex-col justify-between gap-5 lg:gap-16 select-none mb-32">
      <div className="text-white lg:w-1/2 *:text-center  *:lg:text-left   ">
        <p className="uppercase font-medium text-lg tracking-widest ">
          welcome to lugx
        </p>
        <div className="mt-3">
          <HeadingTitle>best gaming site ever!</HeadingTitle>
          <img src={captionDec} alt="captionDec" className="mx-auto" />
        </div>
        <p className="mt-5 leading-7 text-sm">
          LUGX Gaming is free Bootstrap 5 HTML CSS website template for your
          gaming websites. You can download and use this layout for commercial
          purposes. Please tell your friends about TemplateMo.
        </p>
        <div className="relative mt-5 h-12 lg:w-10/12  ">
          <Input
            type="text"
            placeholder="Type Something"
            className="h-full w-full"
          ></Input>
          <Button className="bg-lu-red uppercase absolute right-0 top-0 h-full w-32 hover:bg-lu-blue">
            search now
          </Button>
        </div>
      </div>
      <div className="lg:w-1/3  ">
        <div className="mx-auto w-full relative">
          <span className="bg-lu-blue rounded-full text-white font-bold text-xl w-16 px-2 py-1 text-center absolute top-0 right-0 -translate-x-1/2 translate-y-1/2">
            $22
          </span>
          <span className="rounded-full font-bold bg-lu-red text-white text-3xl text-center w-24 h-24 grid place-content-center absolute bottom-0 left-0 -translate-x-1/4 translate-y-1/4">
            -40%
          </span>
          <img
            src={bannerImage}
            alt="banner"
            className="object-cover w-full h-full rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
}
