import React from 'react'
import styled from 'styled-components'
import { Section, Container, Title, Subtle, Pill } from '../components/ui'
import { skills } from '../data'

const Chips = styled.div`display:flex; flex-wrap:wrap; gap:12px;`

export const Skills: React.FC = () => (
  <Section>
    <Container>
      <Title>Technical <span>skills.</span></Title>
      <Subtle style={{marginTop:-8}}>A snapshot of tools I use regularly.</Subtle>
      <div style={{height:14}} />
      <Chips>{skills.map((s) => (<Pill key={s}>{s}</Pill>))}</Chips>
    </Container>
  </Section>
)
