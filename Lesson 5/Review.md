# 上次重點回顧

## 1. 組件如何定義狀態?

- 在類別組件`constructor`內使用 `this.state` 定義狀態，其值為物件。

```jsx
class ComponentName extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            attribute1: value1,
            attribute2: value2,
            ...
        };
    }
}
```

## 2. 如何修改狀態?

- 使用 `this.setState()` 修改狀態，其參數為物件或函式。

使用物件修改狀態
```jsx
class ComponentName extends React.Component {
    methodA = () => {
        this.setState({
            attribute1: this.state.attribute1 + 1,
            ...
        });
    }
}
```

使用函式修改狀態
```jsx
class ComponentName extends React.Component {
    methodB = () => {
        this.setState((state) => ({
            attribute1: state.attribute1 + 1,
            ...
        }));
    }
}
```

## 3. `this`指向問題，如何把事件處理函數分隔出來?

- 使用箭頭函數定義事件處理函數操作狀態，此時`this`指向組件實例。

方法一、使用箭頭函數定義事件處理操作狀態，則可直接傳遞事件處理函數給事件屬性。不可使用`this.methodA()`調用事件處理函數操作狀態。
```jsx
class ComponentName extends React.Component {
    methodA = () => {
        this.setState({
            attribute1: this.state.attribute1 + 1,
            ...
        });
    }
    
    render() {
        return (
            <div>
                <button onClick={this.methodA}>Click Me</button>
            </div>
        );
    }
}
```

方法二、在呼叫外側增加個箭頭函數，此時`this`指向組件實例，則可使用`this.methodA()`調用事件處理函數操作狀態。
這不限用於箭頭函數處理操作，也可用於一般函數處理操作。
```jsx
class ComponentName extends React.Component {
    methodA = () => {
        this.setState({
            attribute1: this.state.attribute1 + 1,
            ...
        });
    }
    
    methodB() {
        this.setState({
            attribute1: this.state.attribute1 + 1,
            ...
        });
    }
    
    render() {
        return (
            <div>
                <button onClick={() => this.methodA()}>Click Me</button>
                <button onClick={() => this.methodB()}>Click Me</button>
            </div>
        );
    }
}
```

方法三、在構造函數`constructor`內定義箭頭函數。

```jsx
class ComponentName extends React.Component {
    constructor(props) {
        super(props);
        this.methodA = () => {
            this.setState({
                attribute1: this.state.attribute1 + 1,
                ...
            });
        }
    }
    
    render() {
        return (
            <div>
                <button onClick={this.methodA}>Click Me</button>
            </div>
        );
    }
}
```

