import styled from "styled-components";
import { colors, hueVariable } from "./theme";

export const ActionButton = styled.a`
  background-color: ${colors.black};
  border: 2px solid ${colors.black};
  color: ${colors.white};

  padding: 8px 16px;
  cursor: pointer;
  border-radius: 4px;
  font-size: 0.9rem;

  text-decoration: none;

  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: ${colors.blackHover};
    border-color: ${colors.blackHover};
  }
`;

export const MutedActionButton = styled(ActionButton)`
  background-color: ${colors.beige};
  color: ${colors.black};

  &:hover {
    background-color: ${colors.beigeHover};
  }
`;

export const SignatureImage = styled.img`
  height: 40px;
`;

export const ProfileImage = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  border: 4px solid hsl(${hueVariable}deg 50% 80%);
  box-shadow: 0 4px 20px hsla(${hueVariable}deg, 50%, 50%, 0.3);
  margin: 0 auto;
  margin-bottom: 24px;
  transition: all 0.3s ease-in-out;
  transform-origin: center;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 30px hsla(${hueVariable}deg, 50%, 50%, 0.4);
  }
`;

export const SignatureFooterImage = styled.img`
  position: absolute;
  bottom: -20px;
  right: -20px;
  opacity: 0.15;
  height: 270px;
  transform: rotate(-10deg);
`;

export const PopoutContainer = styled.div`
  width: ${({ $popout }) => ($popout ? "clamp(300px, 20%, 350px)" : "0px")};
  transition: all 0.4s ease-in-out;
  /* transition-delay: 0.2s; */
  transition-delay: ${({ $popout }) => ($popout ? "0.2s" : "0s")};
  padding-left: ${({ $popout }) => ($popout ? "16px" : "0px")};
  padding-top: 8px;
  color: ${colors.black};
`;

const InfoIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="icon icon-tabler icons-tabler-outline icon-tabler-info-hexagon"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M19.875 6.27c.7 .398 1.13 1.143 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z" />
    <path d="M12 9h.01" />
    <path d="M11 12h1v4h1" />
  </svg>
);

const TagIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="icon icon-tabler icons-tabler-outline icon-tabler-tag"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M7.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <path d="M3 6v5.172a2 2 0 0 0 .586 1.414l7.71 7.71a2.41 2.41 0 0 0 3.408 0l5.592 -5.592a2.41 2.41 0 0 0 0 -3.408l-7.71 -7.71a2 2 0 0 0 -1.414 -.586h-5.172a3 3 0 0 0 -3 3z" />
  </svg>
);

const InfoContainer = styled.button`
  color: ${colors.secondary};
  &:hover {
    color: ${colors.black};
  }
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  padding: 0;
  margin: 0;
  border: 0;
  background-color: transparent;
  line-height: 0;
`;

export const Info = (props) => (
  <InfoContainer {...props} className={"m-hos-750"}>
    <InfoIcon />
  </InfoContainer>
);

const CollapseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="icon icon-tabler icons-tabler-outline icon-tabler-layout-sidebar-right-collapse"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
    <path d="M15 4v16" />
    <path d="M9 10l2 2l-2 2" />
  </svg>
);

export const Collapse = (props) => (
  <InfoContainer {...props}>
    <CollapseIcon />
  </InfoContainer>
);

export const Tag = ({ selected, onClick, children }) => (
  <TagContainer onClick={onClick} selected={selected}>
    <TagIcon />
    <span>{children}</span>
  </TagContainer>
);

const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  padding: 2px 4px;
  border-radius: 4px;
  border: 1px solid ${colors.black};
  transition: all 0.2s ease-in-out;
  font-size: 0.75rem;
  flex-shrink: 1;
  background-color: ${(props) =>
    props.selected ? colors.black : "transparent"};
  color: ${(props) => (props.selected ? colors.white : "inherit")};
  cursor: ${(props) => (props.onClick ? "pointer" : "default")};
`;
