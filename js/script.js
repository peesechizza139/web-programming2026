// 가장 먼저 할 일
// consol log로 해당 파일 연결되었나 찍어보기
console.log("hellp world");
console.log($(window).width());
console.log($(window).height());
// // 현재 브라우저 창의 가로와 세로 넓이를 콘솔에출력

// let wWidth = $(window).width();
// let wHeight = $(window).height();

// console.log(wWidth);
// console.log(wHeight);

// 마우스 무브 이벤트 발생 시 마다
// 커서의 xyㅅ닶을 구해서 적용가능
$(document).mousemove(function (e) {
  $("#status").html(e.pageX + "," + e.pageY);
  $(".box").css("width", e.pageX);
  $(".box").css("height", e.pageY);
});

// 고양이랑 배경 조정
$(document).on("mousemove", function (event) {
  let mouseX = event.pageX;
  let mouseY = event.pageY;
  // 마우스 이동에 따라 배경 이미지의 위치 움직이게 하기
  $(".bg-img").css("object-position", `${mouseX / 10}% ${mouseY / 10}%`);
  //   마우스 커서에 고양이 이미지 따라다니게 하기
  //   고양이의 가세넓이를 각각 변수에 할당
  let imgWidth = $(".cat-img").width();
  let imgHeight = $(".cat-img").height();

  //   이미지의 레프트 탑 변화를 위에서 선언한 마우스 xv 좌표값을 가져와서 적용
  $(".cat-img").css("left", mouseX - imgWidth / 2 + "px");
  $(".cat-img").css("top", mouseY - imgHeight / 2 + "px");
});
