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
- React 組件的狀態更新，必須使用名稱是`this.setState()`的方法。並且其參數是一個物件，該物件的屬性名稱，必須是`this.state`
  的宣告屬性名稱。
- `this.setState()`方法是異步的，因此，如果要獲取更新後的狀態，必須在第二個參數中，使用回調函數來獲取。
- `this.setState()`方法傳遞是賦予新的值，更改值不建議使用`++`或`--`，因為可能會造成不可預期的結果。

# Class 4a More About React Component State

- 這邊會介紹更多關於 React 組件狀態的知識。
- AKA 公司面試題型。

## 1. `this.setState()`多次調用的結果 ?

Question 1: `this.setState()`以下程式碼點擊一次按鈕，`h1`標籤中的數字會是多少？

```jsx
class ComponentName extends React.Component {
    // Init this.state
    constructor(props) {
        super(props);
        this.state = {
            attributeName1: 0,
            attributeName2: 0,
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.attributeName1} {this.state.attributeName2}</h1>
                <button onClick={() => {
                    this.setState({
                        attributeName1: this.state.attributeName1 + 1,
                        attributeName2: this.state.attributeName2 + 1
                    });
                    this.setState({attributeName1: this.state.attributeName1 + 2});
                    this.setState({attributeName1: this.state.attributeName1 + 3});
                }}>+
                </button>
            </div>
        );
    }
}
```

- 答案：3 1
- 參考`src/components/Counter1.jsx`
- 原因：當`this.setState()`多次調用設置物件時，React 會把多次調用的結果合併起來，然後再一次性的更新狀態。
- 這是 React 的一個優化，目的是為了提高效能。目的是當有多個不同狀態屬性更新時，只會觸發一次重新渲染。既使是同一個狀態屬性，也會合併更新。
- 因此實現該功能是先用合併(merge)的方式。因為物件不能有多個相同的屬性名稱，所以合併後，同一個屬性名稱的值，會是最後一次調用的結果。
- 上方合併後等同於：

```jsx
this.setState({
    attributeName1: this.state.attributeName1 + 3,
    attributeName2: this.state.attributeName2 + 1
});
```

Question 2: `this.setState()`以下程式碼點擊一次按鈕，`h1`標籤中的數字會是多少？

```jsx
class ComponentName extends React.Component {
    constructor(props) {
        super(props);

        this.state = {attributeName1: 0};
    }

    render() {
        return (
            <div>
                <h1>{this.state.attributeName1}</h1>
                <button onClick={() => {
                    this.setState({attributeName1: this.state.attributeName1 + 1});
                    this.setState((state) => {
                        return {attributeName1: state.attributeName1 + 2};
                    });
                    this.setState((state) => {
                        return {attributeName1: state.attributeName1 + 3};
                    });
                }}>Increment
                </button>
            </div>
        )
    }
}
```

- 答案：6
- 參考`src/components/Counter2.jsx`
- 原因：當`this.setState()`是使用函數的方式時，React 會在更新狀態後再依序調用函數。因此，每次調用函數時，都會使用最新的狀態值。

## 2. `this.setState()`的兩個參數

Question 1: 下方程式碼`console.log`的結果是什麼？

```jsx
class ComponentName extends React.Component {
    constructor(props) {
        super(props);

        this.state = {attributeName1: 0};
    }

    render() {
        return (
            <div>
                <h1 id="target">{this.state.attributeName1}</h1>
                <button onClick={() => {
                    this.setState({attributeName1: this.state.attributeName1 + 1});
                    this.setState((state) => {
                        console.log('First state value: ', state.attributeName1);
                        console.log('First real dom value: ', document.getElementById('target').textContent);
                    }, () => {
                        console.log('Second state value: ', this.state.attributeName1);
                        console.log('Second real dom value: ', document.getElementById('target').textContent);
                    });
                }}>Increment
                </button>
            </div>
        )
    }
}
```

- 答案：
- 參考`src/components/Counter3.jsx`
- First state value: 1
- First real dom value: 0
- Second state value: 1
- Second real dom value: 1
- 原因：`this.setState()`方法的有兩個參數，若都是函數，
    - 第一個會在更新狀態後，依序調用函數，並且傳遞最新的狀態值。
    - 第二個會在更新狀態後，並且重新渲染後，調用函數，並且傳遞最新的狀態值。

## 總結

- `this.setState()`多次調用的結果：當`this.setState()`
  多次調用時，React會將這些調用的結果合併，然後一次性更新狀態。這是React的一種優化，目的是提高效能。如果有多個不同的狀態屬性更新，只會觸發一次重新渲染。即使是同一個狀態屬性，也會合併更新。
