# Class 1 — How to use the create-react-app
- - -
## 1. 下載 create-react-app
```bash
npm install -g create-react-app
```

## 2. 建立專案
從 npm 或 yarn 建立專案，兩者選一個即可。
- npm
    ```bash
    create-react-app app
    ```
- yarn
    ```bash
    yarn create react-app app
    ```
  - `app` 為專案名稱，可自行更改。
    - 會建立一個名為 `app` 的資料夾，裡面包含專案的所有檔案。
    - 命名規則：專案名稱全小寫，且不包含空格。
    - 建議專案名稱不要使用 `react`、`redux`、`js`、`css` 等關鍵字。
    - 建議專案名稱不要使用中文。
    - 不要使用與下載package相同的名稱，例如：`create-react-app`。
  - 判斷是npm還是yarn?
    - npm: 專案下方有 `package-lock.json` 檔案。
    - yarn: 專案下方有 `yarn.lock` 檔案。

## 3. 進入專案資料夾
```bash
cd app
```
將 `app` 改為你的專案名稱。

## 4. 啟動專案
```bash
npm start
```
或
```bash
yarn start
```

## 5. 其他指令
- 建置專案
    ```bash
    npm run build
    ```
    或
    ```bash
    yarn build
    ```
  - 建置完成後，會在專案資料夾中建立一個 `build` 資料夾，裡面包含專案的所有檔案。
  - 建置檔案會被壓縮，並且檔案名稱會被加上亂數，例如：`static/js/main.2b3e1b0a.chunk.js`。
- 測試專案
    ```bash
    npm run test
    ```
    或
    ```bash
    yarn test
    ```
  - 會在終端機中顯示測試結果。
- 檢查專案
    ```bash
    npm run eject
    ```
    或
    ```bash
    yarn eject
    ```
    - 這個指令會將專案中的所有配置文件和相依性複製到專案中，這樣就可以完全控制它們了。
    - **這個指令是不可逆的，一旦執行就不能回頭了。**
    - 因此，一般情況下**不建議**使用這個指令。

# Class 2 — 項目結構
- - -
## public 資料夾
- 專門用來存放靜態資源，如圖片、字體、音樂等。
- `index.html`：專案的主頁面。這是 **必要** 的。
- `favicon.ico`：專案的圖示。這是可選的。
- `logo192.png`：專案的圖示。這是給App用的，瀏覽器不會直接使用。
- `logo512.png`：專案的圖示。這是給App用的，瀏覽器不會直接使用。
- `manifest.json`：專案的配置文件。這是主要給App用的，瀏覽器不會直接使用。
- `robots.txt`：專案的爬蟲配置文件。用於告訴爬蟲哪些資源可以訪問，哪些資源不可以訪問。

## scripts 資料夾
- 這是要運行`eject`指令後，才會有的資料夾。
- `build.js`：建置專案的腳本。
- `start.js`：啟動專案的腳本。
- `test.js`：測試專案的腳本。

## src 資料夾
- 這是專案的主要資料夾，包含了專案的所有內容。
- `App.css`：App的樣式表。
- `App.js`：App的主要程式碼。
- `App.test.js`：App的測試程式碼。
- `index.css`：主頁面的樣式表。
- `index.js`：主頁面的主要程式碼。又稱為入口文件。這是 **必要** 的。
  - 因為是React 18版，所以得用`createRoot`來渲染。
  - `React.StrictMode`：嚴格模式。用於檢查潛在的問題。防止過時寫法、不安全的生命週期方法、過時的API、使用不安全的方法等，並確保復用性，若檢查到問題，會在控制台中顯示警告。
- `logo.svg`：專案的圖示。
- `reportWebVitals.js`：專案的性能測試程式碼。
  - 由Google提供，會隨者React一同下載。
- `setupTests.js`：專案的測試配置程式碼。

## .gitignore 檔案
- 給Git用的，用於忽略不需要提交到Git的檔案。

## package.json 檔案
- 專案的配置文件。

## package-lock.json 檔案
- 專案的相依性配置文件。

## README.md 檔案
- 專案的說明文件。

## 總結
- `public` 資料夾中的檔案中，最重要的是 `index.html`。該檔案是專案的主頁面。
- `src` 資料夾中的檔案中，最重要的是 `index.js`。該檔案是專案的入口文件。
