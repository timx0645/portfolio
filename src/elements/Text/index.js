import React from 'react'
import styled from 'styled-components'
import { defaults } from '../../Global'

const Text = ({
        Size,
        Weight,
        LineHeight,
        Align,
        letterSpacing,
        textTransform,
        mb,
        mt,
        mr, 
        ml,
        pb,
        pt,
        pr, 
        pl,
        BorderRadius,
        Background,
        Color,
        Content,
        className
}) => {
    const TextWrapper = styled.p`
        font-family: ${defaults.font.family};
        font-size: ${Size? Size : defaults.font.size}px;
        color: ${Color? Color : defaults.font.color};
        font-weight: ${Weight? Weight : '400'};
        line-height: ${LineHeight? LineHeight + 'em': 'initial'};
        text-align: ${Align? Align : 'left'};
        letter-spacing: ${letterSpacing? letterSpacing + 'em' : 'initial'};
        text-transform: ${textTransform? textTransform : 'initial'};
        margin-bottom: ${mb? mb : '0'}px;
        margin-top: ${mt? mt : '0'}px;
        margin-right: ${mr? mr : '0'}px;
        margin-left: ${ml? ml : '0'}px;
        padding-bottom: ${pb? pb : '0'}px;
        padding-top: ${pt? pt : '0'}px;
        padding-right: ${pr? pr : '0'}px;
        padding-left: ${pl? pl : '0'}px;
        border-radius: ${BorderRadius? BorderRadius : '0'}px;
        background-color: ${Background? Background : 'transparent'};
    `
    return (
        <TextWrapper className={className? className : ''}>
            {Content}
        </TextWrapper>
    )
}

export default Text