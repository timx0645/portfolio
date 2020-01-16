import React, { useState } from 'react'
import Wrapper, { Projekt, FlexBox, TextBox } from './styled.index'
import { useFirebase } from "gatsby-plugin-firebase"
import Spinner from '../../elements/Spinner'
import Text from '../../elements/Text'
import Heading from '../../elements/Heading'
import { Box, GitHub, Link } from 'react-feather'

const Projekter = ({
    textProps,
    headingProps,
    sectionTopHeader,
    tag,
    ContactHeading,
    BoldHeading
}) => {
    const [data, setData] = useState()
    
    useFirebase(firebase => {
    firebase
        .database()
        .ref("/Projekter")
        .once("value")
        .then(snapshot => {
        setData(snapshot.val())
        })
    }, [])

    return (
        <Wrapper>
            <Heading {...sectionTopHeader} Content={'Projekter'} AS='h3' Icon={Box}/>
            {data? 
                data.map((e,i) => (
                    <Projekt key={`projek${i}`}>
                            <Heading {...headingProps} Content={'Projekt: ' + e.Navn} as='h3' />
                            <TextBox>
                                {e.Beskrivelse?
                                    e.Beskrivelse.split('/n').map((t) => (
                                        <Text {...textProps} Content={t} />
                                    ))
                                    :
                                    ''
                                }
                            </TextBox>
                            {e.Github? <Heading Content={'Koden'} Icon={GitHub} AS="h5" {...ContactHeading} Url={e.Github}/> : ''}
                            {e.Url? <Heading Content={'Live version'} Icon={Link} AS="h5" {...ContactHeading} Url={e.Url}/> : ''}
                            <Heading Content={'Tags'} {...BoldHeading} />
                            {e.Tags?
                            <FlexBox>
                            {e.Tags.split(',').map((o, int) => (
                                <Text {...tag} Content={o} />
                            ))}
                            </FlexBox>
                            :
                            ''}
                            <hr />
                    </Projekt>
                ))
                :
                <Spinner />        
            }
        </Wrapper>
    )
}

Projekter.defaultProps = {
    textProps: {
        Size: 15,
        Weight: 400,
        Color: '#666',
    },
    headingProps: {
        Size: 16,
        Weight: 600,
        textTransform: 'Uppercase',
        mb: 20,
        mt: 40,
        Color: '#444',
    },
    sectionTopHeader: {
        Size: 27,
        Weight: 500,
        textTransform: 'Uppercase',
        mb: 50,
    },
    tag: {
        Color: '#888',
        mb: 10,
        mr: 5,
        Size: 12,
        pt: 5,
        pb: 5,
        pr: 15,
        pl: 15,
        BorderRadius: 50,
    },
    ContactHeading: {
        Size: 17,
        Color: '#222',
        mb: 20
    },
    BoldHeading: {
        Weight: 500,
        Size: 16,
        mb: 0
    }
}

export default Projekter