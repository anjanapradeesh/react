import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Selection = () => {
    var [name, setname] = useState()
    const setvalue1 = () => {
        setname("React")
    }
    const setvalue2 = () => {
        setname("Angular")
    }
    const setvalue3 = () => {
        setname("Python")
    }
    // useEffect(() => {}, [])
    useEffect(() => {setvalue1()
},[])
        

  return (
      <div>
          <Typography variant='h1'>Welcome {name}</Typography>
          <Button variant='contained' onClick={setvalue1} color="secondary">React</Button>&nbsp;&nbsp;
          <Button variant='contained' onClick={setvalue2} color="error">Angular</Button>&nbsp;&nbsp;
          <Button variant='contained' onClick={setvalue3} color="info">Python</Button>
    </div>
  )
}

export default Selection