import React, { useState } from 'react';
import { isAlphabetic, isAlphaNumeric, isValidEmail, isValidPhone, minLength } from '../utils/validation';
export const Input = ({ type, name, value, onChange, placeholder, ...rest }) =>{
    const [error, setError] = useState('');
    const validateInput = (value) => {
        let errorMessage = '';
        if (validations.required && !value) {
          errorMessage = 'Este campo es obligatorio.';
        } else if (validations.isAlphabetic && !isAlphabetic(value)) {
          errorMessage = 'Solo se permiten caracteres alfabéticos.';
        } else if (validations.isAlphaNumeric && !isAlphaNumeric(value)) {
          errorMessage = 'Solo se permiten caracteres alfanuméricos.';
        } else if (validations.isValidEmail && !isValidEmail(value)) {
          errorMessage = 'Debe ser un correo electrónico válido.';
        } else if (validations.isValidPhone && !isValidPhone(value)) {
          errorMessage = 'Debe ser un teléfono válido.';
        } else if (validations.minLength && !minLength(value, validations.minLength)) {
          errorMessage = `Debe tener más de ${validations.minLength} caracteres.`;
        }
        setError(errorMessage);
        return errorMessage === '';
      };
    
      const handleBlur = (e) => {
        validateInput(e.target.value);
      };
    
      const handleChange = (e) => {
        onChange(e);
        validateInput(e.target.value);
      };
    
    return(
        <>
        <input className={`bg-cyan-50 border rounded py-1.5 px-3 border-gray-400 font-poppins ${error ? 'border-red-500' : 'rounded'}`}
         type={type}
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={placeholder}
        {...rest}
        />       
         {error && <p className="text-red-500 text-xs italic">{error}</p>}
        </>
    )
}