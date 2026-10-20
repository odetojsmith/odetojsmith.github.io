function toggleRecruit() {
  const content = document.getElementById("recruit-details");
  const arrow = document.getElementById("toggle-arrow");
  if (!content) return;
  if (content.classList.contains("active")) {
    content.classList.remove("active");
    if (arrow) arrow.innerHTML = "&#9654;"; // Right arrow
  } else {
    content.classList.add("active");
    if (arrow) arrow.innerHTML = "&#9660;"; // Down arrow
  }
}
