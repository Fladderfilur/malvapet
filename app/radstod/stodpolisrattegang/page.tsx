
import Link from 'next/link'
import React from 'react'
import { Container } from '../../../components/container'
import { Hero, HeroSubtitle, HeroTitle } from '../../../components/hero'
import { PageWrapper } from '../../../components/page-wrapper'
import { SubContainer } from '../../../components/subcontainer'


function StodPolisRattegang() {
  return (
    <>
    <PageWrapper>
        <Container>
            <Hero>
          
                <HeroTitle className='pb-6 pt-12'>Polisanmälan och rättegång</HeroTitle>
                <SubContainer>
                   
                    <h1 className='text-2xl md:text-4xl mb-6'>Att anmäla till polisen</h1>
                    <p className='mb-6'>Att utsätta en annan person för våld är ett brott, även när det sker inom relationen. Anmäl brott till polisen så fort som möjligt. En tidig anmälan gör det lättare att förhöra eventuella vittnen och hitta tekniska bevis. Om det är ett pågående brott, eller en akut situation, ring alltid 112.</p>

                    <h1 className='text-2xl md:text-4xl mb-6'>Att göra en polisanmälan på nätet</h1>

                    <p className='mb-6'>Vissa brott kan du anmäla eller komplettera och ändra via e-tjänst. Du måste ha ett svenskt personnummer eller samordningsnummer för att kunna använda e-tjänsten. Har du skyddad identitet ska du inte använda e-tjänsten. Läs mer på polisens hemsida, <Link href="www.polisen.se">polisen.se</Link></p>

                    <h1 className='text-2xl md:text-4xl mb-6'>Att göra en polisanmälan på telefon</h1>

                    <p>Polisen är alltid skyldig att ta emot din anmälan även om du gör den per telefon. 

Vid telefonkontakt med polisen behöver du BARA lämna dina personuppgifter, och lite kort vad anmälan gäller. Gå inte in i detalj, utan be om att få bli kontaktad av en utredare! På det viset blir det någon som har större kännedom kring de här frågorna som tar kontakt med dig. </p>
                    <p className='mb-6'>Polisen har öppet för samtal dygnet runt, alla dagar. Du kan prata svenska och/eller engelska. Samtalstaxan beror på ditt telefonabonnemang. För att anmäla brott ringer du 114 14.</p>

                    <h1 className='text-2xl md:text-4xl mb-6'>Att göra polisanmälan på station</h1>

                    <p>Du har alltid möjlighet att göra en anmälan på polisstationen. Du kan se närmaste station och öppettider här, <Link href="https://polisen.se/om-polisen/kontakt/polisstationer/">https://polisen.se/om-polisen/kontakt/polisstationer/</Link></p>
                    <p className='mb-6'>Polisen finns i Flen på onsdagar.</p>

                    <p>Med din anmälan som underlag beslutar polisen eller åklagaren om förundersökning ska inledas, de kan även i de flesta fall ge dig juridisk information. Du bör få information om:</p>
                    <ul className='list-disc text-left px-12 p-6'>
                        <li>
                            <p className='mb-2'>möjligheterna att få skadestånd och brottsskadeersättning och var du kan vända dig för detta. Vill du ha åklagarens hjälp att yrka skadestånd ska du anmäla det till den polis eller åklagare som leder förundersökningen. Åklagaren oftast är skyldig att förbereda och föra din skadeståndstalan i rättegången, om du begär det</p>
                        </li>
                        <li>
                            <p className='mb-2'>var du kan vända dig för att få mer stöd och hjälp</p>
                        </li>
                        <li>
                            <p className='mb-2'>regler för målsägarbiträde, stödperson och kontaktförbud samt möjlighet till rådgivning och rättshjälp</p>
                        </li>
                        <li>
                            <p className='mb-2'>om förundersökning inleds eller läggs ned samt om åtal väcks eller inte</p>
                        </li>
                    </ul>
                    <h1 className='text-2xl md:text-4xl mb-6 mt-6'>Vad händer när du polisanmält?</h1>
                    <p className='mb-6'>Polis och åklagare beslutar om en brottsutredning ska göras, en förundersökning. Under förundersökningen kommer den som är misstänkt att förhöras av polis och åklagare. Även vittnen kommer att höras, om det finns sådana. Tyvärr har polisen begränsade resurser och det kan ta tid innan det blir en förundersökning och förhör. Fråga polisen om du undrar vad som händer.</p>
                    <p>Du som blivit utsatt för brott blir målsägare och även du kommer förhöras av polis och åklagare och du har då rätt att ha advokat (målsägarbiträde) med dig, om du så önskar. Ibland räcker det att du förhörs på telefon.
                        Även om det är jobbigt är det viktigt att du berättar så utförligt och detaljerat som du kan.</p>
                        
                    <h1 className='text-2xl md:text-4xl mb-6 mt-6'>Vem kan få skadestånd?</h1>
                    <p>Om du har blivit utsatt för ett brott kan du begära skadestånd för de skador som uppstått i samband med brottet. Den som har begått brottet är skyldig att ersätta de skador som du har fått. Om du vill ha skadestånd från den som är misstänkt bör du säga till om det när polisen förhör dig under förundersökningen. Åklagare eller målsägarbiträde kan då hjälpa dig med vilket belopp du kan kräva.</p>

                    <h1 className='text-2xl md:text-4xl mb-6 mt-6'>Vad innebär det att förundersökningen blir nedlagd?</h1>
                    <p>Om brott inte kan styrkas kan polis eller åklagare ta beslut om att förundersökningen ska läggas ned. Detta betyder inte att polis och åklagare inte tror på dig, utan att det finns för lite bevis för att kunna fortsätta utreda. Är du missnöjd med beslut om nedlagd förundersökning kan du begära överprövning. Framkommer ny bevisning eller nya händelser i ärendet kan förundersökningen återupptas.</p>

                    <h1 className='text-2xl md:text-4xl mb-6 mt-6'>Vad händer vid åtal och rättegång?</h1>
                    <p>När förundersökningen är klar gör åklagaren en bedömning om det finns tillräckligt underlag för att den misstänkte ska kunna dömas för brott. Om tillräckliga bevis bedöms finnas väcker åklagare åtal och det blir en rättegång. Vid rättegången bedömer domstolen om den misstänkte är skyldig och vilket straff denne dömas till.</p>
                    <p>Du får en kallelse till rättegång och behöver då komma. Har du ett målsägarbiträde är du på rättegången tillsammans med denne. Du sitter även tillsammans med åklagaren.</p>
                    <p>När du är utsatt för våld av partner och kanske lever på skyddad ort kan rättegången ske så att du är med på länk från en annan tingsrätt än den misstänkte. Det kan även vara så att du och den misstänkte inte behöver vara i rättssalen samtidigt.</p>
                    <p>Vid rättegången berättar åklagaren hur denne anser att brottet gått till, sedan får du, den misstänkte och till sist eventuella vittnen berätta. Du kan få frågor av åklagare/målsägarbiträde, den misstänktes advokat och/eller domaren.
                        Du får sedan en dom från tingsrätten, oftast några veckor efter rättegången. Domen går att överklaga om du inte är nöjd med beslutet.</p>
                    
                </SubContainer>
          
            </Hero>
        </Container>
    </PageWrapper>
    </>
  )
}

export default StodPolisRattegang
