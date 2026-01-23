import {
    Split,
    PaddedSplitSection,
    ProfileImage,
    H1,
    P,
    Secondary,
    Spacer,
    Row,
    ActionButton,
} from "../kit";
import Skill from "./Skill";
import profile from "../../images/Profile.jpg";

/**
 * HeroSection component - Introduction section with profile and greeting
 */
const HeroSection = () => {
    return (
        <Split>
            <PaddedSplitSection>
                <ProfileImage
                    src={profile}
                    alt="Princy profileimage"
                />
                <H1>Wanna buy me a coffee?👋🏾 </H1>
                <P>Discutons ensemble!</P>
            </PaddedSplitSection>
            <PaddedSplitSection
                style={{
                    padding: 0,
                    minHeight: 210,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                }}
            >
                <Skill />
                <Secondary>
                    Bienvenue, je suis <b>Princy RANDIMBIMANANA</b> <br />
                    Étudiant en informatique à la <b>MISA (Mathématiques, Informatique et Statistiques Appliquées)</b> de l'Université d'Antananarivo
                </Secondary>
                <Spacer />
                <Row $gap={"8px"}>
                    <ActionButton href="#projects">Projets</ActionButton>
                </Row>
            </PaddedSplitSection>
        </Split>
    );
};

export default HeroSection;
