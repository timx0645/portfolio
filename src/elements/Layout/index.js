import React from 'react'
import { ThemeProvider } from 'styled-components'
import { defaults } from '../../Global'

const Layout = ({children}) => {
    return (
        <ThemeProvider theme={defaults}>
            {children}
        </ThemeProvider>
    )
}

export default Layout

