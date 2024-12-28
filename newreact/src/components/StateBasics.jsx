import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    var [name, setname] = useState("nandana")
    var [nval, sval] = useState()
    const setval = (e) => {
        console.log(e.target.value)
        setname(e.target.value)
        
    }

    const subHandler = () => {
        sval(name)
    }
    
        return (
            <div>
                <Typography variant='h1'>Welcome {nval}</Typography>
                <TextField variant='outlined' onChange={setval}></TextField>
                <Button variant='contained' onClick={subHandler} color="inherit">Change</Button>
            </div>
        )
    }


export default StateBasics