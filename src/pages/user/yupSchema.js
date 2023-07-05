import * as Yup from "yup";

export const yupSchema = Yup.object({
  name: Yup.string()
    .min(2, "Must minmum 2 char")
    .max(20, "maximum 20 char")
    .required("Please Enter Your Name"),
  father_name: Yup.string().required("Please Enter Your Father Name"),
  age: Yup.number().positive().integer().required("Please Enter Your age"),
  address: Yup.string()
    .min(4, "minimum 4 char")
    .max(20, "maximum 20 char")
    .required("Enter your home Address"),
  contact: Yup.number()
    .positive()
    .integer()
    .required("Please Enter Your Phone No")
    .min(11, "minimum 11 Digit"),
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Please enter your email"),
  country: Yup.string().required("Select your country"),
  gender: Yup.string().required("Please select your gender"),
});
