import Item from "./Item";

function List(props) {
    const {todos, toggleTodoDone, removeTodo} = props;

    return (
        <ul className="p-3 border rounded-2">
            {
                todos.length === 0 ? <span>No Tasks Yet</span> :
                todos.map(todo => (
                <Item key={todo.id} todo={todo} toggleTodoDone={toggleTodoDone} removeTodo={removeTodo} />
            ))}
        </ul>
    );
}

export default List;
