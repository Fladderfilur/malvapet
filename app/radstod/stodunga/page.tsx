import Link from 'next/link'
import React from 'react'
import { Container } from '../../../components/container'
import { Hero, HeroSubtitle, HeroTitle } from '../../../components/hero'
import { PageWrapper } from '../../../components/page-wrapper'
import Image from 'next/image'
import { SubContainer } from '../../../components/subcontainer'

function StodUnga() {
  return (
    <PageWrapper>
        <Container>
            <Hero>
                <HeroTitle className='pb-6'>Stöd till barn och ungdomar</HeroTitle>
                <SubContainer>
                    <p className='mb-6'>Barn och unga som upplever våld i familjen far illa. Barnen märker mycket mer än vuxna förstår och barnen behöver hjälp att reda i tankar och känslor. Malva erbjuder åldersanpassade samtal som kan innehålla lek eller tejping och samtalen kan i viss mån ske enligt Trappan-modellen eller BRA.</p>
                    <p className=''>När ungdomar själva startar kärleksrelationer ökar risken för att hamna i relationer som innehållet våld. De ungdomar som behöver stöd i sin egen relation kan få detta vid <Link href="/ungdomsjouren">Malvas ungdomsjour</Link>.</p>
                </SubContainer>
            </Hero>
        </Container>
    </PageWrapper>
  )
}

export default StodUnga