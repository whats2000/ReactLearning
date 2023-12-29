# How to use the create-react-app
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