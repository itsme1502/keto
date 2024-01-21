import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { StyledEngineProvider } from '@mui/material'
import HeaderImage from './components/HeaderImage'
function App() {

  return (
    <>
      <StyledEngineProvider injectFirst>

        <HeaderImage></HeaderImage>
      </StyledEngineProvider>
    </>
  )
}

export default App
