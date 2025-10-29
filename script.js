// 접수 -> Outlook 이메일 전송 + 성공 메시지 (페이지 그대로 유지)
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("serviceForm");
  const successBox = document.getElementById("submitSuccess");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    const name = document.getElementById("custName").value.trim();
    const phone = document.getElementById("custPhone").value.trim();

    // 필수값 없으면 전송 막고 안내
    if (!name || !phone) {
      e.preventDefault();
      alert("성함과 연락처는 필수입니다.");
      return;
    }

    // 여기부터는 실제 전송 허용:
    //  - e.preventDefault() 안 건다
    //  - 폼은 target='hiddenFrame'으로 전송되므로 화면은 그대로 유지
    //  - 아래 성공 메시지 박스 보여주고 폼 비우기
    if (successBox) {
      successBox.style.display = "block";
      // 필요하면 일정 시간 후 자동 숨김 가능:
      // setTimeout(() => { successBox.style.display = "none"; }, 8000);
    }

    // 폼 내용 초기화 (사용자가 '보냈다' 느낌 받게)
    form.reset();
  });
});
