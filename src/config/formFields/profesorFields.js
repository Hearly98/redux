
export const profesorFields = [
    {
      name: 'nombre',
      label: 'Nombre',
      type: 'text',
      placeholder: 'Ingrese el nombre',
      validations: {
        required: true,
        isAlphabetic: true,
        minLength: 3
      }
    },
  ];