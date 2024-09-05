import { useState } from "react";
import Todo from "./todo";
import "./todoApp.css";

export default function TodoApplication() {


    const [title, setTitle] = useState("Hola");
    const [todos, setTodos] = useState([]);


    function handleChange(event) {


        const value = event.target.value;
        setTitle(value);

    }

    function handleSubmit(e) {

        e.preventDefault();

        const newTodo = {

            id: crypto.randomUUID(),
            title: title,
            completed: false
        }

        const temp = [...todos];
        temp.unshift(newTodo);
        setTodos(temp);

        setTitle("");


    }

    function handleUpdate(id, value){

        // Actualizar contenido de todos
        const temp = [...todos];
        const item = temp.find(item => item.id === id)
        item.title = value;
        setTodos(temp);


    }

    function handleDelete(id){

        const temp = todos.filter(item => item.id !== id);

        setTodos(temp);



    }
    return (
        <div className="todoContainer">

            <form onSubmit={handleSubmit} className="todoForm">

                <input onChange={handleChange} className="createbox" value={title}></input>
                <input onClick={handleSubmit}
                    className="buttonCreate"
                    type="submit"
                    value="Create" />

            </form>

            <div className="todosContainer">
                {


                    todos.map((item) => (

                        <Todo key={item.id} item={item} onUpdate={handleUpdate} onDelete={handleDelete}/>
            

            
            ))}

            
            </div>

        </div>

    );

}