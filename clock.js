const clock = document.getElementById("clock");
const chime = new Audio("chime.mp3");

function updateClock() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, "0");
  const m = String(now.getMinutes()).padStart(2, "0");
  const s = now.getSeconds();
  clock.textContent = `${h}:${m}`;

  // 播放整點鈴聲（只有在剛好整點的第一秒）
  if (m === "00" && s === 0) {
    chime.play().catch(e => {
      console.warn("音效播放失敗，可能因為瀏覽器限制：", e);
    });
  }
}

// 每秒更新一次
setInterval(updateClock, 1000);
updateClock();

