function UserTableByFunction(props) {
    // This will also throw an error, the `props` are read only
    // UserTableByFunction.jsx:4 Uncaught TypeError: Cannot assign to read only property 'users' of object '#<Object>'
    // props.users = [];

    const RightSectionRight = props.rightSectionRight;

    console.log('The passed component by class component: ', typeof props.rightSectionRight, props.rightSectionRight);

    return (
        <div style={{display: 'flex', padding: 10}}>
            <div style={{flex: '1'}}>
                {/* Just paste the element props inside the curly braces */}
                {props.title}
                <h2>Normal Users</h2>
                <hr/>
                <table>
                    <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.age}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <div style={{flex: '1'}}>
                <div style={{display: 'flex', padding: 10}}>
                    <div style={{flex: '1'}}>
                        {/* Use the component made pass by element from the props */}
                        {props.rightSectionLeft}
                    </div>
                    <div style={{flex: '1'}}>
                        {/* Use the component made pass by component from the props */}
                        <RightSectionRight/>
                        {/* Or you can use the component directly */}
                        {/* <props.rightSectionRight/> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserTableByFunction;
