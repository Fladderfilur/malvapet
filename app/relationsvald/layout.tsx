import { Container } from '../../components/container';

import '../../styles/globals.css';
import RelationsVald_Navlink from './relationsvald_navlink';


export default function RelationsValdRootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <Container>
          <div className='flex flex-col md:flex-row mx-auto'>
              <div className=''><RelationsVald_Navlink /></div>
        
              <div>{children}</div>
          </div>
          
        </Container>  
          
    )
  }