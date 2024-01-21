import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { StyledEngineProvider } from '@mui/material'
import Carousel from 'react-material-ui-carousel'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import Card from './components/Card'
import { Paper, Button } from '@mui/material'
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
        <div className='bg-red-500'>sex</div>
         <Carousel 
        NextIcon={<ArrowCircleRightIcon/>} PrevIcon={<ArrowCircleLeftIcon/>}
>
            {
               items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
      </StyledEngineProvider>
    </>
  )
}
function Item(props)
{
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>
            <Button>
                Check it Out!
            </Button>
      </Paper>
      
    )
}

export default App
