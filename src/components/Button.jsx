import React from 'react'
import { useNavigate } from 'react-router-dom';


const Button = ({ children, type = "submit", className = "", ...props }) => {

  const navigate = useNavigate()
  return (
    <button onClick={() => navigate(props.navigateTo)} className="relative inline-flex p-[1px] rounded-full 
bg-gradient-to-r from-orange-600 to-rose-500">
      <span className="px-7 py-2 rounded-full max-sm:text-sm sm:font-semibold
  transition bg-black/70 hover:bg-black/80 flex items-center gap-1">
        {children}
      </span>
    </button>

  )
}

export default Button