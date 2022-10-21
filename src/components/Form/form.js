import React, {useState} from 'react'

function Form({todoList, setTodoList}) {

    const [todoItem, setTodoItem] = useState({
        name: '',
    });

    const handleChange = (e) => {
        setTodoItem({ name: e.target.value, status: false, id: (todoList.length + 1).toString() })
    }

    const handleSubmit = (e) => {
        e.preDefault();
        setTodoList([...todoList, todoItem])
        setTodoItem({ status: false, name: '' })
    }

    return (
        <header className="header">
            <h1>todos</h1>
            <form onSubmit={handleSubmit}>
                <input className="new-todo"
                    placeholder="What needs to be done?"
                    value={todoItem.name}
                    onChange={(handleChange)}
                    autoFocus />
            </form>
        </header>
    )
}

export default Form