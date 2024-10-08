import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="text">
        Haedr . <span>K</span>
      </div>
      <ul>
        <Link to={"/"}>Home</Link>
        <a href={"/#about"}>About Me</a>
        <a href={"/#skell"}>My Skell</a>
        <a href="#prject">My Project</a>
      </ul>
    </nav>
  );
};

export default Navbar;
