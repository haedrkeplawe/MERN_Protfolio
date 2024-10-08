import Landing from "../components/Landing";
import Navbar from "../components/Navbar";
import Project from "../components/Project";
import Skills from "../components/Skills";

const Home = () => {
  return (
    <div className="px-8 py-4">
      <Navbar />
      <Landing />
      <Skills />
      <Project />
    </div>
  );
};

export default Home;
