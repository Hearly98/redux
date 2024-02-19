import React, { useEffect } from 'react';

const Alert = ({ message, type , onDismiss }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onDismiss();
    }, 5000);

    return () => clearTimeout(timer);
  }, [message, type ,onDismiss]);

  return (
    <div
      className={`${type === 'error'? 'bg-red-100 border-red-400 text-red-700': 'bg-green-100 border-green-400 text-green-700'} border px-4 py-3 rounded relative`} role="alert" >
      <strong className="font-bold">{type === 'error' ? 'Error: ' : 'Listo: '}</strong>
      <span className="block sm:inline">{message}</span>
    </div>
  );
};

export default Alert;
 