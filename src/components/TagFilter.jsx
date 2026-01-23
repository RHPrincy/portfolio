import { Row, Tag } from "../kit";

/**
 * TagFilter component - Tag filtering UI
 * @param {Set} flatTags - Set of all available tags
 * @param {Set} selectedTags - Set of currently selected tags
 * @param {Function} onTagClick - Handler for tag click events
 */
const TagFilter = ({ flatTags, selectedTags, onTagClick }) => {
    return (
        <Row $gap={"4px"} style={{ flexWrap: "wrap" }}>
            <span style={{ fontSize: "0.75rem" }}>Tags:</span>
            {Array.from(flatTags).map((tag, i) => (
                <Tag
                    key={i}
                    selected={selectedTags.has(tag)}
                    onClick={() => onTagClick(tag)}
                >
                    {tag}
                </Tag>
            ))}
        </Row>
    );
};

export default TagFilter;
