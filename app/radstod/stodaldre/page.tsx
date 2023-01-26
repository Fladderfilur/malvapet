import React from 'react'
import { Container } from '../../../components/container'
import { Hero, HeroTitle } from '../../../components/hero'
import { PageWrapper } from '../../../components/page-wrapper'
import { SubContainer } from '../../../components/subcontainer'

function StodAldre() {
  return (
    <PageWrapper>
        <Container>
            <Hero>
                <HeroTitle>Stöd till äldre</HeroTitle>
                <SubContainer>
                    <p className='mb-6'>Om du lever i en relation och är utsatt för någon form av våld är du välkommen att kontakta Malva för stöd i din situation och din framtid. Även om du inte riktigt vet om din relation innehåller våld och är destruktiv eller inte så är du välkommen att kontakta Malva för att få hjälp att reda i dina tankar och känslor. Även du som redan lämnat en våldsam relation kan få stöd av oss på Malva.</p>
                    <p className='mb-6'>Våldet går inte i pension! Att ha levt i en relation i flera decennier kan vara en försvårande omständighet för att bryta relationen. Malva arbetar med äldre och vill finnas som stöd för att slippa leva med våld i nära relation trots att man passerat pensionsåldern. För äldre kan relationsvåld även ha en koppling till sjukdom och ökat beroende till varandra. För äldre räknas även våld från exempelvis vårdpersonal eller chaufförer med i relationsvåld.</p>
                    <p>Malva arbetar även aktivt med att minska ensamhet och isolering hos äldre genom att erbjuda aktiviteter och engagemang i form av volontärinsatser.

Har du svårt att ta dig till Malvas kontor kan vi i viss mån komma hem till dig för samtal. Vi gör alltid en säkerhetsbedömning från fall till fall.</p>
                </SubContainer>
            </Hero>
        </Container>
    </PageWrapper>
  )
}

export default StodAldre