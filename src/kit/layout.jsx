import styled from "styled-components";
import { colors } from "./theme";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  overflow: hidden;
  background-color: ${colors.popout};
  border: 0px solid ${colors.popout};
  border-width: ${({ $popout }) => $popout && 2}px;
  transition: all 0.4s ease-in-out;
  transition-delay: ${({ $popout }) => !$popout && "0.2s"};
`;

export const ContentContainer = styled.div`
  container-type: inline-size;
  transition: all 0.4s ease-out;
  transition-delay: ${({ $popout }) => !$popout && "0.4s"};
  flex: 1;
  overflow: auto;
  background-color: white;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  margin: 0 auto;
  max-width: 1000px;
  height: 60px;
  padding: 0 16px;
`;

export const Content = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 32px 16px;
  color: ${colors.text};
`;

export const Spacer = styled.div`
  height: ${(props) => props.size || 4}px;
`;

export const FlexSpacer = styled.div`
  flex: 1;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${(props) => props.$gap || "0px"};
  align-items: center;
`;

export const Split = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 32px;

  @container (max-width: 750px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
`;

export const SplitSection = styled.div`
  flex: 1;
  width: 100%;
`;

export const PaddedSplitSection = styled(SplitSection)`
  padding: 96px 0px;

  @container (max-width: 750px) {
    padding: 32px 0px;
  }
`;

export const Grow = styled.div`
  flex: 1;
`;

export const CalloutSection = styled.div`
  boeder:1px solid ${colors.beige};
`;

export const Hr = styled.hr`
  border: 0;
  border-top: 2px solid ${colors.blackLight};
  margin: 16px 0;
`;
