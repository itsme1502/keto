import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { StyledEngineProvider } from '@mui/material'
import ResponsiveAppBar from './components/Navbar/Navbar'
import HeaderImage from './components/HeaderImage'
import MediaCard from './components/Card'
import Carousels from './components/Carousel'

function App() {
  const items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]
  return (
    <>
      <StyledEngineProvider injectFirst>
        <ResponsiveAppBar/>
        <HeaderImage />
        <Carousels/>
      </StyledEngineProvider>
    </>
  );
}

export default App
