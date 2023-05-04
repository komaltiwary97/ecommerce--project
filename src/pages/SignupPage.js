import React, {useState} from "react";
import Header from "../components/Header";
import { CardActions,CardContent,Button,TextField,FormControl,Typography,InputLabel,Select,MenuItem } from "@mui/material";
import { StyledCard, Styleddiv,StyledFormdiv,StyledBox } from "./styled";
import { useDispatch } from "react-redux";
import { register } from "../actions/userActions";



const Signuppage = () => {

    const dispatch = useDispatch(); 
    const [formData, setFormData] = useState({});
    console.log('formData', formData);

    const handleChange = (event) => {
        const{name, value} = event.target;
        setFormData((perdata) => ({
            ...perdata,
            [name]: value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const{name,email,password,role} = formData;
        dispatch(register(name, email ,password ,role));
    };
    
    return(
        
            <div>
        <Header buttonName="signup"/>
        <Styleddiv>
        <StyledCard>
      <CardContent>
        <Typography variant="h5">Signup</Typography><br></br>
         <StyledFormdiv>
        <FormControl>
        <TextField
          required
          id="outlined-required"
          label="Enter your name"
          name="name"
          onChange={handleChange}
        /><br></br>
        </FormControl>

        <FormControl >
        <TextField
          required
          id="outlined-required"
          label="Enter your email"
          name="email"
          onChange={handleChange}
        /><br></br>
        </FormControl>
        <FormControl>
        <TextField
          required
          id="outlined-required"
          label="Enter your password"
          name="password"
          onChange={handleChange}
        />
        </FormControl>
        <StyledBox>
        <FormControl sx={{ m: 1, width: "100%"}} error>
    
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
    
        </StyledFormdiv>
        
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" sx={{marginLeft:'10px'}} onClick={handleSubmit}>Signup </Button>
        
      </CardActions>
    
        </StyledCard>
        </Styleddiv>
       </div>
        
    )
}

export default Signuppage;