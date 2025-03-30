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
      <p>
        Hint : when you visit any website white 30s while backend work
        successfule
      </p>
      <div className="py-10 grid grid-cols-1 sm:grid-cols-2  gap-5 md:grid-cols-3 ">
        <Cart
          image={image1}
          Name={"DNK E-commerce"}
          discrption={
            " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis dicta asperiores libero deserunt ipsam iste quasi facilis temporibus"
          }
          skils={["React", "express", "mongodb"]}
          links={["https://haedrcompane.netlify.app/"]}
          linksName={["DNK"]}
        />
        <Cart
          image={image2}
          Name={"Siting Marchting"}
          discrption={
            " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis dicta asperiores libero deserunt ipsam iste quasi facilis temporibus"
          }
          skils={["React", "express", "mongodb"]}
          links={["https://sitingmarti.netlify.app"]}
          linksName={["Project"]}
        />
        <Cart
          image={image3}
          Name={"Todo List"}
          discrption={
            " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis dicta asperiores libero deserunt ipsam iste quasi facilis temporibus"
          }
          skils={["React", "express", "mongodb"]}
          links={["https://haedrtodo.netlify.app"]}
          linksName={["Todo"]}
        />
        <Cart
          image={image6}
          Name={"Workout"}
          discrption={
            " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis dicta asperiores libero deserunt ipsam iste quasi facilis temporibus"
          }
          skils={["React", "express", "mongodb"]}
          links={[
            "https://workout-buddy-1.netlify.app",
            "https://workout-buddy-2.netlify.app",
          ]}
          linksName={["Admin", "User"]}
        />
        <Cart
          image={image5}
          Name={"Aviator E-commerce"}
          discrption={
            " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis dicta asperiores libero deserunt ipsam iste quasi facilis temporibus"
          }
          skils={["React", "express", "mongodb"]}
          links={["https://haedraviator.netlify.app"]}
          linksName={["Aviator"]}
        />
        <Cart
          image={image7}
          Name={"Bloging"}
          discrption={
            " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis dicta asperiores libero deserunt ipsam iste quasi facilis temporibus"
          }
          skils={["React", "express", "mongodb"]}
          links={["https://haedrblog.netlify.app/"]}
          linksName={["Bloging"]}
        />
        <Cart
          image={image4}
          Name={"Exams"}
          discrption={
            " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis dicta asperiores libero deserunt ipsam iste quasi facilis temporibus"
          }
          skils={["React", "express", "mongodb"]}
          links={["https://electricsy.netlify.app"]}
          linksName={["Exams"]}
        />
        <Cart
          image={image8}
          Name={"Chat App"}
          discrption={
            " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis dicta asperiores libero deserunt ipsam iste quasi facilis temporibus"
          }
          skils={["React", "express", "mongodb"]}
          links={["https://strong-taffy-5030f4.netlify.app/"]}
          linksName={["Chat"]}
        />
      </div>
    </div>
  );
};

export default Project;
