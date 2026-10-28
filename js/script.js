$(function () {
  const $stage = $(".a1");
  const $poster = $(".a2");

  function move(x, y) {
    let width = $stage.width();
    let height = $stage.height();

    let scale = Math.min(width / 570, height / 299);

    let rotateX = -y * 3.2;
    let rotateY = x * 4.2;

    let moveX = x * scale;
    let moveY = y * scale;

    $poster.css("--rotate-x", rotateX + "deg");
    $poster.css("--rotate-y", rotateY + "deg");
    $poster.css("--move-x", moveX);
    $poster.css("--move-y", moveY);
  }

  $stage.on("mousemove", function (e) {
    move(
      (e.clientX / $stage.width()) * 2 - 1,
      (e.clientY / $stage.height()) * 2 - 1,
    );
  });

  $stage.on("mouseleave", function () {
    move(0, 0);
  });
});
