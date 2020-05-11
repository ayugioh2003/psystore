<h1 align="center">
  <a href="https://ayugioh2003.github.io/psystore">
    <img src="./public/favicon.png"
         alt="PsyStore"
         width="200">
  </a>
  <br>
  PsyStore
  <br>
</h1>

<h4 align="center">
  PsyStore 心惦店 | 心理學主題電商
</h4>

<p align="center">
  <a  href="https://ayugioh2003.github.io/psystore">
    <img src="https://img.shields.io/badge/Demo-ayugioh2003-green">
  </a>
</p>

![PsyStore 心惦店](https://i.imgur.com/RYoRNAz.jpg)
[Demo](https://ayugioh2003.github.io/psystore)

## 作品介紹

為現代人提供一個幫助心智健身的工具包

* 網站目的
  * 讓現代人取得能修復、提昇心智功能的服務
  * 讓管理員能管理商品、酷碰等資料
* 網站功能-前台
  * 首頁：介紹網站與吸引興趣
  * 商品頁：提供多項商品、分類、我的最愛、放入購物車、類似商品
  * 酷碰頁：提供多個能打折的酷碰碼
  * 訂單頁：查看過去建立成功的訂單清單
  * 購物車：查看目前放入購物車的項目，
  並進行後續結帳流程
  * 登入頁：提供管理員登入到後台的界面
* 網站功能-後台
  * 商品頁：管理商品(新增、修改、刪除)
  * 酷碰頁：管理酷朋(新增、修改、刪除)
  * 訂單頁：管理訂單(修改付款狀態)
  * 測試頁：測試商品購買流程(放入購物車、建立訂單、結帳)

## 使用技術

使用現代化前端框架，讓協作開發與日後擴充修改更容易，並提供更平順的瀏覽體驗

* 程式相關
  * Vue CLI: 整合 Vue 生態系的開發環境
  * Vue: 建構 SPA，前後端分離開發
  * Vue Router: 管理前端路由
  * Vuex: 管理網站狀態，跨組件溝通更方便
  * axios: 方便 API 串接
  * ES6: 使用現代主流瀏覽器支援的 JavaScript 語法
* 切版相關
  * CSS3: 使用現代主流瀏覽器支援的 CSS 
  * SCSS: 巢嵌 CSS，開發樣式更方便
  * Bootstrap4: 格線系統、顏色管理、元件、utility
* 工具相關
  * ESlint: 控制程式碼風格 (airbnb)
  * Git: 控管程式碼版本
  * Github: issue 連結到 commit、Project 管理進度、Actions 自動佈署到 gh-pages
  * VSCode: 搭配 Vetur 開發
* 其他
  * 使用 Github Pages 搭配後端 API 建置靜態網站
  * 使用 vue-meta 處理 SEO
  * 使用 vue-router 處理商品分類的網址
  * 使用 vee-validate 驗證表單

## 套件使用

* [@fontawesome](https://fontawesome.com/how-to-use/on-the-web/setup/using-package-managers) | icon 圖示
* [axios](https://www.npmjs.com/package/axios)、[vue-axios](https://www.npmjs.com/package/vue-axios) | 方便串接 API
* [bootstrap](https://www.npmjs.com/package/bootstrap) | CSS library
* [jquery](https://www.npmjs.com/package/jquery) | 搭配 BS4
* [popper](https://www.npmjs.com/package/popper) | 搭配 BS4
* [vee-validate](https://www.npmjs.com/package/vee-validate) | 驗證表單
* [vue](https://www.npmjs.com/package/vue) | 前端框架
* [vue-headroom](https://www.npmjs.com/package/vue-headroom) | 能隨著滾動調整 navbar 的出現與否
* [vue-loading-overlay](https://www.npmjs.com/package/vue-loading-overlay) | 全畫面 loading 狀態
* [vue-meta](https://www.npmjs.com/package/vue-meta) | 在 vue 添加 meta 資訊
* [vue-router](https://www.npmjs.com/package/vue-router) | 管理 vue 前端路由
* [vuex](https://www.npmjs.com/package/vue-vuex) | 管理 vue 網站狀態
* [eslint](https://www.npmjs.com/package/eslint) | 管理程式碼風格
* [gh-pages](https://www.npmjs.com/package/gh-pages) | 將編譯後的程式碼佈署到 gh-pages


## 環境建構
```
npm install   # 安裝相依套件
npm run serve # 建立開發環境
npm run build # 編譯出能放到生產環境的程式碼
npm run gh    # 佈署到 gh-pages
```

## 瀏覽器調整說明

製作此次專案時，登入機制採用傳送 cookie 到後端認證。但因許多主流瀏覽器調整了 cookie 同源驗證嚴格程度（大約在 2020.04 時調整），因此若要登入後台，需要手動調整瀏覽器設定
* [Vue API 課程補充說明 – Dropbox Paper](https://paper.dropbox.com/doc/Vue-API-28OrjdvBouPMjspZUM7h7)


## 版權/授權聲明

此專案為練習用途，所用素材皆符合授權。
* [版權聲明 | PsyStore](https://ayugioh2003.github.io/psystore/#/copyright)