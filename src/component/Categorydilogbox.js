
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
import { FormControl, TextField} from '@mui/material';
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
    const [formdata, setformdata] = useState({name: ''});
    console.log('formdata', formdata);
    const categorydata = useSelector((state) => state.categoryReducer);
    console.log('categorydata',categorydata);
    const { enqueueSnackbar} = useSnackbar();


     useEffect(() => {
       const {categorylist, error} = categorydata;
         console.log('categorylist', categorylist);
            console.log('error', error);
          if(categorylist) {
            enqueueSnackbar('user is created successfully',{
              varient: 'success'
            });
            
          };
          if(error) {
            enqueueSnackbar('something went wrong', {
              varient: 'error'
            });
          };
    },[categorydata]);

    const handleChange = (event) => {
      const{name, value} = event.target;
      setformdata((prevstate) => ({
          ...prevstate,
          [name]: value
      }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const {name} = categorydata;
    dispatch(register(name));
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
                label="Enter Category Name"
                name="name"
                onChange={handleChange}
              />
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