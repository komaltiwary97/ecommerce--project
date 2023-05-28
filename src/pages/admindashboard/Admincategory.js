import React, { useState, useEffect } from 'react';


import AdminLayout from '../../hoc/AdminLayout';
import { AdminDashboardWrapper } from '../Styled';
import { Grid, Typography, TextField, Button } from '@mui/material';
import Select from '../../component/Select';
import { useDispatch, useSelector } from 'react-redux';
import { allCategories } from '../../action/categoryAction';
import CategoryTable from '../../component/Table/CategoryTable';

const Admincategory = () => {
  const dispatch = useDispatch();
  const [categoryData, setCategoryData] = useState([]);
  console.log('categoryData', categoryData);
  const logindata = useSelector((state) => state.userLoginReducer.logininfo);
  const categorydatareducer = useSelector((state) => state.categoryReducer.categoryList);

  useEffect(() => {
    dispatch(allCategories(logindata.token));
  }, []);

  useEffect(() => {
    setCategoryData(categorydatareducer);
  }, [categorydatareducer]);

  return (
    <AdminLayout>
      <AdminDashboardWrapper>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Typography variant="h3">Category</Typography>
          </Grid>
          <Grid item xs={12} sm={6} sx={{ justifyContent: 'flex-end', display: 'flex' }}>
            <TextField id="outlined-basic" label="Search Category" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={5} mt={3} mr={3}>
            <Select />
          </Grid>
          <Grid item xs={12} sm={5} mt={4} mr={1}>
            <Button variant="contained" fullWidth>
              Add a Category
            </Button>
          </Grid>
          <Grid item xs={12} mt={4} mr={1}>
            <CategoryTable categoryData={categoryData} />
          </Grid>
        </Grid>
      </AdminDashboardWrapper>
    </AdminLayout>
  );
};

export default Admincategory;