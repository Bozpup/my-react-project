import React, { ChangeEvent, useState } from 'react'

type TodoItems = {
item: string
}
function Todo() {
    const [todo, setTodo] = useState<string[]>([])
    const [text, setText] = useState<string>('')

    const handleUpdate : React.SubmitEventHandler<HTMLFormElement >= (e: SubmitEvent<HTMLFormElement>) =>{
        e.preventDefault();
setTodo([...todo, text])

    }
  return (
    <>
    <div>Todo</div>
    <form onSubmit={handleUpdate}>
        <input type="text" placeholder='Enter item' value={text} onChange={(e)=>setText(e.target.value)}/>
        <ul>
            
            {todo.map((item, index) => <li key={index}>{item}</li>)}
        
        </ul>
    </form>
    </>
  )
}

export default Todo