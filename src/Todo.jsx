function Todo({ todo, removeTodo, completeTodo }) {

    return (
        <li className="list-group-item d-flex flex-row justify-content-between">
            <div className={!todo.active ? "text-decoration-line-through" : ""}>
                <p className="text-truncate m-0" style={{ maxWidth: "40vw" }}>{todo.name}</p>
                <p className="text-muted m-0">Status: {!todo.active ? "Completo" : "Pendente"}</p>
            </div>
            <div className="btn-group btn-group-sm" role="group">
                <button type="button" className="btn btn-success" onClick={() => completeTodo(todo.id)}><i className="bi bi-check" /> Completar</button>
                <button type="button" className="btn btn-danger" onClick={() => removeTodo(todo.id)}><i className="bi bi-trash" /> Deletar</button>
            </div>
        </li>
    )
}

export default Todo