import React from "react";
import styled from "styled-components";
import { Section, Container, Pill, Subtle, Button } from "../components/ui";
import { theme } from "../theme";
import { Github, LinkedIn, XIcon, Mail } from "../components/icons";

const HeroWrap = styled(Section)`
  background: radial-gradient(
      600px 300px at 10% -20%,
      ${theme.colors.accentSoft},
      transparent
    ),
    radial-gradient(
      600px 300px at 90% -20%,
      ${theme.colors.accentSoft},
      transparent
    );
`;
const HeroGrid = styled(Container)`
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;
  gap: 18px;
  text-align: center;
`;
const HeroTitle = styled.h1`
  font-size: clamp(28px, 5vw, 40px);
  margin: 6px 0 10px;
  font-weight: 900;
  span {
    color: ${theme.colors.accent};
  }
`;
const Socials = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-top: 14px;
  a {
    width: 38px;
    height: 38px;
    display: grid;
    place-items: center;
    border-radius: ${theme.radii.round};
    border: 1px solid ${theme.colors.border};
    background: ${theme.colors.surface};
    color: ${theme.colors.textDim};
  }
  a:hover {
    color: ${theme.colors.text};
  }
`;

export const Hero: React.FC = () => (
  <HeroWrap id="top" padTop={80} padBot={40}>
    <HeroGrid>
      <Pill>
        👋 Hi, I am{" "}
        <strong style={{ color: theme.colors.text }}>Phan Van Bach</strong>
      </Pill>
      <HeroTitle>
        A seasoned <span>Frontend Developer</span> transforming ideas into
        stunning digital experiences.
      </HeroTitle>
      <Subtle>Let’s create something amazing!</Subtle>
      <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
        <Button href="#contact">Contact Me</Button>
        <Button href="#portfolio" ghost>
          Explore Work
        </Button>
      </div>
    </HeroGrid>
  </HeroWrap>
);
