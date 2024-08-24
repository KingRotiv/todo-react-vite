import { useState } from "react"

function TodoForm({ onSubmit }) {
    const [name, setName] = useState("")

    function handlerSubmit(e) {
        e.preventDefault()
        if (!name.trim()) return
        onSubmit(name)
        setName("")
    }

    return (
        <div className="card card-body shadow">
            <form className="mb-3" onSubmit={handlerSubmit}>
                <legend>Nova Tarefa</legend>
                <div className="mb-3">
                    <label className="form-label">Nome</label>
                    <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)} required />
                </div>
                <div className="">
                    <button type="submit" className="btn btn-primary"><i className="bi bi-plus" />Adicionar</button>
                </div>
            </form>
        </div>
    )
}

export default TodoForm