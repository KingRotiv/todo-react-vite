function TodoSearch({ search, setSearch }) {
    return (
        <div className="card card-body shadow mb-3">
            <legend>Pesquisar</legend>
            <input type="text" className="form-control" value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
    )
}

export default TodoSearch