"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { motion } from "framer-motion";

const links = [
  {href: "/radstod/radstod", label: "Råd och Stöd"},
  {href: "/radstod/stodvuxen", label: "Stöd till vuxen"},
  {href: "/radstod/stodaldre", label: "Stöd till äldre"},
  {href: "/radstod/stodanhoriga", label: "Stöd till anhöriga"},
  {href: "/radstod/stodunga", label: "Stöd till unga"},
  {href: "/radstod/stodgruppverksamhet", label: "Gruppverksamhet"},
  {href: "/radstod/stodmyndighet", label: "Stöd i myndighetskontakter"},
  {href: "/radstod/stodpolisrattegang", label: "Polisanmälan och rättegång"},
  {href: "/radstod/stodskyddatboende", label: "Skyddat boende"},
  {href: "/radstod/stodtillutsatt", label: "Råd till dig som utsatt"},
  {href: "/radstod/stodgestodforhindra", label: "Ge stöd och förhindra"},
  {href: "/radstod/doljbesok", label: "Dölj ditt besök"},
  {href: "/radstod/viktigalankar", label: "Viktiga länkar"},
]

function RadStod_Navlink() {
  const path = usePathname();

  return (
    <>
    <div className='flex flex-col text-white text-md md:text-md ml-6 sticky font-semibold top-[var(--navlink-total-height)]'>
      <p className='font-bold mb-4'>Läs vidare</p>
      <ul className='[&_a:hover]:text-hovernavlink [&_a:hover]:transition [&_a:hover]:duration-300 [&_a:hover]:ease-in-out'>
      {links.map((link) => (
                <li className='w-[22rem] md:text-md border border-purpleborder px-4 py-1 md:mb-4 mb-3 rounded-2xl bg-glass-gradient' key={link.href}>
                  
                  <Link scroll={true} className="relative text-sm text-white font-semibold " 
                    href={link.href}>
                    {link.href === path && (
                      <motion.span
                      layoutId="underlineradstod"
                        className="absolute left-0 top-full block h-[0.4rem] w-full bg-primary-text"
                      />
                    )}
                    {link.label}
                  </Link>
                </li>
              ))}
      </ul>
    </div>
    </>
  )
}

export default RadStod_Navlink

{/* dump

 <ul className='[&_li]:px-4 [&_li]:md:mb-4 [&_li]:mb-3 text-left [&_li]:border [&_li]:border-purpleborder [&_li]:rounded-lg'>
        <li className='hover:bg-glass-gradient hover:text-hovernavlink hover:font-bold hover:border-2 transition duration-300 ease-out'>
          <Link href="/radstod/radstod">Råd och Stöd</Link>
        </li>
        <li>
          <Link href="radstod/stodvuxen">Stöd till vuxen</Link>
        </li>
        <li>
          <Link href="/radstod/stodaldre">Stöd till äldre</Link>
        </li>
        <li>
          <Link href="/radstod/stodanhoriga">Stöd till anhöriga</Link>
        </li>
        <li>
          <Link href="/radstod/stodunga">Stöd till unga</Link>
        </li>
        <li>
          <Link href="/radstod/stodgruppverksamhet">Gruppverksamhet</Link>
        </li>
        <li>
          <Link href="/radstod/stodmyndighet">Stöd i myndighetskontakter</Link>
        </li>
        <li>
          <Link href="/radstod/stodpolisrattegang">Polisanmälan och rättegång</Link>
        </li>
        <li>
          <Link href="/radstod/stodskyddatboende">Skyddat boende</Link>
        </li>
        <li>
          <Link href="/radstod/stodtillutsatt">Råd till dig som utsatt</Link>
        </li>
        <li>
          <Link href="/radstod/stodgestodforhindra">Ge stöd och förhindra</Link>
        </li>
        <li>
          <Link href="/radstod/doljbesok">Dölj ditt besök</Link>
        </li>
        <li>
            <Link href="/radstod/viktigalankar">Viktiga länkar</Link>
        </li>
      </ul>

*/}