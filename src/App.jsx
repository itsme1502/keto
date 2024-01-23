import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { StyledEngineProvider } from '@mui/material'
import ResponsiveAppBar from './components/Navbar/Navbar'
function App() {

  return (
    <>
      <StyledEngineProvider injectFirst>
        <ResponsiveAppBar/>
        
      </StyledEngineProvider>
    </>
  )
}

export default App
