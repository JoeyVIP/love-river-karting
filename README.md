# 愛河卡丁車場 Love River Karting Circuit

高雄市首屈一指的卡丁車場，座落於愛河河畔，擁有百年賽車文化傳承。

## 專案簡介

本網站為愛河卡丁車場的官方網站，提供以下功能：

- 場地介紹與百年歷史故事
- 專業教練團隊介紹
- 線上預約系統
- 價格方案展示
- 賽道最速圈紀錄
- 聯絡資訊與交通指引

## 技術規格

- **前端**：HTML5, CSS3, JavaScript (Vanilla)
- **字體**：Barlow Condensed / Barlow / Noto Sans TC
- **配色**：賽車紅 (#DC2626) + 冠軍金 (#FBBF24)
- **響應式設計**：支援桌面版和手機版
- **CMS 系統**：JSON-based 內容管理系統

## 專案結構

```
love-river-karting/
├── index.html              # 首頁
├── about.html              # 關於我們
├── instructors.html        # 教學師資
├── pricing.html            # 價格方案
├── booking.html            # 線上預約
├── contact.html            # 聯絡我們
├── css/
│   └── style.css           # 主樣式檔案
├── js/
│   ├── main.js             # 主要 JavaScript
│   ├── booking.js          # 預約表單邏輯
│   └── contact.js          # 聯絡表單邏輯
├── assets/                 # 圖片素材
├── templates/              # Mustache 模板（可選）
├── cms-schema.json         # CMS 結構定義
├── cms-data.json           # CMS 內容資料
├── rebuild.js              # 自動重建腳本
├── package.json            # Node.js 專案配置
└── render.yaml             # Render 部署配置

```

## CMS 內容管理

網站採用 JSON-based CMS 系統，方便內容更新：

### 編輯內容

1. 開啟 `cms-data.json`
2. 根據 `cms-schema.json` 的結構定義修改內容
3. 執行 `npm run rebuild` 重建網站（需先實作 Mustache 模板）

### CMS 資料結構

- **brand**: 品牌資訊（名稱、標語、簡介）
- **hero**: 首頁主視覺（標題、描述、統計數字）
- **features**: 場地特色列表
- **track_record**: 賽道最速圈紀錄
- **history**: 百年歷史時間軸
- **instructors**: 教練團隊資料
- **contact**: 聯絡資訊與營業時間
- **faq**: 常見問題列表

## 本地開發

1. Clone 專案：
```bash
git clone https://github.com/JoeyVIP/love-river-karting.git
cd love-river-karting
```

2. 安裝依賴（可選，僅需要 Mustache rebuild 功能時）：
```bash
npm install
```

3. 使用任何 HTTP 伺服器開啟：
```bash
# Python 3
python3 -m http.server 8000

# Node.js
npx http-server

# VS Code Live Server 擴充套件
```

4. 瀏覽器開啟 http://localhost:8000

## 部署

本專案部署於 Render.com。

### 自動部署

推送到 GitHub main 分支後，Render 會自動重新部署。

### 手動部署

```bash
# 確認所有變更已提交
git add .
git commit -m "Update content"
git push origin main
```

## 設計系統

### 配色

- **主色**：#DC2626（賽車紅）
- **次色**：#EF4444（亮紅）
- **強調色**：#FBBF24（冠軍金）
- **背景色**：#FEF2F2（淡紅）
- **文字色**：#7F1D1D（深紅棕）

### 字體

- **標題**：Barlow Condensed（運動風格）
- **內文**：Barlow（易讀性）
- **中文**：Noto Sans TC

### 響應式斷點

- 手機：< 768px
- 平板：768px - 1023px
- 桌面：≥ 1024px

## 授權

MIT License

## 聯絡資訊

- **地址**：高雄市前金區河東路520號
- **電話**：07-2626-1926
- **Email**：info@loveriverkarting.tw
- **營業時間**：
  - 週一至週五：13:00 - 22:00
  - 週六、日：10:00 - 23:00
  - 國定假日：10:00 - 23:00
