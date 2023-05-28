import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../component/Header";
import { CardActions,CardContent,Button, FormControl,TextField, Typography } from "@mui/material";
import { StyledCard, StyledDiv,StyledFormDiv } from "./Styled";
import {login} from '../action/userActions';
import {  useNavigate } from "react-router-dom";


const Loginpage = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formdata, setformdata] = useState({});
  
  const logindata = useSelector((state) => state.userLoginReducer.logininfo);
    


    useEffect(() => {
      if(logindata?.role === 0) {
        navigate("/user-dashboard");
      }else if(logindata?.role === 1) {
        navigate("/admin-dashboard");
      }
    }, [logindata]);

  const handleChange = (event) => {
    const{name, value} = event.target;
    setformdata((prevstate) => ({
      ...prevstate,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const {email, password} = formdata;
    dispatch(login( email, password));
  }
  

    return (
        <div>
            <Header buttonname="login"/>
            <StyledDiv>
            <StyledCard>
            <CardContent>
                <Typography varient="h1" sx={{marginBottom: '10px',fontSize: '20px'}}>Login</Typography>
                <StyledFormDiv>
                
                <FormControl>
                <TextField
                  required
                   id="outlined-required"
                   label="Enter your email"
                   name="email"
                   onChange={handleChange}
                />
                </FormControl><br></br>
                <FormControl>
                <TextField
                  required
                  id="outlined-required"
                  label="Enter your Password"
                  name="password"
                  onChange={handleChange}
                 
                />
                </FormControl>
                </StyledFormDiv>
                
      </CardContent>
      <CardActions>
        <Button size="small"variant="contained" sx={{marginLeft:'10px'}} onClick={handleSubmit}>Login</Button>
        
      </CardActions>
            </StyledCard>
            </StyledDiv>
        </div>
    )
}
export default Loginpage;