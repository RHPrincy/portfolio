import { useState } from "react";

/**
 * Custom hook for managing tag filtering logic
 * @param {Array} projects - Array of project objects with tags
 * @returns {Object} - Tag filtering state and handlers
 */
export const useTagFilter = (projects) => {
    const flatTags = new Set(projects.flatMap((project) => project.tags));
    const [selectedTags, setSelectedTags] = useState(() => new Set(flatTags));

    const handleTagClick = (tag) => {
        if (selectedTags.size === flatTags.size) {
            // from initial all selected, pick only this one
            setSelectedTags(new Set([tag]));
        } else {
            const newSet = new Set(selectedTags);
            if (newSet.has(tag)) {
                newSet.delete(tag);
                // if no tags remain, reset to all
                if (newSet.size === 0) {
                    setSelectedTags(new Set(flatTags));
                    return;
                }
            } else {
                newSet.add(tag);
            }
            setSelectedTags(newSet);
        }
    };

    const resetTags = () => {
        setSelectedTags(new Set(flatTags));
    };

    // filter projects by any selected tag
    const displayedProjects = projects.filter((project) =>
        project.tags.some((tag) => selectedTags.has(tag))
    );

    return {
        flatTags,
        selectedTags,
        handleTagClick,
        resetTags,
        displayedProjects,
    };
};
