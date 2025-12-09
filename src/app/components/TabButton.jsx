import React from 'react'

const TabButton = ({active,selectTab, children}) => {
    const buttonClasses = active ? 'mr-3 font-semibold text-white border-b border-purple-500' : 'mr-3 font-semibold hover:text-white text-[#ADB7BE] ';
  return (
    <button onClick={selectTab}>
        <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
        </p>
    </button>

)
}

export default TabButton