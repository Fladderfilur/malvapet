import Link from 'next/link'
import React from 'react'
import { Container } from '../../../components/container'
import { Hero, HeroSubtitle, HeroTitle } from '../../../components/hero'
import { PageWrapper } from '../../../components/page-wrapper'
import Image from 'next/image'
import { SubContainer } from '../../../components/subcontainer'

function StodiMyndighetsKontakter() {
  return (
    <PageWrapper>
        <Container>
            <Hero>
                <HeroTitle className='pb-6 text-4xl md:text-6xl lg:text-7xl'>Stöd i myndighetskontakter</HeroTitle>
                <SubContainer>
                    <p className='mb-6'>Är du våldsutsatt och behöver kontakt med myndigheter kan Malva finnas som stöd. Oavsett om du har pågående samtal med Malvas personal eller om du enbart vill ha stöd vid myndighetskontakter kan vi hjälpa dig. Stöd vid myndighetskontakter kan innebära kontakt med socialtjänst eller polis.</p>
                    <p className=''>Känner du förtroende för oss och önskar ha oss med som stöd vid en första kontakt med en myndighet följer vi med dig, eller kan i vissa fall bjuda in socialtjänsten till vårt kontor där ett första samtal kan ske. Är risken för dig hög och du tagit första kontakt med oss på Malva får du självklart vänta kvar hos oss tills socialtjänsten har tid att ta emot dig. Malva kan även finns med som stöd vid och inför rättegång och vi kan hjälpa dig för att få kontakt med advokat.</p>
                </SubContainer>
            </Hero>
        </Container>
    </PageWrapper>
  )
}

export default StodiMyndighetsKontakter