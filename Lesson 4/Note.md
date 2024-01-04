# Class 1 React Component Definition and Usage
## 1. React 組件是什麼？
React 組件主要分為兩種：
- 函式型組件（Functional Component）
- 類別型組件（Class Component）

### 函式型組件
參考 `src/index.js`：
- 函數名稱必須以大寫字母開頭。
- 函數的返回值是一個 React JSX 元素。且 **必須要有返回值**，即便沒有返回值，也要返回 `null`。
- 組件使用時，就像是一個 HTML 標籤一樣使用。
- 參數 `props` 是一個物件，用來接收組件的屬性。類似於 HTML 標籤的屬性。

定義:
```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```
使用:
```jsx
<Welcome name="Sara" />
```

### 類別型組件
參考 `src/index.js`：
- 類別名稱必須以大寫字母開頭。
- 類別必須繼承 `React.Component` 類別。
- 類別必須實作 `render()` 方法
- `render()` **必須要有返回值**，即便沒有返回值，也要返回 `null`。

定義:
```jsx
class WelcomeClass extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

使用:
```jsx
<WelcomeClass name="Sara" />
```

## 總結
- 在工作中，比較常用的是函式型組件。
- 不論是函式型組件還是類別型組件，定義時都必須以大寫字母開頭。
- 不論是函式型組件還是類別型組件，都必須要有返回值，即便沒有返回值，也要返回 `null`。
- 使用時，就像是一個 HTML 標籤一樣使用。單標籤的話，可以用自關閉的方式使用。
- 組件的屬性，可以在定義時，用參數 `props` 來接收。使用時，在 HTML 標籤中，用屬性的方式傳遞。
- 不過，類別型組件，能更好理解 React 的工作原理，所以在學習階段，會先學習類別型組件。
