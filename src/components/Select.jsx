// CustomSelect.js
import React from 'react';
import chroma from 'chroma-js';
import makeAnimated from 'react-select/animated';
import Select from 'react-select';

// Asumiendo que tienes una lista de opciones de colores similar a `colourOptions`.
import { colourOptions } from '../utils/data';

const animatedComponents = makeAnimated();

const colourStyles = {
  control: (styles) => ({ ...styles, backgroundColor: 'white' }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
          ? data.color
          : isFocused
            ? color.alpha(0.1).css()
            : undefined,
      color: isDisabled
        ? '#ccc'
        : isSelected
          ? chroma.contrast(color, 'white') > 2
            ? 'white'
            : 'black'
          : data.color,
      cursor: isDisabled ? 'not-allowed' : 'default',

      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled
          ? isSelected
            ? data.color
            : color.alpha(0.3).css()
          : undefined,
      },
    }
  },
  multiValue: (styles, { data }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: color.alpha(0.1).css(),
    }
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: data.color,
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: data.color,
    ':hover': {
      backgroundColor: data.color,
      color: 'white',
    },
  }),
};
const CustomSelect = ({value, onChange, isMulti }) => {
  return (
    <Select
      components={animatedComponents}
      closeMenuOnSelect={!isMulti}
      value={value}
      onChange={onChange}
      isMulti={isMulti}
      options={colourOptions}
      styles={colourStyles}
    />
  );
};

export default CustomSelect;