import Label from './Label';
import Input from './Input';
export const OffCanvasForm = ({ title, fields, buttonText, onSubmit }) =>{
    return (
        <div className={` fixed top-0 right-0 z-40 w-80 h-screen overflow-y-auto bg-white border-l transition-transform ${!isFormVisible  ? 'translate-x-full' : ""}`}>
            <div className='bg-gradient-to-br from-blue-400 to-purple-600 py-2 px-3 flex justify-between items-center'>
                <h3 className='text-lg font-bold text-blue-950'>{title}</h3>
                    <a className='cursor-pointer' onClick={() => dispatch(toggleFormVisibility())}>
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.3333 13.8334L2.66663 3.16675M13.3333 3.16675L2.66663 13.8334" stroke="black" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                    </a>
            </div>
            <form onSubmit={handleSubmit}  className=' flex flex-col h-full overflow-y-auto'>
            <div className='flex flex-col flex-1 p-2 gap-2 font-poppins text-base'>
            {fields.map(field=>(
                <div key={field.name} className='grid'>
                    <Label htmlFor={field.name}>{field.label}</Label>
                    <Input  type={field.type || 'text'}
                            name={field.name}
                            value={formData[field.name]}
                            onChange={handleChange}
                            placeholder={field.placeholder}
                            validations={field.validations}
                    />
                </div>
            ))}
            </div>
            <div className='p-3 bg-gray-200 border-t border-gray-300 flex gap-4'>
            <button className=' px-4 py-2 text-white bg-purple-600 hover:bg-purple-700 rounded transition duration-300 ease-in-out' type="submit">{buttonText}</button>
            <button className=" px-4 py-2 text-purple-600 border border-purple-600 rounded cursor-pointer text-center bg-white" type="button" onClick={() => dispatch(toggleFormVisibility())}>Cancelar</button>
            </div>
            </form>
        </div>
    )
}