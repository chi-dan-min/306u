const title = document.querySelector('.title')
const text = 'I Have Something'.split('')

for (let index = 0; index < text.length; index++) {
  if (text[index] !== ' ') {
    title.innerHTML += `<span>${text[index]}</span>`
  } else {
    title.innerHTML += `<span style='margin-right: 20px;'></span>`
  }
}

const textElements = document.querySelectorAll('.title span');
textElements.forEach((element) => {
  const randomDelay = Math.random() * 3; // Tạo độ trễ ngẫu nhiên từ 0 đến 3 giây
  element.style.animationDelay = `${randomDelay}s`;
});
