import Link from 'next/link'
import React from 'react'
import { Container } from '../../../components/container'
import { Hero, HeroSubtitle, HeroTitle } from '../../../components/hero'
import { PageWrapper } from '../../../components/page-wrapper'
import Image from 'next/image'
import  Hundar  from '../../../public/img/hundar.jpg';
import { SubContainer } from '../../../components/subcontainer'

function OmOssHome() {
  return (
    <PageWrapper>
        <Container>
            <Hero>
                <div className="">
                    <HeroTitle>Om oss
                    </HeroTitle>
                    <SubContainer>
                        <p className='mb-6 mt-12'>Den ideella föreningen Kvinnojouren Malva bildades 2008 och verksamheten startades 8 mars 2009. Malva är en politiskt och religiöst obunden och icke vinstdrivande förening. Malva är ingen myndighet och tillhör inte Flens kommun.</p>
                       
                      

                        <p className='mb-2'>Malva har idag anställd personal som driver den dagliga verksamheten och arbetar med råd- och stödsamtal, skyddat boende, information och prevention samt arbete med barn- och ungdomar.</p>
                       
                        
                            
                        <p className='mb-2'>På Malva kan du träffa på våra små terapihundar, Doris, Pepzi, Tjabo och Tingeling. Om det behövs extra stöd i kontakt med oss kan hundarna vara det som underlättar.</p>
                          

                            <div className='px-8 md:px-[4rem] lg:px-[6rem] xl:px-[10rem] mb-6'>
                       
                                <Image alt="Logga"src={Hundar} className="object-fill"/>
                        
                            </div>
                        
                        <p className=''>I föreningen finns även en styrelse som har ett övergripande ansvar för verksamheten. Jouren har extra stöd av volontärer som hjälper till både i det dagliga arbetet och vid specifika aktiviteter.</p> 
                      
                        <p className='mb-6'>Malvas verksamhet finansieras av bidrag, sponsring samt inkomster från vårt skyddade boende.</p>

                        <p className='mb-6'>Malva är medlem i Unizon, riksförbundet för 140 idéburna kvinno- tjej- och ungdomsjourer. Mer information finns på <span className='cursor-pointer hover:text-hovernavlink'><Link href='http://www.unizonjourer.se'>unizonjourer.se</Link></span>.</p>  
                        <p>Malva nås på telefon 0157-120 10 eller mail <span className='hover:text-hovernavlink'><a href="mailto:info@kvinnojourenmalva.se">
                                <p>info@kvinnojourenmalva.se</p>  
                            </a></span></p>
                        <p className='mb-12'>Vi finns även på <span className='cursor-pointer hover:text-hovernavlink'><Link href='https://www.facebook.com/kvinnojourenMalva'>Facebook</Link></span> och <span className='cursor-pointer hover:text-hovernavlink'><Link href='https://www.instagram.com/kvinnojourenmalva/'>Instagram</Link></span></p>   
                    </SubContainer>
                
            </div>
        </Hero>
    </Container>
  </PageWrapper>
  )
}

export default OmOssHome