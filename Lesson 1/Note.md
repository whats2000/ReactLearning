# Class 1 — Welcome to React
- - -
## `document.createElement` 與 `React.createElement` 的差異

`document.createElement` 和 `React.createElement` 在功能上有顯著的差異，它們分別屬於原生 JavaScript 和 React 框架。

### `document.createElement`

- **屬於原生 JavaScript**：`document.createElement` 是 DOM（文件物件模型）的一部分，用於創建一個新的 HTML 元素。
- **直接操作 DOM**：它直接在網頁上創建和操作元素。例如，`document.createElement('div')` 會創建一個新的 `<div>` 元素。
- **無狀態和生命周期管理**：這種方法不涉及任何狀態管理或生命周期方法。
- **適用於任何 JavaScript 環境**：不依賴於任何特定框架或庫。

### `React.createElement`

- **React 的一部分**：`React.createElement` 是 React 框架的一部分，用於描述應用程式中的 UI 組件。
- **創建 React 元素**：它不直接操作 DOM，而是創建了一個輕量級的對象（React 元素），這個對象最終會被轉化並渲染到 DOM 中。
- **支持 JSX**：在使用 JSX 時，JSX 元素會被轉換成 `React.createElement` 的調用。例如，`<div>` 在 JSX 中會被轉換成 `React.createElement('div')`。
- **狀態和生命周期的管理**：與 React 組件一起使用時，支持狀態管理和生命周期方法。
- **專門用於 React**：只在 React 框架中使用。

### 總結

總的來說，`document.createElement` 直接在瀏覽器的 DOM 中創建元素，而 `React.createElement` 則是在 React 的虛擬 DOM 環境中創建元素。這使得 React 可以提供更有效的更新和渲染方法。

# Class 2 — Introduction to JSX
- - -
## JSX 簡介

這個文件提供了使用 JSX 與 React 的基本示例，並展示了如何在瀏覽器中使用它們。

### JSX 說明

- JSX 是 JavaScript 的語法擴展，類似於模板語言，但擁有 JavaScript 的全部功能。
- 它的全名是 JavaScript XML，類似於 `React.createElement()`，但語法不同。
- 使用 React 時，JSX 並不是必需的，它只是寫 React 應用的一個方便工具。
- 若要在瀏覽器中使用 JSX，需要將 script 標籤的類型設為 `text/babel`。

# Class 3 — Dynamic Inject Data in JSX
- - -

## 功能重點
- **JavaScript 表達式在 JSX 中的應用**：可以在大括號 `{}` 中使用 JavaScript 表達式。
- **表達式的使用場景**：
    - 元素屬性：控制元素的屬性。
    - 子節點：渲染動態數據。

## 表達式的規則
- **有效的表達式**：變量、常量、字符串、數組、對象、函數、函數調用、計算等。
- **不是表達式**：If 語句、For 循環、While 循環、Switch 語句、聲明等。

## 示例和注意事項
- **顯示用戶信息**：可以顯示用戶的名字和年齡。
- **渲染不同類型的數據**：
    - 整數、字符串、數組、`NaN`、`Infinity`。
    - 不會直接渲染布爾值、`undefined`、`null`。
    - 不能直接渲染對象（但可以轉換為字符串渲染）。
- **樣式設置**：使用對象來應用 CSS 樣式。
- **函數的應用**：
    - 不會直接渲染函數（會引發警告）。
    - 會渲染函數的返回值。
    - 可以直接在大括號內聲明函數，通常用於事件處理器。
