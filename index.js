document.getElementById('openModal').addEventListener("click", () => {
  document.getElementById('my-modal').classList.add('open')
})

document.getElementById('closeModal').addEventListener('click', () => {
  document.getElementById('my-modal').classList.remove('open')
})

