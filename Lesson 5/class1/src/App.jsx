import {Component} from "react";
import UserTable from "./components/UserTable";
import UserTableByFunction from "./components/UserTableByFunction";

class App extends Component {
    state = {
        users: [
            {id: 1, firstName: 'John', lastName: 'Doe', age: 25},
            {id: 2, firstName: 'Jane', lastName: 'Anderson', age: 24},
            {id: 3, firstName: 'Jack', lastName: 'Daniels', age: 26},
        ],
        premiumUsers: [
            {id: 4, firstName: 'Jack', lastName: 'Frost', age: 27},
            {id: 5, firstName: 'Jolly', lastName: 'Rancher', age: 28},
            {id: 6, firstName: 'Jill', lastName: 'Johnson', age: 29},
        ]
    }

    render() {
        return (
            <div>
                <UserTable users={this.state.users} premiumUsers={this.state.premiumUsers}/>
                <hr/>
                <UserTableByFunction users={this.state.users} premiumUsers={this.state.premiumUsers}/>
            </div>
        );
    }
}

export default App;
