import { Container } from '../../components/container';
import '../../styles/globals.css';
import Omoss_Navlink from './omoss_navlink';


export default function OmossRootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <Container>
          <div className='flex flex-col md:flex-row mx-auto'>
              <div className='mt-12'><Omoss_Navlink /></div>
        
              <div>{children}</div>
          </div>
        </Container>  
          
    )
  }