import Link from 'next/link'
import React from 'react'
import { Container } from '../../../components/container'
import { Hero, HeroSubtitle, HeroTitle } from '../../../components/hero'
import { PageWrapper } from '../../../components/page-wrapper'
import Image from 'next/image'
import { SubContainer } from '../../../components/subcontainer'

function StodGeStodForhindra() {
  return (
    <PageWrapper>
        <Container>
            <Hero>
                <HeroTitle className='md:text-6xl xl:text-8xl'>Ge stöd och förhindra – för dig som står bredvid</HeroTitle>
                <SubContainer>
                <h1 className='text-2xl md:text-4xl mb-6 mt-6'>Vad du kan göra som anhörig</h1>
                    <ul className='list-disc text-left px-12 p-6'>
                        <li>
                        Var uppmärksam på om din vän slutar höra av sig efter att hon blev tillsammans med sin nya partner
                        </li>
                        <li>
                        Hämtas hon alltid av sin partner när hon slutar
                        </li>
                        <li>
                        Följer hon aldrig med på det ni tidigare gjorde tillsammans och kommer med olika ursäkter
                        </li>
                        <li>
                        Förklarar hon skador på ett sätt som du känner inte stämmer
                        </li>
                    </ul>

                    <p>Våga tro det värsta, våldsutsatta berättar ofta bara en del av det som hänt.

Hjälp din anhörig att ta reda på vart hon kan vända sig, och vilken hjälp hon kan få, som att vända sig till Malva. Ta själv stöd och sök information så att du kan vara ett bra stöd. Kunskap ger förståelse för hur den våldsutsatta kan ha det och det blir lättare att möta din anhöriga.</p>

                    <p>Tro på det du får höra. Om någon i din närhet anförtror dig sin berättelse, visa att du orkar lyssna och tar berättelsen på allvar.</p>

                    <p>Om du tror att någon du känner lever i en våldsam relation våga fråga men ifrågasätt eller skuldbelägg inte. Prata om din oro utifrån dig och förklara att du är rädd om din anhöriga utan att lägga för stor skuld på utövaren då detta kan leda till att din anhöriga sluter sig. Att börja prata är ett stort steg. Den som är utsatt kanske förnekar problemen eller blir arg, försök att inte ta det personligt. Varje person som påtalar sin oro och/eller vad hen ser sår ett frö till förändring.</p>

                    <p>Erbjud dig att vara en trygg person som lyssnar men tala även om att du kan vara stöd och en länk till att få samtal hos kvinnojour, söka skydd eller polisanmäla. Räkna med att det kommer ta tid innan din anhöriga vågar förändra sin situation.

Var ärlig med din oro men presentera ingen sanning om din anhörigas situation. Visa dina känslor men utan att anklaga. Det är viktigt att du visar att du ser att något är fel. Berätta att våld är ett brott men inte den utsattas fel. Vet du att din anhöriga är utsatt för våld kan du polisanmäla.</p>

                    <p>Var där som stöd men alla val och all förändring behöver komma från den utsatta. Stanna kvar även om din anhöriga inte ser det du ser eller vill bryta sin situation nu. Det är frustrerande att stå bredvid men tvång fungerar sällan.

Var ett stabilt stöd utan att agera terapeut eller någon som ”vet mer”. Hjälp till med kontakt med oss på Malva. </p>

                    <p>Du kan förhindra våld genom att våga förstå att relationsvåld finns närmare oss alla än vad vi själva törs tro. Genom att våga lära dig mer om våld i nära relation, hur det kan se ut, hur vanligt det är och hur det kan uppmärksammas kan du förhindra våldet eller hjälpa innan det går för långt.</p>

                    <p>Hör eller ser du någon bli utsatt för våld av sin partner. Agera!</p>

                    <p>Förmedla att du ser och hör genom att ropa, gå fram, knacka på dörren, hämta mer hjälp, ring polis och/eller socialtjänst.</p>

                    <p>Utsätt inte dig själv för risker, det räcker med att visa att du hör/ser vad som sker för att våldet just då kan upphöra. Du kan rädda liv!</p>
                </SubContainer>
            </Hero>
        </Container>
    </PageWrapper>
  )
}

export default StodGeStodForhindra