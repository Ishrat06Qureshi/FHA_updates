import React from "react"
import validators from "./validations";
import { Text } from "react-native";

const  resetValidators = () => {
    Object.keys(validators).forEach((fieldName) => {
      validators[fieldName].errors = [];
      validators[fieldName].state = '';
      validators[fieldName].valid = false;
    });
  }
  

  const updateValidators = (fieldName, value) => {
    // console.log("in the update Validators ",fieldName)
    validators[fieldName].errors = [];
    validators[fieldName].state = value;
    validators[fieldName].valid = true;
    validators[fieldName].rules.forEach((rule) => {
      if (rule.test instanceof RegExp) {
        if (!rule.test.test(value)) {
          validators[fieldName].errors.push(rule.message);
          validators[fieldName].valid = false;
        }
      } else if (typeof rule.test === 'function') {
        if (!rule.test(value)) {
          validators[fieldName].errors.push(rule.message);
          validators[fieldName].valid = false;
        }
      }
    });
   
  }


  const displayValidationErrors = ( fieldName  ) => {
    
    const validator =  validators[fieldName];
    const { errors } = validator
     return ( <Text style={{ 
       color: "red"  }}>
       {errors[0]}
       </Text>)
  }

 const  isFormValid = ( fieldNames  ) => {
    
    let status = true;
    Object.keys(validators).forEach((field) => {

       if (fieldNames.includes(field) )
       {
            if (!validators[field].valid) { 
              status = false;
            } 
            
       }       
    });
    return status; 
  }


  const showError = ( fieldName ) => {
    return  validators[fieldName].valid
  }

  const validation_functions = {
      resetValidators,
      updateValidators,
      displayValidationErrors,
      isFormValid,
      showError
  }

  export default validation_functions