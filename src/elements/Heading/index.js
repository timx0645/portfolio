import React from 'react'
import styled from 'styled-components'
import { defaults } from '../../Global'

const Heading = ({
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
        className,
        AS,
        Icon,
        Url,
        mailto,
        Height,
        Width
}) => {
    const Wrapper = styled.div`
        a {
            text-decoration: none;
            transition: 0.3s text-decoration;
            color: ${Color? Color : defaults.font.color};
            &:hover {
                text-decoration: underline;
            }
        }
    `

    const IconWrapper = styled.div`
        display: flex;
        flex-wrap: wrap;
        margin-bottom: ${mb? mb : '0'}px;
        margin-top: ${mt? mt : '0'}px;
        margin-right: ${mr? mr : '0'}px;
        margin-left: ${ml? ml : '0'}px;
        padding-bottom: ${pb? pb : '0'}px;
        padding-top: ${pt? pt : '0'}px;
        padding-right: ${pr? pr : '0'}px;
        padding-left: ${pl? pl : '0'}px;
        .headerIcon {
            width: calc(${Size? Size : defaults.font.size}px - 5px);
            height: calc(${Size? Size : defaults.font.size}px - 5px);
            color: #fff;
            align-self: center;
            margin: auto;
        }
        ${AS? AS : 'h1'} {
            width: fit-content;
        }
    `;

    const IconWrap = styled.div`
        background-color: ${Color? (Color === '#fff'? 'transparent' : Color) : defaults.font.color};
        margin-right: 20px;
        border-radius: 400px;
        width: ${Size + 5}px;
        height: ${Size + 5}px;
        display:flex;
    `

    const TextWrapper = styled(AS? AS : 'h1')`
        font-family: ${defaults.font.family};
        font-size: ${Size? Size : defaults.font.size}px;
        color: ${Color? Color : defaults.font.color};
        font-weight: ${Weight? Weight : '400'};
        line-height: ${LineHeight? LineHeight + 'em': 'initial'};
        text-align: ${Align? Align : 'left'};
        letter-spacing: ${letterSpacing? letterSpacing + 'em' : 'initial'};
        text-transform: ${textTransform? textTransform : 'initial'};
        ${Icon?'' : ('margin-bottom: ' + (mb? mb + 'px;' : '0px;'))}
        ${Icon? '' : ('margin-top: ' + (mt? mt + 'px;' : '0px;'))}
        ${Icon? '' : ('margin-right: ' + (mr? mr + 'px;' : '0px;'))}
        ${Icon? '' : ('margin-left: ' + (ml? ml + 'px;' : '0px;'))}
        ${Icon? '' : ('padding-bottom: ' + (pb? pb + 'px;' : '0px;'))}
        ${Icon? '' : ('padding-top: ' + (pt? pt + 'px;' : '0px;'))}
        ${Icon? '' : ('padding-right: ' + (pr? pr + 'px;' : '0px;'))}
        ${Icon? '' : ('padding-left: ' + (pl? pl + 'px;' : '0px;'))}
        ${Icon? '' : ('border-radius: ' + (BorderRadius? BorderRadius + 'px;' : '0px;'))}
        ${Icon? '' : ('background-color: ' + (Background? Background : 'transparent;'))}
        ${Icon? '' : ('width: ' + (Width? Width : 'fit-content;'))}
        ${Icon? '' : ('height: ' + (Height? Height : 'fit-content;'))}

    `
    return (
        <Wrapper>
            {Icon?
                (
                    Url?
                        <a href={mailto? 'mailto:' + Url : Url} target="_blank" rel="noopener noreferrer">
                            <IconWrapper>
                                <IconWrap>
                                    <Icon className="headerIcon" />
                                </IconWrap>
                                <TextWrapper className={className? className : ''}>
                                    {Content}
                                </TextWrapper>
                            </IconWrapper>
                        </a>
                        :
                        <IconWrapper>
                            <IconWrap>
                                <Icon className="headerIcon" />
                            </IconWrap>
                            <TextWrapper className={className? className : ''}>
                                {Content}
                            </TextWrapper>
                        </IconWrapper>
                )
                :
                (
                    Url?
                        (
                            <a href={mailto? 'mailto:' + Url : Url} target="_blank" rel="noopener noreferrer">
                            <TextWrapper className={className? className : ''}>
                                    {Content}
                                </TextWrapper>
                            </a>
                        )
                        :
                        <TextWrapper className={className? className : ''}>
                            {Content}
                        </TextWrapper>   
                )
            }
        </Wrapper>   
    )
}

export default Heading