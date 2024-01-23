import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { StyledEngineProvider } from '@mui/material'
<<<<<<< HEAD
import ResponsiveAppBar from './components/Navbar/Navbar'
function App() {
=======
import HeaderImage from './components/HeaderImage'
>>>>>>> 7ad37892d95a4873b3be246c077d7ae29ae7eb6f

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
<<<<<<< HEAD
        <ResponsiveAppBar/>
        
=======
        <HeaderImage></HeaderImage>
>>>>>>> 7ad37892d95a4873b3be246c077d7ae29ae7eb6f
      </StyledEngineProvider>
    </>
  )
}

export default App
