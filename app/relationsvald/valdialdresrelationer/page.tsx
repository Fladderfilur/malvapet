import React from 'react'
import { Container } from '../../../components/container'
import { Hero, HeroTitle } from '../../../components/hero'
import { PageWrapper } from '../../../components/page-wrapper'
import { SubContainer } from '../../../components/subcontainer'

function ValdiAldresRelationer() {
  return (
    <PageWrapper>
        <Container>
            <Hero>
                <HeroTitle>Våld i äldres relationer</HeroTitle>
                <SubContainer>
                    <p>Våldet går inte i pension! Våld i äldres relationer tenderar att se något annorlunda ut än övrigt relationsvåld. Dels för att det finns förutsättningar för äldre som yngre inte har och som ökar risken för våld, som till exempel sjukdom, fysisk nedsättning och att vara beroende av sin partner i större utsträckning. Äldre personer utsätts för våld av partner, barn, andra boende på exempelvis äldreboenden eller vårdpersonal.</p>
                    <p className='mb-6'>Våldet är i stor omfattning upprepande. Som äldre och pensionär minskar sociala kontakter vilket gör att risken för isolering med den våldsutövande partnern ökar och det blir även svårare för den våldsutsatta att vara ensam med andra personer utan att partnern är med, något som är mer självklart när personer är i arbetsför ålder. Det blir svårare att kunna be någon utomstående om hjälp.</p>
                    <p className='mb-6'>Att leva med sin partner i decennier och ”på ålderns höst” ta beslutet att bryta upp relationen är svårt. Det är svårt att efter lång tid lämna den man levt med men det innebär även att lämna hemmet man haft gemensamt under många år. Att lämna en våldsam relation som äldre innebär även en risk att bli ifrågasatt av släkt och vänner med frågor som ”Hur kan du lämna nu när ni är gamla och behöver varann?” eller ”Efter alla dessa år kan du väl stå ut ett tag till”.</p>

                    <p className='mb-6'>Våld i äldre relationer innebär att sjukdomar, som exempelvis demens, kan innebära att den sjuka riskerar att bli våldsutövare men den med demens kan även bli utsatt för våld av partnern som inte orkar ta hand om sin man/fru.</p>

                    <p className='mb-6'>Att vara mer beroende av varandra ökar risken för att våldet inte uppmärksammas av andra. Att inte få hjälp att få sin medicin eller ha sina hörapparater, få hjälp att sköta sin hygien eller ha samma ordning i hemmet om man är synnedsatt är olika former av våld mot äldre.</p>

                    <p>Det är många äldre som dödas i relationsvåld men det är sällan detta uppmärksammas då våldet inte är direkt dödligt men skadorna kan leda till döden och betecknas som ”fallolycka”.</p>

                    <p>Du når Malva på mail: <span className='cursor-pointer'><a href="mailto:info@kvinnojourenmalva.se">
                                info@kvinnojourenmalva.se 
                            </a></span> eller telefon: 0157-120 10</p>

                </SubContainer>
            </Hero>
        </Container>
    </PageWrapper>
  )
}

export default ValdiAldresRelationer