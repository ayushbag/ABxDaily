import React from 'react'

const Button = ({ bgcolor, label }) => {
  return (
    <div className={`bg-${bgcolor} px-4 bg-opacity-50 py-1 rounded-lg font-semibold`}>
        {label}
    </div>
  )
}

export default Button