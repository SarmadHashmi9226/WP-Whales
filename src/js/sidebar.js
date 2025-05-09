document.addEventListener("DOMContentLoaded", function () {
  const collapseElement = document.getElementById("collapseExample");
  const icon = document.getElementById("toggleIcon");
  const link = document.getElementById("collapseTrigger");

  collapseElement.addEventListener("show.bs.collapse", function () {
    icon.classList.remove("fa-chevron-down");
    icon.classList.add("fa-chevron-up");

    icon.classList.add("text-ee4c2b");
    link.classList.add("text-ee4c2b");
  });

  collapseElement.addEventListener("hide.bs.collapse", function () {
    icon.classList.remove("fa-chevron-up");
    icon.classList.add("fa-chevron-down");

    icon.classList.remove("text-ee4c2b");
    link.classList.remove("text-ee4c2b");
  });
});
