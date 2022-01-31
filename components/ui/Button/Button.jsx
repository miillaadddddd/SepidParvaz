import React from 'react';

function Button({type, title, onClick=()=>{}}) {
  return <> 
  <button onClick={onClick} style={{backgroundColor: type == 'reject' ? "#ff4f7d" :"#4f7dff"}}  className=' py-4 px-8 text-xl text-white font-semibold rounded-3xl shadow-lg duration-200 hover:scale-125   '>{title}</button>
  </>;
}

export default Button;
