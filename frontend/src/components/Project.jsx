import React from "react";
import Cart from "./Cart";
import image1 from "../image/prdouct_1.png";
import image2 from "../image/prdouct_2.png";
import image3 from "../image/prdouct_3.png";
import image4 from "../image/prdouct_4.png";

const Project = () => {
  return (
    <div id="prject" className="px-4 ">
      <h2 className="text-2xl">My Project</h2>
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
      </div>
    </div>
  );
};

export default Project;
