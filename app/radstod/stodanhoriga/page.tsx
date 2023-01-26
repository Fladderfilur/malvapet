import Link from 'next/link'
import React from 'react'
import { Container } from '../../../components/container'
import { Hero, HeroSubtitle, HeroTitle } from '../../../components/hero'
import { PageWrapper } from '../../../components/page-wrapper'
import Image from 'next/image'
import { SubContainer } from '../../../components/subcontainer'

function StodAnhoriga() {
  return (
    <PageWrapper>
        <Container>
            <Hero>
                <HeroTitle>Stöd till Anhöriga</HeroTitle>
                <SubContainer>
                    <p className='mb-6'>Att vara anhörig till personer som lever i relationer där våld förekommer påverkar mycket. Att stå på sidan om och se någon man bryr sig om fara illa i relationen skapar mycket tankar och känslor om vad man kan göra som anhörig och hur man både kan finnas som stöd och hjälpa till att bryta relationen. Att vara anhörig kan skapa stress och frustration som kan vara svår att hantera.
Att komma på stödsamtal till Malva kan skapa möjlighet att reda i tankar, känslor och möjligheter som anhörig.</p>
                    <p className=''>Som anhörig räknar vi dig som är familjemedlem, kamrat, kollega eller chef. Även du som kanske är förälder till ett barn som har en kamrat som lever i en familj där våld förekommer räknas som anhörig.</p>
                </SubContainer>
            </Hero>
        </Container>
    </PageWrapper>
  )
}

export default StodAnhoriga