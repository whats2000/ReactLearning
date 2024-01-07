# Class 1 Basic React Component Properties Usage

## 1. React 組件 `props` 是甚麼

- 目的是為了讓父組件可以傳遞資料給子組件所誕生的一個機制
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
                <Child name={this.state.name} age={this.state.age}/>
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
        const {name, age} = this.props
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

1. **React 組件的 `props`**：`props` 是 React
   組件的屬性，用於父組件向子組件傳遞數據。它是一個物件，且是唯讀的，意味著子組件無法修改 `props` 的值。
2. **`props` 的傳遞機制**：父組件通過在子組件標籤上添加自定義屬性的方式傳遞 `props`。這些屬性封裝在一個物件中，並傳給子組件。
3. **`props` 的接收方式**：
    - **物件解構賦值**：子組件可以通過解構賦值的方式從 `this.props` 中提取所需的屬性。
    - **函數接收**：在函數組件中，`props` 作為函數的第一個參數傳遞，習慣上命名為 `props`，但也可以使用其他名稱。

# Class 2 More about React Component Properties

- 這邊會介紹更多關於 React 組件屬性的知識。
- AKA 公司面試易錯要點。

## 1. React 組件屬性是唯讀的 (Read Only)

- React 組件的屬性是唯讀的，子組件無法修改父組件傳遞過來的屬性值。
- 不論是物件解構賦值的方式，還是函數接收的方式，都無法修改父組件傳遞過來的屬性值。
- 但是，如果父組件傳遞給子組件的屬性是一個物件、陣列等複雜類型的值，那麼子組件可以修改該物件的屬性值。
- `props` 唯讀檢查並不會檢查到上方所說的複雜類型的值變更。

## 2. React 組件屬性可以傳遞任何類型的值

- 這點非常重要!
- React 組件的屬性可以傳遞任何類型的值，包括：數字、字串、布林值、物件、陣列、函數、元素等。
- 能傳標籤元素，因為經過Babel編譯後，會變成一個虛擬 DOM 元素。使用`React.createElement()`方法創建的。在子組件中，可以放在`{}`
  中使用。
- 能傳遞一個 React 組件原型，使用時，可以用
    ```jsx
    <Child passedComponent={TargetComponent} />
    ```
  這樣的方式傳遞。`TargetComponent`是一個 React 組件原型。
    ```jsx
    <props.passedComponent />
    ```
  這樣的方式使用。`passedComponent`是父組件傳遞給子組件的`props`屬性。
- 能傳遞一個 React 組件實例的 HTML 標籤名稱。這方法相當於傳遞一個虛擬 DOM 元素。可以用
    ```jsx
    <Child passedComponent={<TargetComponent />} />
    ```
  這樣的方式傳遞。`<TargetComponent />`是一個 React 組件實例的 HTML 標籤名稱。
    ```jsx
    {props.passedComponent}
    ```
  這樣的方式使用。`passedComponent`是父組件傳遞給子組件的`props`屬性。

## 3. React 類別組件的`constructor`參數
- 實際上，`constructor`會傳遞參數`props`。
- 並且該`props`屬性要傳遞給`super`方法。
- 在調用`super`方法之後，才能在`constructor`中使用`this.props`。

    ```jsx
    class ComponentName extends React.Component {
        constructor(props) {
            super(props)
            console.log(this.props)
        }
    }
    ```
    如果未傳遞`props`參數給`super`方法，那麼在`constructor`中使用`this.props`會是`undefined`。

## 總結
1. **React 組件屬性的唯讀性**：React 組件的 `props` 是唯讀的，意味著子組件不能修改從父組件接收到的 `props` 值。但對於 `props` 中的複雜類型（如物件或陣列），子組件可以修改其內部屬性，儘管這並不是推薦的做法。
2. **傳遞多種類型的值**：React 組件的 `props` 可以傳遞各種類型的值，包括基本數據類型、物件、陣列、函數、React 元素或組件。這包括傳遞組件原型或組件實例的 HTML 標籤，這些都通過 `props` 傳遞並在子組件中使用。
3. **類別組件的 `constructor` 方法**：在 React 類別組件中，`constructor` 方法接收 `props` 作為參數，並且需要將這個 `props` 傳遞給 `super` 方法以在構造函數中正確使用 `this.props`。如果不這樣做，`this.props` 將是 `undefined`。
