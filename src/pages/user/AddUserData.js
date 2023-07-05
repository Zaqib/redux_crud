import React from "react";
import { addUser, deleteUser } from "../../redux/action/action";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { yupSchema } from "./yupSchema";
import "./adduserdata.css";
import { useNavigate } from "react-router-dom";
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

const initialValues = {
  name: "",
  father_name: "",
  address: "",
  contact: "",
  age: "",
  country: "",
  email: "",
  gender: "",
};

const AddUserData = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: yupSchema,
    onSubmit: (values, action) => {
      console.log("Values of onSubmit", formik.values);
      dispatch(addUser(formik.values));
      action.resetForm();
    },
  });

  //handleDelete
  const handleDelete = userId => {
    dispatch(deleteUser(userId));
  };

  //handleUpdate
  const handleUpdate = (userId, values) => {
    // console.log("values from AddUserData", values);
    navigate("/UpdateUser", { state: { userId, values } });
  };

  //Show Data in Table
  const showUserData = useSelector(state => state.userDataReducer);
  console.log("Show Store Data", showUserData);
  return (
    <div className='container form-container'>
      <h1 className='form-heading'>Add User Data</h1>
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
                    Submit
                  </Button>
                </div>
                <div className='col-md-3'></div>
              </div>
            </div>
          </div>
          <div className='col-md-2'></div>
        </div>
      </form>

      <div className='showUser'>
        <h1>Show User Data</h1>
      </div>
      <table className='table'>
        <thead className='thead-dark'>
          <tr>
            <th scope='col'>ID</th>
            <th scope='col'>Name</th>
            <th scope='col'>Father Name</th>
            <th scope='col'>Phone No</th>
            <th scope='col'>Age</th>
            <th scope='col'>Email</th>
            <th scope='col'>Address</th>
            <th scope='col'>Country</th>
            <th scope='col'>Gender</th>
            <th scope='col'>Update</th>
            <th scope='col'>Delete</th>
          </tr>
        </thead>
        <tbody>
          {showUserData && showUserData.users ? (
            showUserData.users.map(userData => (
              <tr key={userData.id}>
                <th scope='row'>{userData.id}</th>
                <td>{userData.userData.name}</td>
                <td>{userData.userData.father_name}</td>
                <td>{userData.userData.contact}</td>
                <td>{userData.userData.age}</td>
                <td>{userData.userData.email}</td>
                <td>{userData.userData.address}</td>
                <td>{userData.userData.country}</td>
                <td>{userData.userData.gender}</td>
                <td className='updateDelBtn'>
                  <span onClick={() => handleUpdate(userData.id, userData)}>
                    Update
                  </span>
                </td>
                <td>
                  <span
                    className='updateDelBtn'
                    onClick={() => handleDelete(userData.id)}
                  >
                    Delete
                  </span>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan='11'>No user data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AddUserData;
