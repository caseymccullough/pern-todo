import React, { Fragment, useEffect, useState } from "react";

const ListTodos = () => {

    const [todos, setTodos] = useState([]);

    const getTodos = async () => {
        try {
            const response = await fetch("http://localhost:5000/todos")
            const jsonData = await response.json()

            // console.log(jsonData);
            setTodos(jsonData);

        } catch (err) {
            console.error(err.message);
        }
    }


    useEffect(() => {
        getTodos();
    }, []); // the empty array ensures that this request only occurs one time


    return (<Fragment> {" "}
        <table className="table mt-5 text-center">
            <thead>
                <tr>
                    <td>Description</td>
                    <td>Edit</td>
                    <td>Delete</td>
                </tr>
            </thead>
            <tbody>
                {/*                
                <tr>
                    <td>John</td>
                    <td>Doe</td>
                    <td>john@example.com</td>
                </tr> 
                */}
                {todos.map(todo => (
                    <tr key={todo.todo_id}>
                        <td>{todo.description}</td>
                        <td>Edit</td>
                        <td>Delete</td>
                    </tr>
                ))

                }

            </tbody>
        </table>
    </Fragment>);



};

export default ListTodos;