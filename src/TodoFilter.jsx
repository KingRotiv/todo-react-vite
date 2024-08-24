function TodoFilter({ status, setStatus, order, setOrder }) {
    return (
        <div className="card card-body shadow mb-3">
            <legend>Filtros</legend>
            <div className="row align-items-center">
                <div className="col">
                    <label className="form-label">Status</label>
                    <select className="form-select" value={status} onChange={(e) => setStatus(e.target.value)}>
                        <option value="All">Todos</option>
                        <option value="Completed">Completo</option>
                        <option value="Pending">Pendente</option>
                    </select>
                </div>
                <div className="col"> 
                    <label className="form-label">Ordem</label>
                    <div onChange={(e) => setOrder(e.target.value)}>
                        <input type="radio" className="btn-check" value="Az" name="options" id="Az" autoComplete="off" defaultChecked={order === "Az"}/>
                        <label className="btn" htmlFor="Az"><i className="bi bi-sort-alpha-down" /></label>
                        <input type="radio" className="btn-check" value="Za" name="options" id="Za" autoComplete="off" defaultChecked={order === "Za"}/>
                        <label className="btn" htmlFor="Za"><i className="bi bi-sort-alpha-down-alt" /></label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoFilter