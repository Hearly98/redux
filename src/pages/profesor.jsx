// App.js
import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { createProfesor } from './redux/profesor/profesorSlice';
import Label from './components/Label';
import Input from './components/Input';
import CustomSelect from './components/Select';
import { colourOptions } from './utils/data';
import usuarioBaseFields from './config/formFields/usuarioBaseFields'
import validateInput from './utils/validateInput';
const App = ({action = 'crearProfesor'}) => {
      const title= action.includes('crear')? `Crear ${action.split('crear')[1]}`: `Editar ${action.split('editar')[1]}`;

  const buttonText = action.includes('crear') ? 'Crear' : 'Editar';
  const dispatch = useDispatch();
  const formInitialState = usuarioBaseFields.reduce((acc, field) => ({
    ...acc,
    [field.name]: field.defaultValue || []
  }), {});
  formInitialState.materias = [];
  
const [formData, setFormData] = useState(formInitialState);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData =>({ ...prevFormData, [name]: value }));
  };
  const handleSelectChange = (selectedOptions) => {
    const values = selectedOptions ? selectedOptions.map(option => option.value) : [];
    setFormData(prevFormData=>({ ...prevFormData, materias: values }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    usuarioBaseFields.forEach(field => {
      const error = validateInput(field.validations, formData[field.name]);
      if (error) {
        validationErrors[field.name] = error;
      }
    });
  
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      alert(validationErrors); 
      return; 
    }
    dispatch(createProfesor(formData));
  };
  return (
    <div className="app-container">
        <div className='bg-gradient-to-br from-blue-400 to-purple-600 py-2 px-3 flex justify-between items-center'>
                <h3 className='text-lg font-bold text-blue-950'>{title}</h3>
                    <button className='cursor-pointer'>
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.3333 13.8334L2.66663 3.16675M13.3333 3.16675L2.66663 13.8334" stroke="black" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                    </button>
            </div>
      <form onSubmit={handleSubmit}>
        {/* Renderiza tus campos de Input aquí, similar a como lo haces en OffCanvasForm */}
        {usuarioBaseFields.map(field=>(
                <div key={field.name} className='grid'>
                    <Label htmlFor={field.name}>{field.label}</Label>
                    <Input  type={field.type || 'text'}
                            name={field.name}
                            value={formData[field.name] || ''}
                            onChange={handleChange}
                            placeholder={field.placeholder}
                            validations={field.validations}
                    />
                </div>
           ) )}
  
        {/* Componente CustomSelect para seleccionar materias */}
        <Label>Materias</Label>
        <CustomSelect
          name="materias"
          options={colourOptions}
          value={formData.materias.map(id => colourOptions.find(option => option.value === id))}
          onChange={handleSelectChange}
          isMulti={true}
        />

        <div className='buttons-container'>
        <button className=' px-4 py-2 text-white bg-purple-600 hover:bg-purple-700 rounded transition duration-300 ease-in-out' type="submit">{buttonText}</button>
        </div>
      </form>
    </div>
);
};

export default App;
