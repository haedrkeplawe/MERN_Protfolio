import { useEffect, useState } from "react";
import image1 from "../image/landing.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenNib,
  faProjectDiagram,
  faSun,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import svg2 from "../image/icons/github-brands (1).svg";
import svg3 from "../image/icons/upwork-brands.svg";
import svg4 from "../image/icons/linkedin-in-brands.svg";
import svg5 from "../image/icons/FLN.AX.D-8966ed55.png";

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
          <a
            target="_blank"
            href="https://www.freelancer.com/u/freelancerhaedrk"
          >
            <img src={svg5} />
          </a>
          <a target="_blank" href="https://github.com/haedrkeplawe">
            <img src={svg2} />
          </a>
          <a
            target="_blank"
            href="https://www.upwork.com/freelancers/~01b6ab76fcad4ea890?mp_source=share"
          >
            <img src={svg3} />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/haider-keplawe-904706251"
          >
            <img src={svg4} />
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
