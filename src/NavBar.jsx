import { Box } from '@mui/system'
import React from 'react'
import { AppBar, Button,Toolbar,Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>

<Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{textAlign:'left'}}>
        <Toolbar>
        
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} align='left'>
    Employee Dashboard
          </Typography>
          
         
    <Link to={'/'}> <Button style={{textDecoration:'none',color:'white'}} >HOME </Button></Link>
    <Link to={'/Emp'}> <Button style={{textDecoration:'none',color:'white'}}>EMPLOYEE</Button></Link> 
    </Toolbar>

    
      </AppBar>
    </Box>
    </div>
  )
}

export default NavBar