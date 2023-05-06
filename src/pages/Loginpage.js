import React from "react";
import Header from "../component/Header";
import { CardActions,CardContent,Button, FormControl,TextField, Typography } from "@mui/material";
import { StyledCard, StyledDiv,StyledFormDiv } from "./Styled";
const Loginpage = () => {
    return (
        <div>
            <Header buttonname="register"/>
            <StyledDiv>
            <StyledCard>
            <CardContent>
                <Typography varient="h1" sx={{marginBottom: '10px',fontSize: '20px'}}>Login</Typography>
                <StyledFormDiv>
                <FormControl>
                <TextField
                  required
                   id="outlined-required"
                   defaultValue="Enter your Name"
                />
                </FormControl><br></br>
                <FormControl>
                <TextField
                  required
                   id="outlined-required"
                   defaultValue="Enter your email"
                />
                </FormControl><br></br>
                <FormControl>
                <TextField
                  required
                   id="outlined-required"
                   defaultValue="Enter your password"
                />
                </FormControl>
                </StyledFormDiv>
                
      </CardContent>
      <CardActions>
        <Button size="small"variant="contained" sx={{marginLeft:'10px'}}>Login</Button>
        
      </CardActions>
            </StyledCard>
            </StyledDiv>
        </div>
    )
}
export default Loginpage;