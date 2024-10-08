import { useEffect, useState } from "react";
import image1 from "../image/landing.png";
const Landing = () => {
  const [doo, setDoo] = useState(false);
  useEffect(() => {
    setDoo(true);
  }, []);
  return (
    <div className={"about " + (doo ? "ok" : "")}>
      <div>
        <h2
          className={
            "sm:text-4xl text-cyan-400 my-3 right-80 relative duration-500 ease-in " +
            (doo ? "!right-0" : "")
          }
        >
          Haedr.K
        </h2>
        <p
          className={
            "text-3xl sm:text-4xl delay-900 right-96 relative duration-1000 ease-in " +
            (doo ? "!right-0" : "")
          }
        >
          FullStack Developer
        </p>
      </div>
      <div className="image">
        <div className="w-44 min-w-40 sm:w-52 lg:w-80  ">
          <img
            className={
              " relative  duration-1000 ease-in delay-1000  translate-y-96 top-20 " +
              (doo ? "!translate-y-10 !top-0" : "")
            }
            src={image1}
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
