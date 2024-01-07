# Class 1 Basic React Component Properties Usage

## 1. React 組件 `props` 是甚麼

目的是為了讓父組件可以傳遞資料給子組件所誕生的一個機制

- `props` 是 React 組件的屬性，是一個物件
- `props` 只能由父組件傳遞給子組件，不能反向傳遞，或是兄弟組件之間傳遞
- `props` 是唯讀的，子組件不能修改 `props` 的值

## 2. React 組件 `props` 的傳遞

在父組件中，使用子組件的時候，可以在子組件上添加自定義的屬性，這些屬性都會被封裝到一個物件中，傳遞給子組件，這個物件就是 `props`
物件


```jsx
// 父組件
class Parent extends React.Component {
    state = {
        name: 'Jack',
        age: 18
    }

    render() {
        return (
            <div>
                <Child name={this.state.name} age={this.state.age} />
            </div>
        )
    }
}
```
該事例中，`props` 物件中有兩個屬性，`name` 和 `age`，這兩個屬性都是由父組件傳遞給子組件的。

## 3. React 組件 `props` 的接收

接收函數與物件解構賦值方式是不同的，函數接收的參數是一個物件，而物件解構賦值是一個物件中的屬性。

### 3.1 物件解構賦值

- React 會將 `props` 物件作為該實例的`this.props`屬性傳遞給子組件。
- 注意: 如果用 destructuring 的方式接收 props，必須把大括號內名稱與 props 名稱一致，否則會是 undefined。
- 如果用 destructuring 的方式接收需要重新命名的話，可以使用 `:` 來重新命名。
    ```jsx
    const { name: userName, age: userAge } = this.props;
    ```
- 參考`src/Class1/components/UserTableFunction.jsx`中的`UserTableFunction`組件。
```jsx
// 子組件
class Child extends React.Component {
    render() {
        const { name, age } = this.props
        return (
            <div>
                <p>姓名：{name}</p>
                <p>年齡：{age}</p>
            </div>
        )
    }
}
```

### 3.2 函數接收

- React 會將 `props` 物件作為函數的第一個參數傳遞給函數
- 習慣性將函數的參數命名為 `props`，當然也可以使用其他名稱，但是不建議這麼做
- 參考`src/Class1/components/UserTable.jsx`中的`UserTable`組件
```jsx
// 子組件
function Child(props) {
    return (
        <div>
            <p>姓名：{props.name}</p>
            <p>年齡：{props.age}</p>
        </div>
    )
}
```

## 總結
1. **React 組件的 `props`**：`props` 是 React 組件的屬性，用於父組件向子組件傳遞數據。它是一個物件，且是唯讀的，意味著子組件無法修改 `props` 的值。
2. **`props` 的傳遞機制**：父組件通過在子組件標籤上添加自定義屬性的方式傳遞 `props`。這些屬性封裝在一個物件中，並傳給子組件。
3. **`props` 的接收方式**：
    - **物件解構賦值**：子組件可以通過解構賦值的方式從 `this.props` 中提取所需的屬性。
    - **函數接收**：在函數組件中，`props` 作為函數的第一個參數傳遞，習慣上命名為 `props`，但也可以使用其他名稱。
