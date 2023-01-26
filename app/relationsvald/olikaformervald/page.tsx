import React from 'react'
import { Container } from '../../../components/container'
import { Hero, HeroTitle } from '../../../components/hero'
import { PageWrapper } from '../../../components/page-wrapper'
import { SubContainer } from '../../../components/subcontainer'

function OlikaFormerVald() {
  return (
    <PageWrapper>
        <Container>
            <Hero>
                <HeroTitle>Olika former av våld</HeroTitle>
                <SubContainer>
                    <p className='mb-6'>Det finns flera former av relationsvåld och ingen form är lättare eller mer allvarlig. Det är inte heller så vanligt att det enbart är en form av våld som förekommer, i stället kan det vara mycket svårt får den utsatta att särskilja våldet och även i stort sett omöjligt att säga när våldet började.</p>

                    <p>Fysiskt – våld som innebär fysisk kontakt såsom knuffar, slag, stryptag, örfilar, dra i håret/armar/ben</p>
                    <p>Psykiskt – kränkningar och/eller hot som skrämmer och skadar</p>
                    <p>Sexuellt – sexuella handlingar och närmanden som du inte gett samtycke till</p>
                    <p>Materiellt – våld eller hot om våld mot materiella ting, ägodelar och/eller djur</p>
                    <p>Ekonomiskt – kontroll över ekonomi och tillgångar</p>
                    <p>Digitalt – hot och kränkningar på sociala medier/sms/mail</p>
                    <p>Latent – våld eller hot om våld som skrämmer och hotar i kraft av sin möjlighet</p>
                    <p>Hedersvåld – en person får ta ansvaret för att upprätthålla en grupps heder</p>

                    <p>Du når Malva på mail: <span className='cursor-pointer'><a href="mailto:info@kvinnojourenmalva.se">
                                info@kvinnojourenmalva.se 
                            </a></span> eller telefon: 0157-120 10</p>

                </SubContainer>
            </Hero>
        </Container>
    </PageWrapper>
  )
}

export default OlikaFormerVald