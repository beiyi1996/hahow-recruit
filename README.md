# Hahow-recruit

Hahow-recruit 為 Hahow 前端工程師面試題目。



## 執行專案

環境 : `node : v12.16.2+`



Clone 專案後, 到資料夾目錄執行以下步驟 :

1. `yarn`  安裝 node_modules。 

2. 新增環境變數 `.env` 檔案

   ```sh
   // 需要以 'REACT_APP' 為開頭命名
   // 可以透過 process.env.REACT_APP_YOUR_ENV_KEY 取得
   
   REACT_APP_API_DOMAIN=https://hahow-recruit.herokuapp.com
   ```

   > 詳情請參考 [Adding Custom Environment Variables](https://create-react-app.dev/docs/adding-custom-environment-variables/)

3.  在 terminal 輸入  `yarn start` , 運行開發模式。

   以 development 的模式運行, 環境變數參考 `.env` , 可在 [http://localhost:3000](http://localhost:3000) 查看結果。  
   頁面將會自動重新載入修改的內容。在此模式下, 可以看到 console 與 errors。

4. 如果你完成開發環境的測試, 可以透過 `yarn build` 打包此專案。

   React 的 production 模式, 環境變數參考  `.env`  , 將程式碼最小化 與 檔名加入 hash後產生 build 資料夾,  
   即可透過相關部署步驟發布此專案。

   > 詳情請參考 [deployment](https://facebook.github.io/create-react-app/docs/deployment)



## 專案架構與前端架構

1. 專案架構

```markdown
├── README.md                    // help
├── build                        // 可部署的靜態檔案
├── package.json                 // 套件的版本控制
├── public                       // web靜態資源載入
├── src                          // source code
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── components               // hooks 組建
│   │		└── {function}           // hooks function folder
│   ├── config.js                // 專案設定檔案
│   ├── fonts                    // 字型檔
│   ├── history.js               // 提供 component 以外的 js 取得 History
│   ├── images                   // 圖片檔
│   ├── index.css
│   ├── index.js                 // JavaScript entry point
│   ├── setupTests.js
│   ├── store                    // Context store
│   ├── theme.js                 // styled component theme
│   └── utils                    // 工具包
├── .env                         // 設定環境變數
├── .gitignore                   // git的忽略檔案
├── .prettierrc                  // 樣式設定
└── yarn.lock
```



2. Web 架構邏輯 (src 資料夾)

   Components : 以功能或路徑分類, 資料夾中包含該元件的 CSS,  JavaScript 和 API

   Utils : `axios.js` 包裝 Axios Request method

   

## 第三方套件

1. [Material-UI](https://material-ui.com/) : React hooks UI, 讓刻板更方便快速。 
   - 可以安裝 [@material-ui/icons](https://yarnpkg.com/package/@material-ui/icons) 使用他提供的 svg icon
   - [@material-ui/lab](https://yarnpkg.com/package/@material-ui/lab) : Material-UI 正在開發中的 component, 依照 Google Analytics 分析的熱門度依序加入 Core 中
2. [Axios](https://yarnpkg.com/package/axios) : 是一個基於 promise 的 HTTP 庫，簡單的講就是可以發送get、post請求
3. [Lodash](https://lodash.com/) :  讓你更簡單的操作 JavaScript 的 array、number、objects、string
4. [react-helme](https://yarnpkg.com/package/react-helmet) : 設定 document head

5. [react-router-dom](https://reactrouter.com/web/guides/quick-start) : React 路由控制
6. [styled-components](https://styled-components.com/docs/basics#getting-started) : 是一個 CSS-In-JS 的函式庫, 可以接收 props 來改變 css 樣式
   - [styled-theming](https://jamie.build/styled-theming.html) : 自定義 styled-components 的主題



## 寫註解的原則

我通常會在比較複雜的邏輯或是設定檔寫上註解, 或是



- 我們該如何執行完成的 package
- 專案的架構、Web 的架構邏輯
- 你對於所有使用到的第三方 library 的理解，以及他們的功能簡介
- 你在程式碼中寫註解的原則，遇到什麼狀況會寫註解
- 在這份專案中你遇到的困難、問題，以及解決的方法



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).