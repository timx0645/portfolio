import styled, { keyframes } from 'styled-components'
import BG from '../../images/mig.jpg'
import { fadeIn } from 'react-animations'
import { defaults } from '../../Global'

//Animations from react animations
const fadeInAnimation = keyframes`${fadeIn}`;

const HeroWrapper = styled.div`
    animation: 1s ease ${fadeInAnimation};
        background-color: ${defaults.colors.third};
        background-image: url(${BG});
        width: 100%;
        height: 45vh;
        margin: auto;
        background-attachment: fixed;
        background-position: bottom;
`;

export default HeroWrapper;