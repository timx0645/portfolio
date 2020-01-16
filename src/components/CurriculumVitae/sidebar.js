import React, { useState } from 'react'
import { Item, FlexWrapper, SidebarWrapper } from './style.index'
import Heading from '../../elements/Heading'
import Text from '../../elements/Text'
import ProgressBar from '../../elements/ProgessBar'
import { defaults } from '../../Global'
import { Hash, AtSign, Facebook, Linkedin, Settings, GitHub } from 'react-feather'
import { useFirebase } from "gatsby-plugin-firebase"
import Spinner from '../../elements/Spinner'
import Tim from '../../images/tim.png'

const Sidebar = ({
    HeadingName,
    ContactHeading,
    SubText,
    sectionTopHeader,
    SubTextDark,
    DefaultProgress
}) => {

    const [data, setData] = useState()
    
    useFirebase(firebase => {
    firebase
        .database()
        .ref("/CV/Skills")
        .once("value")
        .then(snapshot => {
        setData(snapshot.val())
        })
    }, [])

    return (
        <SidebarWrapper>
            <Item color={props => props.theme.colors.third}>
                <Heading Content={'Tim Stroustrup Skov Henriksen'} {...HeadingName} />
                <Text Content={'Webudvikler'} {...SubText}/>
                <Heading Content={'+45 21126075'} Icon={Hash} AS="h5" {...ContactHeading}/>
                <Heading Content={'tim.s.h@hotmail.com'} Icon={AtSign} AS="h5" {...ContactHeading} mailto Url="tim.s.h@hotmail.com"/>
                <Heading Content={'Github'} Icon={GitHub} AS="h5" {...ContactHeading} Url={'https://github.com/timx0645'}/>
                <Heading Content={'Facebook'} Icon={Facebook} AS="h5" {...ContactHeading} Url={'https://www.facebook.com/tim.s.henriksen'}/>
                <Heading Content={'LinkedIn'} Icon={Linkedin} AS="h5" {...ContactHeading} Url={'https://www.linkedin.com/in/tim-stroustrup-skov-henriksen-4b5098139/'}/>
            </Item>
            <Item color={props => props.theme.colors.secondary}>
               <img src={Tim} />
            </Item>
            {data?
            <>
            <Item color={props => props.theme.colors.secondary}>
                <Heading {...sectionTopHeader} Content={'Skills'} AS='h3' Icon={Settings}/>
                <Text Content={'Sprog'} {...SubTextDark}/>
                <FlexWrapper>
                    {data.Sprog.map((e,i) => (
                        <ProgressBar {...DefaultProgress} Progress={e.Progress} Content={e.Name} key={`progress-sprog${i}`}/>
                    ))}
                </FlexWrapper>
            </Item>

            <Item color={props => props.theme.colors.secondaryDark}>
                <Text Content={'Frameworks'} {...SubTextDark}/>
                <FlexWrapper>
                    {data.Frameworks.map((e,i) => (
                        <ProgressBar {...DefaultProgress} Progress={e.Progress} Content={e.Name} key={`progress-sprog${i}`}/>
                    ))}
                </FlexWrapper>
            </Item>

            <Item color={props => props.theme.colors.secondary}>
                <Text Content={'Online løsninger'} {...SubTextDark}/>
                <FlexWrapper>
                    {data.Online.map((e,i) => (
                        <ProgressBar {...DefaultProgress} Progress={e.Progress} Content={e.Name} key={`progress-sprog${i}`}/>
                    ))}
                </FlexWrapper>
            </Item>

            <Item color={props => props.theme.colors.secondaryDark}>
                <Text Content={'Adobe'} {...SubTextDark}/>
                <FlexWrapper>
                    {data.Adobe.map((e,i) => (
                        <ProgressBar {...DefaultProgress} Progress={e.Progress} Content={e.Name} key={`progress-sprog${i}`}/>
                    ))}
                </FlexWrapper>
            </Item>
            </>
            :
            <Item color={props => props.theme.colors.secondaryDark}>
             <Spinner /> 
            </Item>
            }
        </SidebarWrapper>
    )
}

Sidebar.defaultProps = {
    HeadingName: {
        Size: 30,
        Color: '#fff',
        textTransform: 'Uppercase',
        mb: 10
    },
    SubText: {
        Color: '#fff',
        Size: 16,
        textTransform: 'Uppercase',
        mb: 25
    },
    ContactHeading: {
        Size: 15,
        Color: '#fff',
        mb: 12
    },
    sectionTopHeader: {
        Size: 22,
        Weight: 500,
        textTransform: 'Uppercase',
        mb: 20,
    },
    SubTextDark: {
        Color: '#333',
        Size: 16,
        textTransform: 'Uppercase',
        mb: 25,
        Weight: 500
    },
    DefaultProgress: {
        Width: 25,
        Height: 25,
        Color: defaults.colors.primary,
        Stroke: 15,
        Weight: 500,
        textColor: '#555',
        mb: 20
    }
}

export default Sidebar