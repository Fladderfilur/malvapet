"use client"

import next from "next";
import { Container } from "./container";
import Link from "next/link";
import {FaInstagram, FaFacebook} from 'react-icons/fa'
import Image from 'next/image'
import  LoggaHead  from '../public/img/Logga_vit.png';

export const Footer = () => (
    <footer className="border-t border-purpleborder mt-8 py-[3.4rem] text-sm text-footer-text bg-page-gradient">
        <Container>
            <div className='h-1/2 w-full flex md:flex-row flex-col justify-around items-start  z-8'>
                {/* Följ oss - icons section */}
                <div className='p-5'>
                    
                    <div className='relative h-[10.5rem] w-[14.0rem] '>
                        <Link scroll={true} href='/' prefetch={false}>
                            <Image alt="Logga"src={LoggaHead} layout="fill"/>
                        </Link>
                    </div>

                    <div className='flex justify-center gap-6 pb-5 pt-8'>
                        {/* icons */}
                        <Link target="_blank" href="https://www.facebook.com/kvinnojourenMalva/">
                            <FaFacebook className='text-3xl text-purpletext cursor-pointer'/>
                        </Link>
                        <Link target="_blank" href="https://www.instagram.com/kvinnojourenmalva/">
                            <FaInstagram className='text-3xl text-purpletext cursor-pointer' />
                        </Link>
                    </div>
                   
                </div>

                {/* kontakta oss - icons section */}
                <div className='p-5'>
                    <ul className="[&_li]:text-lg [&_li]:text-purpletext [&_li]:ml-2">
                        <p className=' font-bold text-white text-lg pb-4 uppercase'>
                            Kontakta oss
                        </p>
                
                        <li className='text-md font-semibold pb-2'>
                                Telefon
                        </li>
                        <li className='font-semibold pb-2 cursor-pointer'>    
                            <a href="tel:+46015712010">
                                <p >0157-12010</p>
                            </a>
                        </li>
                        <li  className='pb-4'>
                            <p>Måndag-fredag: 08.00 - 16.00</p>
                        </li>
                        
                        <li className='font-semibold  pb-2'>
                            <p>E-post</p>
                        </li>
                        <li className='font-semibold  pb-2 cursor-pointer'>
                            <a href="mailto:info@kvinnojourenmalva.se">
                                <p>info@kvinnojourenmalva.se</p>  
                            </a>
                        </li>
                        <li>
                            <p>Organisationsnr: 802443-8155</p>
                        </li>
                    </ul>
                </div>
                {/* stöd oss - icons section */}
                <div className='p-5'>
                    <ul className="[&_a]:text-md [&_li]:text-purpletext [&_li]:ml-2">
                        <p className=' font-bold text-white text-lg pb-4 uppercase'>stöd oss</p>
                        <li className=' font-semibold text-md pb-2'>
                            <p>Skänk en gåva</p>
                        
                        </li>
                        <li className='font-bold text-md pb-2 cursor-pointer'>
                            <p>Bankgiro: <span className='font-normal'>357-3730</span></p>
                        </li>
                        <li className='font-bold text-md pb-4 cursor-pointer'>
                            <p>Swish: <span className='font-normal'>123 040 43 01</span></p>
                        </li>
                        <li className='font-bold text-xl pt-2 pb-2 cursor-pointer hover:text-white transition-colors'>
                            <Link scroll={true} href='volontar'>
                                <p>Bli volontär</p>
                            </Link> 
                        </li>
                        <li className='font-bold text-xl pt-2 pb-2 cursor-pointer hover:text-white transition-colors'>
                            <Link scroll={true} href='ungdomsjouren'>
                                <p>Ungdomsjouren</p>
                            </Link> 
                        </li>
                    </ul>
                </div>
            </div>

            <div className="text-center mb-6 text-purpletext font-bold text-lg">
                <h2>Vid AKUT fara ring alltid 112. Socialjouren Sörmland nås via 112</h2>
            </div>

            <div className='flex flex-col justify-center items-center text-center'>
                <h1 className='text-footer-text font-semibold'>Copyright © 2023 Kvinnojouren Malva</h1>
            </div>
        </Container>
    </footer>
)