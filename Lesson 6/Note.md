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
#### 1.3.1 `useState` 用法
1. **導入 `useState`**：
   從 React 包中導入 `useState` 函數。
   ```jsx
   import { useState } from 'react';
   ```
2. **創建狀態**：
   在組件中使用 `useState` 來創建一個狀態變數和一個設置該狀態的函數。
   ```jsx
   const [myState, setMyState] = useState(initialValue);
   ```
   其中 `initialValue` 是狀態的初始值，`myState` 是當前狀態的值，`setMyState` 是一個用於更新 `myState` 的函數。
3. **更新狀態**：
   使用設置函數來更新狀態。
   ```jsx
   setMyState(newValue);
   ```
   調用此函數時，React 將重新渲染組件並更新狀態。

#### 1.3.2 與類組件中的狀態管理的比較
1. **定義方式**：
    - **類組件**：在類組件中，狀態是作為一個物件在 `constructor` 或類體中定義的。
    - **函數組件**：使用 `useState`，狀態可以是任何類型，不僅限於物件。
2. **更新狀態**：
    - **類組件**：使用 `this.setState` 方法更新狀態，React 會自動合併狀態更新。
    - **函數組件**：`useState` 返回的設置函數不會自動合併物件，需要手動合併或覆蓋。
3. **狀態分割**：
    - **類組件**：通常將所有狀態捆綁在一個 `state` 物件中。
    - **函數組件**：鼓勵將狀態拆分成多個狀態變數，這使得狀態的管理更加清晰和模塊化。
4. **生命周期**：
    - **類組件**：狀態的更新可能會觸發生命周期方法，如 `componentDidUpdate`。
    - **函數組件**：沒有生命周期方法，但可以使用 `useEffect` Hook 來處理副作用。

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