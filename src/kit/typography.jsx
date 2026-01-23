import styled from "styled-components";
import { colors } from "./theme";

export const H1 = styled.h1`
  font-size: 3rem;
  font-weight: 400;
  line-height: 1.1;
  margin: 0;
`;

export const H2 = styled.h2`
  font-size: 2rem;
  line-height: 1.1;
  font-weight: 400;
  margin: 0;
`;

export const H3 = styled.h3`
  font-size: 1.5rem;
  line-height: 1.1;
  font-weight: 400;
  margin: 0;
`;

export const H4 = styled.h4`
  font-size: 1.25rem;
  line-height: 1.1;
  font-weight: 400;
  margin: 0;
`;

export const P = styled.p`
  color: inherit;
`;

export const Text = styled.p`
  color: inherit;
  font-size: 0.9rem;
  margin: 0;
`;

export const A = styled.a`
  color: inherit;
  border-bottom: 2px solid ${colors.black};
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  padding: 4px 8px;
  &:hover {
    background-color: ${colors.black};
    color: ${colors.white};
  }
`;

export const Secondary = styled.p`
  color: #727272;
`;

export const Ul = styled.ul`
  padding: 0;
  padding-left: 16px;
  margin: 0;
`;
