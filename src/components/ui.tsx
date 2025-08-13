import styled from "styled-components";
import { theme } from "../theme";

export const Container = styled.div`
  width: 100%;
  max-width: ${theme.container};
  margin: 0 auto;
  padding: 0 24px;
`;

export const Section = styled.section<{ padTop?: number; padBot?: number }>`
  padding-top: ${({ padTop }) => padTop ?? 80}px;
  padding-bottom: ${({ padBot }) => padBot ?? 80}px;
`;

export const Card = styled.div`
  background: ${theme.colors.surface};
  border-radius: ${theme.radii.xl};
  box-shadow: ${theme.shadow.soft};
  border: 1px solid ${theme.colors.border};
  text-align: center;
`;

export const Pill = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  border-radius: ${theme.radii.round};
  border: 1px solid ${theme.colors.chipBorder};
  background: ${theme.colors.chip};
  font-size: 14px;
  color: ${theme.colors.textDim};
`;

export const Title = styled.h2`
  font-size: clamp(28px, 3vw, 34px);
  margin: 0 0 24px 0;
  font-weight: 800;
  letter-spacing: 0.2px;
  span {
    color: ${theme.colors.accent};
  }
`;

export const Subtle = styled.p`
  color: ${theme.colors.textDim};
  line-height: 1.7;
`;

export const Button = styled.a<{ ghost?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 12px 18px;
  border-radius: ${theme.radii.round};
  background: ${({ ghost }) => (ghost ? "transparent" : theme.colors.accent)};
  color: ${({ ghost }) => (ghost ? theme.colors.text : "#001512")};
  border: 1px solid
    ${({ ghost }) => (ghost ? theme.colors.border : theme.colors.accent)};
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.08s ease, box-shadow 0.2s ease, background 0.2s ease;
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.35);
  }
`;

export const Grid = styled.div<{ cols?: number; min?: string }>`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(${({ cols }) => cols ?? 3}, 1fr);
  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;
