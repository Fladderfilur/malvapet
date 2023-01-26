import Link from 'next/link'
import React from 'react'

import { PageWrapper } from '../../components/page-wrapper'

export default function OmOss() {
  return (
    <PageWrapper>
      <>
        <div className='text-white text-4xl'>Råd och stöd Home</div>
        <div className='text-white text-4xl'>
          <Link href="/omoss/malvas_anstallda">Om oss länk</Link>
        </div>
      </>
    </PageWrapper>
  )
}

