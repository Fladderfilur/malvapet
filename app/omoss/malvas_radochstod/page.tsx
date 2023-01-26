import Link from 'next/link'
import React from 'react'
import { Container } from '../../../components/container'
import { Hero, HeroSubtitle, HeroTitle } from '../../../components/hero'
import { PageWrapper } from '../../../components/page-wrapper'
import { SubContainer } from '../../../components/subcontainer'

function MalvasRadochStod() {
  return (
    <PageWrapper>
    <Container>
        <Hero>
          <div>
              <HeroTitle>Råd & Stöd
              </HeroTitle>

              <SubContainer>
               <p>Kvinnojouren Malva erbjuder råd- och stödsamtal</p> 
               <p>till dig som lever i, eller tror att du lever i, en relation som skadar och skrämmer.</p>
               <p className='mb-6'>Kontakta oss på telefon eller mail. Du väljer själv hur länge du vill ha kontakt med oss.</p>
               <p className='font-bold mb-10'>Självklart har vi tystnadsplikt.</p>
               <p className='mb-2 font-bold'>Malva erbjuder stöd...</p>
               <ul className='mb-10'>
                <li>...till vuxna</li>
                <li>...till äldre</li>
                <li>...till anhöriga</li>
                <li>...till ungdomar</li>
                <li>...i myndighetskontakter</li>
                <li>...samt gruppverksamhet</li>
               </ul>
               <p className='mb-[12rem]'>Läs mer här <span className='hover:text-hovernavlink'><Link href="/radstod">"Råd och Stöd"</Link></span></p>
              </SubContainer>
          </div>
        </Hero>
      </Container>
      </PageWrapper>
  )
}

export default MalvasRadochStod