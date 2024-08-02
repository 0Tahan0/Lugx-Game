import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../Components/UI/Button";
import Input from "../../Components/UI/Input";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function GameSection(props) {
  const game = props.game
  const getCurrency = game.price.orginal.match(/[^0-9]/gi).join("");
  const getDisCount =
    parseInt(game.price.orginal) -
    Math.floor(
      (parseInt(game.price.orginal) * parseInt(game.price.discount)) / 100
    );
  const [inputValue, setInputValue] = useState(1);
  return (
    <div className="lg:flex grid justify-between gap-20 border-b pb-20 ">
      <div className="lg:w-1/2 rounded-3xl overflow-hidden">
        <img
          src={game.image}
          alt="singleGame"
          className="object-cover w-full h-full md:hover:scale-105 transition-all duration-500"
        />
      </div>
      <div className="lg:w-1/2 grid gap-5">
        <p className="font-bold text-3xl">{game.name}</p>
        <div>
          <span className="line-through text-gray-300 text-xl font-medium">
            {game.price.orginal}
          </span>
          {getDisCount != parseInt(game.price.orginal) ? (
            <span className="text-lu-blue text-3xl font-bold  ms-2">
              {getCurrency + "" + getDisCount}
            </span>
          ) : (
            ""
          )}
        </div>
        <p className="text-lu-gray leading-8 font-thin mt-10">{game.text}</p>
        <div className="flex gap-5 ">
          <Input
            type="text"
            onInput={(e) => {
              setInputValue(e.target.value);
            }}
            className="bg-lu-light-gray border focus:ring min-w-16 w-20  md:text-xl text-center "
            value={inputValue}
          />
          <Button className="space-x-3 px-4  ">
            {/* <i className='fa-sold fa'></i> */}
            <FontAwesomeIcon icon="fa-solid fa-shopping-bag" size="lg" />
            <span className="uppercase">add to cart</span>
          </Button>
        </div>
        <ul className="grid gap-3 ">
          <li>
            <span className="capitalize text-lu-gray w-24 inline-block ">
              Game ID:
            </span>
            <span className="text-lu-blue ms-10">{game.id}</span>
          </li>
          <li>
            <span className="capitalize text-lu-gray w-24 inline-block ">
              Genre:{" "}
            </span>
            <span className="ms-10">
              {" "}
              {Object.keys(game.genre).map((key) => (
                <Link key={key} className="text-lu-blue me-2" to="#">
                  {game.genre[key]},
                </Link>
              ))}
            </span>
          </li>
          <li>
            <span className="capitalize text-lu-gray w-24 inline-block ">
              Multi-tags:
            </span>
            <span className="ms-10">
              {" "}
              {Object.keys(game.tags).map((key) => (
                <Link key={key} className="text-lu-blue me-2" to="#">
                  {game.tags[key]},
                </Link>
              ))}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
