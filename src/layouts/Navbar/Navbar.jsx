/* eslint-disable no-constant-condition */
import { useEffect, useRef, useState } from "react";
import BurgerBtn from "./BurgerBtn/BurgerBtn";
import Logo from "../Logo";
import { Button } from "../../Components/UI/all";
import { NavLink } from "react-router-dom";
import Tap from "./Tap";
import Container from "../../Components/Container";
export default function Navbar(props) {
  const [scrollY, setScrollY] = useState(window.scrollY);
  const [logoBoxClasses, setLogoBoxClasses] = useState();

  window.addEventListener("scroll", () => setScrollY(window.scrollY));
  const nav = useRef();
  const [scrollingNavClasses, setScrollingNav] = useState(null);
  useEffect(() => {
    if (scrollY >= 160) {
      setLogoBoxClasses("w-24");
      setScrollingNav(`shadow-lg  bg-lu-blue fixed w-full  `);
    } else {
      setLogoBoxClasses("w-auto");
      setScrollingNav("py-3");
    }
  }, [scrollY]);

  const routs = [
    {
      path: "/",
      name: "home",
    },
    {
      path: "/shop",
      name: "our shop",
    },
    {
      path: "/product details",
      name: "product details",
    },
    {
      path: "/contact",
      name: "contact us",
    },
  ];

  const [tapsSmallScreenClasses, setTapsSmallScreenClasses] = useState(
    " -translate-y-96 opacity-0"
  );
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    if (openNav) {
      nav.current.classList.remove("rounded-b-3xl");

      setTapsSmallScreenClasses("opacity-100");
    } else {
      setTapsSmallScreenClasses(" opacity-0 -translate-y-96");

      nav.current.classList.add("rounded-b-3xl");
    }
  }, [openNav]);

  const tapsInSmallScreen = () => {
    return (
      <div
        className={`w-8/12 shadow-md absolute top-full left-1/2 -translate-x-1/2 rounded-b-xl bg-white  grid text-center transition-all duration-300 ${tapsSmallScreenClasses}`}
      >
        {routs.map((route) => {
          return (
            <NavLink
              key={route.name}
              to={route.path}
              className={({ isActive }) => {
                return `border-b last:border-none hover:text-lu-red transition-all p-3 capitalize ${
                  isActive ? "text-lu-red" : ""
                }`;
              }}
            >
              {route.name}
            </NavLink>
          );
        })}
      </div>
    );
  };
  return (
    <>
      <div
        ref={nav}
        className={`transition-all h-fit top-0 left-0 rounded-b-3xl z-50 select-none duration-500 ${scrollingNavClasses} ${props.className} `}
      >
        <Container className=" flex items-center py-3  justify-between relative ">
          <NavLink to="/" className={logoBoxClasses + " " + "outline-none"}>
            <Logo />
          </NavLink>
          {/* Taps */}
          <div className="hidden md:flex items-center md:space-x-2 lg:space-x-7 ">
            {routs.map((route) => {
              return (
                <Tap key={route.name} to={route.path}>
                  {route.name}
                </Tap>
              );
            })}
            <Button className="hover:bg-lu-red uppercase text-white font-medium ">
              sign in
            </Button>
          </div>
          {/* end Taps */}
          <div className="block md:hidden ">
            {
              <BurgerBtn
                onClick={() => setOpenNav((prev) => !prev)}
                open={openNav}
              />
            }
            {tapsInSmallScreen()}
          </div>
        </Container>
      </div>
    </>
  );
}
