import styled, { keyframes } from 'styled-components'
import { fadeIn } from 'react-animations'
import { defaults } from '../../Global'

//Animations from react animations
const fadeInAnimation = keyframes`${fadeIn}`;

//Global components for CV 
const CVWrapper = styled.div`
    display: flex; 
    flex-wrap: wrap;
`;

const MainContent = styled.div`
    width: 60%;
`;

//Items for CV
const CVItem = styled.div`
    display: flex;
    animation: 1s ${fadeInAnimation};
    min-height: 100px;
`;

const ItemOne = styled.div`   
    position: relative;
    width: 40%;
`;

const ItemTwo = styled.div`
    position: relative;
    border-left: 2px solid ${defaults.colors.dark};
    width: 60%;
    padding-bottom: 40px;
`;

const Ball = styled.figure`
    border-radius: 400px;
    background-color: ${defaults.colors.dark};
    width: 12px;
    height: 12px;
    position: absolute;
    left: -7px; 
`;

//Udannelse section 
const UddannelseWrapper = styled.div`
    animation: 1s ease ${fadeInAnimation};
    padding: 50px 0;
`;

//Sidebar
const SidebarWrapper = styled.div`
width: 40%;
position: relative;
background-color: ${defaults.colors.secondaryDark};
border-top-left-radius: 4px;
`;

const FlexWrapper = styled.div`
display: flex;
width: 100%;
flex-wrap: wrap;
div {
    width: 50%;
}
`;

const Item = styled.div`
animation: 1s ${fadeInAnimation};
padding: 30px;
background-color: ${props => props.color};
width: calc(100% - 60px);
border-top-left-radius: 4px;
img {
    width: calc(100% + 60px);
    height: calc(100% + 60px);
    margin: -30px 0 0 -30px;
    filter: sepia(50%);
}
`;

export { UddannelseWrapper, CVItem, ItemOne, ItemTwo, Ball, MainContent, SidebarWrapper, FlexWrapper,Item }

export default CVWrapper;