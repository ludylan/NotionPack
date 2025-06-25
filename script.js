// --- 元素獲取 ---
const dateDisplay = document.getElementById('date-display');
const timeDisplay = document.getElementById('time-display');
const secondsDisplay = document.getElementById('seconds-display');
const bubblesContainer = document.getElementById('bubbles-container');
const pearlsContainer = document.getElementById('pearls-container');

// --- 時間更新函數 ---
function updateClock() {
    const now = new Date();

    // 格式化日期 (例如: 2025年6月25日 星期三)
    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
    dateDisplay.textContent = now.toLocaleDateString('zh-TW', dateOptions);

    // 格式化時間 (補零)
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    timeDisplay.textContent = `${hours}:${minutes}`;

    // 格式化秒數
    const seconds = String(now.getSeconds()).padStart(2, '0');
    secondsDisplay.textContent = `${seconds}s`;
}

// --- 動態元素生成函數 ---

// 生成背景氣泡
function createBubbles() {
    const bubbleCount = 30; // 氣泡數量
    for (let i = 0; i < bubbleCount; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        
        const size = Math.random() * 10 + 5; // 氣泡大小 5-15px
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        
        bubble.style.left = `${Math.random() * 100}%`; // 水平位置隨機
        bubble.style.bottom = `${Math.random() * -100}px`; // 初始位置在杯外
        
        const duration = Math.random() * 8 + 5; // 上升時間 5-13秒
        bubble.style.animationDuration = `${duration}s`;
        
        const delay = Math.random() * 5; // 延遲出現時間 0-5秒
        bubble.style.animationDelay = `${delay}s`;

        bubblesContainer.appendChild(bubble);
    }
}

// 生成珍珠
function createPearls() {
    const pearlCount = 20; // 珍珠數量
    for (let i = 0; i < pearlCount; i++) {
        const pearl = document.createElement('div');
        pearl.classList.add('pearl');

        const size = Math.random() * 15 + 10; // 珍珠大小 10-25px
        pearl.style.width = `${size}px`;
        pearl.style.height = `${size}px`;

        pearl.style.left = `${Math.random() * 90}%`; // 水平位置
        pearl.style.bottom = `${Math.random() * 60 + 10}px`; // 垂直位置 (在奶茶中)
        
        pearl.style.animationDelay = `${Math.random() * 3}s`; // 晃動延遲

        pearlsContainer.appendChild(pearl);
    }
}


// --- 初始化與定時器 ---
// 頁面載入後立即執行
updateClock();
createBubbles();
createPearls();

// 每秒鐘更新一次時間
setInterval(updateClock, 1000);
