import Link from 'next/link'
import React from 'react'
import { Container } from '../../../components/container'
import { Hero, HeroSubtitle, HeroTitle } from '../../../components/hero'
import { PageWrapper } from '../../../components/page-wrapper'
import Image from 'next/image'
import { SubContainer } from '../../../components/subcontainer'

function ViktigaLankar() {
  return (
    <PageWrapper>
        <Container>
            <Hero>
                <HeroTitle className=''>Viktiga Länkar</HeroTitle>
                <SubContainer>
                    <ul className='p-4'>
                        <li>
                        Polis och Ambulans SOS 112 
                        </li>
                        <li>
                        Socialjouren Sörmland via 112 
                        </li>
                        <li>
                        BRIS 116 111 <Link target="_blank" href="http://www.bris.se">(bris.se) </Link>
                        </li>
                        <li>
                        Kvinnofridslinjen 020-50 50 50 <Link target="_blank" href="http://www.kvinnofridslinjen.se">(kvinnofridslinjen.se)</Link>
                        </li>
                        <li>
                        Unizon <Link target="_blank" href="http://www.unizonjourer.se">(unizonjourer.se)</Link>
                        </li>
                        <li>
                        Rädda Barnen <Link target="_blank" href="http://www.raddabarnen.se">(raddabarnen.se)</Link>
                        </li>
                        <li>
                        Flens Kommun 0157-43 00 00 <Link target="_blank" href="https://flen.se/stod-omsorg/stod-till-individ-och-familj/vald-i-nara-relationer/">(https://flen.se/stod-omsorg/stod-till-individ-och-familj/vald-i-nara-relationer/)</Link>
                        </li>
                        <li>
                        Brottsofferjouren 116 006 <Link target="_blank" href="http://www.brottsofferjouren.se">(brottsofferjouren.se)</Link>
                        </li>
                        <li>
                        Migrationsverket 0771-235 235 <Link target="_blank" href="http://www.migrationsverket.se">(migrationsverket.se)</Link>
                        </li>
                        <li>
                        Jourhavande medmänniska 08-702 16 80 (klockan 21-06) <Link target="_blank" href="http://www.jourhavande-medmanniska.se">(jourhavande-medmanniska.se)</Link>
                        </li>
                    </ul>
                </SubContainer>
            </Hero>
        </Container>
    </PageWrapper>
  )
}

export default ViktigaLankar