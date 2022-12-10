import React, { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Container } from 'react-bootstrap';


const Default = ({ children }: Props) => {
  return (
    <>
    <Header/>
    <Container fluid> 
        {children}
        {/* <Footer/> */}
    </Container>
    </>
  )
}

interface Props {
  children?: ReactNode
  // any props that come into the component
}

export default Default;