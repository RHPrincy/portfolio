import { useState } from "react";
import {
    Nav,
    SignatureImage,
    P,
    A,
    Content,
    CalloutSection,
    Spacer,
    Container,
    ContentContainer,
    PopoutContainer,
    Row,
    Collapse,
    Grow,
} from "./kit";
import signature from "../images/signature.png";
import { projects } from "./data/projects";
import { useTagFilter } from "./hooks/useTagFilter";
import HeroSection from "./components/HeroSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import PopoutElement from "./components/PopoutElement";

/**
 * Main App component
 */
const App = () => {
    // Popout state management
    const [popout, setPopout] = useState(false);
    const [popoutType, setPopoutType] = useState(null);

    // Tag filtering logic
    const {
        flatTags,
        selectedTags,
        handleTagClick,
        resetTags,
        displayedProjects,
    } = useTagFilter(projects);

    // Handler for info button clicks
    const handleInfoClick = (item, type) => {
        setPopout(item);
        setPopoutType(type);
    };

    // Handler to close popout
    const handleClosePopout = () => {
        setPopout(false);
    };

    return (
        <Container $popout={popout}>
            <ContentContainer $popout={popout}>
                <Nav>
                    <SignatureImage src={signature} alt={"Harilala Princy"} />
                    <P className="hos-500">H. Princy</P>
                    <A className="hos-350" href="https://github.com/RHPrincy">
                        Github
                    </A>
                </Nav>

                <Content>
                    <HeroSection />
                </Content>

                <CalloutSection>
                    <Content>
                        <ExperienceSection onInfoClick={handleInfoClick} />
                    </Content>
                </CalloutSection>

                <Content>
                    <ProjectsSection
                        flatTags={flatTags}
                        selectedTags={selectedTags}
                        onTagClick={handleTagClick}
                        onResetTags={resetTags}
                        displayedProjects={displayedProjects}
                    />
                </Content>

                <Spacer size={32} />

                <CalloutSection style={{ position: "relative", overflow: "hidden" }}>
                    <Content>
                        <ContactSection />
                    </Content>
                </CalloutSection>
            </ContentContainer>

            <PopoutContainer $popout={popout}>
                <Row>
                    <Collapse onClick={handleClosePopout} />
                    <Grow />
                </Row>
                <Spacer size={16} />
                {popout && <PopoutElement work={popout} type={popoutType} />}
            </PopoutContainer>
        </Container>
    );
};

export default App;
