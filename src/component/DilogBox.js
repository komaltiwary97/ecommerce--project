import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { FormControl, TextField, InputLabel, Select, MenuItem } from '@mui/material';
import { StyledFormDiv } from './Styled';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useSnackbar} from 'notistack';
import { register } from '../action/userActions';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2)
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1)
  },
  '& .MuiDialog-paper': {
    width: '100%'
  }
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500]
          }}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired
};

export default function CustomizedDialogs({ open, onClose }) {
    const dispatch = useDispatch();
    const [formdata, setformdata] = useState({name: '', email: '' ,password:'', role: 0});
    console.log('formdata', formdata);
    const registerdata = useSelector((state) => state.userRegisterReducer);
    console.log('registerdata', registerdata);
    const { enqueueSnackbar} = useSnackbar();


     useEffect(() => {
       const { userinfo, error} = registerdata;
         console.log('userinfo', userinfo);
            console.log('error', error);
          if(userinfo) {
            enqueueSnackbar('user is created successfully',{
              varient: 'success'
            });
            
          };
          if(error) {
            enqueueSnackbar('something went wrong', {
              varient: 'error'
            });
          };
    },[registerdata]);

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
    onClose();
    
};
  
  return (
    <div>
      <BootstrapDialog
        sx={{ width: '100%' }}
        onClose={onClose}
        aria-labelledby="customized-dialog-title"
        open={open}>
        <BootstrapDialogTitle id="customized-dialog-title">Add a User</BootstrapDialogTitle>
        <DialogContent dividers>
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
          </StyledFormDiv>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleSubmit}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}