import { Box } from '@material-ui/core'
import React from 'react'
import './Screen.css'

function Screen({text, result }) {
    
  return (
    <Box className='screen'>
        <Box className='result'>
            <h2>{result}</h2>
        </Box>
        <Box className='test'>
            <h4>{text}</h4> 
        </Box>
        
    </Box>
  )
}

export default Screen;