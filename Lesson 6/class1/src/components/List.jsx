import Item from "./Item";

function List(props) {
    return (
        <ul className="p-3 border rounded-2">
            <Item/>
            <Item/>
            <Item/>
        </ul>
    );
}

export default List;
