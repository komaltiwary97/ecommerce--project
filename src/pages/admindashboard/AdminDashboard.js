import React, { useState } from 'react';
import AdminLayout from '../../hoc/AdminLayout';
import { AdminDashboardWrapper } from '../Styled';
import { Grid, Typography, TextField, Button } from '@mui/material';
import Select from '../../component/Select';
import UserTable from '../../component/Table/UserTable';
import DialogBox from '../../component/DilogBox';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allusers } from '../../action/userActions';


const AdminDashboard = () => {

  const dispatch = useDispatch();
  const logindata = useSelector((state) => state.userLoginReducer.logininfo);
  const registerdata = useSelector((state) => state.userRegisterReducer);
  const userListinfo = useSelector((state) => state.userListReducer.userListinfo);
  console.log('userlistreducer', userListinfo);
  console.log('logindata', logindata);
  const [open, setOpen] = useState(false);
  console.log('open', open);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // useEffect call everytime called when th page loded because we passes equesnackbar

  useEffect(() => {
    dispatch(allusers(logindata?.token));

  },[]);

  // when new user added through modal then registerdata reducer going to update

  useEffect(() => {
    dispatch(allusers(logindata?.token));

  },[registerdata]);


  return (
    <AdminLayout>
      <AdminDashboardWrapper>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Typography variant="h3">Users</Typography>
          </Grid>
          <Grid item xs={12} sm={6} sx={{ justifyContent: 'flex-end', display: 'flex' }}>
            <TextField id="outlined-basic" label="Search User" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={5} mt={3} mr={3}>
            <Select />
          </Grid>
          <Grid item xs={12} sm={5} mt={4} mr={1}>
            <Button variant="contained" fullWidth onClick={handleClickOpen}>
              Add a User
            </Button>
          </Grid>
          <Grid item xs={12} mt={4} mr={1}>
            <UserTable userListinfo={userListinfo} />
          </Grid>
        </Grid>
      </AdminDashboardWrapper>
      <DialogBox onClose={handleClose} open={open} />
    </AdminLayout>
  );
};

export default AdminDashboard;