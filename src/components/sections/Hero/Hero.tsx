import SectionHeading from "../../ui/SectionHeading/SectionHeading";
import Button from "../../ui/Button/Button";

import './Hero.css';

function Hero() {
  return (
    <section id="hero" className="hero">
        <div className="hero__content">
            <SectionHeading title="Ástríður Haraldsdóttir Passauer" subtitle="Reykjavík" size="lg" />
            <h4 className="text__subtitle">Software Engineer</h4>
            <p className="text__description">I’m a software engineer with an MSc in Human-Centered AI from DTU, 
                specializing in Human-Computer Interaction, and a BSc in Software Engineering from the University of Iceland.

                I enjoy building software that not only works, but actually makes sense to the people using it, 
                especially frontend and user-focused solutions. I’ve recently finished my studies and I’m excited 
                to bring what I’ve learned into my next role.
            </p>
            <Button scrollTo="projects" variant="primary">
                See my projects
            </Button>
        </div>
        <img className="hero__profile-image" src="/profile_photo.jpeg" alt="Ástríður Haraldsdóttir Passauer" />
    </section>
  );
}

export default Hero;