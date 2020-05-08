// write your custom hook here to control your checkout form
// Build a custom hook called `useForm`, and use it in your CheckoutForm component to control the form's stateful logic
import { useState } from 'react';

export const useForm = initialValue => {
    const [values, setValues] = useState(initialValue);

    const handleChanges = e => {
        setValues({
          ...values,
          [e.target.name]: e.target.value
        });
      };
    
      return [values, handleChanges];
    };