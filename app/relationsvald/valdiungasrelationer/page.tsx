import React from 'react'
import { Container } from '../../../components/container'
import { Hero, HeroTitle } from '../../../components/hero'
import { PageWrapper } from '../../../components/page-wrapper'
import { SubContainer } from '../../../components/subcontainer'

function ValdiUngasRelationer() {
  return (
    <PageWrapper>
        <Container>
            <Hero>
                <HeroTitle>Våld i ungas relationer</HeroTitle>
                <SubContainer>
                  <p className='mb-6'>Relationsvåld startar tidigt i ålder. Redan så unga som de i yngre tonåren lever i relationer med våld och det sexuella och digitala våldet är speciellt utbrett i unga relationer. Ungefär var fjärde ung tjej utsätts för någon form av våld av sin kille.</p>

                  <p className='mb-6'>Våld i ungas relationer sker ofta mitt framför vuxna, i skolan eller i hemmet. Ungdomar som går i skolan tvingas ofta tillbringa sina skoldagar tillsammans med förövaren.</p>

                  <p className='mb-6'>Den som utsätter sin partner för våld i unga relationer är lika gammal eller några år äldre. Maktobalansen som kan bli när den utsatta är yngre och fortfarande går i skolan medan förövaren är äldre, kanske arbetar och tjänar egna pengar kan vara en grund till våld och kontroll.</p>

                  <p className='mb-6'>De vuxna omkring ungdomarna har ofta svårt att förstå att våld kan förekomma även hos unga vilket gör att det är svårt för unga att våga anförtro sig till en vuxen. Fortfarande förekommer det i skolor i Sverige att barnen lär sig att ”kärlek börjar med bråk” eller att ”svartsjuka är romantiskt”.</p>

                  <p className='mb-6'>Barn och unga behöver tidigt lära sig att sätta gränser och att förstå och lyssna på ett ”nej”.</p>
                    <p>Du når Malva på mail: <span className='cursor-pointer'><a href="mailto:info@kvinnojourenmalva.se">
                                info@kvinnojourenmalva.se 
                            </a></span> eller telefon: 0157-120 10</p>

                </SubContainer>
            </Hero>
        </Container>
    </PageWrapper>
  )
}

export default ValdiUngasRelationer