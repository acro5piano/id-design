export const setFadeinTransition = () => {
  // 表示する閾値。適当に調整する。
  const screenOffset = window.innerHeight / 1.5

  const elements = document.getElementsByClassName('fadein')
  for (let element of elements) {
    window.addEventListener('scroll', () => {
      if (window.scrollY + screenOffset > element.offsetTop) {
        element.classList.add('active')
      }
    })
  }

  setTimeout(() => window.scrollTo(0, 1), 100)
}
