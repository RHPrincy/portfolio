import {
    Split,
    SplitSection,
    H3,
    Spacer,
    List,
    ListItem,
    Row,
    ListImage,
    ListHeading,
    ListText,
    Grow,
    Info,
} from "../kit";
import { work } from "../data/work";
import { awards } from "../data/awards";

/**
 * ExperienceSection component - Professional experience and awards
 * @param {Function} onInfoClick - Handler for info button clicks
 */
const ExperienceSection = ({ onInfoClick }) => {
    return (
        <Split style={{ alignItems: "flex-start" }}>
            <SplitSection>
                <H3>Experience professionnelle</H3>
                <Spacer size={8} />
                <List>
                    {work.map((workItem, i) => (
                        <ListItem key={i}>
                            <Row $gap={"8px"}>
                                <ListImage src={workItem.icon} alt={workItem.company} />
                                <div>
                                    <ListHeading>{workItem.company}</ListHeading>
                                    <Spacer size={4} />
                                    <ListText>{workItem.title}</ListText>
                                </div>
                                <Grow />
                                <Info
                                    onClick={() => onInfoClick(workItem, "WORK")}
                                />
                            </Row>
                        </ListItem>
                    ))}
                </List>
            </SplitSection>
            <SplitSection>
                <H3>Cértificats et Réalisations </H3>
                <Spacer size={8} />
                <List>
                    {awards.map((award, i) => (
                        <ListItem key={i}>
                            <Row $gap={"8px"}>
                                <ListImage src={award.icon} alt={award.title} />
                                <div>
                                    <ListHeading>{award.title}</ListHeading>
                                    <Spacer size={4} />
                                    <ListText>{award.description}</ListText>
                                </div>
                                <Grow />
                                <Info
                                    onClick={() => onInfoClick(award, "AWARD")}
                                />
                            </Row>
                        </ListItem>
                    ))}
                </List>
            </SplitSection>
        </Split>
    );
};

export default ExperienceSection;
