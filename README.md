# Hahow-recruit

Hahow-recruit 為 Hahow 前端工程師面試題目。



## 執行專案

環境依賴 : `node : v12.16.2+`



下載專案後, 到資料夾目錄執行以下步驟 :

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

   以功能或路徑分類, 資料夾中包含該組建的 CSS,  JavaScript 和 API 。

```markdown
├── README.md                   // help
├── build                       // 可部署的靜態檔案
├── package.json                // 套件的版本控制
├── public                      // web靜態資源載入
├── src                         // source code
│   ├── App.css
│   ├── App.js                  
│   ├── App.test.js
│   ├── ErrorAlert
│   ├── HeroCard
│   ├── HeroList
│   ├── HeroProfile
│   ├── NotFound
│   ├── SystemError
│   ├── config.js                // 專案設定檔案
│   ├── fonts                    // 字型檔
│   ├── history.js               // 提供 component 以外的 js 取得 History
│   ├── images                   // 圖片檔
│   ├── index.css
│   ├── index.js                 // JavaScript entry point
│   ├── reportWebVitals.js
│   ├── setupTests.js
│   ├── store                    // Context store
│   ├── theme.js                 // styled component theme
│   └── utils
├── .env                         // 設定環境變數
├── .gitignore                   // git的忽略檔案
└── yarn.lock
```



2. Web 架構邏輯

   - Component : 

     

   - API :

     - 

     

     

- 我們該如何執行完成的 package
- 專案的架構、Web 的架構邏輯
- 你對於所有使用到的第三方 library 的理解，以及他們的功能簡介
- 你在程式碼中寫註解的原則，遇到什麼狀況會寫註解
- 在這份專案中你遇到的困難、問題，以及解決的方法



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).