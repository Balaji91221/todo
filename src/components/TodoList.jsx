import React from 'react'
import {MdDelete } from 'react-icons/md'
import {BiEdit} from 'react-icons/bi'
const TodoList = ({handleDelete,todos,handleEdit}) => {
  return (
    <ul className='allTodos'>
        {
          todos.map((t) => (

        <li className='singleTodo'>
          <span className='todotext' key={t.id}> {t.todo} </span>
          <button onClick={()=>(handleEdit(t.id))}><BiEdit fontSize="20px"/></button>
          <button onClick={()=>(handleDelete(t.id))}><MdDelete fontSize="20px" margin="0" padding="1px"/></button>
       
        </li>
          ))}
      </ul>
  )
}

export default TodoList