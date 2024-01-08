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
import { useState } from 'react';
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
