import Link from 'next/link'
import React from 'react'
import { Container } from '../../../components/container'
import { Hero, HeroTitle } from '../../../components/hero'
import { PageWrapper } from '../../../components/page-wrapper'
import { SubContainer } from '../../../components/subcontainer'

function MalvasAnstallda() {
  return (
    <PageWrapper>
    <Container>
        <Hero>
          <div className="">
              <HeroTitle>Malvas anställda
              </HeroTitle>
              <SubContainer>
                <p className='mb-6'>Malva har två fast anställd personal, Maria och Petra. <br /> Personalen driver det dagliga arbetet och fördelar råd- och stödsamtal<br /> mellan sig både för de som kommer på öppna samtal <br />och de som bor i skyddat boende.</p>
                <p className='mb-6'>Verksamhetsansvarig Maria är beteendevetare och coach och har erfarenhet från utredningsarbete på socialtjänsten. Maria är även barnansvarig och ser till att alla barn i Malvas skyddade boende får sina behov tillgodosedda. Maria arbetar även med prevention och föreläsningar.</p>
                <p className='mb-14'>Kontakta Maria <span className='cursor-pointer hover:text-hovernavlink'><a href="mailto:maria@kvinnojourenmalva.se">
                                      <p>maria@kvinnojourenmalva.se</p>  
                                  </a></span></p>
                <p className='mb-14'>Petra är behandlingsassistent och har över 20 års erfarenhet i arbete med människor.<br /> Petra har ett större ekonomiskt och administrativt ansvar<br /> och samordnar situationen för kvinnor i Malvas skyddade boende.<br /></p>
                <p className='mb-[12rem]'>Malva har även personal som arbetar som boendestödjare<br /> samt med <span className='cursor-pointer hover:text-hovernavlink'><Link href="/ungdomsjouren">ungdomsjouren</Link></span>.</p>
              </SubContainer>
          
          </div>
        </Hero>
      </Container>
      </PageWrapper>
  )
}

export default MalvasAnstallda