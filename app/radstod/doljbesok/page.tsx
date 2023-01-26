import Link from 'next/link'
import React from 'react'
import { Container } from '../../../components/container'
import { Hero, HeroSubtitle, HeroTitle } from '../../../components/hero'
import { PageWrapper } from '../../../components/page-wrapper'
import Image from 'next/image'
import { SubContainer } from '../../../components/subcontainer'

function DoljBesok() {
  return (
    <PageWrapper>
        <Container>
            <Hero>
                <HeroTitle className=''>Dölj ditt besök</HeroTitle>
                <SubContainer>
                <h1 className='text-2xl md:text-4xl mb-6 mt-6'>Överskrift</h1>
                        
                </SubContainer>
            </Hero>
        </Container>
    </PageWrapper>
  )
}

export default DoljBesok