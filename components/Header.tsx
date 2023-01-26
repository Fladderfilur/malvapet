"use client"

import React, { useEffect, useState } from 'react'
import { Bars3Icon } from "@heroicons/react/24/solid"
import Link from 'next/link'
import {NavLinks} from './NavLinks';
import { Button } from './button';
import classNames from 'classnames';
import Image from 'next/image';
import  LoggaHead  from '../public/img/Logga_vit.png';

function Header() {
  const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false);

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) html.classList.toggle("overflow-hidden", hamburgerMenuIsOpen);
  }, [hamburgerMenuIsOpen]);

  useEffect(() => {
    const closeHamburgerNavigation = () => setHamburgerMenuIsOpen(false);

    window.addEventListener("orientationchange", closeHamburgerNavigation);
    window.addEventListener("resize", closeHamburgerNavigation);

    return () => {
      window.removeEventListener("orientationchange", closeHamburgerNavigation);
      window.removeEventListener("resize", closeHamburgerNavigation);
    };
  }, [setHamburgerMenuIsOpen]);

  return (
    <header className='fixed top-0 left-0 z-10 w-full border-b border-purpleborder h-[var(--navlink-total-height)] backdrop-blur-[12px]'>
        <div className='h-full grid grid-cols-3 px-4 pt-2 items-center bg-black md:hidden'>
             {/* Hamburger */}
             
              <div className='flex z-[20] justify-start items-center md:hidden pb-8'>
                <button onClick={() => setHamburgerMenuIsOpen((open) => !open)}>
                  <span className='sr-only'>Toggle Menu</span>
                  <Bars3Icon className='h-8 w-8 cursor-pointer text-white' />
                  <p className='text-sm text-white'>Meny</p>
                </button>
              </div>
              <div className='h-[12rem] w-[12rem] z-[20] '>
                <Link scroll={true} href='/' prefetch={false}>
                    <Image alt="Logga"src={LoggaHead} height={100} width={100}/>
                </Link>
              </div>
                <div className='flex z-[20] items-center justify-end space-x-2 md:hidden pb-8'>
                    {/* Darkmode button */}

                    <Button href="/kontakt" variant="primary">
                        Kontakta Oss
                    </Button>
                </div>
             
        </div>
         {/* Navlinks */}
         <NavLinks />
         <div
          className={classNames(
            "transition-[visibility] ",
            hamburgerMenuIsOpen ? "visible" : "delay-500 invisible"
          )}
        >
            <nav className={classNames('fixed h-auto w-full bg-background transition-opacity duration-500 [&_li]:border-b [&_li]:border-purpleborder left-0 overflow-auto pb-14', 
                hamburgerMenuIsOpen  ? "translate-x-0 opacity-100"
                                     : "translate-x-[-100vw] opacity-0" )}>

              <ul className={classNames('flex flex-col [&_a]:text-lg [&_li]:py-4 [&_li]:ml-8 text-white [&_a]:translate-y-8 font-semibold [&_a]:duration-300 [&_a]:transition-[color,transform]',
               '[&_a:hover]:text-hovernavlink [&_a:hover]:transition [&_a:hover]duration-300 ease-in',
               hamburgerMenuIsOpen && "[&_a]:translate-y-0"
               )}>
                <li onClick={() => setHamburgerMenuIsOpen(false)} className='border-t'>
                  <Link scroll={true} href="/">Hem</Link>
                </li>
                <li onClick={() => setHamburgerMenuIsOpen(false)}>
                  <Link scroll={true} href="/omoss/omoss/">Om Oss</Link>
                </li>
                <li onClick={() => setHamburgerMenuIsOpen(false)}>
                  <Link scroll={true} href="/radstod/radstod/">Råd & Stöd</Link>
                </li>
                <li onClick={() => setHamburgerMenuIsOpen(false)}>
                  <Link scroll={true} href="/relationsvald/relationsvald/">Relationsvåld</Link>
                </li>
                <li onClick={() => setHamburgerMenuIsOpen(false)}>
                  <Link scroll={true} href="/prevention/prevention/">Prevention</Link>
                </li>
                <li onClick={() => setHamburgerMenuIsOpen(false)}>
                  <Link scroll={true} href="/socialtjanst/socialtjanst">Socialtjänst</Link>
                </li>
                <li onClick={() => setHamburgerMenuIsOpen(false)}>
                  <Link scroll={true} href="/engageradig/engageradig/">Engagera Dig</Link>
                </li>
                <li onClick={() => setHamburgerMenuIsOpen(false)}>
                  <Link scroll={true} href="/ungdomsjouren/">UngdomsJouren</Link>
                </li>
                <li onClick={() => setHamburgerMenuIsOpen(false)}>
                  <Link scroll={true} href="/kontakt/">Kontakta Oss</Link>
                </li>
              </ul>
            </nav>
          </div>
    </header>
  )
}

export default Header