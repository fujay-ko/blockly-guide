# 🧩 Blockly 程式積木教學指南 (Blockly Guide)

這是一個專為初學者設計的 **Blockly 圖形化積木與 Python 程式碼對照** 教學工具。透過視覺化的方式，幫助學習者在拖拉積木的同時，理解其背後的 Python 邏輯與語法。

## 🌟 核心特色 (Features)

- **視覺化積木卡片**：將各類別的 Blockly 積木分類展示，包含邏輯、迴圈、數學、文字、列表、變量與函式。
- **Python 程式碼即時對照**：
  - 每個積木卡片下方皆附帶精確的 **Python 語法範例**。
  - 處理了 Blockly 的 1-based 索引與 Python 0-based 索引的邏輯轉換。
  - 針對多選單積木（如比較、運算、排序等）提供完整的語法選項說明。
- **豐富的教學類別**：
  - **1. 邏輯 (Logic)**：包含 `if-elif-else`、比較運算與布林邏輯。
  - **2. 迴圈 (Loops)**：包含 `repeat`、`while/until` (while not) 與 `for each`。
  - **3. 數學 (Math)**：包含基本運算、進位捨去 (ceil/floor) 與隨機數。
  - **4. 文字 (Text)**：包含子字串切片、大小寫轉換與 1-based 位置尋找。
  - **5. 列表 (Lists)**：包含建立、取得並移除 (pop)、排序與反轉。
  - **6. 變量 (Variables)**：賦值與數值改變。
  - **7. 函式 (Functions)**：函式定義、呼叫與帶有返回值的範例。

## 🛠️ 技術堆疊 (Tech Stack)

- **前端框架**：[React](https://react.dev/)
- **建置工具**：[Vite](https://vitejs.dev/)
- **CSS 框架**：[Tailwind CSS](https://tailwindcss.com/)
- **語言**：JavaScript (ES6+)

## 🚀 快速開始 (Getting Started)

### 1. 安裝依賴
```bash
npm install
```

### 2. 啟動開發伺服器
```bash
npm run dev
```

### 3. 建置靜態網站
```bash
npm run build
```

## 📁 專案結構 (Project Structure)

- `src/data/blocks.js`：核心資料庫，存放所有積木的名稱、描述、圖片路徑與 Python 程式碼範例。
- `src/components/`：包含積木卡片 (`BlockCard.jsx`)、分類區塊等 React 元件。
- `public/images/`：存放所有對應的 Blockly 積木截圖。

## 📝 開發說明

若要新增或修改積木資訊，請直接編輯 `src/data/blocks.js` 中的 `categories` 陣列。每個積木物件包含：
- `name`：積木名稱
- `image`：對應圖片檔名
- `desc`：功能模式說明
- `python`：對應的 Python 程式碼範例（支援多行與註解）

---
由 Gemini CLI 協助開發與優化。
