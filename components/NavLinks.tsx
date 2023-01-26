"use client"

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "./container";
import Image from 'next/image';
import  LoggaHead  from '../public/img/Logga_vit.png';

const links = [
  
  { href: "/omoss/omoss/", label: "Om Oss" },
  { href: "/radstod/radstod/", label: "Råd & Stöd" },
  { href: "/relationsvald/relationsvald/", label: "Relationsvåld" },
  { href: "/prevention/prevention/", label: "Prevention" },
  { href: "/socialtjanst/socialtjanst/", label: "Socaltjänst" },
  { href: "/engageradig", label: "Engagera dig" },
  { href: "/ungdomsjouren", label: "Ungdomsjouren" },
  
];

export const NavLinks = () => {
  const path = usePathname();

return (
    <header className="relative z-10 w-full h-[var(--navlink-total-height)] hidden md:block">
      <Container className="flex pt-2">
       
          <nav className="h-full w-full  pb-0">
            
            <ul className="[&_li]:ml-4 flex items-center h-full mx-auto justify-between [&_a:hover]:text-hovernavlink" >
            <div className='h-[8rem] w-[10rem] relative min-w-[10rem]'>
              <Link scroll={true} href='/' prefetch={false}>
                  <Image alt="Logga"src={LoggaHead} objectFit="contain"/>
              </Link>
            </div>
              {links.map((link) => (
                <li key={link.href}>
                  <Link scroll={true} className="relative text-white font-semibold text-xs md:text-md hover:transition duration-300 ease-out " 
                    href={link.href}>
                    {link.href === path && (
                      <motion.span
                        layoutId="underline"
                        className="absolute left-0 top-full block h-[4px] w-full bg-btn-purple"
                      />
                    )}
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
      </Container>
    </header>
  );
}


{/* Navlinks 
import { categories } from "../constants";
import NavLink from "./NavLink";
import { usePathname} from "next/navigation";

function NavLinks() {
    const pathname = usePathname();

    const isActive = (path: string) => {
        return pathname?.split('/').pop() === path;
    }
  return (
    <nav>
        {categories.map((category) =>(
            <NavLink 
            key={category} 
            category={category} 
            isActive={isActive(category)} />
        ))}
    </nav>
  )
}

export default NavLinks

"om oss"
|    "råd & stöd"
|    "våld"
|    "prevention"
|    "soc"
|    "engagera dig";

*/}

 {/* Navlinks 
import Link from "next/link";

type Props = {
    category: string;
    isActive: boolean;
}

function NavLink({category, isActive}: Props) {
  return (
    <Link href={`/${category}`} 
    className={`navLink ${
        isActive && 
        "underline decoration-purple-500 underline-offset-4 font-bold text-lg"
        }`}
    >
        {category}</Link>
  )
}

export default NavLink
*/}