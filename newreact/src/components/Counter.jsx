import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    var [number, newnumber] = useState(0)
    const plus = () => {
        newnumber(number + 1)
    }
    const minus = () => {
        newnumber(number - 1)
    }
  return (
      <div>
          <Typography variant='h2'>{number}</Typography>
          <Button variant='contained' onClick={plus}>Plus</Button>
          <Button variant='contained' onClick={minus}>Minus</Button>
    </div>
  )
}

export default Counter