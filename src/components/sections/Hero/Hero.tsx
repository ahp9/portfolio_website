import SectionHeading from "../../ui/SectionHeading/SectionHeading";
import Button from "../../ui/Button/Button";

import './Hero.css';

function Hero() {
  return (
    <section id="hero" className="hero">
        <div className="hero__content">
            <SectionHeading title="Ástríður Haraldsdóttir Passauer" subtitle="Reykjavík" size="lg" />
            <h4 className="text__subtitle">Hugbúnaðarverkfræðingur</h4>
            <p className="text__description">Ég hef klárað mína stúdenta gögnu og er nú að leitast eftir vinnu til að sýna mitt.
                Ég klárað MSc í Human-Centered AI við DTU, með áherslu á Human-Computer Interaction.
                Þar leitaðist eftir að auka þekkingu og skilning á notendaupplifun og jók mína getu í data visulaization og þróun hugbúnaðar.
                Fyrir það kláraði ég BSc í Hugbúnaðarverkfræði við Háskóla Íslands, með áherslu á forritun og hugbúnaðarverkfræði.
            </p>
            <Button scrollTo="education" variant="primary">
                Sjá meira um námið mitt
            </Button>
        </div>
        <img className="hero__profile-image" src="/profile_photo.jpeg" alt="Ástríður Haraldsdóttir Passauer" />
    </section>
  );
}

export default Hero;