import React from 'react'

const ShowMe = (props)=>(
    <div>
{props.text}
    </div>
)

const MyTodo = ({todos,children})=>(
    <div>
    {children}
         <li> 
                     {todos.map(todo => (
                                    <ShowMe key={todo.id} text={todo.text}/>
                                ))}
        </li>

    </div>

)

export default MyTodo