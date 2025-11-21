import Footer from "../components/Footer";
import Landing from "../components/Landing";
import Navbar from "../components/Navbar";
import Project from "../components/Project";
import Skills from "../components/Skills";

const Home = () => {
  return (
    <>
      <div className="home ">
        <Navbar />
        <Landing />
        <Skills />
        <Project />
      </div>
      <Footer />
    </>
  );
};

export default Home;
