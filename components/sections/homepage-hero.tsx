import { Container } from "../container";
import { Hero, HeroSubtitle, HeroTitle } from "../hero";
import { SubContainer } from "../subcontainer";

export const HomePageHero = () => (
    <Hero>
      <Container>
            <div className="">
              <div className="font-semibold">
                <HeroTitle>Kvinnojouren Malva
                </HeroTitle>
                </div>
              <HeroSubtitle>
              Kvinnojouren Malva arbetar med råd- och stödsamtal <br /> till våldsutsatta kvinnor, män och deras anhöriga. <br />
              Vi finns i Flens kommun och du hittar Malvas kontor centralt i Flen.<br /><br /> Kontakta oss<br />Telefon 0157-120 10 eller info@kvinnojourenmalva.se
              </HeroSubtitle>
              
            </div>
        </Container>
        <SubContainer>
         <div className="mask-radial-faded">
            <div className="">
                <img className="mask-img-top opacity-90 w-full h-full object-cover" src="/img/heartbig.jpg" alt="Hero image" />
            </div>
         </div>
         </SubContainer>
    </Hero>
)