import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { createProfesor } from '../redux/profesor/profesorSlice';
import { createAlumno } from '../redux/alumno/alumnoSlice';
import Label from './Label';
import Input from './Input';
import CustomSelect from './Select';
import { colourOptions } from '../utils/data';
import usuarioBaseFields from '../config/formFields/usuarioBaseFields'
import validateInput from '../utils/validateInput';
export const OffCanvasForm = ({ action, handleCloseForm }) =>{
   
    const title = action.includes('crear')? `Crear ${action.split('crear')[1]}`: `Editar ${action.split('editar')[1]}`;
    const buttonText = action.includes('crear') ? 'Crear' : 'Editar';
    const dispatch = useDispatch();
    
    const formInitialState = usuarioBaseFields.reduce((acc, field) => ({
        ...acc,
        [field.name]: field.defaultValue || ''
      }), { materias: [] });
    const [formData, setFormData] = useState(formInitialState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData =>({ ...prevFormData, [name]: value }));
      };
      const handleSelectChange = (selectedOptions) => {
        const values = selectedOptions ? selectedOptions.map(option => option.value) : [];
        setFormData(prevFormData=>({ ...prevFormData, materias: values }));
      };

      const [validationErrors, setValidationErrors] = useState({});
      const handleSubmit = (e) => {
        e.preventDefault();
        let errors = {};
        usuarioBaseFields.forEach(field => {
            const error = validateInput(field.validations, formData[field.name]);
            if (error) {
            errors[field.name] = error;
            }
        });
        if (Object.keys(errors).length > 0) {
            setValidationErrors(errors);
            return;
          }
          if (action === 'crearProfesor') {
            dispatch(createProfesor(formData));
          } else if (action === 'crearAlumno') {
            dispatch(createAlumno(formData));
          }
        setValidationErrors({});
      };
      const dismissAlert = (errorIndex) => {
        setValidationErrors((currentErrors) => {
          const newErrors = { ...currentErrors };
          delete newErrors[errorIndex];
          return newErrors;
        });
      };
    return (
        <div className={` fixed top-0 right-0 z-40 w-80 h-screen overflow-y-auto bg-white border-l transition-transform`}>
           {Object.values(validationErrors).map((error, index) => (
            <Alert key={index} message={error} type="error" onDismiss={() => dismissAlert(index)} />
            ))}
            <div className='bg-gradient-to-br from-blue-400 to-purple-600 py-2 px-3 flex justify-between items-center'>
                <h3 className='text-lg font-bold text-blue-950'>{title}</h3>
                    <button className='cursor-pointer' onClick={handleCloseForm}>
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.3333 13.8334L2.66663 3.16675M13.3333 3.16675L2.66663 13.8334" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                    </button>
            </div>

            <form onSubmit={handleSubmit}  className=' flex flex-col h-full overflow-y-auto'>
            <div className='flex flex-col flex-1 p-2 gap-2 font-poppins text-base'>
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
                    <div>
                    <Label>Materias</Label>
                    <CustomSelect
                    name="materias"
                    options={colourOptions}
                    value={formData.materias.map(id => colourOptions.find(option => option.value === id)).filter(Boolean)}
                    onChange={handleSelectChange}
                    isMulti={true}
                    />
                    </div>
               
            </div>
            <div className='p-3 bg-gray-200 border-t border-gray-300 flex gap-4'>
            <button className=' px-4 py-2 text-white bg-purple-600 hover:bg-purple-700 rounded transition duration-300 ease-in-out' type="submit">{buttonText}</button>
            <button className=" px-4 py-2 text-purple-600 border border-purple-600 rounded cursor-pointer text-center bg-white" type="button" onClick={handleCloseForm}>Cancelar</button>
            </div>
            </form>
        </div>
    )
}

export default OffCanvasForm;