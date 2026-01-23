import styled, { keyframes } from "styled-components";
import { H3, H4, Hr, Ul, Spacer, A } from "../kit";

const slideIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const AnimatedContainer = styled.div`
  animation: ${slideIn} 0.4s ease-out;
`;

const PopoutContent = styled.div`
    height: calc(100vh - 32px - 24px - 16px);
    width: calc(clamp(300px, 20%, 350px) - 16px);
    overflow: auto;
`;

/**
 * PopoutElement component for displaying detailed information
 * @param {Object} work - Work or award data object
 * @param {string} type - Type of popout ("WORK" or "AWARD")
 */
const PopoutElement = ({ work, type }) => {
    // Determine a unique key for animation restart
    const key = type === "WORK" ? work.company : work.title;

    if (type === "WORK") {
        return (
            <AnimatedContainer key={key}>
                <PopoutContent>
                    <H3>{work.company}</H3>
                    <Spacer size={12} />
                    <H4>{work.title}</H4>
                    <Hr />
                    <p>{work.description}</p>
                    <Hr />
                    <Ul>
                        {work.bullets.map((bullet, i) => (
                            <li key={i}>{bullet}</li>
                        ))}
                    </Ul>
                </PopoutContent>
            </AnimatedContainer>
        );
    }

    if (type === "AWARD") {
        return (
            <AnimatedContainer key={key}>
                <PopoutContent>
                    <H3>{work.title}</H3>
                    <Spacer size={12} />
                    <H4>{work.agency}</H4>
                    <Hr />
                    <p>{work.description}</p>
                    <Hr />
                    <p>{work.detail}</p>
                    {work.link && (
                        <A href={work.link} target="_blank">
                            Voir la certification
                        </A>
                    )}
                </PopoutContent>
            </AnimatedContainer>
        );
    }

    return null;
};

export default PopoutElement;
