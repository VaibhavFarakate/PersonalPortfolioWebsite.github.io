$(".btnToggle").click(toggler);

function toggler() {
  var btnId = $(this).data("id");

  var ElementId = "#toggleIcon" + btnId;

  if ($(ElementId).hasClass("down")) {
    $(ElementId).animate({ rotate: "180deg" }, 300);
    $(ElementId).addClass("up");
    $(ElementId).removeClass("down");
  } else if ($(ElementId).hasClass("up")) {
    $(ElementId).animate({ rotate: "0deg" }, 300);
    $(ElementId).addClass("down");
    $(ElementId).removeClass("up");
  }
}
