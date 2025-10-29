// Outlook 이메일 전송 버전
// 이름/전화만 검사하고 이상 없으면 실제로 이메일로 전송되게 둡니다.
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("serviceForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    const name = document.getElementById("custName").value.trim();
    const phone = document.getElementById("custPhone").value.trim();

    if (!name || !phone) {
      e.preventDefault(); // 전송 막고 안내
      alert("성함과 연락처는 필수입니다.");
      return;
    }

    // 통과 시에는 e.preventDefault() 안 함 -> 실제로 formsubmit.co로 전송되고
    // noteservice@outlook.kr 메일함으로 도착합니다.
  });
});
