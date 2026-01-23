import { keyframes } from "styled-components";

export const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const hueVariable = Math.random() * 360;

export const colors = {
    beige: `hsl(${hueVariable}deg 35% 96%)`,
    black: `hsl(${hueVariable}deg 15% 12%)`,

    beigeHover: `hsl(${hueVariable}deg 40% 88%)`,
    blackHover: `hsl(${hueVariable}deg 15% 22%)`,

    border: `hsl(${hueVariable}deg 25% 90%)`,

    blackLight: `hsl(${hueVariable}deg 12% 35%)`,
    text: `hsl(${hueVariable}deg 18% 8%)`,
    secondary: `hsl(${hueVariable}deg 15% 50%)`,
    white: `hsl(${hueVariable}deg 0% 99%)`,

    popout: `hsl(${hueVariable}deg 45% 92%)`,
};
