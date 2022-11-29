import React from 'react'


const Form = ({handleSubmit,editId,todo,setTodo}) => {
  return (
    <form className='todoForm' onSubmit={handleSubmit}> 
        {/*   here i am created a form  input and button*/}
    <input  placeholder="✍️Enter Your Today's Work"
    type="text" 
    value={todo}
    onChange={(e)=>setTodo(e.target.value) }

    />
    <button type="submit"> {editId? "Edit" : "Go"}</button>
  </form>
  )
}

export default Form