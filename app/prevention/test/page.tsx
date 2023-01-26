import React from 'react'
import { Container } from '../../../components/container'
import { PageWrapper } from '../../../components/page-wrapper'
import Image from 'next/image'
import Blomma from '../../../public/img/Blomman.png'

function PreventionHome() {
  return (
    <PageWrapper>
        <Container>
            <div className='relative'>
            <div className='w-full h-full z-20 absolute bg-background/95'></div>
            <Image className='grayscale z-10' alt='Blomma' width={1000} height={1000} src={Blomma}></Image>
            
           </div>
        </Container>
    </PageWrapper>
  )
}

export default PreventionHome