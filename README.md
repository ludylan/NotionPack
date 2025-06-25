# NotionPack
Notion 模組靈感棲地

# 🚀 Notion 可愛時鐘小工具

這是一個專為 Notion 設計的極簡、可愛風格的動態時鐘小工具。它不僅能即時顯示時間，還具備整點提示音功能，幫助你更好地掌握時間。

你可以將它部署後，透過 Notion 的 `/embed` 功能嵌入到你的任何頁面中，特別適合用來搭配讀書、工作或時間追蹤模板。

## ✨ 功能特色

*   **極簡美學**：採用溫暖的米白色系與柔和陰影，完美融入 Notion 的頁面風格。
*   **即時顯示**：以「時:分」的格式精準顯示當前時間。
*   **整點提示**：每到整點會自動播放一聲清脆的提示音 (`chime.mp3`)。
*   **高度自訂**：你可以透過修改 `style.css` 檔案，輕鬆自訂顏色、字體和大小。
*   **完全免費且可控**：程式碼完全屬於你，無須擔心第三方服務的商業授權問題。

## 🛠️ 如何使用 (部署到 GitHub Pages)

你可以透過 GitHub Pages 免費部署這個時鐘小工具，並取得一個公開的網址。

1.  **上傳檔案**：
    *   在 GitHub 上建立一個新的公開倉庫 (Repository)。
    *   將本專案的所有檔案 (`index.html`, `style.css`, `clock.js`, `chime.mp3` 等) 上傳到這個倉庫中。

2.  **啟用 GitHub Pages**：
    *   進入你的倉庫頁面，點擊 `Settings` > `Pages`。
    *   在 `Build and deployment` 下的 `Source` 選擇 `Deploy from a branch`。
    *   在 `Branch` 區塊，選擇 `main` 分支，資料夾選擇 `/(root)`，然後點擊 `Save`。

3.  **取得並嵌入**：
    *   等待幾分鐘，頁面頂部會顯示 "Your site is live at `https://你的用戶名.github.io/你的倉庫名/`"。
    *   **複製這個網址**。
    *   回到你的 Notion 頁面，輸入 `/embed` 並貼上你複製的網址。你的專屬時鐘就成功嵌入了！

## 📂 檔案結構
notion-clock-widget/
├── index.html # 主程式頁面
├── style.css # 外觀樣式
├── clock.js # 時鐘邏輯與整點提示
├── chime.mp3 # 鈴聲音效檔案
├── README.md # 你正在閱讀的這個檔案
└── LICENSE # 授權條款

## 📄 授權條款

本專案採用 **CC BY-NC 4.0** 授權。
歡迎基於非商業目的進行分享與修改，但請務必註明出處。詳情請見 [LICENSE](./LICENSE) 檔案。
