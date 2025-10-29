// AJAX로 FormSubmit에 보내고, 페이지는 안 넘어가고 성공 안내만 띄우는 코드
// Outlook 받은편지함/정크함에서 FormSubmit 첫 승인메일을 한 번 눌러야
// 이후부터 고객 내용이 바로 들어옵니다.

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("serviceForm");
  const successBox = document.getElementById("submitSuccess");

  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // 기본 폼 제출 막고 우리가 직접 처리

    const name = document.getElementById("custName").value.trim();
    const phone = document.getElementById("custPhone").value.trim();
    const area = document.getElementById("custArea").value.trim();
    const issueType = document.getElementById("issueType").value;
    const issueDetail = document.getElementById("issueDetail").value.trim();

    if (!name || !phone) {
      alert("성함과 연락처는 필수입니다.");
      return;
    }

    try {
      await fetch("https://formsubmit.co/ajax/noteservice@outlook.kr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          "성함": name,
          "연락처": phone,
          "지역/주소": area,
          "고장 증상": issueType,
          "상세 설명": issueDetail,
          "_subject": "홈페이지 신규 A/S 접수",
          "_template": "table",
          "_captcha": "false"
        })
      });
    } catch (err) {
      console.error("전송 오류", err);
    }

    // 성공 안내 띄우기
    if (successBox) {
      successBox.style.display = "block";
    }

    // 폼 초기화
    form.reset();
  });
});
