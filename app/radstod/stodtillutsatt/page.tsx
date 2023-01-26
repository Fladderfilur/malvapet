import Link from 'next/link'
import React from 'react'
import { Container } from '../../../components/container'
import { Hero, HeroSubtitle, HeroTitle } from '../../../components/hero'
import { PageWrapper } from '../../../components/page-wrapper'
import Image from 'next/image'
import { SubContainer } from '../../../components/subcontainer'

function StodTillUtsatt() {
  return (
    <PageWrapper>
    <Container>
        <Hero>
            <HeroTitle className=''>Råd och stöd till dig som är utsatt</HeroTitle>
            <SubContainer>
             

                <h1 className='text-2xl md:text-4xl mb-6 mt-6'>Råd till dig som är utsatt för våld i nära relation</h1>

                <p>Tro inte på honom när han säger att han ska sluta slå. Skapa en plan för hur du ska ta dig ifrån om du blir misshandlad igen. Ta reda på så mycket du kan innan det händer igen. Var kan du vända dig på dagtid? Under kvällar och helger? Finns det någon du kan ringa för att få hjälp, någon vän eller en professionell?</p>

                <h1 className='text-2xl md:text-4xl mb-6 mt-6'>Våga berätta, våga be om hjälp!</h1>

                <p className='mb-6'>Var uppmärksam på signaler från och beteende hos din partner. Vad finns det för kvinnosyn. Hur pratar han om och till kvinnor. Finns svartsjuka. Blir hen arg när du pratar med andra människor, framförallt de med motsatt kön. Finns ett kontrollbehov. Får du göra vad du vill utan att hela tiden rapportera eller få godkännande. Får du ofta skjuts överallt. Kontaktar hen dig för att veta var du är och vem du är med.  Pratar hen nedlåtande om dina kamrater, kollegor och/eller släkt. Ska hen ha tillgång till ditt inlogg på sociala medier, din Kivra eller ditt bankkonto. Hur hen är mot djur.</p>
                <p className='italic mb-6'>Kom ihåg!  En man som utövar våld är inte alltid elak, han växlar ofta mellan att vara ångerfull och visa kärlek.</p>

                <p>Om du blir misshandlad fysiskt eller psykiskt eller utsatt för sexuellt våld skriv dagbok. Skriv ned varje gång det händer, vad som hänt och hur du upplevde det. Det är lätt att glömma vad som händer, speciellt om det sker ofta. Skriver du ned så blir det lättare att komma ihåg och kunna berätta vad som hänt vid till exempel en polisanmälan.</p>

                <p>Våga berätta vad som hänt! DET ÄR ALDRIG DITT FEL ATT DU ÄR UTSATT AV DIN PARTNER. Prata med någon som du litar på, en kompis, anhörig eller kanske en arbetskamrat. Känns det enklare att prata med någon du inte känner kan du vända dig till oss på Malva.</p>

                <p>Dokumentera eventuella skador genom att skriva ned och fotografera synliga skador. Kontakta sjukvården och be läkare dokumentera dina skador som bevis.

Spara alla sms, all mailkontakt och alla röstmeddelanden. Försök spela in telefonsamtal eller samtal i hemmet.</p>

                <p>Ta hjälp av en kamrat eller till exempel en kvinnojour att göra en polisanmälan.</p>

                <p>Tro inte att det inte ska hända igen!</p>

                <p>Om du behöver fly och har möjlighet att planera detta gör det tillsammans med oss på Malva, socialtjänsten, familj och vänner för att få optimalt stöd. Kom ihåg att även planera för barnens säkerhet.</p>

                <p>Har du tid att planera att fly packa en väska med exempelvis de id-kort du, och barnen, har. Se till att få med ekonomiska handlingar och ta ut kontanter på hemorten. Packa ned eventuella värdehandlingar och värdesaker. Lägg ned det mest nödvändiga till dig, och barnen, kläder, gosedjur, nappar, blöjor, medicin, glasögon/linser, foton, hjälpmedel, hygienartiklar.</p>

                <p>Slå av alla platstjänster på dina, och barnens, telefon och surfplattor! Gör inga uppdateringar om din (planerade) flykt på sociala medier.</p>

                <p>Om du inte kan planera din flykt, låt inte det hindra dig till att ta beslut att fly. Både vi på Malva och socialtjänsten kan hjälpa dig med att få det mest nödvändiga till dig och barnen.</p>
            </SubContainer>
        </Hero>
    </Container>
</PageWrapper>
  )
}

export default StodTillUtsatt