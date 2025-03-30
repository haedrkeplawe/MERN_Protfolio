import { useEffect, useState } from "react";
import image1 from "../image/landing.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLink,
  faPenNib,
  faProjectDiagram,
  faSun,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";

const Landing = () => {
  const [doo, setDoo] = useState(false);
  useEffect(() => {
    setDoo(true);
  }, []);
  return (
    <div className={"about " + (doo ? "ok" : "")}>
      <div className="text">
        <h2
          className={
            "sm:text-4xl text-cyan-400 my-3 ease-in " + (doo ? "!right-0" : "")
          }
        >
          Haedr.K
        </h2>
        <p
          className={"sm:text-4xl  relative ease-in " + (doo ? "!right-0" : "")}
        >
          FullStack Developer
        </p>
        <div
          className={
            "link sm:text-1xl  relative ease-in " + (doo ? "!right-0" : "")
          }
        >
          <a href="#">
            <FontAwesomeIcon icon={faLink} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faVideo} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faPenNib} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faProjectDiagram} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faSun} />
          </a>
        </div>
      </div>
      <div className="image">
        <div className="w-44 min-w-40 sm:w-52 lg:w-80  ">
          <img className={"" + (doo ? "!translate-y-10 " : "")} src={image1} />
        </div>
      </div>
    </div>
  );
};

export default Landing;
