function UserTableByFunction(props) {
    return (
        <div>
            <h1>User Table Component By Function</h1>
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
            <h2>Premium Users</h2>
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
                {props.premiumUsers.map((user, index) => (
                    <tr key={index}>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.age}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default UserTableByFunction;
