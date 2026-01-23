import {
    ProjectRow,
    ProjectRowImage,
    ProjectContent,
    ProjectTitle,
    ProjectDescription,
    Spacer,
    Row,
    Tag,
    A,
} from "../kit";

/**
 * ProjectItem component - Individual project display
 * @param {Object} project - Project data object
 */
const ProjectItem = ({ project }) => {
    return (
        <ProjectRow>
            <ProjectRowImage src={project.image} alt={project.title} />
            <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <Spacer size={8} />
                <Row $gap={"8px"} style={{ flexWrap: "wrap" }}>
                    {project.tags.map((tag, i) => (
                        <Tag key={i}>{tag}</Tag>
                    ))}
                </Row>
                <Spacer size={8} />
                <ProjectDescription>{project.description}</ProjectDescription>
                {project.links && (
                    <>
                        <Spacer size={8} />
                        <Row $gap={"8px"} style={{ flexWrap: "wrap" }}>
                            {project.links.map((link, i) => (
                                <A key={i} href={link.url}>
                                    {link.title}
                                </A>
                            ))}
                        </Row>
                    </>
                )}
            </ProjectContent>
        </ProjectRow>
    );
};

export default ProjectItem;
