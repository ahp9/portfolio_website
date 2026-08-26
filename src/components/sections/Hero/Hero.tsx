import { SectionLayout } from "../../layout/SectionLayout/SectionLayout";
import Button from "../../ui/Button/Button";

import './Hero.css';

function Hero() {
  return (
    <SectionLayout
        id="hero"
        title="Ástríður Haraldsdóttir Passauer"
        number="Reykjavík"
        size="lg"
        below={
            <>
                <h4 className="text__subtitle">Hugbúnaðarverkfræðingur</h4>
                <p className="text__description">Ég hef klárað mína stúdenta gögnu og er nú að leitast eftir vinnu til að sýna mitt.
                    Ég klárað MSc í Human-Centered AI við DTU, með áherslu á Human-Computer Interaction.
                    Þar leitaðist eftir að auka þekkingu og skilning á notendaupplifun og jók mína getu í data visulaization og þróun hugbúnaðar.
                    Fyrir það kláraði ég BSc í Hugbúnaðarverkfræði við Háskóla Íslands, með áherslu á forritun og hugbúnaðarverkfræði.
                </p>
                <Button scrollTo="education" variant="primary">
                    Sjá meira um námið mitt
                </Button>
            </>
        }
    >
        <img className="hero__profile-image" src="/profile_photo.jpeg" alt="Ástríður Haraldsdóttir Passauer" />
    </SectionLayout>
  );
}

export default Hero;