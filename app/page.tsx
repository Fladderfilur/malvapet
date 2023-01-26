import React from 'react'
import { Container } from '../components/container'
import { PageWrapper } from '../components/page-wrapper'
import { MalvaHelp } from '../components/sections/malvahelp'
import { HomePageHero } from '../components/sections/homepage-hero'



export default function Homepage() {
  return (
   
      <>
        <PageWrapper>
          
            <HomePageHero />
           
        
        
          <Container>
            <MalvaHelp />
          </Container>
        </PageWrapper>
      </>

   
  )
}

