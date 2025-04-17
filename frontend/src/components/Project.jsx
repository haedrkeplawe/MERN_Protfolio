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
import image9 from "../image/prdouct_9.png";

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
            "DNK is a website that provides buying and selling services for clothes and jewelry."
          }
          skils={["React", "express", "mongodb"]}
          links={["https://haedrcompane.netlify.app/"]}
          linksName={["DNK"]}
        />
         <Cart
          image={image9}
          Name={"X-Clone"}
          discrption={"X-Clone its look like X"}
          skils={["react", "express", "mongodb"]}
          links={["https://deluxe-longma-19b255.netlify.app/"]}
          linksName={["X-Clone"]}
        />
        <Cart
          image={image2}
          Name={"Siting Marchting"}
          discrption={
            "You have a lot of sales and can't manage them. Then this site is for you. Sign in and enjoy the amazing features."
          }
          skils={["React", "express", "mongodb"]}
          links={["https://sitingmarti.netlify.app"]}
          linksName={["Project"]}
        />
        <Cart
          image={image3}
          Name={"Todo List"}
          discrption={
            "Manage your daily tasks and appointments easily. This site offers you ease, efficiency, and access from everywhere."
          }
          skils={["React", "express", "mongodb"]}
          links={["https://haedrtodo.netlify.app"]}
          linksName={["Todo"]}
        />
        <Cart
          image={image6}
          Name={"Workout Buddy"}
          discrption={
            "Workout Buddy it is your exercise companion. The site consists of two pages, one for subscribers and the other for their supervising trainer."
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
            "Aviator is a website that provides buying and selling services for clothes and jewelry."
          }
          skils={["React", "express", "mongodb"]}
          links={["https://haedraviator.netlify.app"]}
          linksName={["Aviator"]}
        />
        <Cart
          image={image7}
          Name={"Bloging"}
          discrption={
            "It is an integrated community where you can publish and view what others publish while protecting your privacy. All you have to do is log in and enjoy."
          }
          skils={["React", "express", "mongodb"]}
          links={["https://mybloginghaedr.netlify.app/"]}
          linksName={["Bloging"]}
        />
        <Cart
          image={image4}
          Name={"Exams"}
          discrption={
            " Exams it's a fun system that encourages collaboration among university students, as it relies on teamwork. It's simple and easy to use. log in and enjoy."
          }
          skils={["React", "express", "mongodb"]}
          links={["https://electricsy.netlify.app"]}
          linksName={["Exams"]}
        />
        <Cart
          image={image8}
          Name={"Chat App"}
          discrption={
            "Chat App it's similar to WhatsApp, log in and chat with your friends."
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
