import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme'
import { GlobalStyle } from './styles/GlobalStyle'
import { Navbar } from './sections/Navbar'
import { Hero } from './sections/Hero'
import { Services } from './sections/Services'
import { Portfolio } from './sections/Portfolio'
import { About } from './sections/About'
import { Skills } from './sections/Skills'
import { Contact } from './sections/Contact'
import { Footer } from './sections/Footer'

export default function App(){
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </ThemeProvider>
  )
}
