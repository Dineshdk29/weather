import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { Button, Stack, TextField, ThemeProvider } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { oneAction, twoAction ,thirdAction} from './store/Redux';
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createTheme } from '@mui/material'

function Weather() {

  const things = useSelector(state => state)
  const dispatch = useDispatch()

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

  const navigate = useNavigate()

  const click = () => {
      navigate('/')
  }


  
   const [query, setQuery] = useState('');
   const [weather, setWeather] = useState({});

  const search = event => {
    if (event.key === "Enter") {
      fetch(`${"https://api.openweathermap.org/data/2.5/"}weather?q=${query}&units=metric&APPID=${"31899736ed6679356039b21ebf825f4f"}`)
        .then(response => response.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
   
  }
    
 const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }
 return (
  
     <ThemeProvider theme={theme}>
      <div style={{
    backgroundImage: "linear-gradient(to bottom right,#5076d4, #0e338f)",
    height:'100vh'
  }}>
      <center>

<Box sx={{ flexGrow: 1}} >
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
            SignOut
            </Button>
        </Toolbar>
      </AppBar>
    </Box>
    <Grid mt={4} className={
      (typeof weather.main == "undefined")
       ?  'app' : ((weather.main.temp ))}
       >
       <Stack alignItems='center' spacing={2} sx={{
        width:'80%'
       }}>
       <TextField 
            label="Your city name"
            type="text"
            variant="outlined"
            color="secondary"
            placeholder="Enter here "
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
            sx={{
              width:'100%'
            }}
          />
        
        {(typeof weather.main == "undefined") ? ('') : (
        <Grid container xs={12} md={12} sm={12} >
          
          <Grid container direction='column' m={2}>
            <Grid m={2}>{weather.name}, {weather.sys.country}</Grid>
            <Grid >{dateBuilder(new Date())}</Grid>
        </Grid>

          <Grid container direction ='column'>
            <Grid m={2} >
              {Math.round(weather.main.temp)}°C
            </Grid>
            <Grid >{weather.weather[0].main}</Grid>
          </Grid>

        </Grid>
        ) }
           <h1>{things}</h1>
           <Button
          variant='contained'
           onClick={()=> dispatch(oneAction())}
           >
            Chill
           </Button>
          
           <Button
           variant='contained'
           onClick={()=> dispatch(twoAction())}
           >
            Hot
           </Button>
          
           <Button
           variant='contained'
           onClick={()=> dispatch(thirdAction())}
           >
            Rainy
           </Button>
       </Stack>
    </Grid>
    </center>
    </div>
     </ThemeProvider>
  );
}
export default Weather;