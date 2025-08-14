import React from "react";
import styled from "styled-components";
import { Section, Title, Subtle } from "../components/ui";
import { Container, Card } from "../components/ui";
import { theme } from "../theme";
import avatar from "../assets/avatar.jpg";

const AboutWrap = styled(Section)`
  background: linear-gradient(
    180deg,
    ${theme.colors.surfaceAlt},
    ${theme.colors.surface}
  );
`;
const AboutGrid = styled(Container)`
  display: grid;
  grid-template-columns: 360px 1fr;
  gap: 36px;
  align-items: center;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;
const AvatarCard = styled(Card)`
  padding: 24px;
  display: grid;
  place-items: center;
  background: radial-gradient(
      320px 180px at 50% -10%,
      ${theme.colors.accentSoft},
      transparent
    ),
    ${theme.colors.surface};
`;
const AvatarCircle = styled.div`
  width: 240px;
  height: 240px;
  border-radius: 50%;
  overflow: hidden;
  display: grid;
  place-items: center;
  border: 6px solid ${theme.colors.surfaceAlt};
  display: flex;
`;

export const About: React.FC = () => (
  <AboutWrap id="about">
    <AboutGrid>
      <AvatarCard>
        <AvatarCircle>
          <img
            style={{ maxWidth: "120%", marginTop: "150px" }}
            src={avatar}
            alt="Avatar"
          />
        </AvatarCircle>
      </AvatarCard>
      <div>
        <Title>
          About <span>me.</span>
        </Title>
        <Subtle>
          I build delightful, performant web apps. Over the years I’ve focused
          on design systems, data-rich interfaces, and shipping accessible UI at
          scale.
        </Subtle>
        <Subtle>
          I enjoy collaborating closely with designers and product teams,
          turning complex requirements into elegant, maintainable components.
        </Subtle>
      </div>
    </AboutGrid>
  </AboutWrap>
);
