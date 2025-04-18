import React from 'react'
import tickon from '/src/assets/tick.png'
import tickoff from '/src/assets/not-tick.png'
import deleteicon from '/src/assets/delete.png'

const Todoitems = ({text, id, isComplete, deleteTodo, toggle}) => {
  return (
    <div className='flex items-center my-3 gap-2'>
        <div onClick={()=>{toggle(id)}} className='flex flex-1 items-center cursor-pointer'>
            <img src={isComplete ? tickon : tickoff} alt="" className='w-7'/>
            <p className={`text-slate-700 ml-4 text-[17px] ${isComplete ? "line-through" : ""}`}>{text}</p>
        </div>
        <img onClick={()=>{deleteTodo(id)}} src={deleteicon} alt="" className='w-5 cursor-pointer'/>
    </div>
    
  )
}

export default Todoitems
