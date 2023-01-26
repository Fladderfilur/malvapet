import React from 'react'
import { Container } from '../../../components/container'
import { Hero, HeroSubtitle, HeroTitle } from '../../../components/hero'
import { PageWrapper } from '../../../components/page-wrapper'
import { SubContainer } from '../../../components/subcontainer'

function StodVuxen() {
  return (
    <PageWrapper>
        <Container>
            <Hero>
                <HeroTitle>Stöd till vuxen</HeroTitle>
                <SubContainer>
                    <p>Om du lever i en relation och är utsatt för någon form av våld är du välkommen att kontakta Malva för stöd i din situation och din framtid. Även om du inte riktigt vet om din relation innehåller våld och är destruktiv eller inte så är du välkommen att kontakta Malva för att få hjälp att reda i dina tankar och känslor. Även du som redan lämnat en våldsam relation kan få stöd av oss på Malva.</p>
                    <p>En relation ska inte göra ont eller kännas skrämmande. Du ska inte heller behöva tänka på hur du beter dig eller vem du umgås med. Du ska alltid ha rätt att säga nej, att bli lyssnad på och respekterad och inte behöva känna dig rädd eller kontrollerad i hemmet.</p>
                    <p className='mb-6'>Skulle det vara så att dina behov är större än vi kan hjälpa dig med kan vi finnas med som stöd i kontakt med socialtjänsten, självklart i samråd med dig.  Om det finns oro för barn har Malva anmälningsplikt enligt 14 § Socialtjänstlagen.</p>
                    <p className='mb-6'>Oavsett om du är kvinna, man eller ickebinär är du välkommen att ta kontakt med Malva för att inleda samtal. Vi jobbar dock enbart med våldsutsatta och inte våldsutövare.</p>
                    <p>I samtalen kan även hjälp med skilsmässa, skyddade personuppgifter och vårdnadsfrågor ingå.</p>
                    <p>Vi stödjer dig i din situation nu, det som hänt och för att du ska få en trygg och stabil framtid.</p>
                </SubContainer>
            </Hero>
        </Container>
    </PageWrapper>
  )
}

export default StodVuxen