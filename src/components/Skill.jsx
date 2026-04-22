import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { H2 } from "../kit";

const slideUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const AnimatedSpan = styled.span`
  display: inline-block;
  animation: ${slideUp} 0.5s cubic-bezier(0.4, 0.0, 0.2, 1);
`;

const Skill = () => {
    const options = [
        "Développeur Web Full-Stack",
        "Développeur JavaScript",
        "Développeur TypeScript",
        "Développeur IA",
        "Data Scientist",
        "Développeur Python",
        "Spécialiste en Automatisation & IA",
    ];

    const [skill, setSkill] = useState(options[0]);
    useEffect(() => {
        const interval = setInterval(() => {
            setSkill(options[Math.floor(Math.random() * options.length)]);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <H2>
            <AnimatedSpan key={skill}>
                {skill}
            </AnimatedSpan>
        </H2>
    );
};

export default Skill;
