import {Component} from "react";

class UserTable extends Component {
    render() {
        // As we're passing a props from parent component named `users` to this component,
        // Then the `this.props` will be an object with a key named `users`
        // Check the console to see the `this.props` object
        console.log(this.props);

        // We can access the property by the key from `this.props` object
        // const users = this.props.users;
        // const premiumUsers = this.props.premiumUsers;

        // Another way to access is to destructure the `this.props` object
        // This will be useful when we have multiple props
        const {users, premiumUsers} = this.props;

        // Careful, the key name should be the same as the `props` name which is passed from a parent component
        const {u, p} = this.props;
        console.log('These will be undefined: ', u, p);

        // If you want to rename the key, you should do it like this
        const {users: u1, premiumUsers: p1} = this.props;
        console.log('These will be renamed correctly: ', u1, p1);

        return (
            <div>
                <h1>User Table Component By Class</h1>
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
                    {users.map((user, index) => (
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
                    {premiumUsers.map((user, index) => (
                        <tr key={index}>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.age}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default UserTable;
