import { useState } from 'react'
import { Link } from 'react-router-dom';
function Sidebar() {

  const [open, setOpen] = useState(false);
  const Menus = [
    { title: "Dashboard", text: "Dashboard"},
    { title: "Profesores", text: "Profesores"},
    { title: "Estudiantes", text: "Alumnos" },
    { title: "Padres", text: "Tutor" },
    { title: "Curso", text: "Materia" },
    { title: "Configuracion", text: "Configuración"},
  ]

  return (
    <div className='flex text-custom-menu-text'>
      <div className={'flex justify-end'}>
        <img
          src="./src/assets/hamburguesa.png"
          className={`absolute cursor-pointer
          top-2 w-12 h-11 border-2 border-purple z-10 rounded-md hover:bg-violet-950  duration-500`}
          onClick={() => setOpen(!open)}
        />
        <div className={`${open ? 'w-56 justify-start' : 'w-12 justify-start'} flex align-center duration-500 h-screen pt-8 bg-purple relative`}>

          <ul className={`pt-6 flex-col ${open && 'w-full'}`}>
          {Menus.map((menu, index) => (
  <li key={index} className={'text-white text-sm flex items-center gap-x-4 p-2 cursor-pointer hover:bg-violet-950 rounded-md'}>
    {/* Asumiendo que cada imagen de menú también depende de si 'open' es verdadero */}
    {open && <img src={`./src/assets/${menu.title}.png`} alt={menu.title} />}
    {menu.to ? (
      <Link to={menu.to} className={`${!open ? 'hidden' : 'block'} tracking-wide text-base font-poppins opacity-80`}>
        {menu.text}
      </Link>
    ) : (
      <span className={`${!open ? 'hidden' : 'block'} tracking-wide text-base font-poppins opacity-80`}>
        {menu.text}
      </span>
    )}
  </li>
))}


          </ul>
        </div>
       
      </div>
    </div>
  )
}

export default Sidebar
