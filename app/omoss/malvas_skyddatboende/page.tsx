import React from 'react'
import { Container } from '../../../components/container'
import { Hero, HeroSubtitle, HeroTitle } from '../../../components/hero'
import { PageWrapper } from '../../../components/page-wrapper'
import { SubContainer } from '../../../components/subcontainer'

function MalvasSkyddatBoende() {
  return (
    <PageWrapper>
    <Container>
      <Hero>
        <HeroTitle>Skyddat boende
        </HeroTitle>
        <SubContainer>
          <p className='mb-6'>Malva erbjuder skyddat boende för dig som lämnar en våldsam relation.</p>
          <p className='mb-12'>Malva tar emot kvinnor, män och hbtq med eller utan barn.</p>
          <p className='mb-6'>För att komma till vårt skyddade boende behöver du beviljas bistånd från socialtjänsten.</p>
          <p className='mb-12'>Malva tar emot personer från alla kommuner i Sverige.</p>
          <p className='mb[12rem]'>I vårt skyddade boende bor du under en viss period och får stöd i ditt mående,<br /> att hantera det du varit utsatt för samt skapa en trygg framtid för dig, och eventuella barn.<br /> Vi stödjer dig i att etablera din framtid och ordna ett eget boende.</p>
        </SubContainer>
    
        </Hero>
      </Container>
    </PageWrapper>
  )
}

export default MalvasSkyddatBoende