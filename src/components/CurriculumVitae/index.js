import React from 'react'
import CVWrapper, { MainContent } from './style.index'
import SideContent from './sidebar'
import UD from './uddannelse'
import EF from './erfaring'
import { User } from 'react-feather'
import Heading from '../../elements/Heading'
import Text from '../../elements/Text'

const CurriculumVitae = ({
    sectionTopHeader,
    TextProps
}) => {
    const Content = `Jeg er en passioneret person, som går op i mange ting.\n
    Jeg kan rigtig godt lide at nørde mig helt ind til kernen af forskellige ting.\n
    Om det omhandler film, nintendo, mad, fine drikke eller andet, så elsker jeg at læse artikler og se videoer, som omhandler emnet.\n
    Simpelthen bare for at finde ud af, hvordan andre ser på tingene.\n
    Dette gør at jeg er en person, som har mange små hobbyer, med mange forskellige holdninger.
    `;

    return (
        <CVWrapper>
            <SideContent /> 
            <MainContent>
                <Heading {...sectionTopHeader} Content={'mig'} AS='h3' Icon={User}/>
                {Content.split('\n').map((e) => (
                    <Text Content={e} {...TextProps} />
                ))}
                <EF />
                <UD />
            </MainContent>
        </CVWrapper>
    )
}

CurriculumVitae.defaultProps = {
    sectionTopHeader: {
        Size: 27,
        Weight: 500,
        textTransform: 'Uppercase',
        mt: 40,
        mr: 30, 
        ml: 40,
        mb: 30,
    },
    TextProps: {
        mr: 30, 
        ml: 40,
        mb: 5
    }
}

export default CurriculumVitae; 