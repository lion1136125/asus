// Outlook 이메일 전송 버전
// 이름/전화만 검사하고 이상 없으면 실제로 전송(제출)되게 둔다.
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

    // 이름, 연락처가 있으면 submit 그대로 진행 =>
    // formsubmit.co가 noteservice@outlook.kr 으로 메일 발송
  });
});
