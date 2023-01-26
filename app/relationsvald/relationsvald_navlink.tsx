"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { motion } from "framer-motion";

const links = [
  {href: "/relationsvald/relationsvald", label: "Våld i nära relation"},
  {href: "/relationsvald/olikaformervald", label: "Olika former av våld"},
  {href: "/relationsvald/valdiungasrelationer", label: "Våld i ungas relationer"},
  {href: "/relationsvald/valdialdresrelationer", label: "Våld i äldres relationer"},
  {href: "/relationsvald/barnirelationsvald", label: "Barn i relationsvåld"},
  {href: "/relationsvald/barnfridsbrott", label: "Barnfridsbrott"},
  {href: "/relationsvald/hjalptillvaldsutovare", label: "Hjälp till våldsutövare"},
]

function RelationsVald_Navlink() {
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
                      layoutId="underlinerelationsvald"
                        className="font-bold absolute left-0 top-full block h-[4px] w-full bg-primary-text"
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

export default RelationsVald_Navlink

