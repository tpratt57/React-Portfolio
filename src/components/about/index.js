import React from "react";
import coverImage from "../../assets/me/Snapchat-1658935006.png"

function About() {
    return (
      <section className="my-5">
        <h1 id="about"> Trevor Pratt <br></br> Full Stack Developer/ Web Designer </h1>
        <p> Hi, my name's Trevor! I am a Full Stack Web Developer from San Antonio who's looking to take on opportunities to work with the the latest technologies in and around web development!</p>
        <p> I am ambitious, and have a natural curiosity to learn, and better develop my skills to share with the world.</p>
        <img src={coverImage} className= "my-2" style={{width: "100%" }} alt= "cover"/>
      </section>
    );
  }

export default About;