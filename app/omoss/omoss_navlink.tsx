"use client"

import Link from 'next/link'
import React from 'react'

function Omoss_Navlink() {
  return (
    <>
    <div className='flex flex-col text-white text-md md:text-lg ml-6 sticky top-[var(--navlink-total-height)]'>
      <p className='font-bold mb-4'>Läs vidare</p>
      <ul className='[&_li]:px-4 [&_li]:md:mb-4 [&_li]:mb-3 text-left [&_li]:border [&_li]:border-purpleborder [&_li]:rounded-lg'>
        <li>
          <Link href="/omoss/omoss">Om oss</Link>
        </li>
        <li>
          <Link href="/omoss/malvas_anstallda">Anställda</Link>
        </li>
        <li>
          <Link href="/omoss/malvas_radochstod">Råd och stöd</Link>
        </li>
        <li>
          <Link href="/omoss/malvas_skyddatboende">Skyddat boende</Link>
        </li>
        <li>
          <Link href="/omoss/malvas_styrelse">Styrelse</Link>
        </li>
        <li>
          <Link href="/omoss/malvas_styrelse">Verksamhetsdokument</Link>
        </li>
        <li>
          <Link href="/omoss/malvas_historia">Historia</Link>
        </li>
        <li>
          <Link href="/omoss/malvas_gdprsekretess">GDPR och sekretess</Link>
        </li>
      </ul>
    </div>
    </>
  )
}

export default Omoss_Navlink