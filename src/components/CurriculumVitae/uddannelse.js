import React, { useState } from 'react'
import { UddannelseWrapper, CVItem, ItemOne, ItemTwo, Ball } from './style.index'
import { useFirebase } from "gatsby-plugin-firebase"
import Text from '../../elements/Text'
import Heading from '../../elements/Heading'
import { BookOpen } from 'react-feather'
import Spinner from '../../elements/Spinner'
import { defaults } from '../../Global'

const Uddannelse = ({
    textProps,
    headingProps,
    sectionTopHeader,
    Button
}) => {
    const [data, setData] = useState()
    
    useFirebase(firebase => {
    firebase
        .database()
        .ref("/CV/Udannelse")
        .once("value")
        .then(snapshot => {
        setData(snapshot.val())
        })
    }, [])
 
    return ( 
        <UddannelseWrapper len={data? data.lenght : 0}>
            <Heading {...sectionTopHeader} Content={'Uddannelse'} AS='h3' Icon={BookOpen}/>
            {data?
                data.map((e,i) => (
                    <CVItem>
                        <ItemOne>
                            <Heading {...headingProps} Content={e.Navn} as='h3' />
                            <Heading {...headingProps} Content={e.Tid} as='h3' />
                        </ItemOne>
                        <ItemTwo>
                            <Ball />
                            <Heading {...headingProps} Content={e.Linje} as='h3' />
                            {e.Beskrivelse && e.Beskrivelse !== '0'? <Text {...textProps} Content={e.Beskrivelse} /> : '' }
                            {e.Bevis? <Heading {...Button} Content={'Bevis'} AS='h5' Url={e.Bevis} /> : ''}
                        </ItemTwo>
                    </CVItem>
                )) 
                :
                <Spinner />
            }
        </UddannelseWrapper>
    )
}

Uddannelse.defaultProps = {
    textProps: {
        Size: 14,
        Weight: 400,
        textTransform: 'Capitalize',
        mb: 10,
        mr: 30, 
        ml: 40,
        Color: '#666',
    },
    headingProps: {
        Size: 16,
        Weight: 600,
        textTransform: 'Uppercase',
        mb: 10,
        mr: 30, 
        ml: 40,
        Color: '#444',
    },
    sectionTopHeader: {
        Size: 27,
        Weight: 500,
        textTransform: 'Uppercase',
        mr: 30, 
        ml: 40,
        mb: 50,
    },
    Button: {
        Color: '#fff',
        ml: 40,
        Size: 15,
        pt: 5,
        pb: 5,
        pr: 15,
        pl: 15,
        BorderRadius: 400,
        Background: defaults.colors.primary,
    }
}


export default Uddannelse;