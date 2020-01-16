import React, {useState} from 'react'
import styled, { keyframes } from 'styled-components'
import { defaults } from '../../Global'

//Animations from react animations
const In = keyframes`
from {
    height: 0;
    -webkit-transform: translateY(150vh);
    transform: translateY(150vh);
    visibility: visible;
  }

  to {
    height: auto;
    -webkit-transform: translateY(-70px);
    transform: translateY(-70px);
  }
`;
const Out = keyframes`
from {
    -webkit-transform: translateY(-70px);
    transform: translateY(-70px);
    height: auto;
  }

  to {
    -webkit-transform: translateY(250vh);
    transform: translateY(250vh);
    height: 0;
    overflow: hidden;
  }
`;

const CardFront = styled.div`
    transaction: 1s;
    background-color: #fff;
    border-radius: 4px;
    &.active {
        height: 0;
        animation: ease 2s ${In} forwards;
        z-index: 1;
    }
    &.not {
        animation: ease 2s ${Out} forwards;
    }
    &.no-show {
        height: 0;
        overflow: hidden;
    }
`;

const CardWrapper = styled.div`
    width: fit-content;
    heigth: fit-content;
    margin: auto;
    position: relative;
    button {
        z-index: 3;
        position: absolute;
        top: -107.5px;
        right: -37.5px;
        background-color: ${defaults.colors.primary};
        color: white;
        border-radius: 400px; 
        border: none;
        height: 75px;
        width: 75px;
        cursor:pointer;
        ${defaults.shadows.primary};
        transition: .2s;
        &:hover {
            background-color: #65cf96;
        }
    }
`;

const Card = ({Front, Back}) => {
    const [bool, setBool] = useState({e: true, start: true})

    return (
        <>
        <CardWrapper>
            <button onClick={() => setBool({e: !bool.e, start: false})}>{bool.e? 'Projekter' : 'CV'}</button>
            <CardFront className={bool.e? 'active' : 'not'}>
                {Front}
            </CardFront>
            <CardFront className={bool.e? bool.start? 'no-show' : 'not' : 'active'}>
                {Back}
            </CardFront>
        </CardWrapper>
        </>
    )
} 

export default Card