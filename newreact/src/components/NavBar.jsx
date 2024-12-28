import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
      <div>
          <AppBar color='success'>
              <Toolbar>
                  
                  <Typography variant='h6'>Registration</Typography>
                  <Link to='/login'>
                      <Button variant='contained' color='secondary'>Login</Button></Link>&nbsp;&nbsp;
                  <Link to='/signup'>
                      <Button variant='contained' color='secondary'>Signup</Button></Link>&nbsp;&nbsp;
                  <Link to='/toble'>
                      <Button variant='contained' color='secondary'>Table</Button></Link>&nbsp;&nbsp;
                  <Link to='/state'>
                      <Button variant='contained' color='secondary'>State</Button></Link>&nbsp;&nbsp;
                  <Link to='/counter'>
                      <Button variant='contained' color='secondary'>Counter</Button></Link>&nbsp;&nbsp;
                  <Link to='/selection'>
                      <Button variant='contained' color='secondary'>Selection</Button></Link>&nbsp;&nbsp;
                  <Link to='/api'>
                      <Button variant='contained' color='secondary'>Api</Button></Link>&nbsp;&nbsp;
                  <Link to='/product'>
                      <Button variant='contained' color='secondary'>Product</Button></Link>&nbsp;&nbsp;
              </Toolbar>
          </AppBar>
          <br /><br /><br />
    </div>
  )
}

export default NavBar