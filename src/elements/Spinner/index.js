import React from 'react';
import styled from 'styled-components'
import { defaults } from '../../Global'

const Spinner = () => {
    const SpinnerWrapper = styled.div`
        display: inline-block;
        transform: translateZ(1px);
        postion: relative;
        width: 100%;
        padding: 20px;
    `

    const Circle = styled.div`
        display: inline-block;
        width: 44px;
        height: 44px;
        margin: 0 calc(50% - 42px);
        border-radius: 50%;
        background: ${defaults.colors.third};
        animation: lds-circle 3.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    `

    return (
        <SpinnerWrapper>
            <Circle />
        </SpinnerWrapper>
    )
}

export default Spinner
  