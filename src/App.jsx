import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { StyledEngineProvider } from '@mui/material'
import ResponsiveAppBar from './components/Navbar/Navbar'
import HeaderImage from './components/HeaderImage'
import MediaCard from './components/Card'
import Carousels from './components/Carousel'
import Stories from './components/Stories'
import SuccessCarousel from './components/SuccessCarousel'

function App() {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <ResponsiveAppBar />
        <HeaderImage />
        <Carousels />
        <SuccessCarousel />
      </StyledEngineProvider>
    </>
  );
}

export default App;