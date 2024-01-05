# Class 1 React Component Definition and Usage
## 1. React 組件是什麼？
React 組件主要分為兩種：
- 函式型組件（Functional Component）
- 類別型組件（Class Component）

### 函式型組件
參考 `src/index.js`：
- 函數名稱必須以大寫字母開頭。為何? 因為在使用時 React 會把小寫字母開頭的函數當成是 HTML 標籤。(引入以及使用時，都需以大寫字母開頭，定義時其實不一定要大寫字母開頭，甚至可以是匿名 class，但為了統一，建議還是大寫字母開頭)
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
- 類別名稱必須以大寫字母開頭。為何? 因為在使用時 React 會把小寫字母開頭的函數當成是 HTML 標籤。(引入以及使用時，都需以大寫字母開頭，定義時其實不一定要大寫字母開頭，甚至可以是匿名 class，但為了統一，建議還是大寫字母開頭)
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

# Class 2 React Component Root and Other Components
## 1. React 組件的根組件
參考 `src/App.jsx`：
- React 組件的根組件，是指 React 組件的最外層組件。
- React 組件的根組件，一般習慣命名為 `App`。
- 檔案名稱一般位於 `src` 資料夾中。
- 檔案類型可命名成`.js`，也可命名為 `.jsx`。有些公司會規定組件檔案的類型必須是 `.jsx`。因此，建議組件檔案的類型都命名為 `.jsx`。
- 根組件必定會在 `index.js` 中被引入。也就是入口檔案。
- 這邊用類別型組件來定義 `App` 組件來示範。
- 記得要引入 `React` 模組。
- 並設置導出 `App` 組件。

## 2. React 組件的其他組件
參考 `src/components/`：
- 一般來說，React 組件的其他組件，都會放在 `src/components/` 資料夾中。
- 每個組件都是務必放在一個獨立的檔案。
- 檔案類型可命名成`.js`，也可命名為 `.jsx`。有些公司會規定組件檔案的類型必須是 `.jsx`。因此，建議組件檔案的類型都命名為 `.jsx`。
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
- React 組件是可以重複使用的，因此，可以在同一個頁面中，重複使用多次。並且，每個組件都是獨立的，互不影響。每次使用，都會 new 一個新的實例。
- React 解析 JSX 會把大寫字母開頭的標籤，當成是 React 組件。小寫字母開頭的標籤，當成是 HTML 標籤。故 React 組件的標籤，一定要以大寫字母開頭。
