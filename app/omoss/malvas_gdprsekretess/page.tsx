import Link from 'next/link'
import React from 'react'
import { Container } from '../../../components/container'
import { Hero, HeroSubtitle, HeroTitle } from '../../../components/hero'
import { PageWrapper } from '../../../components/page-wrapper'
import { SubContainer } from '../../../components/subcontainer'

function GdprSekretess() {
  return (
<PageWrapper>
    <Container>
        <Hero>
            <div className="">
                <HeroTitle>GDPR och Sekretess
                </HeroTitle>
                <SubContainer>
                    <div className='max-w-[72rem] mx-auto'>
                        <h1 className='text-2xl md:text-4xl'>Vår GDPR-policy</h1>

                        <h2 className='font-bold mb-6 mt-12 text-purpletext'>Personuppgiftsansvarig</h2>
                        <p className='mb-6'>Kvinnojouren Malva ansvarar för behandlingen av personuppgifter inom verksamheten.</p>

                        <h2 className='font-bold mb-6 mt-12 text-purpletext'>Information och syfte</h2>
                        <p className=''>Malva sparar viss information om stödsökande. Det som sparas är, i den mån det är känt, förnamn på stödsökande.</p>
                        <p className=''>Alla personer har rätt att vara anonyma när de söker stöd hos Malva.</p> 
                        <p className=''>Anledningen till att namn sparas är för att Malva ska kunna föra statistik över hur många som söker stöd hos oss.</p>
                        <p className=''>Statistiken samlas in för ett år i taget.</p>

                        <p className=''>Alla personer som har samtal med Malva eller är placerade i Malvas skyddade boende journalförs i det krypterade journalsystemet Secura Nova.</p>  
                        <p className=''>De personer som är anonyma registreras under fiktiva uppgifter för att statistik ska kunna inhämtas.</p>
                        <p className=''>Alla personer som har samtal med Malva får information om säker journalföring.</p>
                        <p>För de kvinnor som placeras i Malvas skyddade boende via socialtjänsten följs de föreskrifter som gäller.</p>

                        <p className='mb-2'>Malva har ett medlemsregister och syftet är att hålla medlemmar informerade om verksamhet. Registret innehåller namn, telefonnummer och mail till medlemmarna.</p>

                        <h2 className='font-bold mb-6 mt-12 text-purpletext'>Tillgång till de lagrade uppgifterna</h2>
                        <p className=''>Det är endast fast anställd personal hos Malva som har tillgång till uppgifter som sparas.</p>
                        <p className=''>Uppgifterna finns i Secura Nova eller förvaras i säkerhetsskåp.</p>
                        <p className=''>En person som finns registrerad har rätt att ges tillgång till sina uppgifter och även att få dem rättade vid behov.</p>
                        <p className='mb-2'>Samtycke till lagring och GDPR inhämtas alltid och kan tas tillbaka och om inga lagliga hinder finns kan en person begära att registrerade uppgifter raderas.</p>
                        <p className=''>Handling som lagras när Malva utför socialtjänst kan lämnas ut om lagen säger det.</p>
                        <p className=''>Det gäller endast personer som är placerade i vårt skyddade boende enligt socialtjänstlagen.</p>

                        <h2 className='font-bold mb-6 mt-12 text-purpletext'>Lagring och gallring</h2>
                        <p>Den information som sparas gällande stödsökande, i syfte att kunna föra statistik raderas så snart den är registrerad.</p>
                        <p>När det gäller de personer som är placerade i Malvas skyddade boende enligt socialtjänstlagen gallras handlingarna fem år efter att den sista journalanteckningen gjordes.</p>
                        <p>Övriga handlingar som anställningsbevis, löneutbetalningar och andra administrativa handlingar gäller särskilda gallringstider i enlighet med arkiv- och bokföringslagen.</p>
                        <p>De handlingar som ska arkiveras gallras efter fem år. När en medlem lämnar föreningen gallras adressuppgifterna bort.</p>

                        <h2 className='font-bold mb-6 mt-12 text-purpletext'>Vår sekretesspolicy</h2>
                        <p>Alla aktiva i Kvinnojouren Malva, styrelsemedlemmar, personal och volontärer samt personer som skrivs in i vårt skyddade boende skriver under ett sekretessavtal.</p>
                        <p>I avtalet framgår att information om Malvas verksamhet, var det skyddade boendet finns, vilka som har kontakt med Kvinnojouren eller Ungdomsjouren samt vilka som arbetar eller är volontärer i Malva ej får röjas till tredje part</p>
                        <p className='mb-[12rem]'>Sekretess om ovan nämnda gäller även efter avslutat uppdrag, anställning eller placering.</p>

                    </div>
                </SubContainer>
            
        </div>
    </Hero>
</Container>
</PageWrapper>
  )
}

export default GdprSekretess