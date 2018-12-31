import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from './packages/Theme'

const Wrapper = props => (
  <ThemeProvider theme={theme}>
    {props.children}
  </ThemeProvider>
)

export default Wrapper;
