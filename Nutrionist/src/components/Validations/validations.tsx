import * as yup from 'yup';

let emailreg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
const space = /^\S*$/;
// const passwordValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-]).{8,}$/;

const SignIn = yup.object().shape({
  email_address: yup
    .string()
    // .min(5, 'Too Short!')
    // .email('Email must be valid')
    .matches(emailreg, 'Email must be valid')
    .required('Required'),

  password: yup
    .string()
    // .min(5, 'Too Short!')
    .matches(space, 'spacing is not allowed')
    .required('Required'),
});

export {SignIn};
