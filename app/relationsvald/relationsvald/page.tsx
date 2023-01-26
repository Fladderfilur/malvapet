import React from 'react'
import { Container } from '../../../components/container'
import { Hero, HeroTitle } from '../../../components/hero'
import { PageWrapper } from '../../../components/page-wrapper'
import { SubContainer } from '../../../components/subcontainer'

function RelationsValdHome() {
  return (
    <PageWrapper>
        <Container>
            <Hero>
                <HeroTitle>Våld i nära relation</HeroTitle>
                <SubContainer>
                  <p>Våld i nära relation kan se ut på olika sätt. Våldet kan ge synliga fysiska blåmärken eller psykiska skador som ingen annan än den utsatta kan se och känna.</p>
                  <p className='mb-6'>Relationsvåld är ett stort samhällsproblem och kostar både pengar och lidande.</p>

                  <p>Våldet kan finnas i alla relationer, i alla kulturer och i alla samhällsklasser. Det finns kvinnor som utövar våld och våldet förekommer även i samkönade relationer men det vanligaste är att det är en <span className='italic'>man som är våldsutövare och en kvinna som är utsatt</span>.</p>
                  <p>Det går inte att säga att någon riskerar att utsättas mer eller att någon oftare blir utövare av relationsvåld. Det finns flertal teorier för att förklara våldsutövare men till sist handlar det uteslutande om <span className='uppercase'>VILJAN</span> att skada sin partner.</p>

                  <p className='mb-4'>Skulle det vara så att våldsutövaren inte kan styra sina handlingar skulle våldet ske när andra ser, mot vem som helst och vid vilken situation som helst men relationsvåldet sker så gott som alltid bakom stängda dörrar, det är en familjehemlighet och utövaren är mycket ofta en trevlig och en socialt kompetent person i relation till andra människor.</p>
                    <p className='mb-6'>Vår övertygelse på Malva är att allt relationsvåld i stort handlar om makt och heder, att våldsutövaren upprätthåller sin heder och kontroll genom att hota och skada sin partner.</p>

                    <p>Statistiskt utsätts en av tre tjejer/kvinnor för någon form av relationsvåld under sin livstid och de senaste åren är det ca 18 kvinnor/tjejer som dödats av sina (ex)män/pojkvänner. Varje år.</p>
                    <p>Det är en död oftare än var tredje vecka och 18 för många! Om relationsvåldet mot äldre som leder till död i form av så kallade ”fallolyckor” skulle räknas med är antalet döda per år uppe på ca 1 kvinna i veckan. Det finns inga siffror på antalet döda i relationsvåld om även självmorden skulle räknas med.</p>
                    <p className='mb-4'>Det är ett antal barn varje år som förlorar sin förälder i relationsmord. Det är många barn för mycket.</p>
                </SubContainer>
            </Hero>
        </Container>
    </PageWrapper>
  )
}

export default RelationsValdHome