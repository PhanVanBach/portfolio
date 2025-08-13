import React from 'react'
import styled from 'styled-components'
import { Section, Container, Title, Subtle, Grid, Card } from '../components/ui'
import { services } from '../data'
import { theme } from '../theme'

const ServiceCard = styled(Card)`
  padding: 22px; position:relative; overflow:hidden; min-height: 170px;
  &:before{
    content: attr(data-index);
    position:absolute; top: 16px; right: 18px; font-weight:800; font-size: 28px; color:${theme.colors.accent}; opacity:.2;
  }
`

const ServiceIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M4 7h16M4 12h10M4 17h7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const Services: React.FC = () => (
  <Section id="services">
    <Container>
      <Title>What <span>I do.</span></Title>
      <Grid>
        {services.map((s, i) => (
          <ServiceCard key={s.title} data-index={(i + 1).toString().padStart(2, '0')}>
            <div style={{display:'flex', alignItems:'flex-start', gap:14}}>
              <div style={{color: theme.colors.accent}}><ServiceIcon /></div>
              <div>
                <h3 style={{margin:'2px 0 8px', fontSize:20}}>{s.title}</h3>
                <Subtle>{s.text}</Subtle>
              </div>
            </div>
          </ServiceCard>
        ))}
      </Grid>
    </Container>
  </Section>
)
