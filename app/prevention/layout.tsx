import { Container } from '../../components/container';
import '../../styles/globals.css';
import Prevention_Navlink from './prevention_navlink';


export default function RadStodRootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <Container>
          <div className='flex flex-col md:flex-row mx-auto'>
              <div className=''><Prevention_Navlink /></div>
        
              <div>{children}</div>
          </div>
          
        </Container>  
          
    )
  }