# Class 1 React Component Definition and Usage

## 1. React 組件是什麼？

React 組件主要分為兩種：

- 函式型組件（Functional Component）
- 類別型組件（Class Component）

### 函式型組件

參考 `src/index.js`：

- 函數名稱必須以大寫字母開頭。為何? 因為在使用時 React 會把小寫字母開頭的函數當成是 HTML 標籤。(
  引入以及使用時，都需以大寫字母開頭，定義時其實不一定要大寫字母開頭，甚至可以是匿名 class，但為了統一，建議還是大寫字母開頭)
- 函數的返回值是一個 React JSX 元素。且 **必須要有返回值**，即便沒有返回值，也要返回 `null`。
- 組件使用時，就像是一個 HTML 標籤一樣使用。

定義:

```jsx
function Welcome() {
    return <h1>Hello, user</h1>;
}
```

使用:

```jsx
<Welcome/>
```

### 類別型組件

參考 `src/index.js`：

- 類別名稱必須以大寫字母開頭。為何? 因為在使用時 React 會把小寫字母開頭的函數當成是 HTML 標籤。(
  引入以及使用時，都需以大寫字母開頭，定義時其實不一定要大寫字母開頭，甚至可以是匿名 class，但為了統一，建議還是大寫字母開頭)
- 類別必須繼承 `React.Component` 類別。
- 類別必須實作 `render()` 方法
- `render()` **必須要有返回值**，即便沒有返回值，也要返回 `null`。

定義:

```jsx
class WelcomeClass extends React.Component {
    render() {
        return <h1>Hello, user</h1>;
    }
}
```

使用:

```jsx
<WelcomeClass/>
```

## 總結

- 在工作中，比較常用的是函式型組件。
- 不論是函式型組件還是類別型組件，定義時都必須以大寫字母開頭。
- 不論是函式型組件還是類別型組件，都必須要有返回值，即便沒有返回值，也要返回 `null`。
- 使用時，就像是一個 HTML 標籤一樣使用。單標籤的話，可以用自關閉的方式使用。
- 不過，類別型組件，能更好理解 React 的工作原理，所以在學習階段，會先學習類別型組件。

# Class 2 React Component Root and Other Components

## 1. React 組件的根組件

參考 `src/App.jsx`：

- React 組件的根組件，是指 React 組件的最外層組件。
- React 組件的根組件，一般習慣命名為 `App`。
- 檔案名稱一般位於 `src` 資料夾中。
- 檔案類型可命名成`.js`，也可命名為 `.jsx`。有些公司會規定組件檔案的類型必須是 `.jsx`
  。因此，建議組件檔案的類型都命名為 `.jsx`。
- 根組件必定會在 `index.js` 中被引入。也就是入口檔案。
- 這邊用類別型組件來定義 `App` 組件來示範。
- 記得要引入 `React` 模組。
- 並設置導出 `App` 組件。

## 2. React 組件的其他組件

參考 `src/components/`：

- 一般來說，React 組件的其他組件，都會放在 `src/components/` 資料夾中。
- 每個組件都是務必放在一個獨立的檔案。
- 檔案類型可命名成`.js`，也可命名為 `.jsx`。有些公司會規定組件檔案的類型必須是 `.jsx`
  。因此，建議組件檔案的類型都命名為 `.jsx`。
- 這邊用類別型組件來定義 `Header` 組件來示範。
- 記得要引入 `React` 模組。
- 並設置導出 `Header` 組件。

## 3. React 組件的使用

參考 `src/App.jsx`：

- 使用時，就像是一個 HTML 標籤一樣使用。單標籤的話，可以用自關閉的方式使用。
- 組件像是一個 HTML，故放置在哪，就會顯示在哪。
- 組件是可以重複使用的，因此，可以在同一個頁面中，重複使用多次。
- 組件重複使用會 new 一個新的組件，因此，每個組件都是獨立的，互不影響。

## 總結

- React 組件的根組件，是指 React 組件的最外層組件。建議命名為 `App.jsx`。
- React 組件的其他組件，建議放在 `src/components/` 資料夾中。建議以 `.jsx` 為副檔名。]
- React 組件用法，就像是一個 HTML 標籤一樣使用。放置在哪，就會顯示在哪。
- React 組件是可以重複使用的，因此，可以在同一個頁面中，重複使用多次。並且，每個組件都是獨立的，互不影響。每次使用，都會 new
  一個新的實例。
- React 解析 JSX 會把大寫字母開頭的標籤，當成是 React 組件。小寫字母開頭的標籤，當成是 HTML 標籤。故 React 組件的標籤，一定要以大寫字母開頭。

# Class 3 React Component State

## 1. React 組件的狀態

參考 `src/components/Counter.jsx`：

- React 函數型組件 **沒有狀態**，只有類別型組件才有狀態。不過函數型組件可以使用 React Hooks 來使用狀態，之後課程會介紹。
- React 組件的狀態，是指組件的私有數據。並且該數據變更時，會觸發組件的重新渲染。故狀態用來寫與 UI 有關的數據。
- 與 Vue 不同的是，React 組件的狀態不是用監聽的方式來實現的，而是用觸發重新渲染的方式來實現的。目的是為了提高效能。

## 2. React 組件的狀態定義

- React 組件的狀態定義，必須使用名稱是`this.state`的屬性
- React 組件的狀態其值是一個物件。

```jsx
class ComponentName extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            attributeName1: 屬性值,
            attributeName2: 屬性值,
            ...
        }
    }
}
```

## 3. React 組件的狀態更新

- React 組件的狀態更新，必須使用名稱是`this.setState()`的方法
- 目的是修改狀態的值，並且觸發組件的重新渲染。
- `this.setState()`方法的參數是一個物件，該物件的屬性名稱，必須是`this.state`的屬性名稱。
- `this.setState()`方法的不用重寫全部的狀態，只需要寫要更新的狀態屬性值即可。
- `this.setState()`方法是異步的，因此，如果要獲取更新後的狀態，必須在第二個參數中，使用回調函數來獲取。
- `this.setState()`方法傳遞是賦予新的值，更改值不建議使用`++`或`--`，因為可能會造成不可預期的結果。(
  如果非要用請用前置運算子`++i`或`--i`)

```jsx
class ComponentName extends React.Component {
    // Init this.state
    // constructor(props) {...}

    methodA() {
        this.setState({
            attributeName1: 新的屬性值,
            ...
        }, () => {
            // 獲取更新後的狀態值正確的方法
            console.log(this.state.attributeName1);
        });
    }
}
```

## 總結
- 與頁面渲染有關的數據，都應該定義在組件的狀態中。
- React 組件的狀態定義，必須使用名稱是`this.state`的屬性。並且其值是一個物件。
- React 組件的狀態更新，必須使用名稱是`this.setState()`的方法。並且其參數是一個物件，該物件的屬性名稱，必須是`this.state`的宣告屬性名稱。
- `this.setState()`方法是異步的，因此，如果要獲取更新後的狀態，必須在第二個參數中，使用回調函數來獲取。
- `this.setState()`方法傳遞是賦予新的值，更改值不建議使用`++`或`--`，因為可能會造成不可預期的結果。

