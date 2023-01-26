import React from 'react'
import { Container } from '../../../components/container'
import { Hero,  HeroTitle } from '../../../components/hero'
import { PageWrapper } from '../../../components/page-wrapper'
import { SubContainer } from '../../../components/subcontainer'

function MalvasStyrelse() {
  return (
    <PageWrapper>
      <Container>
        <Hero>
      <div className="">
          <HeroTitle>Malvas Styrelse
          </HeroTitle>
          <SubContainer>
            <p className='mb-6'>Enligt Malvas stadgar ska ordförande alltid vara en kvinna <br />men det kan ingå män i styrelsen.</p>
            <h2 className='mb-6 text-4xl'>Styrelsen består av:</h2>
            <ul className='[&_li]:mb-4'>
              <li>Malin Uddin – ordförande</li>
              <li>Christina Sundquist – vice ordförande</li>
              <li>Siri Johannessen – ledamot</li>
              <li>Inger Berglund – ledamot/ekonomiansvarig</li>
              <li>Karin Rogstedt - ledamot</li>
              <li>Mia Sellgren – suppleant</li>
              <li>Pernilla Dahlén – suppleant</li>
            </ul>
            <h2 className='mt-14 mb-14'>I februari varje år har Malva årsmöte då ny styrelse beslutas.<br /> Varje månad genomförs styrelsemöten där styrelsen och anställda är med.</h2>
            <p className='mb-[12rem]'>Kontakta styrelsen <span className='cursor-pointer hover:text-hovernavlink'><a href="mailto:styrelse@kvinnojourenmalva.se">
                                  <p>styrelse@kvinnojourenmalva.se</p>  
                              </a></span></p>
            </SubContainer>
      
          </div>
          </Hero>
        </Container>
      </PageWrapper>
  )
}

export default MalvasStyrelse