import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./todoList.css";
import LikeButton from "./likeButton";

export default function Todolist() {
    let [todos, setTodos] = useState([{ task: "Sample Task", id: uuidv4(), isDone: false }]);
    let [newTodo, setNewTodo] = useState([""]);
    let [isComplete, setIsComplete] = useState(true);

    let addTask = () => {
        setTodos((prevTodos) => {
            return [...todos, { task: newTodo, id: uuidv4(), isDone: false }]
        });
        setNewTodo("");
    }

    let updateTodovalue = (event) => {
        setNewTodo(event.target.value);
    };

    let deleteTodo = (id) => {
        setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
    };

    let upperCaseall = () => {
        setTodos(todos.map((todo) => {
            return { ...todo, task: todo.task.toUpperCase() };
        }));
    };

    let markDone = (id) => {
        setIsComplete(!true)
        setTodos(todos.map((todo) => {
            if (todo.id == id) {
                return { ...todo, isDone: true, };
            }
            return todo;
        }));
    };

    let markNot = (id) => {
        setIsComplete(true)
        setTodos(todos.map((todo) => {
            if (todo.id == id) {
                return { ...todo, isDone: false };
            }
            return todo;
        }));
    };

    let check = (id) => isComplete ? markDone(id) : markNot(id);

    return (
        <div>
            <input className="inp-class" type="text" placeholder="Add tasks" value={newTodo} onChange={updateTodovalue} />
            <button className="inp-btn" onClick={addTask}>Add task</button>
            <br /><br />
            <hr />

            <p>Task to do</p>
            <ul>
                {
                    todos.map((todo) => (
                        <div className="main-div" key={todo.id}>

                            <div className="set-like-btn">
                                <li style={todo.isDone ? { textDecorationLine: "line-through" } : {}}> {todo.task} </li> &nbsp;&nbsp;&nbsp;<LikeButton />
                            </div>


                            <div>
                                <button className="dl-btn" onClick={() => deleteTodo(todo.id)}>Delete</button>
                                <button className="up-btn" onClick={() => check(todo.id)}><i class="fa-solid fa-check"></i></button>
                            </div>

                        </div>
                    ))
                }
            </ul>
            <button className="upr-btn" onClick={upperCaseall}>upperCase</button>
        </div>
    )
}