import React from "react";
import Header from "../components/Header";
import { CardActions,CardContent,Button,TextField,FormControl,Typography } from "@mui/material";
import { StyledCard, Styleddiv,StyledFormdiv } from "./styled";

const loginpage = () => {
    return (
       <div>
        <Header buttonName="signup"/>
        <Styleddiv>
        <StyledCard>
      <CardContent>
        <Typography variant="h5">Login</Typography><br></br>
         <StyledFormdiv>
        <FormControl>
        <TextField
          required
          id="outlined-required"
          label="Enter your email"
        /><br></br>
        </FormControl>

        <FormControl>
        <TextField
          required
          id="outlined-required"
          label="Enter your password"
        />
        </FormControl>
        </StyledFormdiv>
        
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" sx={{marginLeft:'10px'}}>Login</Button>
        
      </CardActions>
    
        </StyledCard>
        </Styleddiv>
       </div>
    )
}

export default loginpage;