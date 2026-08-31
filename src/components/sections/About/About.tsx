import { SectionLayout } from "../../layout/SectionLayout/SectionLayout";

import {skills} from "../../../data/skills";
import Skill from "../../ui/Skill/Skill";

import "./About.css";

function About() {
  return (
    <SectionLayout id="about" title="About Me" number="01" size="sm" below={ 
    <div className="about-me__container">
      <div className="about-me__sub-container">
        <h3 className="text__subtitle">Little more about me</h3>
        <p className="about-me__text">Hi, I’m Ástríður!</p>
        <p className="about-me__text">I’m a newly graduated software engineer who enjoys solving problems and figuring out how the application I’m working on can make the most sense for the people actually using it. I like thinking a little outside the box when it fits, while still keeping things simple, intuitive, and usable for everyone. </p>
        <p className="about-me__text">I’d describe myself as organized and independent, but I really enjoy working with other people. I like bouncing ideas around, asking questions, challenging each other a little, and slowly figuring out the best solution together. I ask a lot of questions when I want to understand something properly, but I’ll usually still try to solve it myself first, sometimes with a slightly unnecessary amount of stubbornness.</p>
        <p className="about-me__text">Outside of work and school, I love playing board games with friends and family, the more strategic or chaotic, the better. I’m also a big football and Formula 1 fan, especially when I get to play football myself. And when I’m not doing any of that, I’m probably listening to music or adding another LEGO set to my ever-growing collection.</p>
        <p className="about-me__text">I’m pretty lighthearted, detail-oriented, and I care a lot about doing things well. When I take something on, I like giving it my full effort and seeing how far I can take it.</p>
      </div>
      <div className="about-me__sub-container">
        <h3 className="text__subtitle">My skills</h3>
        <p className="about-me__text">Through my studies and projects, I’ve gotten to work with both software development and user-centered design, which is probably why I like thinking about both how something works and how it feels to use.</p>
        <p className="about-me__text">I’m especially drawn to frontend development, but I also enjoy understanding what’s happening in the backend. I like seeing how everything connects, from the database and backend all the way to the final interface the user actually interacts with.</p>
        {skills.map((skill) => (
          <Skill key={skill.name} skill={skill} />
        ))}
      </div>
    </div>}>
    <p></p>
    </SectionLayout>
  );
}

export default About;