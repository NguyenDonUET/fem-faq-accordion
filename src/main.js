const toggleButtons = document.querySelectorAll("#toggleButton")

toggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const content = button.parentElement.nextElementSibling
    content.classList.toggle("expanded")
    const image = button.children[0]
    if (content.classList.contains("expanded")) {
      image.src = "/assets/images/icon-minus.svg"
      image.alt = "Collapse section"
    } else {
      image.src = "/assets/images/icon-plus.svg"
      image.alt = "Expand section"
    }
  })
})

const firstToggleButton = toggleButtons[0]
const content = firstToggleButton.parentElement.nextElementSibling
content.classList.toggle("expanded")
const image = firstToggleButton.children[0]
if (content.classList.contains("expanded")) {
  image.src = "/assets/images/icon-minus.svg"
  image.alt = "Collapse section"
} else {
  image.src = "/assets/images/icon-plus.svg"
  image.alt = "Expand section"
}
