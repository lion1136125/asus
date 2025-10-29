// 간단한 프론트엔드 유효성 & 제출 안내
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("serviceForm");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // 최소 값 체크
    const name = document.getElementById("custName").value.trim();
    const phone = document.getElementById("custPhone").value.trim();

    if (!name || !phone) {
      alert("성함과 연락처는 필수입니다.");
      return;
    }

    // 여기서 실제 전송 로직(예: fetch로 서버 전송 / 구글폼 action 등) 연결 가능
    alert(
      "접수 요청이 등록되었습니다.\n담당자가 순차적으로 연락드리겠습니다.\n\n빠른 상담은 1544-6068 로 전화 주세요."
    );

    form.reset();
  });
});
