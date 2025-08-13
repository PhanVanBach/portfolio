import React from "react";
import styled from "styled-components";
import {
  Section,
  Container,
  Title,
  Subtle,
  Grid,
  Card,
  Pill,
  Button,
} from "../components/ui";
import { theme } from "../theme";

const ContactGrid = styled(Container)`
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;
const Field = styled.input`
  width: 100%;
  padding: 12px 14px;
  border-radius: ${theme.radii.md};
  border: 1px solid ${theme.colors.border};
  background: ${theme.colors.surfaceAlt};
  color: ${theme.colors.text};
`;
const TextArea = styled.textarea`
  width: 100%;
  padding: 12px 14px;
  border-radius: ${theme.radii.md};
  border: 1px solid ${theme.colors.border};
  background: ${theme.colors.surfaceAlt};
  color: ${theme.colors.text};
  min-height: 120px;
  resize: vertical;
`;

export const Contact: React.FC = () => (
  <Section id="contact">
    <Container>
      <Title>
        Contact <span>me.</span>
      </Title>
      <Subtle>
        I’m currently open to full-time, contract or part-time Frontend roles.
      </Subtle>
      <div style={{ height: 18 }} />
      <ContactGrid>
        <Card style={{ padding: 22 }}>
          <h3 style={{ marginTop: 0 }}>Have an awesome project idea?</h3>
          <Subtle>Let’s discuss.</Subtle>
          <div style={{ height: 18 }} />
          <div style={{ display: "grid", gap: 8 }}>
            <Pill>📞 +84353435348</Pill>
            <Pill>✉️ bachphan154@gmail.com</Pill>
            <Pill>📍 Da Nang</Pill>
          </div>
        </Card>
      </ContactGrid>
    </Container>
  </Section>
);
