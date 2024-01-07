import {Component} from "react";
import UserTable from "./components/UserTable";
import UserTableByFunction from "./components/UserTableByFunction";
import RightSideImageLeft from "./components/RightSideImageLeft";
import RightSideImageRight from "./components/RightSideImageRight";

class App extends Component {
    state = {
        users: [
            {id: 1, firstName: 'John', lastName: 'Doe', age: 25},
            {id: 2, firstName: 'Jane', lastName: 'Anderson', age: 24},
            {id: 3, firstName: 'Jack', lastName: 'Daniels', age: 26},
        ]
    }

    render() {
        const element1 = <h1>User Table Component By Class</h1>;
        const element2 = <h1>User Table Component By Function</h1>;
        return (
            <div>
                {/* We can pass elements as props */}
                {/* We can pass components as props, as you can see, the two-section random image will be the same */}
                {/* We can directly use the component as a prop */}
                {/* We can pass the element instance as a prop, because it likes a virtual DOM */}
                {/* But how to use in a child component is different, look at the UserTable and UserTableByFunction components */}
                {/* Also check the console for understanding the difference */}
                <UserTable users={this.state.users}
                           premiumUsers={this.state.premiumUsers}
                           title={element1}
                           rightSectionLeft={RightSideImageLeft}
                           rightSectionRight={<RightSideImageRight/>}/>
                <hr/>
                <UserTableByFunction users={this.state.users}
                                     premiumUsers={this.state.premiumUsers}
                                     title={element2}
                                     rightSectionLeft={<RightSideImageLeft/>}
                                     rightSectionRight={RightSideImageRight}/>
            </div>
        );
    }
}

export default App;