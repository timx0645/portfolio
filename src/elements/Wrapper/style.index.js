import styled from 'styled-components'
import { defaults } from '../../Global'

const WrapperStyle = styled.div`
    background-color: ${defaults.colors.light};
    max-width: 1000px; 
    position: relative;
    border-radius: 4px;
    ${defaults.shadows.primary}
`;

export default WrapperStyle;