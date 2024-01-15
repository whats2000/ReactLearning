# Class 1 Other useful packages with React

- - -

## 1. React Bootstrap

### 1.1. 安裝

```bash
npm install react-bootstrap bootstrap
```

記得你要先把 terminal 的路徑切換到你的專案資料夾，才能安裝到你的專案中。

### 1.2.1. 使用 `className`

- 你可以使用原生的 Bootstrap 在`className`。
- 記得要在`index.js`中`import 'bootstrap/dist/css/bootstrap.min.css';`。(或者`App.jsx`也可以)
- 詳細 Boostrap 樣式可以參考[官方網站](https://getbootstrap.com/docs/5.3/getting-started/introduction/)。

```jsx
function App() {
    return (
        <div className="container p-5 w-50 border mt-5">
            <h1>Hello World</h1>
        </div>
    );
}
```

### 1.2.2. 使用 Styled Components

- 你也可以使用 Styled Components 來使用 Bootstrap 的樣式。
- 一樣要在`index.js`中`import 'bootstrap/dist/css/bootstrap.min.css';`。(或者`App.jsx`也可以)
- 原生 Bootstrap 使用 jQuery 和其他 JavaScript 依賴項進行 DOM 操作和事件處理，這些可能與 React 的虛擬 DOM 和數據流模式產生衝突。
- 可以像使用其他 React 組件一樣使用它們，包括 props 傳遞、狀態管理和生命週期事件。
- 所以對於動態的 Bootstrap 元件，我們要使用 React Bootstrap 的 Component 來取代。

```jsx
import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Example() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Example;
```

## 2. Styled Components

### 2.1. 安裝

```bash
npm install styled-components
```

### 2.2. 使用

- 你可以使用 Styled Components 來取代原本的 CSS。
- 允許為每個組件創建專屬的樣式，這樣可以確保樣式不會與應用程序中的其他部分發生衝突。這樣的封裝性保證了組件的樣式獨立性。
- 通過將 props 傳遞給 Styled Components，可以輕鬆地根據組件的狀態或 props 來動態改變樣式。這比傳統 CSS 更靈活。
- 不再需要為了避免樣式衝突而使用復雜的類名命名規則。Styled Components 自動生成唯一的類名，使組件更加模組化。
- Styled Components 支持主題，允許通過一個集中的主題設定來定義共享的樣式變數，如顏色、字體大小等，使得主題的更換變得簡單。
- Styled Components 通過移除未使用的樣式和僅載入組件所需的樣式來優化性能。
- 由於樣式是用 JavaScript 編寫的，你可以利用 JavaScript 的全部功能來創建複雜的樣式邏輯，比如函數、條件語句和變數。

```jsx
import styled from 'styled-components';

const Button = styled.button`
    background-color: ${(props) => (props.primary ? 'blue' : 'red')};
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    font-size: 16px;
    font-weight: bold;
    margin: 10px;
`;

function App() {
    return (
        <div>
            <Button>Normal Button</Button>
            <Button primary>Primary Button</Button>
        </div>
    );
}
```

# Project 1: Make a To-do List, and dynamically render the list items

- - -

## 1. 建立個數據，一般數據是從後端取得，但是我們先用假資料來模擬。

### 1.1. 問題: 我們要用甚麼來儲存待辦事項的數據呢？

- 我們先分析一下，待辦事項的數據應該是什麼樣的。
- 待辦事項的數據應該是一個列表，列表中的每一個項目都是一個待辦事項。
- 所以我們可以用一個列表來儲存待辦事項的數據。
- 頁面會隨著待辦事項的改變來調整渲染，所以我們需要把待辦事項的數據的陣列放在狀態中。

### 1.2. 問題: 狀態應該放在哪裡呢？

- 首先，分析一下，我們的組件樹是怎麼樣的。
- 我們的組件樹是這樣的：
    - App: 整個應用的根組件
        - Header: 添加待辦事項的組件
        - List: 顯示待辦事項列表的組件
            - Item... : 待辦事項列表的項目組件
        - Footer: 顯示待辦事項完成數量的組件，並移除已完成項目的按鈕
- 我們可以看到，`List`組件和`Footer`組件都需要用到待辦事項列表的數據，所以我們可以把這個數據放在`App`組件中。
- 這說明當有許多共通組件需要共享數據時，可以把數據放在共通的父組件中。學名叫做狀態提升(lifting state up)。

### 1.3. 問題: 但是我們要怎麼在函數組件中使用狀態呢？

- 我們可以使用`useState`這個 React Hook 來使用狀態。

#### 1.3.1 `useState`用法

1. **導入`useState`**：
   從 React 包中導入`useState`函數。
   ```jsx
   import { useState } from 'react';
   ```
2. **創建狀態**：
   在組件中使用`useState`來創建一個狀態變數和一個設置該狀態的函數。
   ```jsx
   const [myState, setMyState] = useState(initialValue);
   ```
   其中`initialValue`是狀態的初始值，`myState`是當前狀態的值，`setMyState`是一個用於更新 `myState`的函數。
3. **更新狀態**：
   使用設置函數來更新狀態。
   ```jsx
   setMyState(newValue);
   ```
   調用此函數時，React 將重新渲染組件並更新狀態。

#### 1.3.2 與類組件中的狀態管理的比較

1. **定義方式**：
    - **類組件**：在類組件中，狀態是作為一個物件在`constructor`或類體中定義的。
    - **函數組件**：使用`useState`，狀態可以是任何類型，不僅限於物件。
2. **更新狀態**：
    - **類組件**：使用`this.setState`方法更新狀態，React 會自動合併狀態更新。
    - **函數組件**：`useState`返回的設置函數不會自動合併物件，需要手動合併或覆蓋。
3. **狀態分割**：
    - **類組件**：通常將所有狀態捆綁在一個`state`物件中。
    - **函數組件**：鼓勵將狀態拆分成多個狀態變數，這使得狀態的管理更加清晰和模塊化。
4. **生命周期**：
    - **類組件**：狀態的更新可能會觸發生命周期方法，如`componentDidUpdate`。
    - **函數組件**：沒有生命周期方法，但可以使用`useEffect`Hook 來處理副作用。

## 2. 傳遞數據給子組件

- 為了渲染待辦事項列表，我們需要把待辦事項列表的數據傳遞給`List`組件。
- 然後在`List`組件中接收數據。並用`map`方法把數據渲染成待辦事項列表的項目。
- 為每個項目添加一個`key`屬性，這樣 React 才能識別每個項目，並且在更新時能夠更快地找到變化的項目。
- 把代辦事項傳遞給`Item`組件，並在`Item`組件中接收數據。

## 3. 變更`Item`組件顯示

- 這邊你會發現，如果設置了`checked`屬性，`Item`組件就會一直顯示為已完成的狀態。並給你一個警告。
- 這是因為 React 會把`checked`屬性當作一個靜態屬性，不會隨著`Item`組件的狀態改變而改變。
- 此時我們要加上一個`onChange`屬性，並藉此來改變狀態，我們在接下來的課程中會學到如何改變狀態。
- 最後依據`isDone`屬性來決定是否要給`Item`組件添加`checked`屬性。並且改變`Item`組件的樣式。

## 4. 把改變狀態的函數傳遞給子組件

- 為了改變待辦事項的狀態，我們需要把改變狀態的函數傳遞給`Item`組件。
- 我們先在`App`組件中定義一個函數，這個函數會改變待辦事項的狀態。
- 然後把這個函數傳遞給`List`組件，再把這個函數傳遞給`Item`組件。
- 以此類推，我們可以把函數傳遞給任何子組件，並且在子組件中調用這個函數。以下是需要完成的函數
    - addTodo: 添加待辦事項
    - removeTodo: 移除待辦事項
    - toggleTodoDone: 切換待辦事項的狀態
    - clearCompleted: 移除已完成的待辦事項
    - toggleAllTodos: 切換所有待辦事項的狀態
    - maxId: 獲取最大的待辦事項 id
    - completedCount: 獲取已完成的待辦事項的數量
    - totalCount: 獲取待辦事項的總數
- 然後在`Item`、`Footer`、`Header`組件中調用這些函數。
- 加油！ 你已經完成了一個簡單的待辦事項列表應用。

## 5. 進階性能優化

- React Developer Tools chrome
  擴充套件可以幫助你分析你的應用的性能。[下載連結](https://chromewebstore.google.com/detail/fmkadmapgofadopljbjfkapdkoienihi)
- `F12`chrome開啟開發者工具，點擊`>>`你會看到多了`Profiler`與`Components`兩個選項。
    - `Profiler`可以幫助你分析你的應用的性能。
    - `Components`可以幫助你分析你的應用的組件樹。
- 在設定的`General`中，你可以勾選`Highlight updates when components render`，這樣你就可以看到哪些組件在重新渲染。
- `useMemo`和`useCallback`都是 React 鉤子（Hooks），用於優化應用的性能，但它們用於不同的情況：

### `useMemo`

- **目的**：`useMemo`用於「記憶」計算結果。當你有一個計算成本較高的函數，且不希望在每次渲染時都重新計算時，`useMemo`是非常有用的。
- **使用時機**
  ：當組件中有一些數據依賴於特定的狀態或屬性，並且這些數據的計算成本較高或不希望在每次渲染時都重新計算時使用。`useMemo`
  可以確保只有在依賴的狀態或屬性發生變化時，才重新計算這些數據。
- **範例**：
  ```javascript
  const expensiveCalculation = useMemo(() => {
      // 這裡是一個計算成本較高的操作
      return computeExpensiveValue(a, b);
  }, [a, b]); // 只有當 a 或 b 改變時，才重新計算
  ```

### `useCallback`

- **目的**：`useCallback`用於「記憶」函數本身。當你需要確保函數身份在渲染之間保持不變以優化性能時（特別是當這個函數被傳遞給子組件作為
  props 時），`useCallback`是非常有用的。
- **使用時機**：當你有一個函數，你不希望它在每次組件渲染時都重新創建，特別是當這個函數作為 props
  傳遞給子組件，或者用作其他鉤子的依賴時使用。`useCallback`確保只有在其依賴的狀態或屬性發生變化時，函數身份才會改變。
- **範例**：
  ```javascript
  const memoizedCallback = useCallback(() => {
      // 執行一些操作
      doSomething(a, b);
  }, [a, b]); // 只有當 a 或 b 改變時，函數身份才會改變
  ```

### 比較與選擇

- 使用`useMemo`來「記憶」計算結果，減少不必要的計算。
- 使用`useCallback`來「記憶」函數實例，避免不必要的子組件重渲染。

## 6. 記憶組件

- 我們可以使用`React.memo`來記憶組件，這樣可以減少不必要的組件重渲染。
- `React.memo`是一個高階組件，它接收一個組件作為參數，並返回一個記憶組件。
- 如果組件的 props 沒有改變，則不會重新渲染組件。

### 好處

- **避免不必要的渲染**：React.memo 可以防止當組件的 props 沒有發生變化時，組件的不必要重新渲染。這對於渲染成本高昂的組件特別有用，可以提高應用的性能。
- **渲染優化**：對於那些經常接收相同 props 或其 props 很少改變的組件，使用 React.memo 可以減少重渲染次數，從而節省計算資源。
- **父組件渲染隔離**：當父組件重新渲染時，被 React.memo 包裹的子組件只有在其 props 改變時才會更新，這有助於減少不必要的渲染傳播。

### 壞處

- **記憶成本**：React.memo 會記憶組件的渲染輸出，這意味著需要額外的記憶體來存儲這些輸出。對於大型應用或組件樹，這可能會導致額外的記憶體消耗。
- **可能的過度優化**：過度使用 React.memo 可能會導致開發複雜性增加，特別是當不正確地理解它的工作原理時。在某些情況下，過度優化可能不會帶來明顯的性能提升，甚至可能產生反效果。
- **比較成本**：React.memo 預設比較 props 的淺層變化。如果 props 是複雜的對象，可能需要提供自定義的比較函數，這會增加開發的複雜度和運行時的比較成本。
- **不適用於所有組件**：並非所有組件都適合使用 React.memo。對於那些經常改變 props 或者渲染成本不高的組件，使用 React.memo
  可能不會帶來顯著的性能提升。

## 總結

- 你已經完成了一個簡單的待辦事項列表應用。
- 你學會了如何使用`useState`來管理狀態。
- 你學會了如何使用`useMemo`和`useCallback`來優化性能。
- 你學會了如何使用`React.memo`來記憶組件。

# Project 2 React Local Storage

- - -

- 目前的待辦事項列表應用，如果你重新整理頁面，待辦事項就會消失。
- 這是因為我們的數據是存在狀態中的，而狀態是不會保存在本地的。
- 所以我們需要把數據保存在本地，這樣才能在重新整理頁面後，獲取到數據。

## 1. 使用`localStorage`保存數據

- `localStorage`是一個瀏覽器提供的 API，可以用來保存數據。

## 2. 問題: 我們要在哪裡保存數據呢？ 在每個變更數據的函數中都保存數據嗎？

- 這想法可行，但是會讓代碼變得很冗長，而且容易出錯。
- 所以我們可以在`useEffect`中保存數據，這樣可以保證數據在每次渲染後都會被保存。

## 3. 問題: `useEffect`是什麼？

- `useEffect`是一個 React Hook，用於處理副作用。
- 副作用是指那些不會改變組件狀態的操作，如網絡請求、設置計時器、手動操作 DOM 等。
- `useEffect`接收一個函數作為參數，並在每次渲染後調用這個函數。
- `useEffect`的第二個參數是一個數組，用於指定依賴的狀態或屬性，只有當這些狀態或屬性發生變化時，才會調用函數。

## 4. 問題: 我們要怎麼使用`useEffect`來保存數據呢？

- 我們可以在`useEffect`中使用`localStorage.setItem`來保存數據。
- `localStorage.setItem`接收兩個參數，第一個參數是保存的名稱，第二個參數是保存的值。
- 我們可以把待辦事項列表的數據轉換成 JSON 字符串，然後保存在本地。
- 這樣我們就可以在重新整理頁面後，從本地獲取數據。

    ```jsx
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);
    ```

## 5. 問題: 我們要怎麼從本地獲取數據呢？

- 我們要更改`useState`的初始值，這樣就可以從本地獲取數據了。
- `localStorage.getItem`接收一個參數，這個參數是保存的名稱。
- 我們可以把獲取到的 JSON 字符串轉換成待辦事項列表的數據。
- 這必須考慮如果本地沒有數據的情況，所以我們可以使用`||`運算符來處理這種情況，並把空陣列作為初始值。
- 此外必須注意的是，`JSON.parse`可能會返回`null`，所以我們需要使用`?.`運算符來處理這種情況。
- 這樣我們就可以在重新整理頁面後，從本地獲取數據了。

    ```jsx
    setTodos(
        JSON.parse(localStorage.getItem('todos'))?.map((todo) => {
            return {
                id: todo.id,
                text: todo.text,
                isDone: todo.isDone,
            };
        }) || []
    );
    ```

## 6. 類別組件中使用`localStorage`?

- 類別組件中使用`localStorage`的方法和函數組件中使用`localStorage`的方法是一樣的。
- 不過可以直接在`render`方法中使用`localStorage`保存，而不需要使用`useEffect`。
- 初始化，你可以在`constructor`中獲取數據，並在`render`方法中保存數據。
- 你也可以在`componentDidMount`生命週期方法中獲取數據，並在`componentDidUpdate`生命週期方法中保存數據。

# Project 3 React Exclusive Selection Editable List

- - -

## 1. 甚麼是排他式選擇？
- 排他式選擇是指在一組選項中，只能選擇其中的一個選項。
- 在這個按理是，我們只能選擇一個待辦事項，並且只能編輯一個待辦事項。
- 當按別的待辦事項時，其他待辦事項就會取消選擇。

## 2. 新增編輯功能按鈕
- 我們可以在`Item`組件中添加一個編輯功能按鈕。
- 改`varient`屬性就可以改變按鈕的樣式。
- 然後調整`Remove`按鈕的樣式，讓它正確排版。

## 3. 怎麼實現排他式選擇呢？
- 這邊考慮到了一個問題，我們要在哪保存選擇的待辦事項的 id 呢？
- 我們可以在`App`組件中定義一個狀態`editingId`，用於保存選擇的待辦事項的 id。
- 當`App`狀態中的`editingId`和`Item`組件的 id 相同時，就表示這個待辦事項被選擇了。反之則沒有被選擇。
- 興建一個函數`setEditingId`，用於設置`editingId`的值。並一路傳遞到`Item`組件中。
- 利用傳遞自身`id`給`setEditingId`函數，來設置`editingId`的值。

## 4. 怎麼實現取消
- 我們可以在`Item`組件中添加一個取消按鈕。
- 並且根據`editingId`是否等於當前待辦事項的 id 來決定是否顯示取消按鈕。同時影響編輯按鈕。
- 利用傳遞自身`null`給`setEditingId`函數，來重置`editingId`的值。

## 5. 怎麼實現保存編輯
- 考慮我們變更的是`App`的狀態，所以我們可以在`App`組件中定義一個函數`updateTodo`，用於保存編輯。並一路傳遞到`Item`組件中。
- 我們可以在`Item`的輸入框中添加一個`onChange`屬性，並把它設置為一個函數。追蹤輸入框的值。
- 當按下`Enter`鍵時，就會觸發`submit`事件，我們新增個函數，把當前待辦事項的 id 和輸入框的值傳遞給`updateTodo`函數。