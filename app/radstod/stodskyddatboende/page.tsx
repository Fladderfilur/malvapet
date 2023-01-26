import Link from 'next/link'
import React from 'react'
import { Container } from '../../../components/container'
import { Hero, HeroSubtitle, HeroTitle } from '../../../components/hero'
import { PageWrapper } from '../../../components/page-wrapper'
import Image from 'next/image'
import { SubContainer } from '../../../components/subcontainer'

function StodSkyddatBoende() {
  return (
    <PageWrapper>
        <Container>
            <Hero>
                <HeroTitle className=''>Skyddat boende</HeroTitle>
                <SubContainer>
                    <p className='mb-6'>För vissa personer som vill och behöver lämna den våldsamma relationen behövs under en tid stöd i form av skyddat boende. Om du är rädd att lämna relationen kanske på grund av hot om ökat våld eller död kan skyddat boende vara en lösning under en tid. I Malvas skyddade boende kan våldsutsatta kvinnor, män och hbtq med eller utan barn bo. Malva tar emot både killar och tjejer upp till 18 år tillsammans med förälder. Hos Malva kan du även ta med husdjur och vi kan lösa boende även för hästar.</p>
                    <p>Vi respekterar alla religioner och kan även ta emot personer med missbruksproblem. Det är dock inte tillåtet att bruka droger eller alkohol i boendet.</p>
                    <p>Boendet är självhushåll och den som bor hos oss behöver kunna sköta sin dagliga omsorg själv men vi kan ta emot personer med viss fysisk eller psykisk funktionsnedsättning.</p>
                    <p>En placering i vårt skyddade boende behöver alltid beviljas av socialtjänsten i din hemkommun. Vid kontakt med socialtjänsten kan du önska att få en placering just hos Malva. Det är i slutändan socialtjänsten som bedömer om behov av skyddat boende finns och var du i så fall ska placeras.</p>
                    <p>En placering i skyddat boende kan sträcka sig under olika lång tid. Genomsnittlig tid för en placering hos Malva är 3 månader.</p>
                    <p>Malvas skyddade boende har hög skalsäkerhet och alla placerade får ett eget bärbart GPS-larm under placeringstiden.</p>
                    <p>infoga BILD</p>

                    <h1 className='text-2xl md:text-4xl mb-6 mt-6'>För dig i skyddat boende</h1>
                    <p>Vårt skyddade boende finns till för att du ska kunna lämna relationen på ett tryggt sätt. Genom att under en tid få trygghet för både dig och dina barn ges du möjlighet att skapa en vardag utan hot och våld, vila och bearbeta det du varit med om samt förbereda för en framtid fri från våld.</p>
                    <p className='mb-6'>Hos Malva träffar du utbildad personal; samtalsstödjare och boendestödjare. Vi har även en särskilt barnansvarig som ser till att dina barn får en trygg vardag och bearbeta det de upplevt i hemmet. Barnen vet ofta mycket mer om våld mellan föräldrar än vad vuxna tror. Vår personal finns tillgänglig dygnet runt och vi har även volontärer som extra stöd för dig. </p>

                    <p>Vi erbjuder dig boende och stöd anpassat till dig, exempelvis:</p>
                    <ul className='list-disc text-left px-12 p-6'>
                        <li>
                            Stödsamtal om det våld du varit utsatt för
                        </li>
                        <li>
                            Aktiviteter för dig och dina barn
                        </li>
                        <li>
                            Kontakt med skola/förskola för barnen
                        </li>
                        <li>
                            Stöd och hjälp att ansöka om skyddade folkbokföringsuppgifter, skilsmässa och eventuellt egen vårdnad
                        </li>
                        <li>
                            Stöd i att få kontakt med myndigheter, bank, advokat och polis. Vi kan följa med dig som stöd till exempelvis socialtjänst, polis eller rättegång
                        </li>
                        <li>
                            Stöd att söka bostad för att flytta till ett tryggt eget boende. De flesta som bor i vårt skyddade boende och flyttar vidare flyttar till eget förstahandskontrakt. Vi hjälper dig att hitta en ort som ger dig trygghet i framtiden och är säker för dig och dina barn.
                        </li>
                        <li>
                            Säkerhetsplanering inför utflytt
                        </li>
                    </ul>

                    
                </SubContainer>
            </Hero>
        </Container>
    </PageWrapper>
  )
}

export default StodSkyddatBoende