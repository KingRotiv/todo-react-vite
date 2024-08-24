function TodoList({ children }) {
    return (
        <ul className="list-group shadow mb-3">
            {console.log(children)}
            {children.length > 0 ? children : <li className="list-group-item">Nenhuma tarefa encontrada</li>}
        </ul>
    )
}

export default TodoList