- `this.setState()`使用函數的方式：當`this.setState()`使用函數的方式時，React會在更新狀態後再依序調用函數。因此，每次調用函數時，都會使用最新的狀態值。
- `this.setState()`的兩個參數：`this.setState()`
  方法有兩個參數，如果都是函數，第一個會在更新狀態後，依序調用函數，並傳遞最新的狀態值。第二個會在更新狀態後，並重新渲染後，調用函數，並傳遞最新的狀態值。

# Class 4b More About React Component `this`

## 1. 組件函數中的`this`指向

Question 1: 為何我們設置event handler時，要使用箭頭函數？

- 答案：因為在 React 組件中，函數中的`this`指向是`undefined`。這在 lesson 2 class 4 中有提到。(程式第33行)
- 參考`src/components/Counter4.jsx`
- 因此，如果要使用`this`，必須使用箭頭函數。因為箭頭函數中的`this`會指向外層的`this`。在例子中，就是指`render()`
  方法中的`this`。

Question 2: 我們要如何把事件處理函數與JSX獨立出來，使之能更好維護？

- 答案： 以下是四種方法
- 參考`src/components/Counter5.jsx`

### 方法一：在 `constructor()` 中定義箭頭函數

- 直接將箭頭函數定義在 `constructor()` 中。
- 優點: 很好理解
- 缺點: 每次實例組件時，都會創建一個新的函數，會影響效能。

### 方法二： 定義操作當作事件處理函數

- 該方法有兩種寫法
    - 第一種寫法：在定義操作時，使用箭頭函數，則在使用時，不需要再使用箭頭函數包裹一層。當然也可以包裹一層 (不過沒有必要)。
    - 第二種寫法：在定義操作時，使用一般函數，則在使用時，需要再使用箭頭函數包裹一層。
- 優點: 效能最好，只需保留原型上的操作函數即可。
- 缺點: 暫時想不到。

### ~~方法三：在 `render()` 中定義箭頭函數~~

- 直接將箭頭函數定義在 `render()` 中。
- 優點: 很好理解。
- 缺點: 每次渲染都會產生新的函數，會嚴重影響效能。故 **不建議使用**。

### 方法四：在`constructor()`中使用`bind()`方法

- 在`constructor()`中使用`bind()`方法，綁定一般操作與`this`。
- 優點: 比方法三好一點，因為只會在實例化時，產生一次新的函數。
- 缺點: 在每個實例中都會複製一份函數，會影響效能。並且比較難理解。
- 以下是解釋其邏輯
  #### 第一步 類別和構造函數：
    - 在類別定義時，方法（包括構造函數 `constructor()`）在記憶體中並不是立即“定義好”的，而是當類別被實例化（即使用 `new`
      關鍵字創建一個新的實例）時，這些方法才會與該實例相關聯。
    - 方法（非靜態方法）通常不是在每個實例中單獨存儲的，而是存在於類別的原型上。這意味著所有實例共享相同的方法，而不是每個實例都有自己的方法副本。
  #### 第二步 使用 `new` 創建實例：
    - 當使用 `new` 創建一個類別的新實例時，JavaScript 首先創建一個新的對象，然後將這個類別的原型鏈接到這個對象上。
    - 構造函數會被調用，`this` 在構造函數的上下文中指向新創建的對象。
  #### 第三步 方法和 `bind()`：
    - 如果在構造函數中使用了 `bind(this)`，這會為被綁定的方法創建一個新的函數實例，並將 `this` 固定為該類別實例。
    - 這個過程實際上是創建了一個新的函數對象，這個新函數對象有一個固定的 `this` 指向，指向該類別的實例。
    - 這個新創建的函數對象（經過 `bind` 處理的）將被賦值給類別實例的相應屬性，從而使得在實例方法中的 `this`
            正確指向該實例。

## 總結
- 組件函數中的`this`指向：在 React 組件中，函數中的`this`指向是`undefined`。因此，如果要使用`this`
  ，必須使用箭頭函數。因為箭頭函數中的`this`會指向外層的`this`。在例子中，就是指`render()`方法中的`this` (
  組件類別中的`this`)。
- 為了把函數獨立出來，使之能更好維護，建議在操作定義中，使用箭頭操作。
- 如果非箭頭函數操作，則必須在外部用額外的箭頭函數包裹一層或在`constructor()`中使用`bind()`方法。
- 不建議在`render()`方法中定義箭頭函數，因為每次渲染都會產生新的函數，會嚴重影響效能。
- 可以使用`bind()`方法
- 使用方法二：定義操作當作事件處理函數，並使用箭頭函數操作，是最好的方法。