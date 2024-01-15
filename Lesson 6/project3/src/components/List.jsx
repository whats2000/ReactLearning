import Item from "./Item";

function List(props) {
    const {todos, toggleTodoDone, removeTodo, editingTodo, toggleEditTodo, updateTodo} = props;

    return (
        <ul className="p-3 border rounded-2">
            {
                todos.length === 0 ? <span>No Tasks Yet</span> :
                    todos.map(todo => (
                        <Item key={todo.id}
                              todo={todo}
                              toggleTodoDone={toggleTodoDone}
                              removeTodo={removeTodo}
                              editingTodo={editingTodo}
                              toggleEditTodo={toggleEditTodo}
                              updateTodo={updateTodo}
                        />
                    ))}
        </ul>
    );
}

export default List;
