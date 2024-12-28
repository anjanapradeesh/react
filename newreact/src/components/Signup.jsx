import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
      <div>
          <Typography variant='h2'>Signup</Typography>
          <TextField label="Username" variant='outlined' /><br /><br />
          <TextField label="Password" variant='outlined' /><br /><br />
          <Button variant='contained' >Signup</Button>
    </div>
  )
}

export default Signup