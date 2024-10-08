import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="text-white flex justify-between py-4">
      <div className="text-cyan-300">
        Haedr . <span>K</span>
      </div>
      <div className="flex gap-3 ">
        <Link to={"/"} className="hover:text-cyan-300 ease-in duration-300">
          Home
        </Link>
        <a
          href={"/#about"}
          className="hover:text-cyan-300 ease-in duration-300"
        >
          About Me
        </a>
        <a
          href={"/#skell"}
          className="hover:text-cyan-300 ease-in duration-300"
        >
          My Skell
        </a>
        <a href="#prject" className="hover:text-cyan-300 ease-in duration-300">
          My Project
        </a>
      </div>
    </div>
  );
};

export default Navbar;
