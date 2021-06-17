# Hahow recruit

hahow-recruit 為 Hahow 前端工程師面試題目。

[hahow recruit Github page](https://beiyi1996.github.io/hahow-recruit/) 線上版本



## 執行專案

環境 : `node : v12.16.2+`



Clone 專案後, 到資料夾目錄執行以下步驟 :

1. `yarn`  安裝 node_modules

2. 新增環境變數 `.env` 檔案

   ```sh
   // 需要以 'REACT_APP' 為開頭命名
   // 可以透過 process.env.REACT_APP_YOUR_ENV_KEY 取得
   
   REACT_APP_API_DOMAIN=https://hahow-recruit.herokuapp.com
   ```

   > 詳情請參考 [Adding Custom Environment Variables](https://create-react-app.dev/docs/adding-custom-environment-variables/)

3.  在 terminal 輸入  `yarn start` , 運行開發模式

   以 development 的模式運行, 環境變數參考 `.env` , 可在 [http://localhost:3000](http://localhost:3000) 查看結果。  
   頁面將會自動重新載入修改的內容。在此模式下, 可以看到 console 與 errors

4. 如果你完成開發環境的測試, 可以透過 `yarn build` 打包此專案。

   React 的 production 模式, 環境變數參考  `.env`  , 將程式碼最小化 與 檔名加入 hash後產生 build 資料夾,  
   即可透過相關部署步驟發布此專案

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

1. [Material-UI](https://material-ui.com/) : React hooks UI, 讓刻板更方便快速
   - [@material-ui/icons](https://yarnpkg.com/package/@material-ui/icons) : Material-UI 提供免費的 svg icon, 可與 IconButton 搭配使用
   - [@material-ui/lab](https://yarnpkg.com/package/@material-ui/lab) : Material-UI 正在開發中的 component, 依照 Google Analytics 分析的熱門度依序加入 Core 中
2. [Axios](https://yarnpkg.com/package/axios) : 是一個基於 promise 的 HTTP 庫，簡單的講就是可以發送get、post請求
3. [Lodash](https://lodash.com/) :  讓你更簡單的操作 JavaScript 的 array、number、objects、string
4. [react-helme](https://yarnpkg.com/package/react-helmet) : 設定 document head

5. [react-router-dom](https://reactrouter.com/web/guides/quick-start) : React 路由控制
6. [styled-components](https://styled-components.com/docs/basics#getting-started) : 是一個 CSS-In-JS 的函式庫, 可以接收 props 來改變 css 樣式
   - [styled-theming](https://jamie.build/styled-theming.html) : 自定義 styled-components 的主題



## 寫註解的原則

我通常會在比較複雜的邏輯或是引用設定檔的檔案中寫上註解  

像是在  utils/axios.js 中有引入 config.js 的設定, 我就在後面寫了註解說明預設值為 5000ms



## 遇到的困難與解決方法

1. 在使用 `styled-theming variants` 設定主題時, 想要透過 props 來改變樣式, 不過不知道該如何變換 props,  

   所以我去看了文件和文章分享, 發現是在 jsx props (型別為 字串) 完成判斷後, css 透過 props.xxx 來變換樣式。  

   因為之前是使用 Material-UI 的 css-in-js 寫法, 直接將 state 或 props 傳到  `makeStyles`  hooks 中進行判斷,   

   所以在轉換 styled-component 寫法的時候有點卡住。

   

2. 我在包裝 axios request method 時, 不知道該如何更好的進行錯誤處理, 所以我先上網搜尋 axios wrapper for react, 發現 axios 有提供 `instance.interceptors` 可以在 送出 request 和 回傳 response 之前針對這兩個物件做預先處理, 於是我搭配 yarn axios readme 和 文章, 將收到 404 和 500 狀態碼時, 重導向到對應的頁面; 其他錯誤則是直接回傳 Promise.reject 到 API 層定義錯誤訊息後 return 給 component。



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).