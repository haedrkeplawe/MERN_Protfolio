import React from "react";
import Cart from "./Cart";
import image1 from "../image/prdouct_1.png";
import image2 from "../image/prdouct_2.png";
import image3 from "../image/prdouct_3.png";
import image4 from "../image/prdouct_4.png";
import image5 from "../image/prdouct_5.png";
import image6 from "../image/prdouct_6.png";
import image7 from "../image/prdouct_7.png";
import image8 from "../image/prdouct_8.png";

const Project = () => {
  return (
    <div id="prject" className="project">
      <h2>My Project</h2>
      <div className="py-10 grid grid-cols-1 sm:grid-cols-2  gap-5 md:grid-cols-3 lg:grid-cols-4">
        <Cart
          image={image1}
          Name={"DNK E-commerce"}
          link={"https://haedrcompane.netlify.app/"}
        />
        <Cart
          image={image2}
          Name={"Siting Marchting"}
          link={"https://sitingmarti.netlify.app"}
        />
        <Cart
          image={image3}
          Name={"Todo List"}
          link={"https://haedrtodo.netlify.app"}
        />
        <Cart
          image={image4}
          Name={"Exams"}
          link={"https://electricsy.netlify.app"}
        />
        <Cart
          image={image5}
          Name={"Aviator E-commerce"}
          link={"https://haedraviator.netlify.app"}
        />
        <Cart
          image={image6}
          Name={"Workout"}
          link={"https://haedrworkout.netlify.app"}
        />
        <Cart
          image={image7}
          Name={"Bloging"}
          link={"https://haedrblog.netlify.app/"}
        />
        <Cart
          image={image8}
          Name={"Chat App"}
          link={"https://strong-taffy-5030f4.netlify.app/"}
        />
      </div>
    </div>
  );
};

export default Project;
