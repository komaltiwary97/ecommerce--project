import React,{useState}from "react";
import Header from "../component/Header";
import { CardActions,CardContent,Button, FormControl,TextField,
     Typography,Select,MenuItem,InputLabel } from "@mui/material";
import { StyledCard, StyledDiv,StyledFormDiv,StyledBox } from "./Styled";
import { useDispatch } from "react-redux";
import { register } from "../action/userActions";

const Signuppage = () => {

    const dispatch = useDispatch();
    const [formdata, setformdata] = useState({});
    console.log("formdata", formdata);

    const handleChange = (event) => {
        const{name, value} = event.target;
        setformdata((prevstate) => ({
            ...prevstate,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const {name, email, password, role} = formdata;
        dispatch(register(name, email, password, role));
        
    }
    return (
        <div>
            <Header buttonname="Login"/>
            <StyledDiv>
            <StyledCard>
            <CardContent>
                <Typography varient="h1" sx={{marginBottom: '10px',fontSize: '20px'}}>Signup</Typography>
                <StyledFormDiv>
                <FormControl>
                <TextField
                  required
                   id="outlined-required"
                   label="Enter your Name"
                   name="name"
                   onChange={handleChange}
                />
                </FormControl><br></br>
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
                   label="Enter your password"
                   name="password"
                   onChange={handleChange}
                />
                </FormControl>
                <StyledBox sx={{minWidth: '120px'}}>
                <FormControl sx={{  width: "100%" }} error >
        <InputLabel id="demo-simple-select-error-label">Role</InputLabel>
        <Select
           labelId="demo-simple-select-error-label"
           id="demo-simple-select-error"
          label="Role"
          name="role"
          onChange={handleChange}>
          <MenuItem value={0}>User</MenuItem>
          <MenuItem value={1}>Admin</MenuItem>
        </Select>
      </FormControl>
      </StyledBox>

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
export default Signuppage;