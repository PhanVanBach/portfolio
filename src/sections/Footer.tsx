import React from "react";
import styled from "styled-components";
import { Container } from "../components/ui";
import { Github, LinkedIn, XIcon } from "../components/icons";
import { theme } from "../theme";

const FooterWrap = styled.footer`
  border-top: 1px solid ${theme.colors.border};
  padding: 24px 0;
  color: ${theme.colors.textDim};
`;

export const Footer: React.FC = () => (
  <FooterWrap>
    <Container
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 12,
      }}
    >
      <div>Bach Phan</div>
      <div style={{ display: "flex", gap: 12 }}>
        <a href="#projects">My projects</a>
        <a href="#about">About me</a>
        <a href="#contact">Contact me</a>
      </div>
    </Container>
  </FooterWrap>
);
