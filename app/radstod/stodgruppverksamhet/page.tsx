import Link from 'next/link'
import React from 'react'
import { Container } from '../../../components/container'
import { Hero, HeroSubtitle, HeroTitle } from '../../../components/hero'
import { PageWrapper } from '../../../components/page-wrapper'
import Image from 'next/image'
import { SubContainer } from '../../../components/subcontainer'

function StodGruppverksamhet() {
  return (
    <PageWrapper>
        <Container>
            <Hero>
                <HeroTitle>Gruppverksamhet</HeroTitle>
                <SubContainer>
                    <p className='mb-6'>Malva erbjuder er som är intresserade samtal i grupp. Gruppsamtalen kan handla om att leva i våldsrelation, att ha brutit upp en våldsam relation, att vara anhörig till våldsutsatta, att vara äldre och våldsutsatt eller att vara förälder till våldsutsatta ungdomar. Grupper kan även handla om att vara förälder, om hur man bemöter barn och ungdomar kring sex och porr eller utsatthet på Internet.</p>
                    <p className=''>I gruppsamtal med våldsutsatta fokuserar vi mycket på igenkänning och ökad självkänsla. Vi arbetar även med stress. Vi anpassar samtalsgruppernas innehåll efter det behov som finns. Hör av dig till oss så hjälps vi åt att forma en grupp som är givande.</p>
                </SubContainer>
            </Hero>
        </Container>
    </PageWrapper>
  )
}

export default StodGruppverksamhet