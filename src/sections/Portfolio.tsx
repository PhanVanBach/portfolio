import React from "react";
import styled from "styled-components";
import { Section, Container, Title, Grid, Card } from "../components/ui";
import { projects } from "../data";
import { theme } from "../theme";

const ProjectCard = styled(Card)`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
    aspect-ratio: 16/10;
    object-fit: cover;
  }
  .body {
    padding: 18px;
  }
  h4 {
    margin: 0 0 6px;
    font-size: 18px;
  }
  p {
    margin: 0;
    color: ${theme.colors.textDim};
    font-size: 14px;
  }
`;

export const Portfolio: React.FC = () => (
  <Section id="portfolio">
    <Container>
      <Title>
        Featured <span>projects.</span>
      </Title>
      <Grid>
        {projects.map((p) => (
          <ProjectCard key={p.id}>
            <img src={p.image} alt="godn" />
            <div className="body">
              <a href={p.url} target="_blank" rel="noopener noreferrer">
                {p.title}
              </a>
              <p>{p.text}</p>
            </div>
          </ProjectCard>
        ))}
      </Grid>
    </Container>
  </Section>
);
