export function Todos({ todos }) //object decluttering
{
    return (
        <div>
            {todos.map((todo) => {
                return (
                    <div>
                        <h1>{todo.title}</h1>
                        <p>{todo.description}</p>
                        <button>{todo.completed == true? "completed" : "mark as complete"}</button>
                    </div>
                )
            })}
        </div>
    )
}   