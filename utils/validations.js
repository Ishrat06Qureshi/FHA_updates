import * as EmailValidator from 'email-validator';

const validators = {
    email: {
      rules: [

        {
          test: (value) => {
            return value.length
          },
          message: 'Email is mandatory',
        },
        
        {
          test: (value) => {
            return EmailValidator.validate( value ) 
          },
          message: 'Email is invalid',
        },
       
        
      ],
      errors: [],
      valid: false,
      state: '',
    },
    password: {
      rules: [
        {
          test: (value) => {
            return value.length 
          },
          message: 'password is mandatory',
        },
      ],
      errors: [],
      valid: false,
      state: ''
    },
    companyName: {
      rules: [
        {
          test: (value) => {
            return value.length 
          },
          message: 'Company Name   is required',
        },
        {
          test: /^[a-zA-Z\s]+$/,
          message: 'Company can only contain alphabets',
        },
      ],
      errors: [],
      valid: false,
      state: ''
    },
    contactPersonName: {
      rules: [
        {
          test: (value) => {
            return value.length 
          },
          message: 'contact Person Name  is required',
        },
        {
          test: /^[a-zA-Z\s]+$/,
          message: 'contact Person Name can only contain alphabets',
        },
      ],
      errors: [],
      valid: false,
      state: ''
    },
    phoneNumber: {
      rules: [
        {
          test: (value) => {
            return value.length
          },
          message: 'Phone Number is required',
        },
        
        {
          test: (value) => {
            return value.length  === 10
          },
          message: 'Phone Number is not valid',
        },
      ],
      errors: [],
      valid: false,
      state: ''
    },
    customerNumber: {
      rules: [
        // {
        //   test: (value) => {
        //     return value.length
        //   },
        //   message: 'Phone Number is required',
        // },
        
        {
          test: (value) => {
            return value.length  <=5
          },
          message: 'Customer number is not valid',
        },
      ],
      errors: [],
      valid: false,
      state: ''
    },
    officeAddress:{
      rules: [
        // {
        //   test: (value) => {
        //     return value.length
        //   },
        //   message: 'Phone Number is required',
        // },
        
        {
          test: (value) => {
            return value.length 
          },
          message: 'office address is mandatory',
        },
      ],
      errors: [],
      valid: false,
      state: ''
    },
    quantity:{
      rules: [
        // {
        //   test: (value) => {
        //     return value.length
        //   },
        //   message: 'Phone Number is required',
        // },
        
        {
          test: (value) => {
            return value.length 
          },
          message: 'Quantity is required',
        },
      ],
      errors: [],
      valid: false,
      state: ''
    },
    shippingAddress:{
      rules: [
        // {
        //   test: (value) => {
        //     return value.length
        //   },
        //   message: 'Phone Number is required',
        // },
        
        {
          test: (value) => {
            return value.length 
          },
          message: 'shipping Address is required',
        },
      ],
      errors: [],
      valid: false,
      state: ''

    },
    lineOne:{
      rules: [
        // {
        //   test: (value) => {
        //     return value.length
        //   },
        //   message: 'Phone Number is required',
        // },
        
        {
          test: (value) => {
            return value.length 
          },
          message: 'Address is Required',
        },
      ],
      errors: [],
      valid: false,
      state: ''

    },
    lineTwo:{
      rules: [
        // {
        //   test: (value) => {
        //     return value.length
        //   },
        //   message: 'Phone Number is required',
        // },
        
        {
          test: (value) => {
            return value.length 
          },
          message: '',
        },
      ],
      errors: [],
      valid: false,
      state: ''

    },
    city:{
      rules: [
        // {
        //   test: (value) => {
        //     return value.length
        //   },
        //   message: 'Phone Number is required',
        // },
        
        {
          test: (value) => {
            return value.length 
          },
          message: 'city is required',
        },
        {
          test: /^[a-zA-Z\s]+$/,
          message: 'city can only contain alphabets',
        },
      ],
      errors: [],
      valid: false,
      state: ''

    },
    province:{
      rules: [
        // {
        //   test: (value) => {
        //     return value.length
        //   },
        //   message: 'Phone Number is required',
        // },
        
        {
          test: (value) => {
            return value.length 
          },
          message: 'province is required',
        },
        {
          test: /^[a-zA-Z\s]+$/,
          message: 'province can only contain alphabets',
        },
      ],
      errors: [],
      valid: false,
      state: ''

    },
    postalCode:{
      rules: [
      
        
        // {
        //   test: (value) => {
        //     return value.length 
        //   },
        //   message: 'Postal code is required',
        // },
        {
          test:/^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/,
          message: 'Postal code is invalid',
        },
        
      ],
      errors: [],
      valid: false,
      state: ''

    },
    verifyCode:{
      rules: [
      
        
        {
          test: (value) => {
            return value.length 
          },
          // message: 'Postal code is required',
        },
        
      ],
      errors: [],
      valid: false,
      state: ''

    },
    comment :{
      rules: [
      
        
        {
          test: (value) => {
            return value.length 
          },
          // message: 'Postal code is required',
        },
        
      ],
      errors: [],
      valid: false,
      state: ''

    }


  };
  
  export default validators;