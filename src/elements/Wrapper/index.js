import React from 'react';
import WrapperStyle from './style.index';

const Wrapper = ({children}) => {

    return (
    <WrapperStyle>
        {children}
    </WrapperStyle>
    )
}

export default Wrapper; 