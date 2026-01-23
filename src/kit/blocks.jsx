import styled from "styled-components";
import { colors } from "./theme";

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  flex: 1;
`;

export const ListItem = styled.li`
  padding: 12px 0;

  &:not(:last-child) {
    border-bottom: 2px solid ${colors.border};
  }

`;

export const ListImage = styled.img`
  height: 64px;
  width: 64px;
  border-radius: 8px;
  padding: 8px;
  object-fit: contain;
  background-color: white;
`;

export const ListHeading = styled.h4`
  font-size: 1.1rem;
  font-weight: 400;
  margin: 0;
`;

export const ListText = styled.p`
  font-size: 0.85rem;
  margin: 0;
`;

export const ProjectListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

export const ProjectRow = styled.div`
  border-radius: 12px;
  border-bottom: 1px solid ${colors.border};
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 12px; /* Added padding to separate image from card edge */
  container-type: inline-size;

  &:nth-child(even) {
    flex-direction: row-reverse;
  }

  @container (max-width: 700px) {
    flex-direction: column;
    padding: 0; /* Remove padding on mobile if full width is preferred, or keep consistent */
    &:nth-child(even) {
      flex-direction: column;
    }
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 3px 0 rgba(0, 0, 0, 0.08);
    border-color: transparent;
  }
`;

export const ProjectImageContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`;

export const ProjectRowImage = styled.img`
  width: 300px;
  height: 250px; /* Fixed height for consistent cover */
  min-height: auto;
  object-fit: cover; /* CHANGED: cover to apply radius to image content */
  background-color: ${colors.border}; /* subtle background for transparent images */
  border-radius: 12px; /* Radius on the image itself */
  flex-shrink: 0;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);

  @container (max-width: 700px) {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 12px 12px 0 0; /* Round top only if flush? Or all if padded? */
    /* If removing padding on mobile, flush image needs varying radius. 
       Let's keep padding consistent or handle flush. */
    border-radius: 0; 
    
  }
`;

export const ProjectContent = styled.div`
  padding: 24px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @container (max-width: 700px) {
    padding: 16px;
  }
`;


export const ProjectTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
  margin-bottom: 8px;
  color: ${colors.text};
`;

export const ProjectDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.5;
  color: ${colors.secondary};
  margin: 0;
  margin-bottom: 16px;
  flex: 1;
`;
