import { AppBar, Button, Grid, IconButton, ThemeProvider, Toolbar, Typography } from '@mui/material'
import { createTheme } from '@mui/material'
import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useNavigate } from 'react-router-dom';

function WelcomePage() {

    const navigate = useNavigate()

    const click = () => {
        navigate('/signin')
    }

    const theme = createTheme({
        palette:{
            appbar:{
                main:'Transparent'
            },
            buttonColor:{
                main:'white'
            }
        }
    })
  return (
    <ThemeProvider theme={theme}>
        <Grid container md={12} xs={12} sm={12} style={{
        backgroundImage: "linear-gradient(to bottom right,#5076d4, #0e338f)",
        width:'100%',
        position:'fixed'
    }}>
        <AppBar position="sticky" color='appbar' elevation={0} sx={{
            backdropFilter:'blur(50px)',
            
        }} >
        <Toolbar >
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            
          </Typography>
          
        <Button
        onClick={click}
            variant='contained'
            color='buttonColor'
            sx={{
              textTransform:'capitalize',
              color:'blue',
            }}
            >
            Signin
            </Button>
        </Toolbar>
      </AppBar>

        <Grid item md={6} xs={6} sm={6} sx={{
            height:'100vh',
            padding:'10%'
        }} >
            <h1 style={{
                marginBottom:'1%',
                marginTop:'1%',
                color:'white'
            }}>
                Hii , Have a good day
            </h1>
            <p style={{
                marginTop:'6%',
                color:'white'
            }}>
            Nature is so powerful, so strong. Capturing its essence is not easy - your work becomes a dance with light and the weather. It takes you to a place within yourself.
            </p>
            <Button
            variant='contained'
            color='buttonColor'
            onClick={click}
            sx={{
              textTransform:'capitalize',
              color:'blue',
              marginTop:'9%'
            }}
            endIcon={<LocationOnIcon htmlColor='blue'/>}
            >
            Find weather in your location
            </Button>
        </Grid>

        <Grid item md={6} xs={6} sm={6} >
        <img src='./assets/1658746996620.png' alt='userimg' width='85%' />
        </Grid>
    </Grid>
    </ThemeProvider>
  )
}

export default WelcomePage