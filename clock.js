// 取得顯示時間的元素
const clockElement = document.getElementById("clock-time");

// 建立音訊物件，指向你的鈴聲檔案
const chime = new Audio("chime.mp3");

// 用來記錄上一次響鈴的小時，防止重複播放
let lastChimeHour = null;

function updateClock() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, "0");
  const m = String(now.getMinutes()).padStart(2, "0");
  const s = now.getSeconds();

  // 更新頁面上的時間 (不顯示秒數，更簡潔)
  clockElement.textContent = `${h}:${m}`;

  // 檢查是否為整點的第一秒 (m === '00' && s === 0)
  // 並且，當前的小時不等於上一次響鈴的小時
  if (m === '00' && s === 0 && now.getHours() !== lastChimeHour) {
    
    // 播放提示音
    chime.play().catch(error => {
      // 捕捉並在控制台顯示錯誤。這通常發生在瀏覽器限制自動播放音訊時。
      console.warn("音效播放失敗，這可能是因為瀏覽器安全限制：", error);
    });

    // 更新最後響鈴的小時紀錄
    lastChimeHour = now.getHours();
  }
}

// 每秒鐘執行一次 updateClock 函數
setInterval(updateClock, 1000);

// 頁面載入後立刻執行一次，避免畫面空白一秒
updateClock();
