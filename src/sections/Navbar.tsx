import React from 'react'
import styled from 'styled-components'
import { Container, Button } from '../components/ui'
import { theme } from '../theme'

const NavWrap = styled.nav`
  position: sticky; top: 0; z-index: 50; backdrop-filter: blur(8px);
  border-bottom: 1px solid ${theme.colors.border};
  background: linear-gradient(180deg, rgba(13,17,23,.9), rgba(13,17,23,.6));
`
const NavInner = styled(Container)`
  display:flex; align-items:center; justify-content:space-between; height:64px;
`
const Brand = styled.a`
  font-weight: 900; letter-spacing: .5px; font-size: 20px;
  &:before{ content:'Leinad.'; }
`
const NavLinks = styled.div`
  display:flex; align-items:center; gap:18px;
  a{ color:${theme.colors.textDim}; font-weight:600; }
  a:hover{ color:${theme.colors.text}; }
`

export const Navbar: React.FC = () => (
  <NavWrap>
    <NavInner>
      <Brand href="#top" />
      <NavLinks>
        <a href="#services">Services</a>
        <a href="#portfolio">Projects</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <Button href="#resume" ghost>View Resume</Button>
      </NavLinks>
    </NavInner>
  </NavWrap>
)
