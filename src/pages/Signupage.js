import React,{useState}from "react";
import Header from "../component/Header";
import { CardActions,CardContent,Button, FormControl,TextField,
     Typography,Select, InputLabel,MenuItem } from "@mui/material";
import { StyledCard, StyledDiv,StyledFormDiv,StyledBox } from "./Styled";
import { useDispatch } from "react-redux";
import { register } from "../action/userActions";
import { useNavigate } from "react-router-dom";

const Signuppage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const [formdata, setformdata] = useState({ name: '', email: '' ,password:'', role: 0});
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
        navigate('/');
        
    }
    return (
        <div>
            <Header buttonname="Login"/>
            <div>
        <StyledDiv>
          <StyledCard>
            <CardContent>
              <Typography variant="h4" sx={{ marginBottom: '10px' }}>
                Signup
              </Typography>
              <StyledFormDiv>
                <FormControl>
                  <TextField
                    required
                    id="outlined-required"
                    label="Enter your Name"
                    name="name"
                    onChange={handleChange}
                  />
                </FormControl>

                <FormControl sx={{ marginTop: '20px' }}>
                  <TextField
                    required
                    id="outlined-required"
                    label="Enter your email"
                    name="email"
                    onChange={handleChange}
                  />
                </FormControl>
                <FormControl sx={{ marginTop: '20px' }}>
                  <TextField
                    required
                    id="outlined-required"
                    label="Enter your Password"
                    name="password"
                    onChange={handleChange}
                  />
                </FormControl>
                <StyledBox sx={{ minWidth: 120 }}>
                  <FormControl sx={{ width: '100%' }} error>
                    <InputLabel id="demo-simple-select-error-label">Role</InputLabel>
                    <Select
                      labelId="demo-simple-select-error-label"
                      id="demo-simple-select-error"
                      label="Role"
                      
                      name="role"
                      onChange={handleChange}
                      >
                      <MenuItem value={0}>User</MenuItem>
                      <MenuItem value={1}>Admin</MenuItem>
                    </Select>
                    
                  </FormControl>
                </StyledBox>
              </StyledFormDiv>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                variant="contained"
                sx={{ marginLeft: '10px' }}
                onClick={handleSubmit}>
                Signup
              </Button>
            </CardActions>
          </StyledCard>
        </StyledDiv>
      </div>
        </div>
        
    )
}
export default Signuppage;