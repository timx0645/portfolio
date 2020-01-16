import React from 'react'
import styled from 'styled-components'
import Text from '../Text'
import { Circle } from 'react-es6-progressbar.js'

const ProBar = ({
    Width,
    Height,
    Color,
    Stroke,
    Progress,
    Size,
    Weight,
    LineHeight,
    Align,
    letterSpacing,
    textTransform,
    textColor,
    mb,
    mt,
    mr, 
    ml,
    pb,
    pt,
    pr, 
    pl,
    Content
}) => {

    const Wrapper = styled.div`
        margin-bottom: ${mb? mb : '0'}px;
        margin-top: ${mt? mt : '0'}px;
        margin-right: ${mr? mr : '0'}px;
        margin-left: ${ml? ml : '0'}px;
        padding-bottom: ${pb? pb : '0'}px;
        padding-top: ${pt? pt : '0'}px;
        padding-right: ${pr? pr : '0'}px;
        padding-left: ${pl? pl : '0'}px;
        display: flex;
        p {
            align-self: center;
            margin-left: 10px;
        }
    `
    const TextProps = {
        Size,
        Weight,
        LineHeight,
        Align,
        letterSpacing,
        textTransform,
        Color: textColor
    }

    const circle_options = {
        strokeWidth: Stroke,
        color: Color,
    };

    return (
        <Wrapper>
            <Circle progress={Progress} options={circle_options} container_style={{height: Height? Height + 'px' : '50px', width: Width? Width + 'px' : '50px'}} />
            <Text Content={Content} {...TextProps}/>
        </Wrapper>
    )
}

export default ProBar