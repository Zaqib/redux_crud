import React from "react";
import { useFormik } from "formik";
import { yupSchema } from "./yupSchema";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { updateUser } from "../../redux/action/action";
import {
  Button,
  TextField,
  InputLabel,
  MenuItem,
  FormControlLabel,
  Radio,
  FormControl,
  RadioGroup,
} from "@mui/material";

const UpdateUser = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { values } = location.state || {};
  // console.log("userId ", userId);
  console.log("values", values);

  const initialValues = {
    name: values.userData?.name || "",
    father_name: values.userData?.father_name || "",
    address: values.userData?.address || "",
    contact: values.userData?.contact || "",
    age: values.userData?.age || "",
    country: values.userData?.country || "",
    email: values.userData?.email || "",
    gender: values.userData?.gender || "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: yupSchema,
    onSubmit: (values, action) => {
      console.log("Values of onSubmit", formik.values);
      dispatch(updateUser(formik.values));
      action.resetForm();
    },
  });

  return (
    <div>
      <h1 className='form-heading'>Update User Data</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className='row'>
          <div className='col-md-2'></div>
          <div className='col-md-8'>
            <div className='row'>
              <div className='col-md-6 textField'>
                <TextField
                  id='name'
                  name='name'
                  label='Name'
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
              </div>
              <div className='col-md-6 textField'>
                <TextField
                  id='fName'
                  name='father_name'
                  label='Father Name'
                  value={formik.father_name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.father_name &&
                    Boolean(formik.errors.father_name)
                  }
                  helperText={
                    formik.touched.father_name && formik.errors.father_name
                  }
                />
              </div>
            </div>
            <div className='row'>
              <div className='col-md-6 textField'>
                <TextField
                  id='address'
                  name='address'
                  label='address'
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.address && Boolean(formik.errors.address)
                  }
                  helperText={formik.touched.address && formik.errors.address}
                />
              </div>
              <div className='col-md-6 textField'>
                <TextField
                  id='contact'
                  name='contact'
                  label='Phone No'
                  type='number'
                  value={formik.values.contact}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.contact && Boolean(formik.errors.contact)
                  }
                  helperText={formik.touched.contact && formik.errors.contact}
                />
              </div>
            </div>
            <div className='row'>
              <div className='col-md-6 textField'>
                <TextField
                  id='age'
                  name='age'
                  label='Age'
                  type='number'
                  value={formik.values.age}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.age && Boolean(formik.errors.age)}
                  helperText={formik.touched.age && formik.errors.age}
                />
              </div>
              <div className='col-md-6 textField'>
                <TextField
                  id='email'
                  name='email'
                  label='email'
                  type='email'
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </div>
            </div>
            <div className='row'>
              <div className='col-md-6 textField'>
                <TextField
                  id='country'
                  name='country'
                  label='Country'
                  select
                  value={formik.values.country}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.country && Boolean(formik.errors.country)
                  }
                  helperText={formik.touched.country && formik.errors.country}
                  variant='outlined'
                  style={{ width: "220px" }}
                >
                  <MenuItem value='pakistan'>Pakistan</MenuItem>
                  <MenuItem value='UK'>UK</MenuItem>
                  <MenuItem value='USA'>USA</MenuItem>
                  <MenuItem value='Austria'>Austria</MenuItem>
                  <MenuItem value='Turkey'>Turkey</MenuItem>
                  <MenuItem value='Australia'>Australia</MenuItem>
                  <MenuItem value='other'>Other</MenuItem>
                </TextField>
              </div>
              <div className='col-md-6'>
                <InputLabel>Select Gender</InputLabel>
                <FormControl component='fieldset'>
                  <RadioGroup
                    aria-label='gender'
                    name='gender'
                    value={formik.values.gender}
                    onChange={formik.handleChange}
                  >
                    <FormControlLabel
                      value='male'
                      control={<Radio />}
                      label='Male'
                    />
                    <FormControlLabel
                      value='female'
                      control={<Radio />}
                      label='Female'
                    />
                    <FormControlLabel
                      value='other'
                      control={<Radio />}
                      label='Other'
                    />
                  </RadioGroup>
                </FormControl>
              </div>
            </div>
            <div className='container'>
              <div className='row'>
                <div className='col-md-3'></div>
                <div className='col-md-6'>
                  <Button
                    type='submit'
                    variant='contained'
                    color='primary'
                    className='btn btn-Primary submit-button'
                  >
                    Update
                  </Button>
                </div>
                <div className='col-md-3'></div>
              </div>
            </div>
          </div>
          <div className='col-md-2'></div>
        </div>
      </form>
    </div>
  );
};

export default UpdateUser;
