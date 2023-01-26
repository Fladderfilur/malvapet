import React from 'react'
import { Container } from '../../../components/container'
import { Hero, HeroTitle } from '../../../components/hero'
import { PageWrapper } from '../../../components/page-wrapper'
import { SubContainer } from '../../../components/subcontainer'

function BarniRelationsVald() {
  return (
    <PageWrapper>
        <Container>
            <Hero>
                <HeroTitle>Barn som upplever våld i hemmet</HeroTitle>
                <SubContainer>
                <p className=''>Du som bor, eller vistas, i Flens kommun och lever i en relation som skrämmer eller innehåller våld är välkommen att kontakta Malva för samtal. Hos oss på Malva kan du som våldsutsatt eller anhörig få råd-och stödsamtal via telefon, mail eller chat. Vi har alltid tystnadsplikt och du kan vara anonym.</p>
                    <p className='mb-6'>Samtalen är kostnadsfria. Hos Malva kan du ha samtal i den omfattning och under den tid som du själv önskar och som vi kommer överens om.</p>
                    <p>Du når Malva på mail: <span className='cursor-pointer'><a href="mailto:info@kvinnojourenmalva.se">
                                info@kvinnojourenmalva.se 
                            </a></span> eller telefon: 0157-120 10</p>

                </SubContainer>
            </Hero>
        </Container>
    </PageWrapper>
  )
}

export default BarniRelationsVald