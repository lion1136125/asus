// AJAX로 FormSubmit에 보내고, 페이지는 그대로 / 성공멘트만 띄우는 버전
// FormSubmit은 https://formsubmit.co/이메일 로 보내면 첫 제출 시 그 이메일로 '확인메일'을 보내고,
// 그걸 승인해야 이후부터 진짜 내용 메일이 오게 돼요. (30일 안에 승인 안 하면 보관만 하고 안 보내줌) citeturn0search2turn0search3

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("serviceForm");
  const successBox = document.getElementById("submitSuccess");

  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // 우리가 직접 전송 처리할 거라 기본 제출 막음

    const name = document.getElementById("custName").value.trim();
    const phone = document.getElementById("custPhone").value.trim();
    const area = document.getElementById("custArea").value.trim();
    const issueType = document.getElementById("issueType").value;
    const issueDetail = document.getElementById("issueDetail").value.trim();

    if (!name || !phone) {
      alert("성함과 연락처는 필수입니다.");
      return;
    }

    // FormSubmit AJAX 방식: /ajax/주소 로 JSON POST, header에 Accept: application/json 필요함 citeturn0search0turn0search1
    try {
      const res = await fetch("https://formsubmit.co/ajax/noteservice@outlook.kr", {
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

      // 응답을 굳이 쓰진 않지만, 에러 확인용
      // const data = await res.json();
      // console.log("FormSubmit 응답:", data);
    } catch (err) {
      // 네트워크 문제일 때 콘솔 확인용
      console.error("전송 오류", err);
    }

    // 성공 메시지 띄우기
    if (successBox) {
      successBox.style.display = "block";
    }

    // 폼 초기화
    form.reset();
  });
});
