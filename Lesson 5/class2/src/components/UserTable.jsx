import {Component} from "react";

class UserTable extends Component {
    render() {
        const {users} = this.props;

        // This will throw an error, the `this.props` are read only
        // UserTable.jsx:9 Uncaught TypeError: Cannot assign to read only property 'users' of object '#<Object>'
        // this.props.users = [];

        // This will not throw an error, but it will modify the original parent object
        // We can modify the complex datatype like an array and object, but we cannot reassign them
        // But this is not a good practice, we should not modify the parent object
        // You can see even the component made by function one not modified the element, but the element is rendered as red
        this.props.users[0].firstName = (<span style={{color: 'red'}}>{this.props.users[0].firstName}</span>);

        console.log('The passed element: ', typeof this.props.title, this.props.title);
        console.log('The passed component by function component: ', typeof this.props.rightSectionLeft, this.props.rightSectionLeft);
        console.log('The passed component by element instance: ', typeof this.props.rightSectionRight, this.props.rightSectionRight);

        const RightSectionLeft = this.props.rightSectionLeft;

        return (
            <div style={{display: 'flex', padding: 10}}>
                <div style={{flex: '1'}}>

                    {/* Just paste the element props inside the curly braces */}
                    {this.props.title}
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
                </div>
                <div style={{flex: '1'}}>
                    <div style={{display: 'flex', padding: 10}}>
                        <div style={{flex: '1'}}>
                            {/* Use the component made pass by component from the props */}
                            <RightSectionLeft/>
                            {/* Or you can use the component directly */}
                            {/* <this.props.rightSectionLeft/> */}
                        </div>
                        <div style={{flex: '1'}}>
                            {/* Use the component made pass by element from the props */}
                            {this.props.rightSectionRight}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserTable;
