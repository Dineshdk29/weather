import * as React from 'react';

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import {useFormik} from 'formik';
import * as Yup from "yup";
import { useNavigate } from 'react-router-dom';

 

export default function SignIn() {
  
const navigate = useNavigate()
   
const navTo = () => {
    navigate('/weather')
    
}
  
const formik = useFormik({

     initialValues:{
      email:"",

      password: "",
    },

 validationSchema:Yup.object({

     email:Yup.string().email("Invalid email","^[a-z)A-Z0-9+_.-]+@[a-zA-Z0-9.-]+$").required("Required"),
     password: Yup.string().required('Password is required' ).min(4),

    }),

    onSubmit: () =>{
     console.log(formik.values)
     navTo()
    },
})

  return (

   <div style={{
     width:'100%',
     height:'100vh',
     backgroundImage: "linear-gradient(to bottom right,#a6a5fa,#e6e6f5)",
   }}>
     <form onSubmit={formik.handleSubmit} >
    <Container component="main" maxWidth="xs" sx={{
      
    }}>
        <CssBaseline />
        <Box
          sx={{
            paddingTop:'35%',

            alignItems: 'center',
          }}
        >
         
          <Typography component="h1" variant="h5" sx={{
            textAlign:'center'
          }}>
            SignIn
          </Typography>
          <Box  >
           
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={formik.values.email }
              onChange={formik.handleChange}
              autoFocus
            />
            {formik.errors.email ? <p style={{
              color:'red',
              margin:'0',
              padding:'0'
             }}>invalid email</p> : null }
             
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={formik.values.password}
                onChange={formik.handleChange}
            />
             {formik.errors.password ? <p style={{
              color:'red',
              margin:'0',
              padding:'0'
             }}>Password Required</p> : null }
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              
            >
              Sign In
            </Button>
            
         </Box>
        </Box>
     
      </Container>
 </form>
   </div>
    
  );
}