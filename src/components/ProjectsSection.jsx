import { H3, Spacer, ProjectListContainer, P, A } from "../kit";
import TagFilter from "./TagFilter";
import ProjectItem from "./ProjectItem";

/**
 * ProjectsSection component - Projects display with filtering
 * @param {Set} flatTags - Set of all available tags
 * @param {Set} selectedTags - Set of currently selected tags
 * @param {Function} onTagClick - Handler for tag click events
 * @param {Function} onResetTags - Handler to reset all tags
 * @param {Array} displayedProjects - Filtered array of projects to display
 */
const ProjectsSection = ({
    flatTags,
    selectedTags,
    onTagClick,
    onResetTags,
    displayedProjects,
}) => {
    return (
        <>
            <H3 id="projects">Projets</H3>
            <TagFilter
                flatTags={flatTags}
                selectedTags={selectedTags}
                onTagClick={onTagClick}
            />
            <Spacer size={16} />
            <ProjectListContainer>
                {displayedProjects.map((project, i) => (
                    <ProjectItem key={i} project={project} />
                ))}
            </ProjectListContainer>
            {selectedTags.size < flatTags.size && displayedProjects.length > 0 && (
                <P style={{ textAlign: "center" }}>
                    Certains projets sont cachés en raison des balises que vous avez choisies.{" "}
                    <A
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            onResetTags();
                        }}
                    >
                        Voir tous les projets
                    </A>
                </P>
            )}
            {displayedProjects.length === 0 && (
                <P style={{ textAlign: "center" }}>
                    Aucun projet trouvé avec les balises choisies.{" "}
                    <A
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            onResetTags();
                        }}
                    >
                        Voir tous les projets
                    </A>
                </P>
            )}
        </>
    );
};

export default ProjectsSection;
