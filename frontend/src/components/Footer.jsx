import svg2 from "../image/icons/github-brands (1).svg";
import svg3 from "../image/icons/upwork-brands.svg";
import svg4 from "../image/icons/linkedin-in-brands.svg";
import svg5 from "../image/icons/FLN.AX.D-8966ed55.png";

const Footer = () => {
  return (
    <footer>
      <a target="_blank" href="https://www.freelancer.com/u/freelancerhaedrk">
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
    </footer>
  );
};

export default Footer;
