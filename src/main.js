import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { Stack, TextField } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

function Weather() {
  
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
     <center>

<Box sx={{ flexGrow: 1}}>
      <AppBar position="static" color='secondary' >
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 6 }}>
            <ThunderstormIcon/>
          </IconButton>
          <Typography variant="h6" color="white" component="div" sx={{ mr: 2 }}>
            Weather app
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    <Grid mt={15} className={
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
              width:'30%'
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
       </Stack>
    </Grid>
    </center>
  );
}
export default Weather;
