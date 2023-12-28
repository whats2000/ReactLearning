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
